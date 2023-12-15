import React from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

function OutreachResponseAnalyzer({ stats, showPercentage }) {
  const [responseCounts, setResponseCounts] = useState({
    answeredOutreach: 0,
    unAnsweredOutReach: 0,
  });
  useEffect(() => {
    setResponseCounts((prevData) => ({
      answeredOutreach: stats.profileStats["answeredOutreach"],
      unAnsweredOutReach: stats.profileStats["unansweredOutreach"],
    }));
  }, [stats]);

  const totalResponses =
    responseCounts.answeredOutreach + responseCounts.unAnsweredOutReach;

  const answeredPercentages = totalResponses
    ? ((responseCounts.answeredOutreach / totalResponses) * 100).toFixed(2)
    : 0;
  const unAnsweredPercentages = totalResponses
    ? ((responseCounts.unAnsweredOutReach / totalResponses) * 100).toFixed(2)
    : 0;
  return (
    <>
      <div className=" stats stats-vertical w-full bg-primary  text-primary-content  shadow 2xs:stats-horizontal xs:stats-horizontal sm:stats-horizontal  md:stats-horizontal lg:stats-horizontal sm:h-24">
        <div className="stat  p-1 xs:p-0">
          <div className="sm:text-md stat-title text-secondary 2xs:text-base xs:text-base sm:flex sm:items-center sm:justify-center xl:text-lg">
            Answered
          </div>
          <div className="stat-value 2xs:text-base xs:text-base sm:text-lg lg:text-2xl xl:text-2xl">
            {showPercentage ? (
              <span>{answeredPercentages}%</span>
            ) : (
              <CountUp end={responseCounts.answeredOutreach} duration={2.75} />
            )}
          </div>
        </div>
        <div className="stat p-1 sm:p-0">
          <div className="sm:text-md stat-title text-secondary 2xs:text-base xs:text-base sm:flex sm:items-center sm:justify-center xl:text-lg">
            UnAnswered
          </div>
          <div className="stat-value 2xs:text-base xs:text-base sm:text-lg lg:text-2xl xl:text-2xl">
            {showPercentage ? (
              <span>{unAnsweredPercentages}%</span>
            ) : (
              <CountUp
                end={responseCounts.unAnsweredOutReach}
                duration={2.75}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OutreachResponseAnalyzer;
