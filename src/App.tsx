import { useState } from "react";
import "./index.css";
import { Scenery } from "./scenery";
import Scenerycard from "./components/sceneryCard";
import SearchBar from "./components/searchBar";
import Data from "./data/scenery.json";
import MembershipForm from "./components/membershipForm";
import { Header } from "./components/headerBar";

function App() {
  const scenery: Scenery[] = Data;
  const [likeCount, setLikeCount] = useState(0);
  const [searchScenery, setSearchScenery] = useState("");
  const [searchSceneryResult, setSearchSceneryResult] = useState<Scenery[]>(scenery);
  const [showMembershipForm, setShowMembershipForm] = useState(false);
  const [isMembershipFormOpen, setIsMembershipFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsMembershipFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsMembershipFormOpen(false);
  };

  const handleLikeChange = (liked: boolean) => {
    setLikeCount((prevCount) => (liked ? prevCount + 1 : prevCount - 1));
  };

  const handleSearch = (query: string) => {
    const filteredScenery = scenery.filter((scenery) => {
      const nameMatch = scenery.name
        .toLowerCase()
        .includes(query.toLowerCase());
      return nameMatch
    });

    searchScenery;
    setSearchScenery(query);
    setSearchSceneryResult(filteredScenery);
  };

  const handleCloseMembershipForm = () => {
    setShowMembershipForm(false);
  };


  return (
    <div className="container mx-auto p-4 lg:max-w-4xl xl:max-w-5xl">
      <div>
        <Header />
      </div>
      <p className="mb-4">My liked {likeCount} photo(s).</p>
      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {searchSceneryResult.map((scenery) => (
          <Scenerycard
            key={scenery.name}
            name={scenery.name}
            imgSrc={scenery.imgSrc}
            onLikeChange={handleLikeChange}
            isLike={false}
          />
        ))}
      </div>

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded text-base md:text-lg lg:text-xl xl:text-2xl"
        onClick={handleOpenForm}
      >
       Join Membership
      </button>
      {isMembershipFormOpen && <MembershipForm onClose={handleCloseForm} />}
      {showMembershipForm && <MembershipForm onClose={handleCloseMembershipForm} />}
    </div>
  );
}

export default App;