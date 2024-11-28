import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Services from './Components/Services'
import Features from './Components/Features'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'
import Homecleaning from './Components/Services/Homecleaning/Homecleaning'

const App = () => {
  const location = useLocation(); // Get current location

  // Define all service routes
  const servicesRoutes = [
    { path: '/homecleaning', component: <Homecleaning /> }
    // Add more services here dynamically as needed
  ];

  // Check if the current path matches any service route
  const currentServiceRoute = servicesRoutes.find(route => route.path === location.pathname);

  return (
    <>
      {currentServiceRoute ? (
        <Routes>
          {servicesRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Routes>
      ) : (
        <>
          <Navbar />
          <Banner />
          <Services />
          <Features />
          <Testimonial />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
