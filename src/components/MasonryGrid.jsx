import React, { useEffect, useRef, useState } from "react";

// JavaScript-based masonry grid that prevents cutting of content
const MasonryGrid = ({
  items = [],
  renderItem,
  columns = 3,
  gap = 16,
  className = "",
  disableInlineColumns = false,
}) => {
  const containerRef = useRef(null);
  const [columnCount, setColumnCount] = useState(columns);
  const [isLoaded, setIsLoaded] = useState(false);

  // Calculate responsive columns based on screen width
  useEffect(() => {
    const updateColumns = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width < 640) setColumnCount(1);
        else if (width < 1024) setColumnCount(2);
        else if (width < 1280) setColumnCount(3);
        else setColumnCount(4);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Distribute items across columns
  const distributeItems = () => {
    const cols = Array(columnCount).fill().map(() => []);
    const colHeights = Array(columnCount).fill(0);

    items.forEach((item, idx) => {
      // Find the column with minimum height
      const minHeightIndex = colHeights.indexOf(Math.min(...colHeights));
      cols[minHeightIndex].push({ item, idx });
      // Estimate height for better distribution
      if (item.type === 'model') colHeights[minHeightIndex] += 520;
      else if (item.type === 'video') colHeights[minHeightIndex] += 400;
      else colHeights[minHeightIndex] += 350;
    });

    return cols;
  };

  const columnData = distributeItems();

  useEffect(() => {
    // Mark as loaded after a brief delay to ensure proper rendering
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [columnCount]);

  return (
    <div 
      ref={containerRef} 
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{
        display: 'flex',
        gap: `${gap}px`,
        alignItems: 'flex-start'
      }}
    >
      {columnData.map((column, colIndex) => (
        <div 
          key={colIndex}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: `${gap}px`
          }}
        >
          {column.map(({ item, idx }) => (
            <div key={idx}>
              {renderItem(item, idx)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
