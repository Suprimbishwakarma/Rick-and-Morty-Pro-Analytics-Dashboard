import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Film, Heart } from "lucide-react";
import { characterData, episodeData } from "../constants/api";
import { type Character, type Episode } from "../types/dataTypes";
import { useLocalStorage } from "../hooks/useLocalStorage";
import clsx from "clsx";

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [character, setCharacter] = useState<Character | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [favorites, setFavorites] = useLocalStorage<number[]>(
    "rick-morty-favorites",
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      setLoading(true);
      setError(null);

      try {
        const charData = await characterData.getById(Number(id));
        setCharacter(charData);

        // extracting the episode IDs from the charData
        const episodeID = charData.episode.map((url) => {
          const parts = url.split("/");
          return Number(parts[parts.length - 1]);
        });

        // fetching episodes the character has been featured in
        if (episodeID.length > 0) {
          const featuredEpisode = await episodeData.getMultipleByIds(episodeID);
          setEpisodes(featuredEpisode);
        }
      } catch (error) {
        setError("Failed to load Character details.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-500"></div>
          <div className="absolute inset-o animate-ping rounded-full h-16 w-16 border-4 border-e-emerald-500/30"></div>
        </div>
      </div>
    );
  }

  if (error || !character) {
    return (
      <div className="text-center py-20 glass-card rounded-2xl border border-white/10 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-red-400 mb-4">Error</h2>
        <p className="text-gray-400 mb-8 text-lg">
          {error || "Character not found"}
        </p>
        <Link to="/" className="btn-premium inline-block">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(character.id);

  const toggleFavorite = () => {
    setFavorites((prev) =>
      prev.includes(character.id)
        ? prev.filter((fid) => fid !== character.id)
        : [...prev, character.id]
    );
  };

  const statusColor =
    {
      Alive: "bg-green-400",
      Dead: "bg-red-400",
      unknown: "bg-gray-400",
    }[character.status] || "bg-gray-400";

  const statusGlow =
    {
      Alive: "shadow-green-500/50",
      Dead: "shadow-red-500/50",
      unknown: "shadow-gray-500/50",
    }[character.status] || "shadow-gray-900";

  return (
    <div className="max-w-6xl mx-auto mt-4 px-4">
      {/*Simple arrow button to navigate it back to the dashboard*/}
      <button
        onClick={() => navigate(-1)}
        className="group flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-all duration-300 mb-8 glass-card px-4 py-2 rounded-xl border border-white/10 hover:border-emerald-500/50"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </button>

      {/*Main information section*/}
      <div className="glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-10 animate-fade-in-up">
        <div className="md:flex">
          <div className="md:w-2/5 relative">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          <div className="p-8 md:w-3/5 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-3 gradient-text">
                  {character.name}
                </h1>
                <div className="flex items-center gap-3">
                  <span
                    className={clsx(
                      "w-3 h-3 rounded-full animate-pulse",
                      statusColor,
                      `shadow-lg ${statusGlow}`
                    )}
                  />
                  <span className="text-lg text-gray-200 font-medium">
                    {character.status} - {character.species}
                  </span>
                </div>
              </div>
              <button
                onClick={toggleFavorite}
                className={clsx(
                  "p-3 rounded-full backdrop-blur-md transition-all duration-300",
                  isFavorite
                    ? "bg-red-500/30 hover:bg-red-500/50 pulse-glow"
                    : "bg-white/10 hover:bg-white/20"
                )}
              >
                <Heart
                  className={clsx(
                    "w-8 h-8 transition-all",
                    isFavorite
                      ? "fill-red-500 text-red-500 scale-110"
                      : "text-gray-400"
                  )}
                />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="glass-card p-5 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all">
                <p className="text-gray-400 text-sm mb-2 font-medium">Gender</p>
                <p className="text-white font-bold text-lg">
                  {character.gender}
                </p>
              </div>
              <div className="glass-card p-5 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all">
                <p className="text-gray-400 text-sm mb-2 font-medium">Origin</p>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                  <p className="text-white font-bold text-lg truncate">
                    {character.origin.name}
                  </p>
                </div>
              </div>
              <div className="glass-card p-5 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all">
                <p className="text-gray-400 text-sm mb-2 font-medium">
                  Last Known Location
                </p>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-cyan-400 shrink-0" />
                  <p className="text-white font-bold text-lg truncate">
                    {character.location.name}
                  </p>
                </div>
              </div>
              <div className="glass-card p-5 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all">
                <p className="text-gray-400 text-sm mb-2 font-medium">
                  Episodes
                </p>
                <div className="flex items-center gap-2">
                  <Film className="w-5 h-5 text-purple-400 shrink-0" />
                  <p className="text-white font-bold text-lg">
                    {character.episode.length} appearances
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Character appeared episodes lists*/}
      <div className="mb-12">
        <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
          <Film className="w-8 h-8 text-emerald-400" />
          <span className="gradient-text">Featured Episodes</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {episodes.map((userEpisode) => (
            <div
              key={userEpisode.id}
              className="glass-card p-5 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3
                  className="font-bold text-white truncate pr-2 group-hover:text-emerald-400 transition-colors"
                  title={userEpisode.name}
                >
                  {userEpisode.name}
                </h3>
                <span className="text-xs font-mono glass-card px-3 py-1 rounded-full text-emerald-400 border border-emerald-500/30 shrink-0">
                  {userEpisode.episode}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>{userEpisode.air_date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
