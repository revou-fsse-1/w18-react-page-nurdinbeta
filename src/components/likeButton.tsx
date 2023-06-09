import React, { useState } from 'react';

interface LikeButtonProps {
  initialValue: boolean;
  onLikeChange: (liked: boolean) => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ initialValue, onLikeChange }) => {
  const [liked, setLiked] = useState(initialValue);

  const handleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    onLikeChange(newLiked);
  };

  return (
    <div>
      <button onClick={handleLike}>{liked ? 'LIKED' : 'LIKE'}</button>
    </div>
  );
};

export default LikeButton;