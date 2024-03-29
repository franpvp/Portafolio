import React, { useState, useEffect } from "react";
import '../styles/globals.css';

// This functional component represents a custom cursor with a flare effect.
function Cursor() {
  // State to track the current cursor position (x, y coordinates).
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // State to track whether the cursor is over a clickable element.
  const [isPointer, setIsPointer] = useState(false);

  // Event handler for the mousemove event.
  const handleMouseMove = (e: { clientX: any; clientY: any; target: any; }) => {
    // Update the cursor position based on the mouse coordinates.
    setPosition({ x: e.clientX, y: e.clientY });

    // Get the target element that the cursor is currently over.
    const target = e.target;
  setIsPointer(window.getComputedStyle(target).getPropertyValue("cursor") === "pointer");
  };

  // Set up an effect to add and remove the mousemove event listener.
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // The empty dependency array ensures that this effect runs only once on mount.

  // Calculate the size of the flare based on whether the cursor is over a clickable element.
  const flareSize = isPointer ? 0 : 30;

  // Adjust the cursor position to create a visual effect when over a clickable element.
  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  const handlePageTopClick = () => {
    // Delay the scroll by 2 seconds
    setTimeout(() => {
      // Smooth scroll to the top of the page
      const scrollToTop = () => {
        const currentPosition = window.pageYOffset;
        if (currentPosition > 0) {
          window.scrollTo(0, currentPosition - 50);
          setTimeout(scrollToTop, 10);
        }
      };
      scrollToTop();
    }, 4000);
  };

  // Render the custom cursor element with dynamic styles based on cursor state.
  return (
    <div
      className={`flare ${isPointer ? "pointer" : ""}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
      }}
      onClick={handlePageTopClick} // Add onClick event handler
    ></div>
  );
}

export default Cursor;