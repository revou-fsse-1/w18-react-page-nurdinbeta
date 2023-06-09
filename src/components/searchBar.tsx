type ScenerySearchQueryProps = {
  setSearchQuery: (value: string) => void;
};

export const ScenerySearchQuery = (props: ScenerySearchQueryProps) => {
  const { setSearchQuery } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
  };
  return (
    <div className="flex justify-center items-center py-2 ">
      <input
        className="py-1 px-12 border border-white text-black rounded-xl text-center shadow-2xl shadow-white"
        type="text"
        placeholder="search your favorite scenery"
        onChange={handleInputChange}
      />
    </div>
  );
};