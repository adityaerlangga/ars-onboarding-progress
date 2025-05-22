import { MedusaResponse } from "@medusajs/framework/http"
import { MedusaRequest } from "@medusajs/framework/http"
import { logger } from "@medusajs/framework/logger"

export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {
    logger.info("GET request received")
    logger.info("Request params:")
    logger.info(JSON.stringify(req.params, null, 2))
    res.json({
      message: `[GET] Hello ${req.params.id}!`,
    })
}