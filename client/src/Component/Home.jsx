import Hero from "./Hero";
import About from "./About";
import ClientReview from "./ClientReview";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      {/*  TODO: What is the point of review? Experiences section would be more appropriate */}
      <ClientReview />
    </div>
  );
};

export default Home;
