import { BannerContainer } from "./Banner.style";
import Parallax from "./Parallax";


const index = () => {
  return (
    <BannerContainer>
      <Parallax baseVelocity={-5}>Hello</Parallax>
      <Parallax baseVelocity={5}>Hello</Parallax>
    </BannerContainer>
  );
};

export default index;
