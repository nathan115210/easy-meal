import { defineQuery } from "groq";

export const ALL_DISH_QUERY =
  defineQuery(`*[_type == "dish" && defined(slug.current)] | order(_createdAt desc) {
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
export const DISH_QUERY_WITH_SEARCH =
  defineQuery(`*[_type == "dish"  && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
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

export const DISH_BY_ID_QUERY = defineQuery(`*[_type == "dish" && _id == $id] { 
  _id,
  title, 
  slug,
  _createdAt, 
  author -> {
    _id,
    name,
    image,
    bio,
    username
  },
  views,
  category,
  image, 
  description,
  steps
}[0]`);

export const DISH_VIEWS_QUERY = defineQuery(`*[_type == "dish" && _id == $id] {
  _id,
  views
}[0]`);
