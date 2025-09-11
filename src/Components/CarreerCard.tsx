import { HiArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const CarreerCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-black/20 transition-shadow duration-300 bg-gray-900 border border-[#29382f]">
        <div className="w-full h-48 bg-center bg-cover bg-no-repeat bg-CardImage"></div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold leading-tight mb-2 text-white">
            Biomedical Engineering
          </h3>
          <p className="text-gray-300 text-sm font-normal leading-normal mb-4 flex-grow">
            Combine engineering principles with biology and medicine to design
            medical devices, equipment, and systems.
          </p>
          <button
            onClick={() => navigate("/")}
            className="flex w-full mt-2 max-w-xs items-center gap-2 justify-center font-medium text-lg rounded-md px-6 py-2 text-white bg-buttonPrimary hover:bg-gray-600"
          >
            View Roadmap
            <HiArrowLongRight />
          </button>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-black/20 transition-shadow duration-300 bg-gray-900 border border-[#29382f]">
        <div className="w-full h-48 bg-center bg-cover bg-no-repeat bg-CardImage"></div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold leading-tight mb-2 text-white">
            Biomedical Engineering
          </h3>
          <p className="text-gray-300 text-sm font-normal leading-normal mb-4 flex-grow">
            Combine engineering principles with biology and medicine to design
            medical devices, equipment, and systems.
          </p>
          <button className="flex w-full mt-2 max-w-xs items-center gap-2 justify-center font-medium text-lg rounded-md px-6 py-2 text-white bg-buttonPrimary hover:bg-gray-600">
            View Roadmap
            <HiArrowLongRight />
          </button>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-black/20 transition-shadow duration-300 bg-gray-900 border border-[#29382f]">
        <div className="w-full h-48 bg-center bg-cover bg-no-repeat bg-CardImage"></div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold leading-tight mb-2 text-white">
            Biomedical Engineering
          </h3>
          <p className="text-gray-300 text-sm font-normal leading-normal mb-4 flex-grow">
            Combine engineering principles with biology and medicine to design
            medical devices, equipment, and systems.
          </p>
          <button className="flex w-full mt-2 max-w-xs items-center gap-2 justify-center font-medium text-lg rounded-md px-6 py-2 text-white bg-buttonPrimary hover:bg-gray-600y">
            View Roadmap
            <HiArrowLongRight />
          </button>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-black/20 transition-shadow duration-300 bg-gray-900 border border-[#29382f]">
        <div className="w-full h-48 bg-center bg-cover bg-no-repeat bg-CardImage"></div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold leading-tight mb-2 text-white">
            Biomedical Engineering
          </h3>
          <p className="text-gray-300 text-sm font-normal leading-normal mb-4 flex-grow">
            Combine engineering principles with biology and medicine to design
            medical devices, equipment, and systems.
          </p>
          <button className="flex w-full mt-2 max-w-xs items-center gap-2 justify-center font-medium text-lg rounded-md px-6 py-2 text-white bg-buttonPrimary hover:bg-gray-600">
            View Roadmap
            <HiArrowLongRight />
          </button>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-black/20 transition-shadow duration-300 bg-buttonSecondary border border-[#29382f]">
        <div className="w-full h-48 bg-center bg-cover bg-no-repeat bg-CardImage"></div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold leading-tight mb-2 text-white">
            Biomedical Engineering
          </h3>
          <p className="text-gray-300 text-sm font-normal leading-normal mb-4 flex-grow">
            Combine engineering principles with biology and medicine to design
            medical devices, equipment, and systems.
          </p>
          <button className="flex w-full mt-2 max-w-xs items-center gap-2 justify-center font-medium text-lg rounded-md px-6 py-2 text-white bg-buttonPrimary hover:bg-gray-600">
            View Roadmap
            <HiArrowLongRight />
          </button>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-black/20 transition-shadow duration-300 bg-buttonSecondary border border-[#29382f]">
        <div className="w-full h-48 bg-center bg-cover bg-no-repeat bg-CardImage"></div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold leading-tight mb-2 text-white">
            Biomedical Engineering
          </h3>
          <p className="text-gray-300 text-sm font-normal leading-normal mb-4 flex-grow">
            Combine engineering principles with biology and medicine to design
            medical devices, equipment, and systems.
          </p>
          <button className="flex w-full mt-2 max-w-xs items-center gap-2 justify-center font-medium text-lg rounded-md px-6 py-2 text-white bg-gray-600 hover:bg-buttonPrimary">
            View Roadmap
            <HiArrowLongRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default CarreerCard;
