## Expected

1. `<Link href="/">` changes the route back to `/`
2. Components do not rerender infinitely

## Actual

1. The `<Link>` component  on the `/paginator` route does not change the URL
2. Using the browser inspect elements or react dev tools, the component rendered by the Paginator is infinitely rerendering and the paginator does not work as a result. This works as expected on `13.4.3`
