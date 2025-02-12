import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  capitalizeWords,
  formatDate,
  getFallbackProfileImageUrl,
} from "@/lib/utils";

import { EyeIcon } from "lucide-react";

export interface Author {
  _id: string;
  name: string;
  image: string;
  bio?: string;
  username?: string;
}

export interface Dish {
  _id: string;
  _createdAt: string;
  author: Author;
  image: string;
  views: number;
  description: string;
  title: string;
  category: string;
  steps: string;
}

export type DishType = Omit<Dish, "author"> & { author: Author };

export const DishCard = async ({ dish }: { dish: DishType }) => {
  const {
    _createdAt,
    author: { _id: authorId, image: authorImage, name },
    _id,
    image,
    views,
    description,
    title,
    category,
  } = dish;

  const authorName = capitalizeWords(name);

  return (
    <li className={"dish-card group"}>
      {/* created date and views */}
      <div className={"flex-between"}>
        <p className={"dish-card_date"}>{formatDate(_createdAt)}</p>
        {!!views && (
          <div className={"flex gap-1.5"}>
            <div className="flex gap-1.5">
              <EyeIcon className="size-6 text-primary" />
              <span className="text-16-medium">{views}</span>
            </div>
          </div>
        )}
      </div>

      <div className={"flex-between mt-5 gap-5"}>
        <div className={"flex-1"}>
          {/* Link to author page */}
          <Link href={`/user/${authorId}`}>
            <p className={"text-16-medium line-clamp-1"}>
              {capitalizeWords(authorName)}
            </p>
          </Link>
          {/* Link to dish page */}
          <Link href={`/dish/${_id}`}>
            <h3 className={"text-26-semibold line-clamp-1"}>{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          {authorImage ? (
            <Avatar>
              <AvatarImage src={authorImage} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <Image
              src={getFallbackProfileImageUrl(authorName)}
              alt={authorName}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
        </Link>
      </div>
      <p className={"dish-card_desc"}>{description}</p>
      {image && (
        <Link href={`/dish/${_id}`} className={"mt-auto"}>
          <Image
            src={image}
            className={"dish-card-image h-auto w-full"}
            alt={"dish-card-image"}
            width={0}
            height={0}
            sizes="80vw"
          />
        </Link>
      )}
      <div className={"flex-between mt-5 gap-3"}>
        {category && (
          <Link href={`/?query=${category}`}>
            <p className={"text-16-medium"}>{category}</p>
          </Link>
        )}
        <Button className={"dish-card_btn"} asChild>
          <Link href={`/dish/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};
