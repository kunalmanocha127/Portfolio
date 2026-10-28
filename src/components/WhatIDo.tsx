import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const clickHandlers: {
      container: HTMLDivElement;
      handler: () => void;
    }[] = [];

    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const handler = () => handleClick(container);
          container.addEventListener("click", handler);
          clickHandlers.push({ container, handler });
        }
      });
    }
    return () => {
      clickHandlers.forEach(({ container, handler }) => {
        container.removeEventListener("click", handler);
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI &amp; MACHINE LEARNING</h3>
              <h4>Focus</h4>
              <p>
                Exploring intelligent systems through machine learning,
                computer vision, and language technologies.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                {[
                  "Python",
                  "PyTorch",
                  "Scikit-learn",
                  "OpenCV",
                  "Pandas",
                  "NumPy",
                  "Matplotlib",
                  "Supervised learning",
                  "Unsupervised learning",
                  "Computer vision",
                  "NLP",
                  "Artificial intelligence",
                  "Machine learning",
                ].map((skill) => (
                  <div className="what-tags" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>SOFTWARE &amp; APP DEVELOPMENT</h3>
              <h4>Focus</h4>
              <p>
                Building responsive web and mobile applications with solid
                software engineering fundamentals.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                {[
                  "Java",
                  "C++",
                  "C",
                  "SQL",
                  "Kotlin",
                  "Dart",
                  "HTML5",
                  "CSS",
                  "JavaScript",
                  "ReactJS",
                  "NodeJS",
                  "Jetpack Compose",
                  "UI/UX principles",
                  "REST APIs",
                  "XML",
                  "JSON",
                  "MySQL",
                  "MongoDB",
                  "Git",
                  "GitHub",
                  "Visual Studio",
                  "Python scripting & automation",
                  "Jupyter Notebook",
                  "OOP",
                  "Data structures & algorithms",
                  "Software engineering",
                ].map((skill) => (
                  <div className="what-tags" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
