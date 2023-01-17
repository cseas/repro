# repro

Repo for reproducing React issues.

1. Vanilla Extract: Webpack Plugin:

   - `npm run build` will reproduce the error.

2. Blade: Tree shaking: https://github.com/razorpay/blade/issues/959

   - Switch branch: `git checkout repro-959`
   - See `main.bundle.js` in the [build](build) directory. You can find all Blade components in the final build even though `src/App.tsx` uses only a Button component.
   - You can run `npm run build` for generating a new build.

3. Blade: Wrong peerDependencies: https://github.com/razorpay/blade/issues/957

   To reproduce:

   - Clone this repo
   - Make sure your npm version is 7+
   - Switch branch: `git checkout repro-957`
   - Install project packages: `npm i`
   - Install Blade: `npm i @razorpay/blade`
