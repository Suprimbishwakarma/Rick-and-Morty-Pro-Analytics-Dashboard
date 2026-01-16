import { Search } from "lucide-react";
import { type FilterParams } from "../types/dataTypes";

interface CharacterFiltersProps {
  filters: FilterParams;
  onFiltersChange: (key: keyof FilterParams, value: string) => void;
}

function CharacterFilters({ filters, onFiltersChange }: CharacterFiltersProps) {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    onFiltersChange(e.target.name as keyof FilterParams, e.target.value);
  };

  return (
    <div className="bg-[#6f9283] p-4 rounded-lg shadow-md mb-6 border border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/*Character Filter by name*/}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            name="name"
            placeholder="Search characters..."
            value={filters.name || ""}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 bg-[#3b3f44] border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
          />
        </div>

        {/*Character filter by status(Alive, Dead, unknown)*/}
        <select
          name="status"
          value={filters.status || ""}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-[#3b3f44] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer"
        >
          <option value="">All Statuses</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        {/*Character filter by Species(human, alien)*/}
        <input
          type="text"
          name="species"
          placeholder="Filter by species..."
          value={filters.species || ""}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-[#3b3f44] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
        />

        {/*Character filter by Gender*/}
        <select
          name="gender"
          value={filters.gender || ""}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-[#3b3f44] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer"
        >
          <option value="">All Genders</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
}

export default CharacterFilters;
