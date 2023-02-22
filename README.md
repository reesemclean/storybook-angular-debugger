Repro Steps:

Run `npm install`
Run `npx nx run my-lib:storybook`

Navigate to `http://localhost:4401`

Open your browser dev tools.

Refresh the page.

Notice that the code you are seeing in your dev tools at the debug point is a compiled version of `my-lib/src/lib/button/button.component.ts`
