// import Navbar from "../components/common/Navbar";
// import Hero from "../components/home/Hero";
// import ProductSection from "../components/home/ProductSection";

// function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <ProductSection />
//     </>
//   );
// }

// export default Home;
// import AnnouncementBar from "../components/common/AnnouncementBar";
// import Navbar from "../components/common/Navbar";

// function Home() {
//   return (
//     <>
//       <AnnouncementBar />
//       <Navbar />
//     </>
//   );
// }

// export default Home;
import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import MegaMenu from "../components/common/MegaMenu";
import CollectionHeader from "../components/collection/CollectionHeader";
import ProductGrid from "../components/collection/ProductGrid";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <MegaMenu />
      <CollectionHeader />
      <ProductGrid />
    </>
  );
}

export default Home;