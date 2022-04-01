import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListComponents from './components/ListComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateComponent from './components/CreateComponent';
import UpdateComponent from './components/UpdateComponent';
import ViewComponent from './components/ViewComponent';
function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListComponents}></Route>
                          <Route path = "/users" component = {ListComponents}></Route>
                          <Route path = "/add-user/:id" component = {CreateComponent}></Route>
                          <Route path = "/view-user/:id" component = {ViewComponent}></Route>
                           <Route path = "/update-user/:id" component = {UpdateComponent}></Route> 
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;

/*import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateComponent from './components/CreateComponent';
import ViewComponent from './components/ViewComponent';
import ListComponents from './components/ListComponents';
import UpdateComponent from './components/UpdateComponent';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<HeaderComponent />
<div className='container'>
<Routes>
  <Route path="/add" element={<CreateComponent />}></Route>
  <Route path="/update" element={<UpdateComponent />}></Route>
  <Route path="/view" element={<ViewComponent />}></Route>
  <Route path="/" element={<ListComponents />}></Route>
</Routes>
</div>
<FooterComponent/>
</BrowserRouter>
    </div>
  );
}

export default App;*/
