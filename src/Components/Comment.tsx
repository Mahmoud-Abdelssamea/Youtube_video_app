import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 2rem;
`;

// Logo image
const Logo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
`;

// Comment Details
const CommentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 00.8rem;
`;

//Comment Writter
const CommentWriter = styled.h3`
  font-size: 0.8125rem;
  /* line-height: 1.125rem; */
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin: 0;
  padding: 0;
`;

// comment text
const CommentText = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
`;

// Date
const Date = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSoft};
  padding-left: 0.5rem;
`;

export const Comment = () => {
  return (
    <Container>
      {/* logo */}
      <Logo src="./imgs/logo.jpg" />
      <CommentDetails>
        <CommentWriter>
          Mahmoud awwad <Date>1 day ago</Date>
        </CommentWriter>
        <CommentText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
          molestiae. ipsum dolor sit, amet consectetur adipisicing elit.
          Adipisci, molestiae.
        </CommentText>
      </CommentDetails>
    </Container>
  );
};
