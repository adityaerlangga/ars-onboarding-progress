import { 
ExecArgs,
} from "@medusajs/framework/types"
import { logger } from "@medusajs/framework"

export default async function myScript ({
container
}: ExecArgs) {
const productModuleService = container.resolve("product")

const [, count] = await productModuleService.listAndCountProducts()

console.log(`You have ${count} product(s)`)
logger.info(`You have ${count} product(s)`)
}