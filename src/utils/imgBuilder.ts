import imageUrlBuilder from '@sanity/image-url'
import client from './sanityClient'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";



export default function urlFor (source: SanityImageSource) {
    return imageUrlBuilder(client).image(source)
  }


  /* export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null; */