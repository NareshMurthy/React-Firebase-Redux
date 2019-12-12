import React from "react";

const FreeLancers = ({ freelancers, auth }) => {
  const isLoading = () => {
    if (!freelancers || freelancers.length === 0) {
      return <div>No FreeLancers available...</div>;
    } else {
      console.log(freelancers);
      return freelancers.map(freelancer => {
        return (
          <div className="mt-3 mb-2" key={freelancer.id}>
            {freelancer.firstName}
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className="freelancers">{isLoading()}</div>
    </div>
  );
};

export default FreeLancers;
