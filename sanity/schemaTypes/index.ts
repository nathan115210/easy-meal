import { type SchemaTypeDefinition } from "sanity";
import { author } from "@/sanity/schemaTypes/author";
import { dish } from "@/sanity/schemaTypes/dish";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, dish],
};
