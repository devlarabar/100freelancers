"use client";
import React, { useState, useEffect } from "react";
import BusinessCardEngagementChart from "@components/client/stats/BusinessCardEngagementChart";
import NumberStats from "@components/client/stats/NumberStats";
import ProposalVsContract from "@components/client/stats/ProposalVsContract";
import SiteCompleted from "@components/client/stats/SiteCompleted";
import OutreachResponseRate from "@components/client/stats/OutreachResponseRate";
import OutreachResults from "@components/client/stats/YesOrNoResponse";
import { fetchStats } from "@utils/stats";

export default function Profile() {
  const [statsData, setStatsData] = useState({
    profileStats: {
      totalClients: 1,
      totalOutreach: 1,
      answeredOutreach: 1,
      unansweredOutreach: 1,
      clientsSaidYes: 1,
      clientsSaidNo: 1,
      proposalsSent: 1,
      contractsSent: 1,
      sitesCompleted: 1,
      paid:1,
    },
  });

  useEffect(() => {
    fetchStats().then((data) => setStatsData((prevData) => data));
  }, []);
  const maxWidth = "1000px";
  const maxHeight = "1200px";

  return (
    <main
      className={`grid h-[1100px] max-h-[${maxHeight}]  max-w-[${maxWidth}] grid-cols-12 grid-rows-6 gap-4  text-center font-bold text-secondary`}
    >
      <section className="rounded-box  col-span-4  col-start-1 row-span-2 row-start-1 flex flex-col items-center justify-between bg-primary p-2">
        <h3>Response Analysis: Answered vs Unanswered Outreach</h3>
      </section>
      <section className="rounded-box   col-span-4 col-start-1 row-span-2 row-start-3 flex flex-col items-center justify-between bg-primary p-2">
        <h3>Outreach Outcomes: Yes vs No Responses</h3>
        <OutreachResults stats={statsData} />
      </section>
      <section className="rounded-box  col-span-4 col-start-1 row-span-2 row-start-5  flex flex-col items-center justify-between bg-primary p-2">
        <h3>Outreach Success Rate </h3>
        <OutreachResponseRate stats={statsData} />
      </section>
      <section className=" rounded-box col-span-8 col-start-5 row-span-4 row-start-1 flex flex-col items-center justify-start bg-primary p-2">
        <h3>Business Card Engagement: Saved vs Contacted</h3>
        <div className="my-auto w-[500px]">
          <BusinessCardEngagementChart stats={statsData} />
        </div>
        <div className=" align-bottom">
          <NumberStats stats={statsData} />
        </div>
      </section>

      <section className=" rounded-box col-span-4 col-start-5 row-span-2 flex flex-col items-center justify-between bg-primary p-2">
        <h3>Proposal sent vs Contract sent</h3>
        <ProposalVsContract stats={statsData} />
      </section>
      <section className="  rounded-box  col-span-4 col-start-9 row-span-2 flex flex-col items-center justify-between bg-primary p-2">
        <h3>Sites completed</h3>
        <SiteCompleted stats={statsData} />
      </section>
    </main>
  );
}
/**
 * thought process
 *
 *
 */
