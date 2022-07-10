import styled from "styled-components";

const MyParagaph = styled.p`
  margin: 0;
  padding-bottom: 1rem;
`;
interface Text {
  text: String;
}
export const Paragraph = ({ text }: Text) => {
  return <MyParagaph>{text}</MyParagaph>;
};
