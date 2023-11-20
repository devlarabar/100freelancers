import React from "react";
export default function Profile() {
  const maxWidth = "1000px";
  const maxHeight = "1100px"; // Present the container from being too stretchy
  return (
    <main className={`grid h-[1000px] max-h-[${maxHeight}]  max-w-[${maxWidth}] grid-cols-12 gap-2 text-center font-bold text-primary`}>
      <aside className="col-span-4 grid grid-cols-1 grid-rows-3 gap-2 ">
        <div className="rounded-lg bg-[#D7E4EB]">
          Response Analysis: Answered vs Unanswered Outreach
        </div>
        <div className="rounded-lg bg-[#D7E4EB]">
          Outreach Outcomes: Yes vs No Responses
        </div>
        <div className="rounded-lg bg-[#D7E4EB]">Outreach Success Rate</div>
      </aside>
      <section className="col-span-8 grid grid-cols-8 grid-rows-5 gap-x-2 gap-y-2   ">
        <div className=" col-span-8 row-start-1 row-end-4 rounded-lg bg-[#D7E4EB]">
          Outreach Success Rate
        </div>

        <div className=" col-span-4 row-start-4 row-end-6 rounded-lg bg-[#D7E4EB]  ">
          Proposal sent vs Contract signed overview
        </div>
        <div className="  col-span-4 col-start-5 row-start-4 row-end-6 rounded-lg bg-[#D7E4EB] ">
          Sites completed
        </div>
      </section>
    </main>
  );
}
