import "tailwindcss/tailwind.css";

import { AppProps } from "next/dist/next-server/lib/router/router";
import { FC } from "react";

export const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
