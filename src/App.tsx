import { Hero } from "@components/Hero";
import { NftCarousel } from "@components/NftCarousel";
import { Footer } from "@layout/Footer";
import { Nav } from "@layout/Nav/Nav";
const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Nav />
      <Hero />
      <NftCarousel />
      <Footer />
    </div>
  );
};

export default App;
