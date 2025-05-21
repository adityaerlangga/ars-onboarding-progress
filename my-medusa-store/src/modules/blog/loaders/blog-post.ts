import {
    LoaderOptions,
  } from "@medusajs/framework/types"
  
  export default async function blogPostLoader({
    container,
  }: LoaderOptions) {
    const logger = container.resolve("logger")
  
    logger.info("[BLOG MODULE] Just started the Medusa application!")
  }