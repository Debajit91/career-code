import React from "react";
import { Link, useParams } from "react-router";

import useAuth from "../../Hooks/useAuth";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  
  const handleApplyFormSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const gitHub = form.gitHub.value;
    const resume = form.resume.value;
  }
  return (
    <div className="max-w-lg mx-auto">
      <h3 className="text-4xl text-center">Apply For This Job:<Link to={`/jobs/${id}`}>Details</Link> </h3>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          

          <label className="label">LinkedIn Profile</label>
          <input type="url" className="input w-full" name="linkedIn" placeholder="LinkedIn Profile Link" />

          <label className="label">GitHub Profile</label>
          <input type="url" className="input w-full" name="gitHub" placeholder="GitHub Profile Link" />

          <label className="label">Resume Link</label>
          <input type="url" className="input w-full" name="resume" placeholder="Resume Link" />

          <input type="submit" className="btn" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
