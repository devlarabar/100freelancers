import React from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

function OutreachSuccesseRate({ stats, showPercentage }) {
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

  const totalResponses =
    responseCounts.respondedCount + responseCounts.notRespondedCount;

  const respondedRate = totalResponses
    ? ((responseCounts.respondedCount / totalResponses) * 100).toFixed(2)
    : 0;
  return (
    <>
      <div className=" xs:stat-horizontal stats stats-vertical w-full bg-primary text-primary-content shadow md:stats-horizontal lg:stats-horizontal ">
        <div className="stat p-1">
          <div className="sm:text-md stat-title text-secondary 2xs:text-base xs:text-base sm:flex sm:items-center sm:justify-center xl:text-lg">
            Success
          </div>
          <div className="stat-value 2xs:text-base xs:text-base sm:text-lg lg:text-2xl xl:text-2xl">
            {showPercentage ? (
              <span>{respondedRate}%</span>
            ) : (
              <CountUp end={responseCounts.respondedCount} duration={2.75} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default OutreachSuccesseRate;
