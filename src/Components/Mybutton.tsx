import styled from "styled-components";
const Button = styled.button`
  text-transform: uppercase;
  color: #3ea6ff;
  background-color: black;
  border-radius: 2px;
  padding: 2px 8px;
  border: 2px solid #3ea6ff;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

interface ButtonProps {
  text: string;
  logo?: any;
}
export const Mybutton = ({ text, logo }: ButtonProps) => {
  return (
    <Button>
      {logo}
      {text}
    </Button>
  );
};
