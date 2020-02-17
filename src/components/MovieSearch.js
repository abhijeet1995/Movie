import React, { useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
const MovieSearch = () => {
	const [movie, setMovie] = useState([])
	const [search, setSearch] = useState('')
	const [load, setLoading] = useState(false)

	//Api call for movie search
	const onChange = (e) => {
		setSearch(e.target.value)
		axios.get(`http://www.omdbapi.com/?=movie&apikey=a1b5f9ec&s=${e.target.value}`)
			.then(res => {
				//console.log(res.data.Search)
				if (res.data.Search) {
					console.log(res.data.Search)
					setMovie(res.data.Search)
					setLoading(true)

				}
			}).catch(err => {
				console.log(err)
				setLoading(true)
			})

	}
	return (
		<div>
			<h4 className="text-center p-5">Enter Movie Title</h4>
			<div className="container">
				<div className="row">
					<div className="col-md-3">

					</div>
					<div className="col-md-6 ">
						<form className="navbar-form" role="search">
							<div className="input-group add-on">
								<input className="form-control" placeholder="Enter movie name to Search"
									name="srch-term"
									id="srch-term"
									type="text"
									onChange={onChange}
									value={search}
								/>
							</div>
						</form>
					</div>
					<div className="col-md-3">

					</div>
				</div>
			</div>
			<div style={{display:"flex",flexDirection:"column"}}>
			{movie.map((data, index) => (
				<Card
					key={index}
					title={data.Title}
					year={data.Year}
					poster={data.Poster}
					imdb={data.imdbID}
					type={data.Type}
				/>
			))}
			</div>

		</div>
	)
}

export default MovieSearch
