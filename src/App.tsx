import { Component, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Menu } from "./Components/Menu";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Video } from "./Pages/Video";
import { darkThemes, lightThemes } from "./Utils/Themes";
const Container = styled.div`
  display: flex;
  /* position: relative; */
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  /* position: relative; */
`;

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  // const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <ThemeProvider theme={darkMode ? darkThemes : lightThemes}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/video"} element={<Video />} />
            <Route path={"/login"} element={<Login />} />
          </Routes>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
