import Hero from "./Hero";
import OurProject from "./OurProject";
import Testimonial from "./Testimonial";
import VideoContent from "./VideoContent";
import { Welcome } from "./Welcome";
import WhatWeOffer from "./WhatWeOffer";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Welcome />
      <WhatWeOffer />
      <VideoContent />
      <OurProject />
      <Testimonial />
    </div>
  );
};

export default Home;
