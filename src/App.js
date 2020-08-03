import React from 'react';
import{BrowserRouter,  Route} from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import Login from './components/screen/Login';
import Signup from './components/screen/Signup';
import Create from './components/screen/Create';


function App() {
    return (
        <div>
            <nav>
                <ul className='d-flex justify-content-end'>
                    <li className='mx-4'><a href='/'>Login</a></li>
                    <li><a href='/signup'className='mx-4'>Sign Up</a></li>
                    <li><a href='create'className='mx-4'>Create New</a></li>
                    
                </ul>
            </nav>
            <BrowserRouter>
                <Route exact path='/'component={Home}/>
                <Route path='/details/:id'component={Details}/>
                <Route path='/login'component={Login}/>
                <Route  path='/signup'component={Signup}/>
                <Route  path='/create'component={Create}/>
            </BrowserRouter>
        </div>
    )
}

export default App
