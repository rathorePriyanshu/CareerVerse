import { useNavigate } from "react-router-dom";

const FeedbackCards = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <div className="flex flex-col bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex-grow">
            <h3 className="text-gray-100 text-lg font-bold leading-normal">
              Data Analyst
            </h3>
            <p className="text-gray-500 text-sm font-normal leading-relaxed mt-2">
              Your analytical skills and interest in data make this a strong
              option.
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="flex mt-4 min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-4 bg-buttonPrimary text-white text-sm font-medium leading-normal hover:bg-buttonSecondary transition-colors"
          >
            View Roadmap
          </button>
        </div>
        <div className="flex flex-col bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex-grow">
            <h3 className="text-gray-100 text-lg font-bold leading-normal">
              Data Analyst
            </h3>
            <p className="text-gray-500 text-sm font-normal leading-relaxed mt-2">
              Your analytical skills and interest in data make this a strong
              option.
            </p>
          </div>
          <button className="flex mt-4 min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-4 bg-buttonPrimary text-white text-sm font-medium leading-normal hover:bg-buttonSecondary transition-colors">
            View Roadmap
          </button>
        </div>
        <div className="flex flex-col bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex-grow">
            <h3 className="text-gray-100 text-lg font-bold leading-normal">
              Data Analyst
            </h3>
            <p className="text-gray-500 text-sm font-normal leading-relaxed mt-2">
              Your analytical skills and interest in data make this a strong
              option.
            </p>
          </div>
          <button className="flex mt-4 min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-4 bg-buttonPrimary text-white text-sm font-medium leading-normal hover:bg-buttonSecondary transition-colors">
            View Roadmap
          </button>
        </div>
      </div>
    </>
  );
};

export default FeedbackCards;
