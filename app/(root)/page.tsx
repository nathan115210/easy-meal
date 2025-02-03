import SearchBar from "@/components/SearchBar";
import { DishCard, DishProps } from "@/components/DishCard";

export default async function Page({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const searchQuery = (await searchParams).query;
  const dishes: DishProps[] = [
    {
      id: 1,
      createdAt: "2021-10-10T12:00:00Z",
      views: 0,
      author: { id: 1, name: "John" },
      title: "Spaghetti Carbonara",
      description: "Spaghetti Carbonara is a classic pasta dish that everyone should know how to make.",
      image: "https://2.img-dpreview.com/files/p/TS2400x1800~sample_galleries/1125065351/2085577150.jpg",
    },
    {
      id: 2,
      createdAt: "2021-10-10T12:00:00Z",
      views: 55,
      author: { id: 1, name: "John doe" },
      title: "Spaghetti Carbonara",
      description: "Spaghetti Carbonara is a classic pasta dish that everyone should know how to make.",
      image: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
      category: "category",
    },
    {
      id: 3,
      createdAt: "2021-10-10T12:00:00Z",
      views: 55,
      author: { id: 1, name: "John jhkjghjg Doe" },
      title: "Spaghetti Carbonara",
      description: "Spaghetti Carbonara is a classic pasta dish that everyone should know how to make.",
      image: "https://2.img-dpreview.com/files/p/TS2400x1800~sample_galleries/1125065351/2085577150.jpg",
    },
  ];

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
          {!!dishes.length && dishes.map((dish) => {
            return <DishCard key={dish.id} dish={dish} />;
          })}
        </ul>
      </section>
    </>
  );
}