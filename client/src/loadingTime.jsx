import React, { useEffect, useState } from 'react';
import ItemsList from './getItems';

function LoadingTime() {
  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    // Your loading logic here...
    <ItemsList></ItemsList>

    const endTime = performance.now();
    const timeElapsed = endTime - startTime;
    setLoadingTime(timeElapsed);
  }, []);

  return (
    <div>
      <h1>Page Loading Time: {loadingTime.toFixed(2)} milliseconds</h1>
      {/* Rest of your LoadingTimelication */}
    </div>
  );
}

export default LoadingTime;
