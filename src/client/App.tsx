import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Testimonials from './views/Testimonials';
import Contact from './views/Contact';
import Pastel from './views/Pastel';
import GalleryView from './views/Gallery';
import Schedule2 from './views/Schedule2';
import GalleryDetails from './components/gallery/GalleryDetails';
// import GalleryDetails from './components/gallery/GalleryDetails';


const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/about">
					<About />
				</Route>

				<Route exact path="/testimonials">
					<Testimonials />
				</Route>

				<Route exact path="/contact">
					<Contact />
				</Route>
				<Route exact path="/gallery/:id">
					<GalleryDetails />
				</Route>

				<Route exact path="/gallery">
					<GalleryView />
				</Route>

				<Route exact path="/schedule2">
					<Schedule2 />
				</Route>
				<Route path="*" component={Pastel} />
			</Switch>
		</BrowserRouter>
	)
};

interface AppProps { }

export default App;