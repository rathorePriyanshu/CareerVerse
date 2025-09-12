import { HiArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import type { CareerData } from "../servies/types";

interface CarreerCardProps {
  career: CareerData;
}

const CarreerCard = ({ career }: CarreerCardProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-black/20 transition-shadow duration-300 bg-gray-900 border border-[#29382f]">
        <div
          className="w-full h-48 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${career.img})` }}
        ></div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold leading-tight mb-2 text-white">
            {career.title}
          </h3>
          <p className="text-gray-300 text-sm font-normal leading-normal mb-4 flex-grow">
            {career.description}
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
    </>
  );
};

export default CarreerCard;
