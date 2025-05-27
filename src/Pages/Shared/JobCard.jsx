import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    _id,
    requirements,
    location,
    jobType,
    category,
    salaryRange,
    description,
    company,
    company_logo,
    applicationDeadline,
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex">
        <figure>
          <img className="w-16" src={company_logo} alt={company} />
        </figure>
        <div>
          <h3 className="text-3xl">{company}</h3>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt></FaMapMarkerAlt>
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{jobType}</div>
        </h2>
        <p>Category: {category}</p>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div>
          <h4 className="text-base">
            <span className="text-yellow-400">Application Dead Line:</span>{" "}
            {applicationDeadline}
          </h4>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
