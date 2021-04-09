import { AppProps } from "next/app";

import { Chakra } from "../context/Chakra";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}

export { getServeSideProps } from "../context/Chakra";
