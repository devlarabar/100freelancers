import React from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

function OutreachResults({ stats, showPercentage }) {
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

  const totalResponses = responseCounts.yesResponse + responseCounts.noResponse;

  const yesPercentages = totalResponses
    ? ((responseCounts.yesResponse / totalResponses) * 100).toFixed(2)
    : 0;
  const noPercentages = totalResponses
    ? ((responseCounts.noResponse / totalResponses) * 100).toFixed(2)
    : 0;
  return (
    <>
      <div className=" stats stats-vertical  w-full bg-primary text-primary-content shadow 2xs:stats-horizontal  xs:stats-horizontal sm:stats-horizontal md:stats-horizontal  lg:stats-horizontal sm:h-24">
        <div className="stat p-1">
          <div className="sm:text-md stat-title text-secondary 2xs:text-base xs:text-base sm:flex sm:items-center sm:justify-center  xl:text-lg ">
            Yes
          </div>
          <div className="stat-value 2xs:text-base xs:text-base sm:text-lg lg:text-2xl xl:text-2xl">
            {showPercentage ? (
              <span>{yesPercentages}%</span>
            ) : (
              <CountUp end={responseCounts.yesResponse} duration={2.75} />
            )}
          </div>
        </div>
        <div className="stat p-1">
          <div className="stat-title text-secondary 2xs:text-base xs:text-base sm:flex sm:items-center sm:justify-center xl:text-lg">
            No
          </div>
          <div className=" stat-value 2xs:text-base xs:text-base sm:text-lg lg:text-2xl xl:text-2xl">
            {showPercentage ? (
              <span>{noPercentages}%</span>
            ) : (
              <CountUp end={responseCounts.noResponse} duration={2.75} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default OutreachResults;
