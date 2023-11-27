import React from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

function SiteCompleted({ stats }) {
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

  const [viewPercentage, setViewPercentage] = useState(false);

  const total = numberData.siteCompleted + numberData.paid;

  const siteCompletedPercentage = total
    ? ((numberData.siteCompleted / total) * 100).toFixed(2)
    : 0;
  return (
    <>
      <div className=" stats stats-vertical w-full bg-primary text-primary-content  shadow lg:stats-horizontal ">
        <div className="stat ">
          <div className="stat-title text-lg text-secondary">Completed</div>
          <div className="stat-value text-3xl">
            {viewPercentage ? (
              <span>{siteCompletedPercentage}%</span>
            ) : (
              <CountUp end={numberData.siteCompleted} duration={2.75} />
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
export default SiteCompleted;
