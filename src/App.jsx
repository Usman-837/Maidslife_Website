import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Services from './Components/Services'
import Features from './Components/Features'
import Testimonial from './Components/Testimonial'
import Insurance from './Components/Insurance'
import Mobileapp from './Components/Mobileapp'
import Footer from './Components/Footer'
import Homecleaning from './Components/Services/Homecleaning/Homecleaning'

const App = () => {
  const location = useLocation(); // Get current location

  // Define all service routes
  const servicesRoutes = [
    { path: '/homecleaning', component: <Homecleaning /> },
    { path: '/furniturecleaning', component: <Homecleaning /> },
    { path: '/deepcleaning', component: <Homecleaning /> },
    { path: '/accleaning', component: <Homecleaning /> },
    { path: '/laundryanddrycleaning', component: <Homecleaning /> },
    { path: '/carwashathome', component: <Homecleaning /> },
    { path: '/malecleaning', component: <Homecleaning /> },
    { path: '/shoecleaning', component: <Homecleaning /> },
    { path: '/womenssalon', component: <Homecleaning /> },
    { path: '/womensspa', component: <Homecleaning /> },
    { path: '/premiummenssalon', component: <Homecleaning /> },
    { path: '/mensspa', component: <Homecleaning /> },
    { path: '/makeup', component: <Homecleaning /> },
    { path: '/haircare', component: <Homecleaning /> },
    { path: '/nailextensions', component: <Homecleaning /> },
    { path: '/lashesandbrows', component: <Homecleaning /> },
    { path: '/spraytanning', component: <Homecleaning /> },
    { path: '/handyman&maintenance', component: <Homecleaning /> },
    { path: '/homepainting', component: <Homecleaning /> },
    { path: '/watertankcleaning', component: <Homecleaning /> }
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
          <Insurance/>
          <Mobileapp/>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
