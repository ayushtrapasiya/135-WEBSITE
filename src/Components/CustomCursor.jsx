// import React, { useEffect, useState } from "react";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHoveringLink, setIsHoveringLink] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Update cursor position
//     const updateCursor = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       setIsVisible(true); // Make cursor visible when mouse moves
//     };

//     // Check if hovering over a link or button
//     const checkHoverLink = (e) => {
//       const target = e.target;
//       const isLink =
//         target.tagName === "A" ||
//         target.closest("a") ||
//         target.tagName === "BUTTON" ||
//         target.className.includes("header-logo") ||
//         target.className.includes("nav-button");

//       setIsHoveringLink(isLink);
//     };

//     // Hide cursor when mouse leaves window
//     const handleMouseLeave = () => setIsVisible(false);
//     const handleMouseEnter = () => setIsVisible(true);

//     window.addEventListener("mousemove", updateCursor);
//     window.addEventListener("mouseover", checkHoverLink);
//     document.addEventListener("mouseleave", handleMouseLeave);
//     document.addEventListener("mouseenter", handleMouseEnter);

//     return () => {
//       window.removeEventListener("mousemove", updateCursor);
//       window.removeEventListener("mouseover", checkHoverLink);
//       document.removeEventListener("mouseleave", handleMouseLeave);
//       document.removeEventListener("mouseenter", handleMouseEnter);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: position.y,
//         left: position.x,
//         width: isHoveringLink ? "35px" : "25px",
//         height: isHoveringLink ? "35px" : "25px",
//         backgroundColor: "white",
//         borderRadius: "50%",
//         pointerEvents: "none",
//         transform: "translate(-50%, -50%)",
//         zIndex: 999999, // Higher than your header's z-index
//         mixBlendMode: "exclusion",
//         transition: "width 0.2s, height 0.2s",
//         opacity: isVisible ? 1 : 0,
//       }}
//     />
//   );
// };

// export default CustomCursor;