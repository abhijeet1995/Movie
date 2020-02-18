import React from 'react'
import {withRouter} from 'react-router-dom'

const Card = ({ history,title, year, poster, imdb, type, movieDetails}) => {

	function handle(){
		history.push({
			pathname: '/details',
			state: { detail: imdb }
		})
	}
 
	return (
			<div className="col-4 mb-3">
				<div className="card">
					<div className="card-header">	Title:{title}</div>
					<div className="card-body">
					<img src={poster} className="card-img-top" alt="..." width="50" height="100" />
						<li>Year:{year}</li>
						<li>Imdb:{imdb}</li>
						<li>Type:{type}</li>
						<button className="btn btn-primary p-2 text-center" onClick={(e) => { handle() }}>More Details</button>
					</div>
				</div>
			</div>
	);
};
export default withRouter(Card);

