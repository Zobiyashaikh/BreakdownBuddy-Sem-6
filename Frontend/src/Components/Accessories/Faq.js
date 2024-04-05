import React from "react";
import "./Faq.css";
import { faq } from "../images";
function Faq() {
  const btns = document.querySelectorAll(".acc-btn");

  // fn
  function accordion() {
    // this = the btn | icon & bg changed
    this.classList.toggle("is-open");

    // the acc-content
    const content = this.nextElementSibling;

    // IF open, close | else open
    if (content.style.maxHeight) content.style.maxHeight = null;
    else content.style.maxHeight = content.scrollHeight + "px";
  }

  // event
  btns.forEach((el) => el.addEventListener("click", accordion));
  return (
    <>
      <div className="faq-body">
        <img
          src={faq}
          alt="section image"
          style={{
            width: "400px",
            height: "200px",
            position: "absolute",
            top: "0px",
            left: "480px",
          }}
          class="img"
        />
        <main class="card">
          <div class="hero"></div>

          {/* <h2 class="title">FAQ</h2> */}

          <div class="acc-container">
            <button class="acc-btn">What is the definition of a will?</button>
            <div class="acc-content">
              <p>It is a dead giveaway.</p>
            </div>

            <button class="acc-btn">
              What happens to chemists when they die?
            </button>
            <div class="acc-content">
              <p>We barium [bury them].</p>
            </div>

            <button class="acc-btn">
              Why does the leopard find it difficult to hide and stalk?
            </button>
            <div class="acc-content">
              <p>Because he is spotted always.</p>
            </div>

            <button class="acc-btn">What kind of key opens a banana?</button>
            <div class="acc-content">
              <p>A monkey. 🙈</p>
            </div>

            <button class="acc-btn">Where does a tree store it's stuff?</button>
            <div class="acc-content">
              <p>In it's Trunk.</p>
            </div>

            <button class="acc-btn">
              What dog is known for its punctuality?
            </button>
            <div class="acc-content">
              <p>The watch-dog 🐕</p>
            </div>

            <button class="acc-btn">
              Name a thing that has four wheels and flies?
            </button>
            <div class="acc-content">
              <p>The garbage truck, of course.</p>
            </div>

            <button class="acc-btn">
              Why was everyone so tired on the First of April?
            </button>
            <div class="acc-content">
              <p>Because they had just completed a March of 31 days.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Faq;
