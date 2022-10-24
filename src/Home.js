import { useState } from 'react';
import BlogList from './BlogList'
import useFetch from './useFetch';

const Home = () => {

    const [updateFlag, setUpdateFlag] = useState(false)
    const {error, data, isLoading} = useFetch('https://blog-server.glitch.me/posts/', updateFlag)

	return (
		<div className='home'>
            {error && <div className='loading'>{error}</div>}
            {isLoading && <h3 className='loading'>Loading...</h3>}
            {data && <BlogList updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} posts={data}/>}
		</div>
	);
};

export default Home;
