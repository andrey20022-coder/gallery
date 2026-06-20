import { useState } from 'react';
import CloseIcon from '../icons/CloseIcon';
import FilterGroup from './FilterGroup';
import { artists, locations } from '../data/paintings';

export default function FilterPanel({ isOpen, onClose, filters, setFilters, onApply }) {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleClear = () => {
    const cleared = {
      artist: '',
      location: '',
      yearFrom: '',
      yearTo: ''
    };
    setLocalFilters(cleared);
    setFilters(cleared);
  };

  const handleApply = () => {
    setFilters(localFilters);
    onApply();
  };

  return (
    <div className={`filter-panel ${isOpen ? 'open' : ''}`}>
      <button className="close-filter" onClick={onClose}>
        <CloseIcon />
      </button>
      
      <div className="filter-content">
        <FilterGroup title="ARTIST" defaultOpen={false}>
          <div className="custom-select">
            <select
              value={localFilters.artist}
              onChange={(e) => setLocalFilters({...localFilters, artist: e.target.value})}
            >
              <option value="">Select the artist</option>
              {artists.map(artist => (
                <option key={artist} value={artist}>{artist}</option>
              ))}
            </select>
          </div>
        </FilterGroup>

        <FilterGroup title="LOCATION" defaultOpen={false}>
          <div className="custom-select">
            <select
              value={localFilters.location}
              onChange={(e) => setLocalFilters({...localFilters, location: e.target.value})}
            >
              <option value="">Select the location</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </FilterGroup>

        <FilterGroup title="YEARS" defaultOpen={false}>
          <div className="year-inputs">
            <input
              type="number"
              placeholder="From"
              value={localFilters.yearFrom}
              onChange={(e) => setLocalFilters({...localFilters, yearFrom: e.target.value})}
            />
            <span className="separator">—</span>
            <input
              type="number"
              placeholder="To"
              value={localFilters.yearTo}
              onChange={(e) => setLocalFilters({...localFilters, yearTo: e.target.value})}
            />
          </div>
        </FilterGroup>
      </div>

      <div className="filter-footer">
        <button className="btn-show-results" onClick={handleApply}>
          SHOW THE RESULTS
        </button>
        <button className="btn-clear" onClick={handleClear}>
          CLEAR
        </button>
      </div>
    </div>
  );
}