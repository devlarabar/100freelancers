"use client";
import React, { useState, useEffect } from "react";
import BusinessEngagementChart from "@components/client/stats/BusinessCardEngagementChart";
import NumberStats from "@components/client/stats/NumberStats";
import ProposalVsContract from "@components/client/stats/ProposalVsContract";
import SiteCompleted from "@components/client/stats/SiteCompleted";
import OutreachSuccesseRate from "@components/client/stats/OutreachSuccesseRate";
import OutreachResults from "@components/client/stats/YesOrNoResponse";
import OutreachResponseAnalyzer from "@components/client/stats/OutreachResponseAnalyzer";
import { fetchStats } from "@utils/stats";

export default function Profile() {
  const [viewPercentage, setViewPercentage] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

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
      paid: 1,
    },
  });

  const changeView = () => {
    setIsChecked(!isChecked);
    setViewPercentage(!viewPercentage);
  };
  useEffect(() => {
    fetchStats().then((data) => setStatsData((prevData) => data));
  }, []);

  const maxWidth = "1000px";

  const minWidth = "300px";

  const maxHeight = "1200px";

  return (
    <main>
      <div className=" mb-2 flex items-center justify-start gap-2 pl-2">
        <span className="font-bold text-secondary">TOGGLE VIEW</span>
        <label className=" flex">
          <input
            type="checkbox"
            className="toggle"
            checked={isChecked}
            onChange={changeView}
          />
        </label>
      </div>
      <section
        className={`grid h-[1100px] max-h-[${maxHeight}] max-w-[${maxWidth}]  min-w-[${minWidth}] gap-4 text-center  font-bold text-secondary 2xs:grid-cols-1 2xs:grid-rows-6 xs:grid-cols-1 xs:grid-rows-6 sm:grid-cols-4 sm:grid-rows-5 sm:gap-4 md:grid-cols-4 md:grid-rows-5 lg:grid-cols-6 lg:grid-rows-4 xl:grid-cols-12 xl:grid-rows-6`}
      >
        <section className="rounded-box  bg-primary p-2 2xs:row-start-1 2xs:flex 2xs:flex-col 2xs:items-center 2xs:justify-between xs:col-span-1 sm:col-span-2 sm:col-start-1 md:col-span-2 md:col-start-1 lg:col-span-3 lg:col-start-1 lg:row-span-1 lg:row-start-1 xl:col-span-4 xl:col-start-1 xl:row-span-2 xl:row-start-1">
          <h3 className="xs:text-base sm:text-lg ">
            Answered vs Unanswered Outreach
          </h3>
          <div className=" my-auto w-full rounded-lg  sm:items-center md:flex md:items-center">
            <div className="w-full  md:shrink">
              <OutreachResponseAnalyzer
                stats={statsData}
                showPercentage={viewPercentage}
              />
            </div>
          </div>
        </section>
        <section className="rounded-box bg-primary p-2 2xs:row-start-2 2xs:flex 2xs:flex-col 2xs:items-center 2xs:justify-between xs:col-span-1 sm:col-span-2 sm:col-start-3 sm:row-start-1 md:col-span-2 md:col-start-3 md:row-start-1 lg:col-span-3  lg:col-start-1 lg:row-span-1 lg:row-start-2 xl:col-span-4 xl:col-start-1 xl:row-span-2 xl:row-start-3">
          <h3 className="xs:text-base sm:text-lg">Yes vs No Responses</h3>
          <div className=" my-auto  w-full rounded-lg md:flex">
            <div className="w-full md:shrink">
              <OutreachResults
                stats={statsData}
                showPercentage={viewPercentage}
              />
            </div>
          </div>
        </section>
        <section className="rounded-box bg-primary  p-2 2xs:row-start-3 2xs:flex 2xs:flex-col  2xs:items-center 2xs:justify-between xs:col-span-1 sm:col-span-2 sm:col-start-1 sm:row-span-1 sm:row-start-4 md:col-span-2 md:col-start-1 md:row-span-1 md:row-start-4 lg:col-span-3 lg:col-start-1 lg:row-span-1 lg:row-start-3 xl:col-span-4 xl:col-start-1 xl:row-span-2 xl:row-start-5">
          <h3 className="xs:text-base sm:text-lg">Outreach Success Rate </h3>
          <div className=" my-auto  w-full rounded-lg md:flex">
            <div className="w-full md:shrink">
              <OutreachSuccesseRate
                stats={statsData}
                showPercentage={viewPercentage}
              />
            </div>
          </div>
        </section>
        <section className=" rounded-box  bg-primary p-2 2xs:row-start-4 2xs:flex 2xs:flex-col 2xs:items-center 2xs:justify-between xs:col-span-1 sm:col-span-4 sm:col-start-1 sm:row-span-2 sm:row-start-2 md:col-span-4 md:col-start-1 md:row-span-2  md:row-start-2 lg:col-span-3 lg:col-start-4 lg:row-span-3 lg:row-start-1 xl:col-span-8 xl:col-start-5 xl:row-span-4 xl:row-start-1">
          <h3 className="xs:text-base sm:text-lg">
            Saved vs Contacted Clients
          </h3>
          <div className="flex w-full  grow items-center   transition-all duration-300 2xs:justify-evenly sm:justify-evenly md:justify-evenly lg:flex-col lg:justify-evenly xl:justify-evenly">
            <div className="relative sm:h-[340px] sm:w-[340px] md:h-[350px] md:w-[350px]  lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]">
              <BusinessEngagementChart stats={statsData} />
            </div>
            <div className=" w-full align-bottom">
              <NumberStats stats={statsData} showPercentage={viewPercentage} />
            </div>
          </div>
        </section>

        <section className="rounded-box  bg-primary p-2 2xs:row-start-5 2xs:flex 2xs:flex-col 2xs:items-center 2xs:justify-between xs:col-span-1 sm:col-span-2 sm:col-start-3 sm:row-span-1 sm:row-start-4 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-4  lg:col-span-3 lg:col-start-1 lg:row-span-1 lg:row-start-4 xl:col-span-4 xl:col-start-5 xl:row-span-2">
          <h3 className=" xs:text-base sm:text-lg">
            Proposals sent vs Contracts sent
          </h3>
          <div className=" my-auto w-full rounded-lg md:flex ">
            <div className="w-full md:shrink">
              <ProposalVsContract
                stats={statsData}
                showPercentage={viewPercentage}
              />
            </div>
          </div>
        </section>
        <section className=" rounded-box  bg-primary p-2  2xs:row-start-6 2xs:flex 2xs:flex-col 2xs:items-center 2xs:justify-between xs:col-span-1 sm:col-span-4 sm:col-start-1 sm:row-span-1 sm:row-start-5 md:col-span-4 md:col-start-1 md:row-start-5  md:flex lg:col-span-3 lg:col-start-4 lg:row-span-1  lg:row-start-4 xl:col-span-4 xl:col-start-9 xl:row-span-2">
          <h3 className=" xs:text-base sm:text-lg">Sites completed</h3>
          <div className=" my-auto  w-full rounded-lg">
            <SiteCompleted stats={statsData} showPercentage={viewPercentage} />
          </div>
        </section>
      </section>
    </main>
  );
}
