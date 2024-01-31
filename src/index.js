import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Contact from './pages/Contact';
import About from './About';
import Layout  from './components/Layout';
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';

const router = createBrowserRouter([
	// {
	// 	path: '/',
	// 	element: <Home />,
	// },
	// {
	// 	path: '/login',
	// 	element: <Login />,
	// },
	// {
	// 	path: '/product',
	// 	element: <Product />,
	// },
	// {
	// 	path: '/contact',
	// 	element: <Contact />,
	// },
	// {
	// 	path: '/us',
	// 	element: <About />,
	// },
	<Route path='/' element={<Layout />}>
		<Route index element={<Home />} />
		<Route path="product" element={<Product />} />
		<Route path="contact" element={<Contact />} />
		<Route path="us" element={<About />} />
	</Route>
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<RouterProvider router={router} />
	</>
);