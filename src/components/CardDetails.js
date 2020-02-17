import React from 'react'

const CardDetails = ({ title, year, rated, released, runtime,poster}) => {
	return (
		<div>
						<img src={poster} className="card-img-top" alt="..." width="150" height="100" />
						
							<h5 className="card-title">{title}</h5>
							<ol>
								<li>Title:{CardDetails.Title}</li>
								<li>Year:{year}</li>
								<li>Rated:{rated}</li>
	                            <li>Released:{released}</li>
								<li>Runtime:{runtime}</li>	
							</ol>
					
		</div>
	)
}

export default CardDetails
