import { defineQuery } from "groq";

export const DISH_QUERY = defineQuery(`*[_type == "dish" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    title, 
    slug,
    _createdAt, 
    author -> {
      _id,
      name,
      image,
      bio
    },
    views,
    category,
    image, 
    description,
    steps
}`);