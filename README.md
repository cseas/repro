# repro

Repo for reproducing the issues in Blade.

1. Tree shaking: https://github.com/razorpay/blade/issues/959

- See `main.bundle.js` in the [build](build) directory. You can find all Blade components in the final build even though `src/App.tsx` uses only a Button component.

2. Wrong peerDependencies: https://github.com/razorpay/blade/issues/957

To reproduce:

- Clone this repo
- Make sure your npm version is 7+
- Switch branch: `git checkout repro-957`
- Install project packages: `npm i`
- Install Blade: `npm i @razorpay/blade`
