import { logger, SubscriberArgs, type SubscriberConfig } from "@medusajs/framework"

export default async function orderPlacedHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  console.log("Order placed", data)
  logger.info("Order placed")
  logger.info(JSON.stringify(data))
}

export const config: SubscriberConfig = {
  event: `order.placed`,
}
