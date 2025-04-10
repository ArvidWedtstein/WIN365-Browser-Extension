import { appRouter } from "src/utils/router"
import { createApp } from "vue"
import App from "./app.vue"
import "./index.scss"

appRouter.addRoute({
  path: "/",
  redirect: "/action-popup",
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/') {
//     return next('/action-popup')
//   }

//   next()
// })

const app = createApp(App).use(appRouter)

app.mount("#app")

export default app

self.onerror = function (message, source, lineno, colno, error) {
  console.info("Error: " + message)
  console.info("Source: " + source)
  console.info("Line: " + lineno)
  console.info("Column: " + colno)
  console.info("Error object: " + error)
}
