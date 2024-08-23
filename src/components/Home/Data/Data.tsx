import React, { useEffect, useState, createContext } from 'react';

interface Data {
  name: string;
}

const DataContext = createContext<Data | null>(null);

const MyComponent: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/1');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <DataContext.Provider value={data}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </DataContext.Provider>
  );
};

export default MyComponent;
