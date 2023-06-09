import { useState } from "react";
import "./index.css";
import { SceneryCard } from "./components/sceneryCard";
import { ScenerySearchQuery } from "./components/searchBar";
import  Data  from "./data/scenery.json";
import { MembershipForm } from "./components/membershipForm";
import { Header } from "./components/headerBar";
import { LikeScenery } from "./components/likeButton";

function App() {
  const [scenery, setScenery] = useState(Data);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMembershipFormOpen, setIsMembershipFormOpen] = useState(false);

  function handleLikeScenery(id: number, isLiked: boolean) {
    const newScenery = scenery.map((scenery) => {
      if (scenery.id === id) {
        scenery.isLike = isLiked;
      }
      return scenery;
    });
    setScenery(newScenery);
  }
  const likedSceneryCount = scenery.filter((scenery) => scenery.isLike).length;
  const handleSearchQuery = (value: string) => {
    setSearchQuery(value);
  };

  const searchResult = Data.filter((scenery) =>
    scenery.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openForm = () => {
    setIsMembershipFormOpen(true);
  };

  const closeForm = () => {
    setIsMembershipFormOpen(false);
  };

  return (
     <main className="flex flex-col items-center justify-center bg-black">
      <Header />
      <ScenerySearchQuery setSearchQuery={handleSearchQuery} />
      <LikeScenery count={likedSceneryCount} />
      <section className="mt-4 mb-10 sm:max-w-[900px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
        {searchResult.map((scenery) => (
          <SceneryCard
            key={scenery.id}
            id={scenery.id}
            imgSrc={scenery.imgSrc}
            name={scenery.name}
            isLike={scenery.isLike}
            likeScenery={handleLikeScenery}
          />
        ))}
      </section>
      <button
        className="hover:bg-[#F5EFE7] bg-white text-black rounded-md px-4 py-2"
        onClick={openForm}
      >
        Membership Register
      </button>
      {isMembershipFormOpen && (
        <MembershipForm onSuccess={closeForm} />
      )}
      <br></br>
    </main>
  );
}

export default App;