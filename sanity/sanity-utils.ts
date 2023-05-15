import { client } from "./lib/client"
import { groq } from "next-sanity";
import { Gallery } from "../types";

export async function getGallery(): Promise<Gallery[]> {
    return client.fetch(
      groq`*[_type == "gallery"]{
        _id,
        title,
        description,
        publishedAt,
        image
      }`
    )
}