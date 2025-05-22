import { 
    defineMiddlewares,
    MedusaNextFunction, 
    MedusaRequest, 
    MedusaResponse, 
  } from "@medusajs/framework/http"
  
  export default defineMiddlewares({
    routes: [
      {
        matcher: "/custom*",
        middlewares: [
          (
            req: MedusaRequest, 
            res: MedusaResponse, 
            next: MedusaNextFunction
          ) => {

            if(req.query.name != "John") {
                res.status(400).json({
                    message: "Name is not allowed, only John is allowed"
                })
            }
  
            next()
          },
        ],
      },
    ],
  })