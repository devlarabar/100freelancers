import React from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

function ProposalVsContract({ stats }) {
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

  const [viewPercentage, setViewPercentage] = useState(false);

  const total = numberData.proposalSent + numberData.contractsSent;

  const proposalPercentage = total
    ? ((numberData.proposalSent / total) * 100).toFixed(2)
    : 0;
  const contractPercentage = total
    ? ((numberData.contractsSent / total) * 100).toFixed(2)
    : 0;
  return (
    <>
      <div className=" stats stats-vertical w-full bg-primary text-primary-content  shadow lg:stats-horizontal ">
        <div className="stat">
          <div className="stat-title text-lg text-secondary">
            Proposals Sent
          </div>
          <div className="stat-value text-3xl">
            {viewPercentage ? (
              <span>{proposalPercentage}%</span>
            ) : (
              <CountUp end={numberData.proposalSent} duration={2.75} />
            )}
          </div>
        </div>
        <div className="stat">
          <div className="stat-title text-lg text-secondary">
            Contracts Sent
          </div>
          <div className="stat-value text-3xl">
            {viewPercentage ? (
              <span>{contractPercentage}%</span>
            ) : (
              <CountUp end={numberData.contractsSent} duration={2.75} />
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

export default ProposalVsContract;
