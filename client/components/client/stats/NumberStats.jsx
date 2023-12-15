import React from "react";
import { useEffect, useState } from "react";
function NumberStats({ stats, showPercentage }) {
  const [numberData, setNumberData] = useState({
    totalClient: 0,
    clientsContacted: 0,
  });

  useEffect(() => {
    setNumberData((prevData) => ({
      totalClient: stats.profileStats["totalClients"],
      clientsContacted: stats.profileStats["totalOutreach"],
    }));
  }, [stats]);

  const outreachPercentage = numberData.totalClient
    ? ((numberData.clientsContacted / numberData.totalClient) * 100).toFixed(2)
    : 0;

  return (
    <div className="stats stats-vertical w-full bg-primary text-primary-content shadow 2xs:stats-horizontal lg:stats-horizontal">
      <div className="stat p-1">
        <div className=" sm:text-md stat-title text-secondary 2xs:text-[15px] xs:text-base sm:flex sm:items-center sm:justify-center xl:text-lg">
          Total Clients
        </div>
        <div className="stat-value 2xs:text-base xs:text-base sm:text-lg lg:text-2xl xl:text-2xl">
          {numberData.totalClient}
        </div>
      </div>
      <div className="stat p-1">
        <div className=" sm:text-md stat-title text-secondary 2xs:text-[15px] xs:text-base sm:flex sm:items-center sm:justify-center xl:text-lg">
          Clients Contacted
        </div>
        <div className="stat-value 2xs:text-base xs:text-base sm:text-lg lg:text-2xl xl:text-2xl">
          {showPercentage ? (
            <span>{outreachPercentage}%</span>
          ) : (
            numberData.clientsContacted
          )}
        </div>
      </div>
    </div>
  );
}

export default NumberStats;
