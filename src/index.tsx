import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BladeProvider } from "@razorpay/blade/components";
import { paymentTheme } from "@razorpay/blade/tokens";

import { App } from "./App.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BladeProvider themeTokens={paymentTheme}>
      <App />
    </BladeProvider>
  </StrictMode>
);
