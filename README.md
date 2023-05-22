## Expected

1. the `Go Back` button on the homepage works (it should use `router.back()` to navigate to the previous page)
2. The paginator should use shallow routing to change the URL when changing pages with the buttons

## Actual

1. The `onClick` with the router.back() call is missing.
2. Shallow routing does not seem to work.


### Extra Background

We have a nextjs package that exports some components. Some components use the `next/router`. We had no issues until recently. To fix these issues (NextRouter is not mounted, `useState` is not defined, etc) we switched to the `next/compat/router` for these components which seems to resolve the build/runtime errors, but it results in the above issues where the router does not seem to behave as expected.