This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Page Routes
### - Named/Static routes
```aiignore
/pages/_not_used.js - /
/pages/about.js - /about
```
### Nested Paths
```aiignore
/pages/portfolio/_not_used.js - /portfolio
/pages/portfolio/list.js = /portfolio/list
```
### Dynamic Routing
```aiignore

/pages/portfolio/[projectId].js - /portfolio/projectId
```
### Dynamic Nested Routing
```aiignore
/page/clients/[id]/[projectId].js - /clients/clientId/projectId
```
### Catch-All Routes
```aiignore
/pages/blogs/[...slug] - /blogs/what/ever/you/want
```
## Dynamic Routes - Review of vercel-deploy-tst-2-cooking-app/05-onwards-foodies-starting-project

```
/page_or_default.js
[mealSlug]/page_or_default.js  dynamic routing, meal primary keys
[[...foldername]]/page_or_default.js catch-all, multiple subpaths tier1/tier2 translate to params { foldername: ['tier1', 'tier2'] }
@xxxx/page_or_default.js parallel routes, kinda like IFrames
(.)/page_or_default.js intercepting routes, internally navigated to, in lieu of externally navigated to
```
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/_not_used.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
