import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

import LiveViewAmount from "@/components/LiveViewAmount";
import { Button } from "@/components/ui/button";
import { formatDate, getFallbackProfileImageUrl } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import { DISH_BY_ID_QUERY } from "@/sanity/lib/queries";
import { Author, Dish } from "@/sanity/types";

import markdownit from "markdown-it";

const md = markdownit();
// Enable the Partial Pre-rendering (PPR) feature
export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const pageParams = await params;
  const dishId = pageParams.id;

  const data = (
    await sanityFetch({
      query: DISH_BY_ID_QUERY,
      params: { id: dishId },
    })
  ).data as Dish;

  if (!data) return notFound();
  const { _createdAt, title, category, author, image, description, steps } =
    data;
  const {
    _id: authorIdf,
    bio: authorBio,
    image: authorProfileImage,
    name: authorName,
    username: authorUsername,
  } = author as unknown as Author;

  const content = steps ? md.render(steps) : null;

  //TODO: add fallback page content design when the page content/steps is empty
  return (
    <>
      <section className={"hero !min-h-[230px]"}>
        <p className={"tag"}>{formatDate(_createdAt)}</p>
        <h1 className={"heading"}>{title}</h1>
        <p className={"sub-heading !max-w-5xl"}>{description}</p>
      </section>
      <section className={"section-container"}>
        {image && (
          <Image
            src={image}
            width={0}
            height={0}
            alt={`The image of dish ${title}`}
            className="h-[20rem] w-full rounded-3xl object-cover md:h-[40rem]"
            sizes="80vw"
          />
        )}
        <div className={"max-w-41 mt-10 space-y-5"}>
          <div className={"flex-between flex gap-5"}>
            <Link
              href={`/user/${authorIdf}`}
              className="mb-3 flex items-center gap-2"
            >
              <Image
                src={
                  authorProfileImage ||
                  getFallbackProfileImageUrl(authorName || "User Name")
                }
                alt={authorName || "user Name"}
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />
              <div>
                {!!authorName && (
                  <p className={"text-20-medium"}>{authorName}</p>
                )}
                {!!authorUsername && (
                  <p className={"text-16-medium !text-black-300"}>
                    @{authorUsername}
                  </p>
                )}
                {!!authorBio && (
                  <p
                    className={
                      "text-base font-normal tracking-tight text-gray-900 dark:text-white"
                    }
                  >
                    {authorBio}
                  </p>
                )}
              </div>
            </Link>
            {category && <p className={"category-tag"}>{category}</p>}
          </div>

          <h3 className={"text-30-bold"}>Details</h3>
          {!!content ? (
            <article
              className={"prose max-w-4xl break-all font-work-sans"}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <p className={"no-result"}>
              No steps found for this dish. Please check back later.
            </p>
          )}
        </div>

        <hr className={"divider"} />

        {/*Recommend section* - START */}
        {/*TODO 1: Author selected dishes*/}
        {/*TODO 2: if no Author selected dishes, show all dishes this author created*/}
        {/*TODO 3: if no more dishes this author created, show all dishes with same category*/}
        {/*TODO 4: if no more all dishes with same category, show all latest 5 dishes*/}
        {/*Recommend section* - END */}

        {/*  Back to home page Button*/}
        <Button className={"w-full rounded-full p-6 text-2xl"} asChild>
          <Link href={`/`}>View all Dishes</Link>
        </Button>

        {/*  Real-time views amount button */}
        <Suspense fallback={<p>Loading...</p>}>
          <LiveViewAmount id={dishId} />
        </Suspense>
      </section>
    </>
  );
};
export default Page;
