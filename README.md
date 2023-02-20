Repro Steps:

Run `npm install`
Run `npx nx run my-lib:storybook`

Navigate to `http://localhost:4401`

Open your browser dev tools.

Refresh the page.

Notice that the code you are seeing in your dev tools is a compiled version of the `my-lib/src/lib/button/button.component.ts`
