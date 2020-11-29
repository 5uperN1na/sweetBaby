import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Covid from './components/covid/CovidComponent';
import About from './views/About';
import Testimonials from './views/Testimonials';
import Contact from './views/Contact';
import Pastel from './views/Pastel';
import GalleryView from './views/Gallery';
 

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

			 
				
				 

			</Switch>
		</BrowserRouter>
	)
};

interface AppProps { }

export default App;
