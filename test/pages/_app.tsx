import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={extendTheme({
        components: {
          Button: {
            defaultProps: {
              colorScheme: "blue",
            },
          },
        },
      })}
    >
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}
