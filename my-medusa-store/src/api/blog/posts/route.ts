import type { 
  MedusaRequest, 
  MedusaResponse,
} from "@medusajs/framework/http"
import { 
  createPostWorkflow,
} from "../../../workflows/create-post"
import { logger } from "@medusajs/framework/logger"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  logger.info("GET request received")
  logger.info("Request query params:")
  logger.info(JSON.stringify(req.query, null, 2))
  res.json({
    message: "Blog Posts successfully fetched",
    name: req.query.name,
  })
}

export async function POST(
  req: MedusaRequest, 
  res: MedusaResponse
) {
  const { result: post } = await createPostWorkflow(req.scope)
    .run({
      input: {
        title: "My Post",
      },
    })

  res.json({
    post,
  })
}