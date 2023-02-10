import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/*import App from './App';*/
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <main class="main_container">
    <section class="card">

      <figure class="ctn_img">
      <img src="https://raw.githubusercontent.com/makeitrealcamp/top-v27/a731136682131a1657d794f22f37b56bdfbb3e63/onboarding/html-css/order-summary/images/illustration-hero.svg" alt="react logo"/>
      </figure>

      <article class="summary">
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, 
            audiobooks, and podcasts on any device 
            anywhere you like!
          </p>
      </article>

      <section class="plan">
        <div class="i-t">
          <div class="icon1">
              <img src= "https://raw.githubusercontent.com/makeitrealcamp/top-v27/a731136682131a1657d794f22f37b56bdfbb3e63/onboarding/html-css/order-summary/images/icon-music.svg" alt="logo"/>
          </div>
          <div class="plan_txt">     
              <h4>Annual Plan</h4>
              <p>$59.99/year</p>
          </div>
        </div>
        <div class="lnk">
          <a href="https://youtu.be/dQw4w9WgXcQ">Change</a>
        </div>
      </section>

      <section class="btn">
      <a href="https://youtu.be/dQw4w9WgXcQ">
          <button class="proceed">Proceed to Payment</button>
        </a>
        <a href="https://youtu.be/dQw4w9WgXcQ">
          <button class="cancel">Cancel Order</button>
        </a>
      </section>
    </section>
  </main>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
