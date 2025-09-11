import { HiArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const QuizCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#1a221d] p-8 shadow-xl rounded-lg">
      <div className="flex flex-col items-center ">
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight text-center">
          What do you enjoy doing in your free time
        </h2>
        <div className="space-y-4 w-full max-w-xl">
          <label className="group flex items-center gap-4 border-2 rounded-2xl cursor-pointer p-4 border-[#29382f] bg-[#29382f] hover:bg-[#3d5245]">
            <input className="radio-custom" name="stream" type="radio" />
            <span className="text-gray-200 font-medium">
              Reading books or Articles
            </span>
          </label>
          <label className="group flex items-center gap-4 border-2 rounded-2xl cursor-pointer p-4 border-[#29382f] bg-[#29382f] hover:bg-[#3d5245]">
            <input className="radio-custom" name="stream" type="radio" />
            <span className="text-gray-200 font-medium">
              Playing sports or exercising
            </span>
          </label>
          <label className="group flex items-center gap-4 border-2 rounded-2xl cursor-pointer p-4 border-[#29382f] bg-[#29382f] hover:bg-[#3d5245]">
            <input className="radio-custom" name="stream" type="radio" />
            <span className="text-gray-200 font-medium">
              Creating art or music
            </span>
          </label>
          <label className="group flex items-center gap-4 border-2 rounded-2xl cursor-pointer p-4 border-[#29382f] bg-[#29382f] hover:bg-[#3d5245]">
            <input className="radio-custom" name="stream" type="radio" />
            <span className="text-gray-200 font-medium">
              Solving puzzles or playing strategy games
            </span>
          </label>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button
          onClick={() => navigate("/feedback")}
          className="flex items-center tracking-wide gap-2 font-medium text-lg rounded-full px-4 py-2 bg-buttonPrimary transition-colors hover:scale-105 hover:bg-[#45ff8f]"
        >
          Next
          <HiArrowLongRight />
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
