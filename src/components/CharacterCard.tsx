import { type Character } from "../types/dataTypes";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// simple props to pass into the function
interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const getStatusColor = () => {
    if (character.status === "Alive") {
      return "bg-green-800";
    } else if (character.status === "Dead") {
      return "bg-red-800";
    } else {
      return "bg-gray-800";
    }
  };

  // Function that gets executed when we click the button
  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    // this flips the value: true -> false and false -> true
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-[#6f9283] rounded-lg overflow-hidden shadow-lg hover:shadow:2xl transition-all duration-300 group border border-gray-700">
      {/*Image section of the card*/}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover"
        />

        {/*Favorite button section*/}
        <button
          className="absolute top-2 right-2 p-2 bg-gray-900/50 rounded-full hover:bg-gray-900/80"
          onClick={handleFavoriteClick}
        >
          <Heart
            className={
              isFavorite
                ? "w-6 h-6 text-red-500 fill-red-500"
                : "w-6 h-6 text-white"
            }
          />
        </button>
      </div>

      {/*Information section*/}
      <Link to={`/character/${character.id}`} className="block p-4">
        {/*Name of the character*/}
        <h2 className="text-xl font-bold text-white mb-2 hover:text-purple-900">
          {character.name}
        </h2>

        {/*Status and the species of the character*/}
        <div className="flex items-center gap-2 text-sm text-gray-900 mb-4">
          <span className={`w-3 h-3 rounded-full ${getStatusColor()}`} />
          <span>
            {character.status} - {character.species}
          </span>
        </div>

        {/*Minor details about the characters*/}
        <div className="text-sm text-gray-900">
          <p className="mb-1">
            <span className="font-semibold text-white">Gender:</span>{" "}
            {character.gender}
          </p>
          <p>
            <span className="font-semibold text-white">Origin:</span>{" "}
            {character.origin.name}
          </p>
        </div>
      </Link>
    </div>
  );
};

// This is a simple component while data is loading
export function CharacterCardSkeleton() {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden h-96 animate-pulse border border-gray-700">
      <div className="h-64 bg-gray-700 w-full" />
      <div className="p-4 space-y-3">
        <div className="h-6 bg-gray-700 rounded w-3/4" />
        <div className="h-4 bg-gray-700 rounded w-1/2" />
      </div>
    </div>
  );
}

export default CharacterCard;
