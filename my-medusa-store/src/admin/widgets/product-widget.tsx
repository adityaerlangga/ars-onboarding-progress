import { defineWidgetConfig } from "@medusajs/admin-sdk"

const ProductWidget = () => {
  return (
    <div>
      <h2>Product Widget 124</h2>
    </div>
  )
}

export const config = defineWidgetConfig({
  zone: "product.list.after",
})

export default ProductWidget