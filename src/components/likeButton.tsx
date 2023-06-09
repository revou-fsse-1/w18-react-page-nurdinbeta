type LikeSceneryProps = {
  count: number;
};

export const LikeScenery = (props: LikeSceneryProps) => {
  return (
    <div className="fixed top-0 right-0 px-4 py-2 text-black bg-white rounded-bl-2xl z-50 ">
      <p>You have liked {props.count} photos</p>
    </div>
  );
};