import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import { extendTheme } from "@chakra-ui/react";
import { colors, font, styles } from "./assets/Theme";
import PanelLayout from "./components/PanelLayout";

function App() {
  const theme = extendTheme({
    colors: colors,
    fonts: {
      body: font,
    },
    styles: {
      global: styles,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <PanelLayout>
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
        </PanelLayout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
