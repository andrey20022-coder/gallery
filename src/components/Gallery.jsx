import Card from './Card';
import EmptyState from './EmptyState';

export default function Gallery({ paintings, searchQuery }) {
  if (paintings.length === 0) {
    return <EmptyState searchQuery={searchQuery} />;
  }

  return (
    <div className="gallery">
      {paintings.map(painting => (
        <Card key={painting.id} painting={painting} />
      ))}
    </div>
  );
}