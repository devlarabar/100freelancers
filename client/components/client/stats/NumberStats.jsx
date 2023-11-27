import React from "react";
import { useEffect, useState } from "react";
function NumberStats({ stats}) {
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

  return (
    <div className="stats stats-vertical bg-primary text-primary-content shadow lg:stats-horizontal">
      <div className="stat">
        <div className="stat-title  text-secondary">Total Clients</div>
        <div className="stat-value">{numberData.totalClient}</div>
      </div>
      <div className="stat">
        <div className="stat-title text-secondary">Clients Contacted</div>
        <div className="stat-value">{numberData.clientsContacted}</div>
      </div>
    </div>
  );
}

export default NumberStats;
