import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Covid from './components/covid/CovidComponent';
import About from './views/About';
import Testimonials from './views/Testimonials';
import Contact from './views/Contact';
import Pastel from './views/Pastel';
import GalleryView from './views/GalleryView';
import GalleryInfants from './views/GalleryInfants';
import GalleryToddlers from './views/GalleryToddlers';
import GalleryPlaytime from './views/GalleryPlaytime';
import GalleryArts from './views/GalleryArts';
 

const App = () => {
	return (

		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/covid">
					<Covid />
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

				<Route exact path="/pastel">
					<Pastel />
				</Route>

				<Route exact path="/gallery">
					<GalleryView />
				</Route>

				 <Route exact path="/infants">
					<GalleryInfants />
				</Route>

				<Route exact path="/toddlers">
					<GalleryToddlers />
				</Route> 

				<Route exact path="/playtime">
					<GalleryPlaytime />
				</Route> 

				
				<Route exact path="/arts">
					<GalleryArts />
				</Route> 

				 

			</Switch>
		</BrowserRouter>
	)
};

interface AppProps { }

export default App;
