import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Details from './Details';


function App() {
    return (
        <div>
            <BrowserRouter>
            <Route exact path='/'component={Home}/>
            <Route path='/details/:id'component={Details}/>
            </BrowserRouter>
        </div>
    )
}

export default App
