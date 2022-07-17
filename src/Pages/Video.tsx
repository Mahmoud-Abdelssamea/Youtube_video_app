import {
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineSave,
  AiOutlineShareAlt,
} from "react-icons/ai";
import styled from "styled-components";
import { Comment } from "../Components/Comment";
import { SuggestedVideo } from "../Components/SuggestedVideo";

const Container = styled.div`
  display: flex;
  gap: 0rem;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 1rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ViewsDate = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.span`
  display: flex;
  gap: 1rem;
`;

const Button = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  display: flex;
  align-items: center;
  gap: 0.2em;
  cursor: pointer;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
`;

const ChannelInfo = styled.div`
  display: flex;
  padding-top: 1.5rem;
`;
const ChannelInfoDetails = styled.div`
  display: flex;
  gap: 0.7rem;
`;

const ChnlNameSubscribe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ChannelName = styled.h1`
  font-size: 0.85rem;
  font-weight: 500;
  opacity: 0.7;
  text-transform: capitalize;
`;

const NumSubsribers = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  text-transform: capitalize;
`;

const ChannelDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
`;

const SubscribeButton = styled.button`
  text-transform: uppercase;
  color: white;
  background-color: red;
  border-radius: 5px;
  padding: 5px 10px;
  height: fit-content;
  width: fit-content;

  cursor: pointer;
  display: flex;
`;

// Add Comment
const AddComment = styled.div`
  display: flex;
  gap: 0.8rem;
  padding-top: 1rem;
  @media (max-width: 992px) {
    display: none;
  }
`;

// input to add comment
const CommentInput = styled.input`
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  &:focus {
    border-bottom: 3px solid ${({ theme }) => theme.text};
  }
`;

const CommentWrapper = styled.div`
  display: flex;
  align-items=center;flex-direction: column;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            style={{
              marginInline: "auto",
              aspectRatio: "14/9",
              outline: "none",
              border: "none",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
          <Title>Lorem ipsum dolor sit amet.</Title>

          {/* Info section */}
          <Info>
            <ViewsDate>2356564 Views - June 20,2022</ViewsDate>
            <Buttons>
              <Button>
                <AiOutlineLike /> 123
              </Button>
              <Button>
                <AiOutlineDislike />
                122
              </Button>
              <Button>
                <AiOutlineShareAlt />
                share
              </Button>
              <Button>
                <AiOutlineSave />
                save
              </Button>
            </Buttons>
          </Info>

          {/* logo and channel name and discrbition  */}
          <ChannelInfo>
            <ChannelInfoDetails>
              <Logo src="./imgs/logo.jpg" />
              <ChnlNameSubscribe>
                <ChannelName>lama dev</ChannelName>
                <NumSubsribers>132k subscribers</NumSubsribers>
                <ChannelDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  delectus maxime impedit nulla molestiae voluptas perferendis
                  at, ea nam ab quod placeat beatae quas, ipsum possimus eaque
                  incidunt veritatis cum.
                </ChannelDescription>
              </ChnlNameSubscribe>
            </ChannelInfoDetails>
            <SubscribeButton>subscibe</SubscribeButton>
          </ChannelInfo>

          {/* Add Comments section  */}
          <AddComment>
            <Logo src="./imgs/logo.jpg" />
            <CommentInput placeholder="Add Comment" />
          </AddComment>
          <CommentWrapper>
            <Comment />
            <Comment />
            <Comment />
          </CommentWrapper>
        </VideoWrapper>
      </Content>
      <Recommendation>
        <SuggestedVideo />
        <SuggestedVideo />
        <SuggestedVideo />
      </Recommendation>
    </Container>
  );
};
