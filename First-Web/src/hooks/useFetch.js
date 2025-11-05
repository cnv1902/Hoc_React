// Custom Hook: useFetch
// Dùng để fetch data từ API
// Ví dụ: const { data, loading, error } = useFetch('https://api.example.com/data');

import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Nếu không có URL, không fetch
    if (!url) return;

    setLoading(true);
    
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]); // Re-run khi URL thay đổi

  return { data, loading, error };
}

export default useFetch;
