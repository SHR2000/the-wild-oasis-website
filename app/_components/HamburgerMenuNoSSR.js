import dynamic from "next/dynamic";

export const HamburgerMenuNoSSR = dynamic(
  () => import("./HamburgerMenuServer"),
  {
    ssr: false,
  },
);
