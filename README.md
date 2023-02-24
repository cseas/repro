# repro

Repo for reproducing React issues.

1. Blade: Tree shaking: https://github.com/razorpay/blade/issues/959

   - Switch branch: `git checkout repro-959`
   - See `main.bundle.js` in the [build](build) directory. You can find all Blade components in the final build even though `src/App.tsx` uses only a Button component.
   - You can run `npm run build` for generating a new build.

2. Next.js: wildcard exports: https://github.com/vercel/next.js/issues/46267

   - Check `src/App.tsx`. It's using a deep import defined by the library using wildcard exports.
   - Run `npm run build`. The project builds successfully with typescript checks.
   - Next.js throws an error on build with similar config.
