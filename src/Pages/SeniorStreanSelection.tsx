import { MdOutlineQuiz, MdOutlineTravelExplore } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { MdAccountBalance } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SeniorStreanSelection = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-grow">
      <section className="relative min-h-[50vh] bg-heroPattern2 flex items-center justify-center bg-cover bg-center py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(17,23,20,0.6)] to-[rgba(17,23,20,1)]"></div>
        <div className="relative container flex flex-col mx-auto gap-6 px-4  max-w-4xl text-center items-center">
          <h1 className="font-bold leading-tight tracking-tight text-4xl md:text-6xl text-white">
            Step Into Your Career Journey
          </h1>
          <p className="text-lg max-w-2xl text-gray-400 ">
            The final stretch is here. Discover the paths and opportunities that
            will define your career and passions
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container flex flex-col max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="font-bold tracking-tight text-3xl text-white md:text-4xl ">
              Select Your Academic Track
            </h1>
            <p className="mt-2 text-gray-400">
              Explore the options that will shape your future
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <label className="group flex flex-col items-center border-2 rounded-2xl cursor-pointer p-6 border-[#29382f] bg-[#1a221e] hover:border-buttonPrimary hover:bg-[#1f2a24] space-y-2">
              <input className="peer hidden" name="stream" type="radio" />
              <div className="flex size-12 items-center justify-center rounded-full border-2 border-[#3d5245] bg-[#111714] transition-all group-hover:border-[#38e07b] group-hover:text-[#111714] peer-checked:border-[#38e07b] peer-checked:bg-[#38e07b] peer-checked:text-[#111714]">
                <GiMaterialsScience color="white" size={25} />
              </div>
              <div className="flex flex-col justify-between items-center text-center">
                <h3 className="font-bold text-xl text-white">Science</h3>
                <p className="text-gray-200 mx-auto text-sm mt-2">
                  Focuses on physics, chemistry, biology, and mathematics,
                  leading to careers in engineering, medicine, and research.
                </p>
              </div>
            </label>
            <label className="group flex flex-col items-center border-2 rounded-2xl cursor-pointer p-6 border-[#29382f] bg-[#1a221e] hover:border-buttonPrimary hover:bg-[#1f2a24] space-y-2">
              <input className="peer hidden" name="stream" type="radio" />
              <div className="flex size-12 items-center justify-center rounded-full border-2 border-[#3d5245] bg-[#111714] transition-all group-hover:border-[#38e07b] group-hover:text-[#111714] peer-checked:border-[#38e07b] peer-checked:bg-[#38e07b] peer-checked:text-[#111714]">
                <MdAccountBalance color="white" size={25} />
              </div>
              <div className="flex flex-col justify-between items-center text-center">
                <h3 className="font-bold text-xl text-white">Commerce</h3>
                <p className="text-gray-200 mx-auto text-sm mt-2">
                  Deals with business studies, accountancy, economics, and
                  finance, opening doors to careers in banking, finance, and
                  management.
                </p>
              </div>
            </label>
            <label className="group flex flex-col border-2 items-center rounded-2xl cursor-pointer p-6 border-[#29382f] bg-[#1a221e] hover:border-buttonPrimary hover:bg-[#1f2a24] space-y-2">
              <input className="peer hidden" name="stream" type="radio" />
              <div className="flex size-12 items-center justify-center rounded-full border-2 border-[#3d5245] bg-[#111714] transition-all group-hover:border-[#38e07b] group-hover:text-[#111714] peer-checked:border-[#38e07b] peer-checked:bg-[#38e07b] peer-checked:text-[#111714]">
                <IoIosColorPalette color="white" size={25} />
              </div>
              <div className="flex flex-col justify-between items-center text-center">
                <h3 className="font-bold text-xl text-white">Arts</h3>
                <p className="text-gray-200 mx-auto text-sm mt-2">
                  Encompasses history, geography, political science, literature,
                  and sociology, leading to careers in teaching, journalism, and
                  social work.
                </p>
              </div>
            </label>
          </div>
          <div className="flex items-center justify-center gap-4 mt-12 sm:flex-row">
            <button
              onClick={() => navigate("/quiz")}
              className="flex font-medium items-center gap-2 justify-center text-lg rounded-full px-16 py-4 text-white bg-[#29382f] hover:scale-105 hover:bg-buttonPrimary hover:text-black"
            >
              <MdOutlineQuiz />
              Take Quiz
            </button>
            <button
              onClick={() => navigate("/career")}
              className="flex font-medium items-center gap-2 justify-center text-lg rounded-full px-8 py-4 text-white bg-[#29382f] hover:scale-105 hover:bg-buttonPrimary hover:text-black"
            >
              <MdOutlineTravelExplore />
              Browse Careers
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SeniorStreanSelection;
