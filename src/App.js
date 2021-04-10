import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
// PAGES
import MoviesList from './pages/MoviesList/MoviesList';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import NotFound from './pages/NotFound/NotFound';

// COMPONENTS
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={MoviesList} />
          <Route exact path='/movie-details/:id' component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
