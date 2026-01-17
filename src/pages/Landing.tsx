import { Info, LoaderPinwheel } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InfoSection from "../components/Info";

const Landing = () => {
  const navigate = useNavigate();
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleBeingClicked() {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen md:h-screen md:overflow-hidden gap-8 md:gap-16 p-4 md:p-0">
      <InfoSection isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />
      <div className="w-full flex justify-start">
        <button
          className="cursor-pointer hover:text-black"
          onClick={() => setIsInfoOpen(true)}
        >
          <Info />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="font-['BBH_Bartle'] text-2xl md:text-[30px] text-center md:text-center">
          Rick and Morty Multi-verse Portal
        </h1>
        <p className="text-center italic">
          Rick and Morty Multi-verse portal is an art explorer for the Rick and
          Morty multiverse, engineered with React 19, TypeScript, and Tailwind
          CSS.
        </p>
        <button
          onClick={handleBeingClicked}
          disabled={isLoading}
          className={`bg-[#6f9283] text-black hover:bg-[#3a5348] hover:text-white cursor-pointer p-4 rounded-xl transition-all duration-1200 flex items-center justify-center gap-2 w-full md:w-auto ${
            isLoading ? "opacity-80 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <>
              <LoaderPinwheel className="animate-spin" />
              <span>Exploring...</span>
            </>
          ) : (
            "Lets explore characters"
          )}
        </button>
      </div>
    </div>
  );
};

export default Landing;
