import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-[47%] h-auto p-2 min-h-[450px] bg-purple-700 mx-auto rounded-xl border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
