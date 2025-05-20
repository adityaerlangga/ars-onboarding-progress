import { defineWidgetConfig } from "@medusajs/admin-sdk"

const CategoryWidget = () => {
  return (
    <div>
      <h2>Category Widget 124</h2>
    </div>
  )
}

export const config = defineWidgetConfig({
  zone: "product.list.before",
})

export default CategoryWidget
