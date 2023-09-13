import { useState, useEffect } from 'react';
import { getPhotos } from '../api';
import { getErrorMessage } from '../lib/utils';
import { PhotoProps } from '../types';

// I prefer to keep business logic outside of the components, in custom hooks
const usePhotos = (pageNum = 1) => {
  const [results, setResults] = useState<PhotoProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    // need abort controller for cleanuo function, which will cancel the request, when component unmount
    const controller = new AbortController();
    const { signal } = controller;

    getPhotos(pageNum, { signal })
      .then((data) => {
        // here spreding previous results form prev page and new data
        setResults((prev) => [...prev, ...data]);
        setHasNextPage(Boolean(data.length));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (signal.aborted) return;

        setError(getErrorMessage(err));
      });

    return () => controller.abort();
  }, [pageNum]);

  return { isLoading, error, results, hasNextPage };
};

export default usePhotos;
