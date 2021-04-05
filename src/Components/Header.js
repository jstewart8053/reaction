import React from "react";
import "../styles.css";

function Header() {
  return (
    <div className="header">
      <div class="card bg-light text-dark">
        <img
          class="card-img-top "
          src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            This is an example of text under artwork using a Bootstrap card.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
