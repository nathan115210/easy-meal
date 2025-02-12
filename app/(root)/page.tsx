import { DishCard, DishType } from "@/components/DishCard";
import SearchBar from "@/components/SearchBar";

const mockDish: DishType[] = [
  {
    _id: "1",
    _createdAt: new Date().toISOString(),
    author: {
      _id: "author1",
      name: "John Doe",
      image: "https://placehold.co/60",
      bio: "A passionate cook",
      username: "john_doe",
    },
    image: "https://placehold.co/600x400",
    views: 123,
    description: "A delicious dish made with love.",
    steps: "A delicious dish made with love.",
    title: "Mock Dish",
    category: "Main Course",
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const searchQuery = resolvedSearchParams.query;
  const params = { search: searchQuery || null };

  console.log("params", params);

  //TODO: throw to the error boundary
  // if (!data) return null;

  return (
    <>
      <section className={"hero"}>
        <h1 className={"heading"}>Start enjoy cooking now</h1>
        <p className={"sub-heading !max-w-3xl"}>
          Easy Meal is a simple recipe app that helps you to cook your favorite
          meals easily. As well as sharing your own recipes with others and get
          inspired by other&rsquo;s recipe.
        </p>
        <SearchBar query={searchQuery} />
      </section>
      <section className={"section-container"}>
        {/*{!searchNoFound ? (
          <p className={"text-30-semibold"}>
            {searchQuery ? `Search results for "${searchQuery}"` : "All Dishes"}
          </p>
        ) : (
          <>
            <div className={"text-30-semibold flex flex-col gap-4"}>
              <p>{`Nothing found for ${searchQuery}.`}</p>
              <SearchFormReset
                className="rounded-[10vw] p-4"
                label={"Clear Search To See All Dishes"}
              />
            </div>
          </>
        )}*/}
        <ul className={"card_grid mt-7"}>
          {!!mockDish.length &&
            mockDish.map((dish: DishType) => {
              return <DishCard key={dish._id} dish={dish} />;
            })}
        </ul>
      </section>
    </>
  );
}
