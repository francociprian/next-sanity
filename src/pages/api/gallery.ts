import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";

export async function getGallery() {
  const query = groq`*[_type == "gallery"]{
    _id,
    title,
    description,
    publishedAt,
    image
  }`;

  const data = await client.fetch(query);

  return {
    gallery: data,
  };
}