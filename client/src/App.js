import { Route , Routes} from 'react-router-dom';
import Landing from './components/Landing/Landing.js';
import Videogames from './components/Videogames/Videogames.js';

function App() {
  return (
    <div>
        <Route 
        exact path="/"
        component={Landing}>
        </Route>
        <Route 
        exact
        path="/videogames"
        component={Videogames}/>
    </div>
  );
}

export default App;
