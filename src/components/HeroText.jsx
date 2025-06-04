import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

const HeroText = ({ onButtonClick }) => {
  const textRef2 = useRef(null);

  useEffect(() => {
    if (textRef2.current) {
      animateText(textRef2.current);
    }
  }, []);

  const animateText = (element) => {
    element.innerHTML = element.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: ".letter",
      translateY: [80, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 3000,
      delay: (el, i) => 50 * i,
    });

    setTimeout(() => {
      const letters = element.querySelectorAll(".letter");
      letters.forEach((letter) => {
        letter.classList.add("float-in-space");
      });
    }, 3000);
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-lobster space-y-6 transition-opacity duration-1000 z-10">
      <h1
        ref={textRef2}
        className="text-3xl md:text-3xl lg:text-5xl font-lobster"
      >
        Welcome to my space
      </h1>
      <button
        onClick={onButtonClick}
        className="mt-6 px-8 py-3 border border-white text-white rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300 animate-[pulseGlow_2s_infinite] portfolio-btn"
      >
        Portfolio
      </button>
    </div>
  );
};

export default HeroText;
