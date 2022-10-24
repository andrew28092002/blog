import Navbar from './Navbar';
import Home from './Home';
import Create from './newPost';
import BlogDetails from './BlogDetails';
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './NotFound';



function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Navbar />
				<main className='main'>
					<Routes>
						<Route path='/' element={<Home />}/>
						<Route path='/create' element={<Create />}/>
						<Route path='/blog/:id' element={<BlogDetails/>}/>
						<Route path='*' element={<NotFound/>}/>
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
