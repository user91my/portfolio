//
// In React, you can use the ResizeObserver API to constantly track the height
// of a child element. ResizeObserver is designed to respond to changes in
// the size of an element, making it ideal for this use case :-

// 1. Create a custom hook that uses "ResizeObserver" to track the height of an element.
// 2. Apply this hook to the child element whose height you want to track.

import { useState, useEffect, useRef } from "react";

const useResizeObserver = () => {
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(element);

    return () => resizeObserver.unobserve(element);
  }, []);

  return [height, elementRef];
};

export default useResizeObserver;
//
//
// Using "useResizeObserver" custom hook in the component
// ---------------------------------------------------------

// import React from 'react';
// import useResizeObserver from './useResizeObserver';

// const MyComponent = () => {
//   const [height, elementRef] = useResizeObserver();

//   return (
//     <div>
//       <div ref={elementRef} style={{ resize: 'both', overflow: 'auto', border: '1px solid black' }}>
//         Resize me!
//       </div>
//       <p>Height of the element: {height}px</p>
//     </div>
//   );
// };

// export default MyComponent;
