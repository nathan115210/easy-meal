import Ping from "@/components/Ping";
import { convertViews } from "@/lib/utils";

const LiveViewAmount = async ({ id }: { id: string }) => {
  /* const { views: totalViews } = await client
     .withConfig({ useCdn: false })
     .fetch(DISH_VIEWS_QUERY, { id });
 
   after(
     async () =>
       await writeClient
         .patch(id)
         .set({ views: totalViews + 1 })
         .commit()
   );*/
  console.log("id", id);
  return (
    <div className="view-container">
      <div className="absolute -right-2 -top-2">
        <Ping />
      </div>

      <p className="view-text">
        {/*<span className={"font-black"}> {convertViews(totalViews + 1)}</span>*/}
        <span className={"font-black"}> {convertViews(1)}</span>
      </p>
    </div>
  );
};
export default LiveViewAmount;
