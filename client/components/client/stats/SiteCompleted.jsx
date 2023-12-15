import React from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

function SiteCompleted({ stats, showPercentage }) {
  const [numberData, setNumberData] = useState({
    siteCompleted: 0,
    paid: 0,
  });
  useEffect(() => {
    setNumberData((prevData) => ({
      siteCompleted: stats.profileStats["sitesCompleted"],
      paid: stats.profileStats["paid"],
    }));
  }, [stats]);

  const total = numberData.siteCompleted + numberData.paid;

  const siteCompletedPercentage = total
    ? ((numberData.siteCompleted / total) * 100).toFixed(2)
    : 0;
  return (
    <>
      <div className=" stats stats-vertical w-full bg-primary text-primary-content  shadow lg:stats-horizontal ">
        <div className="stat ">
          <div className="sm:text-md stat-title text-secondary 2xs:text-base xs:text-base sm:flex sm:items-center sm:justify-center xl:text-lg">Completed</div>
          <div className="stat-value 2xs:text-base xs:text-base sm:text-lg lg:text-2xl xl:text-2xl">
            {showPercentage ? (
              <span>{siteCompletedPercentage}%</span>
            ) : (
              <CountUp end={numberData.siteCompleted} duration={2.75} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default SiteCompleted;
