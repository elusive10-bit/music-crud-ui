import React from 'react'
import Result from './Result'

const Results = ({results}) => {
	return (
		<div className='results'>
			<h2>Results</h2>
			<div id='search'>
				<img src='images/search.svg' alt='' />
				<input type='text' placeholder='Search' value='Vocaloid' />
			</div>

			<div id='results-container'>
				<div>
					<h1>Results</h1>
				</div>

				<ul>
					{
						results.map(result => {
							return (
								<Result key={result.id} result={result} />
							)
						})
					}
					
				</ul>
			</div>
		</div>
	)
}

export default Results