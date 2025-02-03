import React from "react";
import { capitalizeWords, convertAuthorName, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export interface Author {
  id: number;
  name: string;
  image?: string;
}

export interface DishProps {
  id: number;
  createdAt: string;
  views: number;
  author: Author;
  title: string;
  description: string;
  image: string;
  category?: string;
}

export const DishCard = async ({ dish }: { dish: DishProps }) => {
  const {
    createdAt,
    author: { id: authorId, image: authorImage, name },
    id,
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
        <p className={"dish-card_date"}>
          {formatDate(createdAt)}
        </p>
        {views > 0 && <div className={"flex gap-1.5"}>
          <div className="flex gap-1.5">
            <EyeIcon className="size-6 text-primary" />
            <span className="text-16-medium">{views}</span>
          </div>
        </div>}
      </div>

      <div className={"flex-between mt-5 gap-5"}>
        <div className={"flex-1"}>
          {/* Link to author page */}
          <Link href={`/user/${authorId}`}>
            <p className={"text-16-medium line-clamp-1"}>{capitalizeWords(authorName)}</p>
          </Link>
          {/* Link to dish page */}
          <Link href={`/dish/${id}`}>
            <h3 className={"text-26-semibold line-clamp-1"}>{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          {authorImage ? <Avatar>
              <AvatarImage src={authorImage} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> :
            <Image src={`https://eu.ui-avatars.com/api/?name=${convertAuthorName(authorName)}&size=250`}
                   alt={authorName}
                   width={40} height={40} className="rounded-full" />
          }
        </Link>
      </div>
      <p className={"dish-card_desc"}>
        {description}
      </p>
      <Link href={`/dish/${id}`} className={"mt-auto"}>
        <Image src={image} className={"dish-card-image w-full h-auto"} alt={"dish-card-image"} width={0}
               height={0}
               sizes="80vw"
        />
      </Link>
      <div className={"flex-between gap-3 mt-5"}>
        {category && <Link href={`/?query=${category}`}>
          <p className={"text-16-medium"}>{category}</p>
        </Link>}
        <Button className={"dish-card_btn"} asChild>
          <Link href={`/dish/${id}`}>
            Details
          </Link>
        </Button>
      </div>
    </li>
  );
};
