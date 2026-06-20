import SearchIcon from '../icons/SearchIcon';
import FilterIcon from '../icons/FilterIcon';

export default function SearchBox({ searchQuery, setSearchQuery, onFilterClick }) {
  return (
    <div className="controls">
      <div className="search-box">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button className="filter-btn" onClick={onFilterClick}>
        <FilterIcon />
      </button>
    </div>
  );
}