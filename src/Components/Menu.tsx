import styled, { ThemeProvider } from "styled-components";
import {
  AiFillYoutube,
  AiFillHome,
  AiFillLike,
  AiOutlineHome,
  AiOutlineHistory,
  AiFillSetting,
} from "react-icons/ai";
import {
  MdGames,
  MdLibraryMusic,
  MdOutlineExplore,
  MdOutlineLiveTv,
  MdOutlineMovieCreation,
  MdOutlineSportsBasketball,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdPersonPin,
} from "react-icons/md";
import { IoIosJournal } from "react-icons/io";
import { Mybutton } from "./Mybutton";
import { Paragraph } from "./Paragraph";
import { MenuItem } from "./MenuItem";
import { darkThemes } from "../Utils/Themes";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 0;
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  position: sticky;
  top: 0;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; ;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;
  font-size: 0.85rem;
  margin-left: 1rem;
  margin-top: 0.8rem;
  overflow-y: auto;
`;

const Hr = styled.hr`
  width: 80%;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const SignIn = styled.div`
  padding: 0;
  margin: 0;
  font-size: 0.7rem;
`;

const Title = styled.h1`
  font-size: 0.7rem;
  padding: 0.5rem;
  color: #aaa;
  font-weight: 500;
`;

interface MenuProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const Menu = ({ darkMode, setDarkMode }: MenuProps) => {
  return (
    <Container>
      <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
        <Logo>
          <AiFillYoutube size={"2rem"} color={"red"} />
          <h3>Mahmoud </h3>
        </Logo>
      </Link>

      <Wrapper>
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <MenuItem text={"Home"} logo={<AiOutlineHome />} />
        </Link>
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <MenuItem text="Explore" logo={<MdOutlineExplore />} />
        </Link>

        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <MenuItem text="subscribtion" logo={<MdOutlineSubscriptions />} />
        </Link>

        <Hr />
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <MenuItem text="Library" logo={<MdOutlineVideoLibrary />} />
        </Link>

        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <MenuItem text="History" logo={<AiOutlineHistory />} />
        </Link>

        <Hr />
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <SignIn>
            <Paragraph text={"Sign In to like video, comment and subscribe"} />
            <Mybutton text={"sign in"} logo={<MdPersonPin />} />
          </SignIn>
        </Link>

        <Hr />
        <Title>Best of Youtube</Title>
        <MenuItem text="Music" logo={<MdLibraryMusic />} />
        <MenuItem text="sports" logo={<MdOutlineSportsBasketball />} />
        <MenuItem text="gaming" logo={<MdGames />} />
        <MenuItem text="movies" logo={<MdOutlineMovieCreation />} />
        <MenuItem text="news" logo={<IoIosJournal />} />
        <MenuItem text="live" logo={<MdOutlineLiveTv />} />
        <Hr />
        <MenuItem text="setting" logo={<AiFillSetting />} />
        <MenuItem text="report" logo={<MdOutlineLiveTv />} />
        <MenuItem text="help" logo={<MdOutlineLiveTv />} />
        <MenuItem
          text="light mode"
          logo={<MdOutlineLiveTv />}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </Wrapper>
    </Container>
  );
};
