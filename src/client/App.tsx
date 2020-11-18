import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/HomeComponent';
import Covid from './components/covid/CovidComponent';
import About from './components/about/AboutComponent';
import Testimonials from './views/Testimonials';
import Contact from './components/contact/ContactComponent';
import Pastel from './views/Pastel';

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

			</Switch>
		</BrowserRouter>
	)
};

interface AppProps { }

export default App;
