import { after } from "next/server";

import Ping from "@/components/Ping";
import { convertViews } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { DISH_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";

const LiveViewAmount = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(DISH_VIEWS_QUERY, { id });

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit()
  );

  return (
    <div className="view-container">
      <div className="absolute -right-2 -top-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className={"font-black"}> {convertViews(totalViews + 1)}</span>
      </p>
    </div>
  );
};
export default LiveViewAmount;
