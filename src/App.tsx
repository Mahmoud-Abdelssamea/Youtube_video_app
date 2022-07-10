import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Main } from "./Components/Main";
import { Menu } from "./Components/Menu";
import { darkThemes, lightThemes } from "./Utils/Themes";
const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  return (
    <ThemeProvider theme={darkMode ? darkThemes : lightThemes}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main />
      </Container>
    </ThemeProvider>
  );
}

export default App;
