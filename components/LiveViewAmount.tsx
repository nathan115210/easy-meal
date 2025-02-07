import React from "react";

import { convertViews } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { DISH_VIEWS_QUERY } from "@/sanity/lib/queries";

const Ping = () => {
  return (
    <div className="relative">
      <div className="absolute -left-4 top-1">
        <span className="flex size-[11px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75"></span>
          <span className="relative inline-flex size-[11px] rounded-full bg-pink-500"></span>
        </span>
      </div>
    </div>
  );
};

const LiveViewAmount = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(DISH_VIEWS_QUERY, { id });
  console.log("totalViews", totalViews);

  if (!totalViews) return null;

  return (
    <div className={"view-container"}>
      <div className={"absolute -right-2 -top-2"}>
        <Ping />
      </div>

      <p className={"view-text"}>
        <span className={"font-black"}> {convertViews(totalViews)}</span>
      </p>
    </div>
  );
};
export default LiveViewAmount;
