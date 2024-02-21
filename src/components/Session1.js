import Photo from '../assets/images/photo1.png';
import BlogItem  from './BlockItem';

import { useEffect, useState } from 'react';

function Session1() {
	const [listPosts, setlistPosts] = useState([]);

	useEffect{{} =>{
		fetch('http://localhost:4000/posts')
			.then((raw) => raw.json())
			.then((response) => { 
				setlistPosts(response);
				console.log('response',response);
			})
			.catch((error) =>{
				console.log('error',error);
			})
	},[]}
	return (
		<div className="pb-[105px]">
			<p className="text-[36px] font-bold mb-[8px]">
				Popular Destinations
			</p>
			<p>Vacations to make your experience enjoyable in Indonesia!</p>
			<div className="mt-[60px] grid grid-cols-4 gap-[30px]">
				{listPost.map((item) => (
					<BlogItem photo={Photo} item={item} key={item.id} />
				))}
			</div>
		</div>
	);
}
export default Session1;