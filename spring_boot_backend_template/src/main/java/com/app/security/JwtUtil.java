package com.app.security;

import java.security.Key;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.entities.Users;
import com.app.repository.UserRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
	@Value(value="${jwt.token.expiration.millis}")
	public long jwtExpiration;
	@Value(value="${jwt.token.secret}")
	public String jwtSecret;
	private Key jwtKey;
	
	@Autowired
	UserRepository userRepo;
	
	@PostConstruct
	public void init() {
		jwtKey = Keys.hmacShaKeyFor(jwtSecret.getBytes());
	}
	
	public String createToken(Authentication auth) {
		
		User user = (User) auth.getPrincipal();
		String subject = user.getUsername();	// user email
		String roles = user.getAuthorities().stream()	// user role e.g. ROLE_USER or ROLE_ADMIN
				.map(authority -> authority.getAuthority())
				.collect(Collectors.joining(","));
		Users userAuth = userRepo.findByEmail(subject).orElseThrow(() -> new ResourceNotFoundException("User not found"));
		String token = Jwts.builder()
			.setSubject(subject)
			.setIssuedAt(new Date())
			.setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
			.claim("role", roles)
			.claim("firstName",userAuth.getFirstName())
			.claim("lastName",userAuth.getLastName())
			.claim("email",userAuth.getEmail())
			.claim("userId",userAuth.getUserId())
			.claim("deptId",userAuth.getDept().getDeptId())
			.claim("roleId",userAuth.getRole().getRoleId())
			.signWith(jwtKey , SignatureAlgorithm.HS256)
			.compact();
		return token;
	}
	
	public Authentication validateToken(String token) {
		JwtParser parser = Jwts.parserBuilder().setSigningKey(jwtKey).build();
		Claims claims = parser
							.parseClaimsJws(token)
							.getBody();
		String email = claims.getSubject();
		String roles = (String) claims.get("role");
		List<GrantedAuthority> authorities = AuthorityUtils.commaSeparatedStringToAuthorityList(roles);
		Authentication auth = new UsernamePasswordAuthenticationToken(email, null, authorities);
		return auth;
	}
}
