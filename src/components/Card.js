import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom';

const Card = ({ history,title, year, poster, imdb, type, movieDetails}) => {

	function handle(){
		history.push({
			pathname: '/details',
			state: { detail: imdb }
		})
	}
 
	return (
		<div>
				<div className="container">
					<div className="row">
						<div className="col-md-4">

						</div>
						
						<div className="col-md-4 p-2">
							<div className="card">
							<img src={poster} className="card-img-top" alt="..." width="150" height="100" />
							<div className="card-body">
								<h5 className="card-title">{title}</h5>
							<ol>
								<li>Title:{title}</li>
								<li>Year:{year}</li>
								<li>Imdb:{imdb}</li>
								<li>Type:{type}</li>
								<button className="btn btn-primary p-2 text-center" onClick={(e) => {handle()}}>More Details</button>
							</ol>
							</div>
							</div>
						
						</div>
						<div className="col-md-4">

						</div>
					</div>
				</div>
			</div>
	
	);
};
export default withRouter(Card);

