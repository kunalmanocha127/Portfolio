import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>My experience</h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>The Garden Store Pvt. Ltd.</h5>
              </div>
              <h3>2026</h3>
            </div>
            <div className="career-description">
              <p>June–July 2026 · Gurugram, India · Hybrid</p>
              <p>
                Contributed to a React, Node.js, and Express B2B e-commerce
                application, focusing primarily on OAuth 2.0/JWT authentication
                and role-based authorization with MongoDB. Also contributed to
                product catalog, cart, order tracking, and Redux Toolkit state
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
