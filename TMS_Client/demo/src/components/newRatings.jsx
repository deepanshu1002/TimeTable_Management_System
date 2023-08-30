import "../css_file/rating.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { createUrl } from "../utils/utils";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { useParams } from "react-router-dom";

function Rating() {
  const { subId } = useParams();

  const [feedback, setFeedback] = useState({});
  useEffect(() => {
    const url = createUrl(`/feedback/${subId}`);
    axios
      .get(url)
      .then((response) => {
        setFeedback(response.data);
      })
      .catch((error) => {
        console.error("Error fetching feedback:", error);
      });
  }, []);
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://allyoucan.cloud/cdn/icofont/1.0.1/icofont.css"
        integrity="sha384-jbCTJB16Q17718YM9U22iJkhuGbS0Gd2LjaWb4YJEZToOPmnKDjySVa323U+W7Fv"
        crossorigin="anonymous"
      />

      <div class="bg-white rounded shadow-sm p-4 mb-4 clearfix graph-star-rating">
        <h5 class="mb-0 mb-4">
          <div style={{ textAlign: "center" }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
  <div style={{marginTop:'50px'}}>
    <h2 style={{ display: 'inline', fontSize: '24px', fontWeight: 'bold', color: 'purple' }}>Professor -</h2>{" "}
    <h2 style={{ display: 'inline', fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>{feedback.teacherName}</h2>
  </div>
  <div>
    <h2 style={{ display: 'inline', fontSize: '24px', fontWeight: 'bold', color: 'purple' }}>Subject -</h2>{" "}
    <h2 style={{ display: 'inline', fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>{feedback.subjectName}</h2>
  </div>
</div><br />
            <br />
            <br />
          </div>
          <b>Average Ratings</b>
        </h5>

        <div class="graph-star-rating-header">
          <div class="star-rating">
            <a href="#/">
              <i class="icofont-ui-rating active"></i>
            </a>
            <a href="#/">
              <i class="icofont-ui-rating active"></i>
            </a>
            <a href="#/">
              <i class="icofont-ui-rating active"></i>
            </a>
            <a href="#/">
              <i class="icofont-ui-rating active"></i>
            </a>
            <a href="#/">
              <i class="icofont-ui-rating"></i>
            </a>{" "}
          </div>
          <p class="text-black mb-4 mt-2">
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={
                  Math.floor(feedback.ratings) > index
                    ? "bi bi-star-fill"
                    : feedback.ratings - index >= 0.5
                    ? "bi bi-star-half"
                    : "bi bi-star"
                }
                style={{ color: "gold" }}
              ></span>
            ))}
          </p>
        </div>
        <div class="graph-star-rating-body">
          <div class="rating-list">
            <div class="rating-list-left text-black">5 Star</div>
            <div class="rating-list-center">
              <div class="progress">
                <div
                  style={{
                    width: `${feedback.percentage5}%`,
                  }}
                  aria-valuemax="5"
                  aria-valuemin="0"
                  aria-valuenow="5"
                  role="progressbar"
                  class="progress-bar bg-primary"
                >
                  <span class="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div class="rating-list-right text-black">
              {feedback.percentage5}%
            </div>
          </div>
          <div class="rating-list">
            <div class="rating-list-left text-black">4 Star</div>
            <div class="rating-list-center">
              <div class="progress">
                <div
                  style={{
                    width: `${feedback.percentage4}%`,
                  }}
                  aria-valuemax="5"
                  aria-valuemin="0"
                  aria-valuenow="5"
                  role="progressbar"
                  class="progress-bar bg-primary"
                >
                  <span class="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div class="rating-list-right text-black">
              {feedback.percentage4}%
            </div>
          </div>
          <div class="rating-list">
            <div class="rating-list-left text-black">3 Star</div>
            <div class="rating-list-center">
              <div class="progress">
                <div
                  style={{
                    width: `${feedback.percentage3}%`,
                  }}
                  aria-valuemax="5"
                  aria-valuemin="0"
                  aria-valuenow="5"
                  role="progressbar"
                  class="progress-bar bg-primary"
                >
                  <span class="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div class="rating-list-right text-black">
              {feedback.percentage3}%
            </div>
          </div>
          <div class="rating-list">
            <div class="rating-list-left text-black">2 Star</div>
            <div class="rating-list-center">
              <div class="progress">
                <div
                  style={{
                    width: `${feedback.percentage2}%`,
                  }}
                  aria-valuemax="5"
                  aria-valuemin="0"
                  aria-valuenow="5"
                  role="progressbar"
                  class="progress-bar bg-primary"
                >
                  <span class="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div class="rating-list-right text-black">
              {feedback.percentage2}%
            </div>
          </div>
          <div class="rating-list">
            <div class="rating-list-left text-black">1 Star</div>
            <div class="rating-list-center">
              <div class="progress">
                <div
                  style={{
                    width: `${feedback.percentage1}%`,
                  }}
                  aria-valuemax="5"
                  aria-valuemin="0"
                  aria-valuenow="5"
                  role="progressbar"
                  class="progress-bar bg-primary"
                >
                  <span class="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div class="rating-list-right text-black">
              {feedback.percentage1}%
            </div>
          </div>
        </div>
      </div>
      {feedback.feedbacks &&
        feedback.feedbacks.map((f) => (
          <div class="rounded shadow-sm p-4 mb-4 restaurant-detailed-ratings-and-reviews">
            <button
              type="button"
              class="btn btn-blue btn-custom waves-effect waves-light"
              style={{ width: '100%', boxSizing: 'inherit' }}
            >
              <h4>{f.date}</h4>
              <p style={{ color: "darkblue" }}>{f.feedback} </p>
            </button>
          </div>
        ))}
    </div>
  );
}
export default Rating;
