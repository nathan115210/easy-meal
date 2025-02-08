import { createClient } from "next-sanity";

import { dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion: "2021-10-21", // use a UTC date string
  useCdn: false,
  token: token, // Token for write operations
});

if (!writeClient.config().token) {
  throw new Error("Write token not found.");
}
