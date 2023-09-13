import { useCallback, useRef, useState } from 'react';
import './App.css';
import PhotoPost from './components/PhotoPost';
import usePhotos from './hooks/usePhotos';

function App() {
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, error, results, hasNextPage } = usePhotos(pageNum);
  const [filter, setFilter] = useState('');

  const intObserver = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useCallback(
    (post: HTMLElement) => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log('We are near the last post!');
          setPageNum((prev) => prev + 1);
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isLoading, hasNextPage]
  );

  if (error !== '') return <p className="center">Error: {error}</p>;

  const filteredData = results.filter((photo) =>
    photo.title.toLowerCase().includes(filter.toLowerCase())
  );

  const content = filteredData.map((photo, i) => {
    // here getting the last element of results and adding ref to this element, to understand if need to fetch more data
    if (filteredData.length === i + 1) {
      return (
        <PhotoPost
          ref={lastPostRef}
          key={photo.id}
          id={photo.id}
          albumId={photo.albumId}
          thumbnailUrl={photo.thumbnailUrl}
          title={photo.title}
          url={photo.url}
        />
      );
    }
    return (
      <PhotoPost
        key={photo.id}
        id={photo.id}
        albumId={photo.albumId}
        thumbnailUrl={photo.thumbnailUrl}
        title={photo.title}
        url={photo.url}
      />
    );
  });

  return (
    <section>
      <div>
        <input
          type="text"
          placeholder="Filter by title"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <table className="photo-post__table">{content}</table>
        {isLoading && <p className="center">Loading More Posts...</p>}
      </div>
    </section>
  );
}

export default App;
