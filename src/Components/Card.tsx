// import
import { Link } from "react-router-dom";
import styled from "styled-components";

// container component
const Container = styled.div``;
const Img = styled.img`
  width: 100%;
  margin-bottom: 0.5rem;
  aspect-ratio: 16/9;
  object-fit: cover;
`;

// details component
const Details = styled.div`
  display: flex;
  gap: 0.8rem;
`;

// logo component
const Logo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
`;

// VideoDetails component
const VideoDetails = styled.div``;
const Title = styled.h1`
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;

// Channel Name component
const ChannelName = styled.h1`
  font-size: 0.85rem;
  font-weight: 500;
  opacity: 0.7;
  text-transform: capitalize;
`;

// Info Component
const Info = styled.div`
  display: flex;
  font-size: 0.75rem;
  gap: 0.4rem;
  color: #aaa;
`;
const Viewers = styled.span``;
const Date = styled.span``;
export const Card = () => {
  return (
    <Link to="/video" style={{ textDecoration: "none", color: "white" }}>
      <Container>
        {/* main Image for Card */}
        <Img src="./imgs/img1.png" />

        {/* video details */}
        <Details>
          {/* logo image */}
          <Logo src="./imgs/logo.jpg" />
          <VideoDetails>
            {/* video name */}
            <Title>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              harum officia accusantium nostrum magni. Dolorum quod molestiae
              quas culpa minima.
            </Title>

            {/* channel name */}
            <ChannelName>lama dev</ChannelName>

            {/* video viewers and date  */}
            <Info>
              <Viewers>600,000 viewer.</Viewers>
              <Date>1day ago</Date>
            </Info>
          </VideoDetails>
        </Details>
      </Container>
    </Link>
  );
};
