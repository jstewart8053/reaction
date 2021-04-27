import React from "react";
import "../styles.css";

function Header() {
  return (
    <div className="header">
      <div class="card bg-light text-dark">
        <img
          class="card-img-top "
          src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg"
          alt="Card"
        />
        <div class="card-body">
          <div class="card">
            <div class="card-header">One of my favorite quotes</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>
                  "For every minute you are angry you lose 60 seconds of
                  happiness."
                </p>
                <footer class="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
