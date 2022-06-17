import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#2A163C",
      text: "#EDF5FF",
      primary:
        "linear-gradient(112deg, #06B7DB -63.59%, #FF4ECD -20.3%, #0072F5 70.46%)",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider atribute theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
