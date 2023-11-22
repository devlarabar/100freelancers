import React from "react";
export default function Profile() {
  const maxWidth = "1000px";
  const maxHeight = "1200px"; // Present the container from being too stretchy
  return (
    <main
      className={`grid h-[1100px] max-h-[${maxHeight}]  max-w-[${maxWidth}] grid-cols-12 grid-rows-6 gap-4  text-center font-bold text-secondary`}
    >
      <section className="rounded-box  col-span-4  col-start-1 row-span-2 row-start-1 bg-primary p-2">
        <h3>Response Analysis: Answered vs Unanswered Outreach</h3>
      </section>
      <section className="rounded-box   col-span-4 col-start-1 row-span-2 row-start-3 bg-primary p-2">
        <h3>Outreach Outcomes: Yes vs No Responses</h3>
      </section>
      <section className="rounded-box  col-span-4 col-start-1 row-span-2 row-start-5 bg-primary p-2">
        <h3>Outreach Success Rate</h3>
      </section>
      <section className=" rounded-box   col-span-8 col-start-5 row-span-4 row-start-1 bg-primary p-2">
        <h3>Business Card Engagement: Saved vs Contacted</h3>
      </section>

      <section className=" rounded-box    col-span-4 col-start-5 row-span-2 bg-primary p-2">
        <h3>Proposal sent vs Contract signed overview</h3>
      </section>
      <section className="  rounded-box  col-span-4 col-start-9 row-span-2 bg-primary p-2 ">
        <h3>Sites completed</h3>
      </section>
    </main>
  );
}
