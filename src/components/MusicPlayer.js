import React from 'react'

const MusicPlayer = () => {
	return (
		<div className='musicPlayer'>
			<div id='albumIcon'>
				<img src='images/albumIcon.svg' alt='' />
			</div>
			<h2>Gallows bell by Vocaloid</h2>
			<div id='controls'>
				<img src='images/prev.svg' alt='' />
				<img src='images/play.svg' alt='' />
				<img src='images/next.svg' alt='' />
			</div>
			<div id='timeline'>
				<div id='timeStart'>
					<p>01:25</p>
				</div>
				<div id='timelineImage'>
					<img src='images/timeLine.svg' alt='' />
				</div>
				<div id='timeEnd'>
					<p>04:11</p>
				</div>
			</div>
		</div>
	)
}

export default MusicPlayer