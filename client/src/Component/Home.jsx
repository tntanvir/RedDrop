import Hero from "./Hero";
import About from "./About";
import ClientReview from "./ClientReview";
import Contect from "./Contect";
import ProvideUser from "./ProvideUser";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProvideUser></ProvideUser>
      <About />
      <ClientReview />
      <Contect />
    </div>
  );
};

export default Home;
