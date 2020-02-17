import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieSearch from "./MovieSearch";
import MovieDetails from "./MovieDetails";


const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={MovieSearch} />
				<Route path='/details' exact component={MovieDetails} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;