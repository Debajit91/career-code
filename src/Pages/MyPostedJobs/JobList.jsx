import React, { use } from "react";

const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div>
      <h2 className="text-3xl">Jobs Posted: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* rows  */}
            {
                jobs.map((job, index) =><tr key={job._id}>
              <th>{index + 1}</th>
              <td>{job.title}</td>
              <td>{job.applicationDeadline}</td>
              <td>Blue</td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
