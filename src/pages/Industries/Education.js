import React from "react";

import "./Education.css";

export default function Education() {
  return (
    <div className="Education-main d-flex">
      <div className="Education-main-left"></div>
      <div className="Education-main-right d-flex flex-column gap-4 ">
        <div className="Education-title">Education</div>
        <div className="Education-description">
          In the neoteric landscape of education, technology pioneers new
          frontiers. Virtual classrooms, AI-driven learning, and adaptive
          technologies transform traditional paradigms. Personalized
          experiences, gamified learning, and global connectivity redefine
          education. This fusion of innovation and pedagogy propels students
          into a tech-enabled future, fostering a dynamic and inclusive learning
          environment.
        </div>
        {/* <div className="Education-viewProjects">View Projects</div> */}
      </div>
    </div>
  );
}
