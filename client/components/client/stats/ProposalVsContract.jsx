import React from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

function ProposalVsContract({ stats, showPercentage }) {
  const [numberData, setNumberData] = useState({
    proposalSent: 0,
    contractsSent: 0,
  });
  useEffect(() => {
    setNumberData((prevData) => ({
      proposalSent: stats.profileStats["proposalsSent"],
      contractsSent: stats.profileStats["contractsSent"],
    }));
  }, [stats]);

  const total = numberData.proposalSent + numberData.contractsSent;

  const proposalPercentage = total
    ? ((numberData.proposalSent / total) * 100).toFixed(2)
    : 0;
  const contractPercentage = total
    ? ((numberData.contractsSent / total) * 100).toFixed(2)
    : 0;
  return (
    <>
      <div className=" stats stats-vertical w-full bg-primary text-primary-content shadow 2xs:stats-horizontal xs:stats-horizontal  sm:stats-horizontal md:stats-horizontal lg:stats-horizontal ">
        <div className="stat p-1">
          <div className="sm:text-md stat-title p-0 text-secondary 2xs:text-[15px] xs:text-base sm:flex sm:items-center sm:justify-center xl:text-lg">
            Proposals Sent
          </div>
          <div className="stat-value 2xs:text-base xs:text-base sm:text-lg lg:text-2xl xl:text-2xl">
            {showPercentage ? (
              <span>{proposalPercentage}%</span>
            ) : (
              <CountUp end={numberData.proposalSent} duration={2.75} />
            )}
          </div>
        </div>
        <div className="stat p-1">
          <div className="sm:text-md stat-title p-0 text-secondary 2xs:text-sm xs:text-[15px] sm:flex sm:items-center sm:justify-center xl:text-lg">
             Contracts Sent
          </div>
          <div className="stat-value 2xs:text-base xs:text-base sm:text-lg lg:text-2xl xl:text-2xl">
            {showPercentage ? (
              <span>{contractPercentage}%</span>
            ) : (
              <CountUp end={numberData.contractsSent} duration={2.75} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProposalVsContract;
