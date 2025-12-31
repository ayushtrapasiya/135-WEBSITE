// Components/routes/Router.jsx
import React, { lazy, Suspense } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from '../../App';

// Lazy-loaded pages
const Home = lazy(() => import('../Home/Home'));
const TermsAndConditions = lazy(() => import('../Terms and Conditions/Terms and Conditions'));
const CancellationPolicy = lazy(() => import('../CancellationPolicy/CancellationPolicy'));
const PrivacyPolicy = lazy(() => import('../PrivacyPolicy/PrivacyPolicy'));
const OurMenu = lazy(() => import('../OurMenu/OurMenu'));
const Details = lazy(() => import('../DetailPage/Details'));
const NewAbout = lazy(() => import('../NewAbout/NewAbout'));
const ContactForm = lazy(() => import('../ContactForm/ContactForm'));
const ShippingPolicy = lazy(() => import('../../ShippingPolicy/ShippingPolicy'));

export default function Router() {
  const routs = createHashRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/TermsandConditions', element: <TermsAndConditions /> },
        { path: '/OurMenu', element: <OurMenu /> },
        { path: '/Detail/:id', element: <Details /> },
        { path: '/CancellationPolicy', element: <CancellationPolicy /> },
        { path: '/PrivacyPolicy', element: <PrivacyPolicy /> },
        { path: '/NewAbout', element: <NewAbout /> },
        { path: '/ContactForm', element: <ContactForm /> },
        { path: '/ShippingPolicy', element: <ShippingPolicy /> },
      ],
    },
  ]);

  return (
    <Suspense fallback={<div className="loader">Loading...</div>}>
      <RouterProvider router={routs} />
    </Suspense>
  );
}
