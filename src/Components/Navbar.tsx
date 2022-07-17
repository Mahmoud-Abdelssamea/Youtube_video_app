import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { MdPersonPin } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Mybutton } from "./Mybutton";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.bg};
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 3.2rem;
  padding: 0 1rem;
  position: relative;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

// Main logo image
const Logo = styled.div`
  display: none;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// Search Bar
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: ${({ theme }) => theme.bgLighter};
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  width: 20rem;
  padding-right: 1rem;
  border: 2px solid ${({ theme }) => theme.hover};
  border-radius: 3px;
  height: 2rem;
`;
const Input = styled.input`
  width: 90%;
  height: 100%;
  background-color: ${({ theme }) => theme.bg};
  border: 0;
  outline: none;
  color: ${({ theme }) => theme.text};
  padding-left: 0.4rem;
`;
export const Navbar = () => {
  return (
    <Nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo>
          <AiFillYoutube size={"2rem"} color={"red"} />
          <h3>Mahmoud </h3>
        </Logo>
      </Link>
      <SearchBar>
        <Input type="search" placeholder="Search" />
        <AiOutlineSearch />
      </SearchBar>
      <Mybutton text={"Sign in"} logo={<MdPersonPin />} />
    </Nav>
  );
};
