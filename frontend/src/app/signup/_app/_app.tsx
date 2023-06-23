import { AppProps } from "next/app";
import { AuthProvider } from "../../../contexts/AuthContent";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
