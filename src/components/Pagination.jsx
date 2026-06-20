export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Определяем, какие страницы показывать
  const getVisiblePages = () => {
    const pages = [];
    
    if (totalPages <= 5) {
      // Если страниц мало, показываем все
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Всегда показываем 1, 2, 3, ..., последнюю
      pages.push(1, 2, 3);
      
      if (currentPage > 3 && currentPage < totalPages) {
        // Если мы где-то в середине, показываем текущую
        if (!pages.includes(currentPage)) {
          pages.splice(3, 0, currentPage);
        }
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="pagination">
      <div 
        className={`page-nav ${currentPage === 1 ? 'disabled' : ''}`} 
        onClick={handlePrev}
      >
        &lt;
      </div>
      
      {visiblePages.map((page, index) => {
        if (index > 0 && page - visiblePages[index - 1] > 1) {
          return (
            <div key={`dots-${page}`} className="dots">...</div>
          );
        }
        
        return (
          <div 
            key={page} 
            className={`page ${page === currentPage ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </div>
        );
      })}
      
      <div 
        className={`page-nav ${currentPage === totalPages ? 'disabled' : ''}`} 
        onClick={handleNext}
      >
        &gt;
      </div>
    </div>
  );
}