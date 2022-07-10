import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { MdOutlineSubscriptions } from "react-icons/md";
import styled from "styled-components";
const MenuItemStyled = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 0.7rem;
  text-transform: capitalize;
  font-size: 0.7rem;
  padding: 0.2rem 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hover};
    border-radius: 4px;
  }
`;
interface MenuItemProps {
  text: string;
  logo?: ReactElement;
  darkMode?: boolean;
  setDarkMode?: Dispatch<SetStateAction<boolean>>;
}
export const MenuItem = ({
  text,
  logo,
  darkMode,
  setDarkMode,
}: MenuItemProps) => {
  return (
    <MenuItemStyled
      // for dark mode botton.
      onClick={() => {
        setDarkMode && setDarkMode(!darkMode);
      }}
    >
      {logo && <span>{logo}</span>}
      {text}
    </MenuItemStyled>
  );
};
