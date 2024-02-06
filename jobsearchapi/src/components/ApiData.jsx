import { useState, useEffect } from 'react';
import axios from 'axios';

const ApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gist.githubusercontent.com/jeremt/f5484bed4efa6da328edef92fa7500a4/raw/892e83f3e37ae5048299c476da879af7b5f24917/offers.json');
        setData(response.data);
      } catch (error) {
        console.error('Erreur', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="job-search-container">
      <h1 className="job-search-title">JOB SEARCH</h1>
      <ul className='job-list'>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.titre}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiData;
