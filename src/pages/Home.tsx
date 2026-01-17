import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { characterData } from "../constants/api";
import {
  type Character,
  type FilterParams,
  type Info,
} from "../types/dataTypes";
import { CharacterCardSkeleton } from "../components/CharacterCard";
import CharacterFilters from "./../components/CharacterFilters";
import Pagination from "./../components/Pagination";
import CharacterCard from "../components/CharacterCard";
import { useDebounce } from "../hooks/useDebounce";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [Character, setCharacter] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Favorites logic
  const [favorites, setFavorites] = useLocalStorage<number[]>(
    "rick-morty-favorites",
    []
  );

  // state initialization for URL params
  const [filters, setFilters] = useState<FilterParams>({
    name: searchParams.get("name") || "",
    status: searchParams.get("status") || "",
    species: searchParams.get("species") || "",
    gender: searchParams.get("gender") || "",
    page: Number(searchParams.get("page")) || 1,
  });

  const debounceFilters = useDebounce(filters, 500);

  useEffect(() => {
    const params: Record<string, string> = {};
    if (debounceFilters.name) params.name = debounceFilters.name;
    if (debounceFilters.status) params.status = debounceFilters.status;
    if (debounceFilters.species) params.species = debounceFilters.species;
    if (debounceFilters.gender) params.gender = debounceFilters.gender;
    if (debounceFilters.page && debounceFilters.page > 1)
      params.page = debounceFilters.page.toString();

    setSearchParams(params, { replace: true });
  }, [debounceFilters, setSearchParams]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await characterData.getAll(debounceFilters);
        setCharacter(data.results);
        setInfo(data.info);
      } catch (err) {
        setCharacter([]);
        setInfo(null);
        setError("No characters found matching your criteria");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debounceFilters]);

  const handleFilterChange = (key: keyof FilterParams, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleFavorite = (e: React.MouseEvent, char: Character) => {
    e.preventDefault(); // this prevents the unnecessary navigation
    setFavorites((prev) =>
      prev.includes(char.id)
        ? prev.filter((id) => id !== char.id)
        : [...prev, char.id]
    );
  };

  const favoriteSet = useMemo(() => new Set(favorites), [favorites]);
  return (
    <div>
      <div className="mb-8 mt-4">
        <h2 className="text-3xl font-bold mb-2">Character Explorer</h2>
        <p className="text-gray-400">
          Search and filter through this dashboard
        </p>
      </div>

      <CharacterFilters
        filters={filters}
        onFiltersChange={handleFilterChange}
      />

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <CharacterCardSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-12 bg-gray-800/50 rounded-lg border border-gray-700 border-dashed">
          <p className="text-xl text-gray-400 mb-2">{error}</p>
          <button
            onClick={() => setFilters({ page: 1 })}
            className="text-green-400 hover:text-green-300 font-semibold"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Character.map((char) => (
              <CharacterCard
                key={char.id}
                character={char}
                isFavorite={favoriteSet.has(char.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>

          {info && (
            <Pagination
              currentPage={filters.page || 1}
              totalPages={info.pages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
