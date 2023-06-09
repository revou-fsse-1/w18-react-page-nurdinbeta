type SceneryCardProps = {
  id: number;
  name: string;
  imgSrc: string;
  isLike?: boolean;
  likeScenery: (id: number, isLiked: boolean) => void;
};

export const SceneryCard = (props: SceneryCardProps) => {
  return (
    <div className="hover:scale-110 duration-500 relative shadow-2xl shadow-black">
      <img
        src={props.imgSrc}
        alt=""
        className="w-fit sm:w-[210px] md:w-[200px] h-[270px] object-cover"
      />
      <h3 className=" text-slate-950 bg-white font-semibold text-lg text-center">
        {props.name}
      </h3>
      <div className="absolute text-sm top-[3px] right-[1px]">
        {!props.isLike ? (
          <button
            className="px-2 text-black font-bold"
            onClick={() => props.likeScenery(props.id, true)}
          >
            LIKE
          </button>
        ) : (
          <button
            className="px-2 text-black font-bold"
            onClick={() => props.likeScenery(props.id, false)}
          >
            LIKED
          </button>
        )}
      </div>
    </div>
  );
};