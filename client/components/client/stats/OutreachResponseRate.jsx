import React from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

function OutreachResponseRate({ stats }) {
  const [responseCounts, setResponseCounts] = useState({
    respondedCount: 0,
    notRespondedCount: 0,
  });
  useEffect(() => {
    setResponseCounts((prevData) => ({
      respondedCount: stats.profileStats["answeredOutreach"],
      notRespondedCount: stats.profileStats["unansweredOutreach"],
    }));
  }, [stats]);

  const [viewPercentage, setViewPercentage] = useState(false);

  const totalResponses = responseCounts.respondedCount + responseCounts.notRespondedCount;

  const respondedRate = totalResponses
    ? ((responseCounts.respondedCount / totalResponses) * 100).toFixed(2)
    : 0;
  return (
    <>
      <div className=" stats stats-vertical w-full bg-primary text-primary-content  shadow lg:stats-horizontal ">
        <div className="stat ">
          <div className="stat-title text-lg text-secondary">Success</div>
          <div className="stat-value text-3xl">
            {viewPercentage ? (
              <span>{respondedRate}%</span>
            ) : (
              <CountUp end={responseCounts.respondedCount} duration={2.75} />
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
export default OutreachResponseRate;
