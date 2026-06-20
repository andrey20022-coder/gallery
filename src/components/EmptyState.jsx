export default function EmptyState({ searchQuery }) {
  return (
    <div className="empty-state">
      <h2>No matches for {searchQuery && <span>"{searchQuery}"</span>}</h2>
      <p>Please try again with a different spelling or keywords.</p>
    </div>
  );
}