import SearchBar from "@/components/SearchBar";
import { DishCard, DishType } from "@/components/DishCard";
import { DISH_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Page({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const searchQuery = (await searchParams).query;

  const { data: dishesData } = await sanityFetch({ query: DISH_QUERY });
  //TODO: throw to the error boundary
  if (!dishesData) return null;

  return (
    <>
      <section className={"hero"}>
        <h1 className={"heading"}>Start enjoy cooking now</h1>
        <p className={"sub-heading !max-w-3xl"}>
          Easy Meal is a simple recipe app that helps you to cook your favorite meals easily. As well as sharing your
          own recipes with others and get inspired by other&rsquo;s recipe.
        </p>
        <SearchBar query={searchQuery} />
      </section>
      <section className={"section-container"}>
        <p className={"text-30-semibold"}>
          {searchQuery ? `Search results for "${searchQuery}"` : "All Dishes"}
        </p>
        <ul className={"mt-7 card_grid"}>
          {!!dishesData.length && dishesData.map((dish: DishType) => {
            return <DishCard key={dish._id} dish={dish} />;
          })}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}