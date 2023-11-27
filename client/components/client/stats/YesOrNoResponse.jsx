import React from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

function OutreachResults({ stats }) {
  const [responseCounts, setResponseCounts] = useState({
    yesResponse: 0,
    noResponse: 0,
  });
  useEffect(() => {
    setResponseCounts((prevData) => ({
      yesResponse: stats.profileStats["clientsSaidYes"],
      noResponse: stats.profileStats["clientsSaidNo"],
    }));
  }, [stats]);

  const [viewPercentage, setViewPercentage] = useState(false);

  const totalResponses = responseCounts.yesResponse + responseCounts.noResponse;

  const yesPercentages = totalResponses
    ? ((responseCounts.yesResponse / totalResponses) * 100).toFixed(2)
    : 0;
  const noPercentages = totalResponses
    ? ((responseCounts.noResponse / totalResponses) * 100).toFixed(2)
    : 0;
  return (
    <>
      <div className=" stats stats-vertical w-full bg-primary text-primary-content  shadow lg:stats-horizontal ">
        <div className="stat ">
          <div className="stat-title text-lg text-secondary">Yes</div>
          <div className="stat-value text-3xl">
            {viewPercentage ? (
              <span>{yesPercentages}%</span>
            ) : (
              <CountUp end={responseCounts.yesResponse} duration={2.75} />
            )}
          </div>
        </div>
        <div className="stat ">
          <div className="stat-title text-lg text-secondary">No</div>
          <div className="stat-value text-3xl">
            {viewPercentage ? (
              <span>{noPercentages}%</span>
            ) : (
              <CountUp end={responseCounts.noResponse} duration={2.75} />
            )}
          </div>
        </div>
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => setViewPercentage(!viewPercentage)}
      >
        Toggle View
      </button>
    </>
  );
}
export default OutreachResults;
