import { Info, Key } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  function handleBeingClicked() {
    navigate("/dashboard");
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-hidden gap-16">
      <button className="w-full">
        <Info className="flex justify-end cursor-pointer hover:text-black" />
      </button>
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="font-['BBH_Bartle'] text-[30px]">
          Rick and Morty Multi-verse Portal
        </h1>
        <p className="text-center italic">
          Rick and Morty Multi-verse portal is an art explorer for the Rick and
          Morty multiverse, engineered with React 19, TypeScript, and Tailwind
          CSS.
        </p>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex gap-2 text-xl items-center font-semibold">
            <Key />
            <p>Key Features</p>
          </div>
          <div>
            <ul className="flex flex-col justify-between items-center gap-2 italic text-gray-400">
              <li>
                A responsive grid layout showcasing character imagery with
                real-time status indicators (Alive, Dead, Unknown).
              </li>
              <li>
                Supports real-time search with debouncing and multi-dimensional
                filtering by Status, Species, and Gender. All filters sync with
                the URL for easy sharing.
              </li>
              <li>
                Powered by a custom useLocalStorage hook, your favorites are
                persisted locally and saved across browser sessions.
              </li>
              <li>
                {" "}
                seamless navigation controls allow efficient traversal of the
                extensive character database.
              </li>
              <li>
                Dynamic routing via React Router v7 enables Detailed Character
                Views, displaying exhaustive profiles, origin data, location
                tracking, and complete episode appearance histories.
              </li>
              <li>
                Features a mobile-first responsive design, dark mode aesthetic,
                loading skeletons for smooth states, and conditional layout
                rendering for a polished user experience.
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={handleBeingClicked}
          className="bg-[#6f9283] text-black hover:bg-[#3a5348] hover:text-white cursor-pointer p-4 rounded-xl transition-all duration-1200"
        >
          Lets explore characters
        </button>
      </div>
    </div>
  );
};

export default Landing;
