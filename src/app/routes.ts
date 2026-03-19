import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductPage } from "./pages/ProductPage";
import { AboutPage } from "./pages/AboutPage";
import { FAQPage } from "./pages/FAQPage";
import { ContactPage } from "./pages/ContactPage";
import { ReturnPolicyPage } from "./pages/ReturnPolicyPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ProfilePage } from "./pages/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "shop",
        Component: ShopPage,
      },
      {
        path: "shop/men",
        Component: ShopPage,
      },
      {
        path: "shop/women",
        Component: ShopPage,
      },
      {
        path: "product/:id",
        Component: ProductPage,
      },
      {
        path: "checkout",
        Component: CheckoutPage,
      },
      {
        path: "profile",
        Component: ProfilePage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "faq",
        Component: FAQPage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "return-policy",
        Component: ReturnPolicyPage,
      },
      {
        path: "privacy-policy",
        Component: PrivacyPolicyPage,
      },
      {
        path: "terms",
        Component: TermsPage,
      },
    ],
  },
]);
