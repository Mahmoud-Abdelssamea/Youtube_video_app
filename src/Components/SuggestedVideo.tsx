import { Link } from "react-router-dom";
import styled from "styled-components";

//container for suggested video
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 00.5rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.text};
`;

// Image for suggested Video
const Img = styled.img`
  object-fit: cover;
  flex: 1;
  max-width: 150px;
`;

//SuggestedVideo Details
const VideoDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

// Video Name
const VideoName = styled.h1`
  font-size: 0.9rem;
  font-weight: 500;
  max-width: 300px;
`;

// channel name
const ChannelName = styled.h5`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
`;

//Views and Date
const DateViews = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textSoft};
`;

export const SuggestedVideo = () => {
  return (
    <Link to={"/video/test"} style={{ textDecoration: "none" }}>
      <Container>
        <Img src="./imgs/img1.png" />
        <VideoDetails>
          <VideoName>Lorem ipsum dolor sit amet consectetur.</VideoName>
          <ChannelName>lama div</ChannelName>
          <DateViews>16k views . 3 months ago</DateViews>
        </VideoDetails>
      </Container>
    </Link>
  );
};
