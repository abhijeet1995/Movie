import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import CardDetails from '../components/CardDetails'
const MovieDetails = (props) => {

	const [detail, setDetails] = useState([])

	useEffect(() => {
		
		movieDetails()
	}, [])

	const movieDetails = () =>{
		axios.get(`http://www.omdbapi.com/?i=${props.history.location.state.detail}&apikey=a1b5f9ec`).then(res=>{
			console.log(res.data)
			setDetails(res.data)
		})
		.catch(err=>{
			console.log(err)
		})
	}

	return (
		<div>
			
			<div className="container">
				<h4 className="text-center text-primary">Movie Details</h4>
				<div className="row">
					
					<div className="col-md-4">
						
					</div>
					<div className="col-md-4 p-4">
						<div className="card p-1">
						<img src={detail.Poster} className="card-img-top" alt="..." width="50" height="100" />
							<ol>
								<li>Title: {detail.Title}</li>
								<li>Year: {detail.Year}</li>
								<li>Rated: {detail.Rated}</li>
								<li>Released: {detail.Released}</li>
								<li>Runtime: {detail.Runtime}</li>	
								<li>Actors: {detail.Actors}</li>
								<li>Director: {detail.Director}</li>
								<li>Awards: {detail.Awards}</li>
								<li>Production: {detail.Production}</li>
								<li>ImdbID:{detail.imdbID}</li>
								<li>ImdbRating:{detail.imdbRating}</li>
								<li>Dvd:{detail.DVD}</li>
								{detail.Ratings ? detail.Ratings.map(data=>(
									<li>Rating: {data.Source}<br/>Value:{data.Value}</li>
								)):""}
							</ol>
						</div>
					</div>
					<div className="col-md-4">

					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieDetails
