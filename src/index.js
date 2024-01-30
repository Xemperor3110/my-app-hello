import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Home from './Home';
import Login from './Login';
import Product from './Product';
import Contact from './Contact';
import About from './About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/product',
		element: <Product />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
	{
		path: '/us',
		element: <About />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<RouterProvider router={router} />
	</>
);