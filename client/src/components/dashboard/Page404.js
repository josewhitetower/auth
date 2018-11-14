import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from './NotFound.png';
const Page404 = () => (
	<div className="center">
		<h3>404</h3>
		<h5><Link to="/">Return to Home Page</Link></h5>
		<img src={NotFound} alt="Error 404" height={400}/>
	</div>
);
export default Page404;