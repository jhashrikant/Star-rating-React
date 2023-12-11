import { useEffect, useState } from 'react';
import './App.css';
import { Star } from 'lucide-react';


function App() {

	const [stars, setstars] = useState([
		{ id: 1, isclicked: false },
		{ id: 2, isclicked: false },
		{ id: 3, isclicked: false },
		{ id: 4, isclicked: false },
		{ id: 5, isclicked: false },
	]);

	const [rating, setrating] = useState(0)

	function handleclick(id) {
		setrating(id)
	}
	

	useEffect(() => {
		setstars((prevstars) => {
			return prevstars.map((star) => {
				return star.id <= rating ? { ...star, isclicked: true } : { ...star, isclicked: false }
			})
		})
	}, [rating])


	return (
		<div className='starContainer'>
			{stars?.map((star) => {
				return (
					<div key={star.id}><Star style={{ background: star.isclicked ? 'yellow' : '' }} onClick={() => handleclick(star.id)} className='star' /></div>
				)
			})}
		</div>
	);
}

export default App;
