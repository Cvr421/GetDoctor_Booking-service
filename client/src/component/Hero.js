import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

export default function Hero  () {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
        Welcome to our medical platform where you can explore various doctors, handle your profiles, and schedule consultations with ease. Stay updated with notifications and enjoy secure access. Prospective doctors can also apply. Our administrators ensure everything runs smoothly. Your information is protected with us. Join us for seamless healthcare interactions!
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};
