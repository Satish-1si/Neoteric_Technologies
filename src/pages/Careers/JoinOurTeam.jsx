import React from "react";

export default function JoinOurTeam() {
  return (
    <div className="join-card">
      <div className="join-title">Join our team</div>
      <div className="join-para">
        Do you yearn for a career that excites you, challenges you, and allows
        you to make a real impact? Look no further! Join our dynamic team and
        embark on a journey to find your dream job.
      </div>
      <div className="join-div">
        <div>
          <p>Keyword or Job ID</p>
          <input
            className="input"
            type="text"
            placeholder="Keyword or Job ID"
          />
        </div>
        <div>
          <p>Location</p>
          <input className="input" type="text" placeholder="Location" />
        </div>
        <div>
          <p>Skills</p>
          <input className="input" type="text" placeholder="Skills" />
        </div>
      </div>
      <div className="check-box">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckIndeterminate"
          />
          <label class="form-check-label" for="flexCheckIndeterminate">
            Remote
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckIndeterminate"
          />
          <label class="form-check-label" for="flexCheckIndeterminate">
            Office
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckIndeterminate"
          />
          <label class="form-check-label" for="flexCheckIndeterminate">
            Open to recolate
          </label>
        </div>
      </div>
      <div>
        <button className="btn btn-light btn-outline-primary mt-3">Find Jobs</button>
      </div>
    </div>
  );
}
