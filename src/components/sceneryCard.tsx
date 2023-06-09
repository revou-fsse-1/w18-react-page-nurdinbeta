import { useState } from "react";
import LikeButton from "./likeButton";

type SceneryCardProps = {
  name: string;
  isLike: boolean;
  imgSrc: string;
  onLikeChange: (liked: boolean) => void;
};

const Scenerycard = (scenery: SceneryCardProps) => {
  const [isLike, setIsLike] = useState(scenery.isLike);

  const handleLikeChange = (liked: boolean) => {
    setIsLike(liked);
    scenery.onLikeChange(liked);
  };

  return (
    <div className="photocard bg-white p-4 shadow-md flex flex-col transform-gpu transition-transform duration-200 hover:scale-105">
      <div className="relative flex-grow">
        <img
          src={scenery.imgSrc}
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 right-0 p-2">
          <LikeButton
            initialValue={isLike}
            onLikeChange={handleLikeChange}
          />
        </div>
      </div>
      <h4 className="mt-2 text-xl font-semibold">{scenery.name}</h4>
    </div>
  );
};

export default Scenerycard;