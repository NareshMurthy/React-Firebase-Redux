import React from "react";

import JobCard from "./JobCard";

const JobsPostedByMe = ({ jobs, auth }) => {
  const isLoading = () => {
    if (!jobs || jobs.length === 0) {
      return <div>You have not posted any job, create a job</div>;
    } else {
      // sort based on the created time
      // jobs.sort(function(a, b) {
      //   return b.createdAt.seconds - a.createdAt.seconds;
      // });

      return jobs.map(job => {
        return auth.uid === job.userId ? (
          <div className="mt-3 mb-2" key={job.id}>
            <JobCard
              jobId={job.id}
              shortDescription={job.shortDescription}
              description={job.description}
              finishDate={job.finishDate}
              attachments={job.attachments}
              freelancers={job.freelancers}
              createdAt={job.createdAt}
              key={job.id}
            />
          </div>
        ) : (
          <div>You have not posted any job, create a job</div>
        );
      });
    }
  };

  return (
    <div>
      <div className="my-jobs">{isLoading()}</div>
    </div>
  );
};

export default JobsPostedByMe;
