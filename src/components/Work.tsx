import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const workItems = [
  {
    title: "MorphoMinds",
    category: "AI-powered learning platform",
    description:
      "A hyper-personalized platform that helps dyslexic children learn reading and writing independently, without a teacher. Interactive letter and word-learning modules use gesture and voice interaction, with accessibility and child-friendly UX at the center.",
    focus: "AI, gesture and voice interaction, accessible learning",
    image: undefined,
    link: "https://morpho-minds-prototype.vercel.app/",
    preview: "MorphoMinds",
  },
  {
    title: "Park Prabandh",
    category: "Agentic-AI smart parking",
    description:
      "A responsive parking platform for real-time monitoring and slot visualization. OpenCV and IoT support vehicle entry and slot detection; autonomous workflows handle dynamic allocation, FASTag payments, and 3D occupancy and traffic analytics to minimize human intervention and protect revenue.",
    focus: "ReactJS, TypeScript, OpenCV, IoT, FASTag",
    image: undefined,
    link: "https://parkprabandh.netlify.app/login",
    preview: "Park Prabandh",
  },
  {
    title: "B2B E-commerce Application",
    category: "B2B e-commerce web application",
    description:
      "A responsive application for B2B product catalogs, cart workflows, and order tracking. Contributed primarily to secure authentication and role-based authorization, alongside other application features.",
    focus: "React, Node.js, Express, OAuth 2.0, JWT, MongoDB, Redux Toolkit",
    image: undefined,
    preview: "B2B e-commerce",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    const padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workItems.map((item, index) => (
            <div className="work-box" key={item.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <h4>Overview</h4>
                <p className="work-description">{item.description}</p>
                <h4>Focus</h4>
                <p>{item.focus}</p>
              </div>
              <WorkImage
                image={item.image}
                alt={item.preview}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
