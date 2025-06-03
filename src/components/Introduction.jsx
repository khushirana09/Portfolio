import React, { useEffect, useState } from 'react';
import '../style/Intro.css';

function Introduction() {
    const fullText = `const greeting = "Hello I'm Khushi";`;
    const [typeText , setTypeText] = useState('');

    useEffect(() =>{
        let index = 0;
        const interval = setInterval(() =>{
            setTypeText(fullText.slice(0, index+1));
            index++;
            if (index === fullText.length) clearInterval(interval);
        }, 80);  //typing speed
        return () => clearInterval(interval);
    }, []);
  return (
    <div>
          <section className="hero-content">
            <div className="container">
                
                <div className="code-editor">

                    <p className="code-comment">// Portfolio: Welcome Message</p>
                    <p className="code-line">
                        {typeText}
                        <span className="code-cursor"></span>
                    </p>
                </div>

                <p className="tagline">
                    Front-End Developer passionate about designing digital interfaces that are clean,
                    intuitive, and impactful.
                </p>
                <div className="explore-btn">
                <a href="#projects" className="mt-8 inline-block px-5 py-3 rounded-full border border-white text-white hover:text-black hover:bg-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg backdrop-blur-md bg-white/10">Explore My Projects</a></div>
            </div>
        </section>
    </div>
  )
}

export default Introduction
