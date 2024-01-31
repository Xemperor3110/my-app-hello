import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Contact from './pages/Contact';
import About from './pages/About';
import Layout  from './components/Layout';
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="contact" element={<Contact />} />
			<Route path="product" element={<Product />} />
			<Route path="about-us" element={<About />} />
			<Route path="login" element={<Login />} />
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<RouterProvider router={router} />
	</>
);