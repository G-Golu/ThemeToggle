// import React from "react";
// import { useNavigate } from "react-router-dom"; // optional if you want to navigate to login page

// function Home() {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     // Example: navigate to login page
//     navigate("/login");
//   };

//   return (
//     <section className="home-page">
//       <div className="home-card">
//         <h1>Light & Dark Theme Toggle</h1>
//         <p>
//           Build modern React applications with smooth theme switching,
//           clean UI, and professional layout.
//         </p>
//         <button className="btn" onClick={handleGetStarted}>
//           Get Started
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Home;



import Hero from "../components/Hero";

const Home = () => {
  return <Hero />;
};

export default Home;
