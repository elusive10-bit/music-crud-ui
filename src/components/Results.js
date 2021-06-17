import React from 'react'
import Result from './Result'

const Results = () => {
	return (
		<div className='results'>
			<div id='search'>
				<img src='images/search.svg' alt='' />
				<input type='text' placeholder='Search' value='Vocaloid' />
			</div>

			<div id='results-container'>
				<div>
					<h1>Results</h1>
					<h2></h2>
				</div>

				<div className='card-container'>
					<Result />
				</div>
			</div>
		</div>
	)
}

export default Results