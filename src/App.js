import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import { extendTheme } from "@chakra-ui/react";
// import { colors, font, styles } from "./assets/Theme";
import PrivateRoute from "./utils/PrivateRoute";
import { colors, Roboto } from "./assets/Theme";
import Frame from "./components/Frame";

function App() {
  const theme = extendTheme({
    colors: colors,
    fonts: {
      body: Roboto,
    },
    // styles: {
    //   global: styles,
    // },
  });

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <PrivateRoute>
          <Frame>
            <Routes>
              {routes.map((route, key) => (
                <Route
                  key={key}
                  exact
                  path={route?.path}
                  element={route?.element}
                />
              ))}
            </Routes>
          </Frame>
        </PrivateRoute>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
