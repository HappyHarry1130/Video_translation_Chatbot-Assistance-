import React from 'react';
import { useSelector } from 'react-redux';

const ResultPage = () => {
  const selections = useSelector(state => state.selections);

  return (
    <div>
      <h2>Result Page</h2>
      <ul>
        {Object.entries(selections).map(([name, value]) => (
          <li key={name}>{name}: {value.toString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultPage;
