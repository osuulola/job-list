import React from 'react';
import{BrowserRouter,  Route} from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import Login from './components/screen/Login';
import Signup from './components/screen/Signup';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Route  path='/dashboard'component={Home}/>
                <Route path='/details/:id'component={Details}/>
                <Route exact path='/'component={Login}/>
                <Route exact path='/signup'component={Signup}/>
            </BrowserRouter>
        </div>
    )
}

export default App
