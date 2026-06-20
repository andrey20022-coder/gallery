import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import FilterPanel from './components/FilterPanel';
import Gallery from './components/Gallery';
import Pagination from './components/Pagination';
import { paintings } from './data/paintings';

function App() {
  const [isLight, setIsLight] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    artist: '',
    location: '',
    yearFrom: '',
    yearTo: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(paintings);
  
  const itemsPerPage = 6;

  // Тема
  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [isLight]);

  // Живая фильтрация и поиск
  useEffect(() => {
    let result = paintings;

    // Поиск по названию или автору
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(painting => 
        painting.title.toLowerCase().includes(query) ||
        painting.artist.toLowerCase().includes(query)
      );
    }

    // Фильтры
    if (filters.artist) {
      result = result.filter(p => p.artist === filters.artist);
    }
    if (filters.location) {
      result = result.filter(p => p.location === filters.location);
    }
    if (filters.yearFrom) {
      result = result.filter(p => p.year >= parseInt(filters.yearFrom));
    }
    if (filters.yearTo) {
      result = result.filter(p => p.year <= parseInt(filters.yearTo));
    }

    setFilteredData(result);
    setCurrentPage(1); // Сброс на 1 страницу при изменении фильтров
  }, [searchQuery, filters]);

  const toggleTheme = () => setIsLight(!isLight);

  // Расчет пагинации
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPaintings = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterApply = () => {
    setIsFilterOpen(false);
  };

  return (
    <div className="app-wrapper">
      <Header isLight={isLight} toggleTheme={toggleTheme} />
      <SearchBox 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        onFilterClick={() => setIsFilterOpen(true)}
      />
      <FilterPanel 
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        onApply={handleFilterApply}
      />
      
      {/* Галерея растягивается, толкая пагинацию вниз */}
      <Gallery paintings={currentPaintings} searchQuery={searchQuery} />
      
      {/* Пагинация или Empty State */}
      {filteredData.length > 0 ? (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      ) : (
        <div className="empty-state-wrapper">
           {/* Текст "Ничего не найдено" уже внутри Gallery через EmptyState, 
               но чтобы выровнять его по центру, можно использовать обертку или стили Gallery */}
        </div>
      )}
    </div>
  );
}

export default App;