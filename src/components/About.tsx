import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          A Computer Science undergraduate focused on Artificial Intelligence and Machine Learning. I build useful web and
          app experiences and explore applied AI.
        </p>
        <div className="about-education">
          <h4>Education</h4>
          <p>
            B.Tech- Computer Science (AI &amp; ML)
            <br />
            Dronacharya College of Engineering, Gurugram
            <br />
            Aug 2023 – May 2027 · (Currently Pursuing)
          </p>
          <p>
            Class X (2019–20): 80.33%
            <br />
            Class XII (2021–22): 87.6%
            <br />
            Lord Jesus Public School · ICSE
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
