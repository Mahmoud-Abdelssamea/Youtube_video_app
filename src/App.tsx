import { Component, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Menu } from "./Components/Menu";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Video } from "./Pages/Video";
import { darkThemes, lightThemes } from "./Utils/Themes";
const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`;
function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  return (
    <ThemeProvider theme={darkMode ? darkThemes : lightThemes}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/video/"} element={<Video />} />
          </Routes>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
