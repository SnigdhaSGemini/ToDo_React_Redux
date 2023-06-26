import React from 'react'
import Todo from './components/Todo'
import Login from './components/Login'
import Register from './components/Register'
import Error from './components/Error'
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Protect from './Protect/Protect'

const App = () => {
  return (
  <>
  {/* Routes Created */}
  <BrowserRouter>
      <Switch>
        <Route exact path='/' > <Protect Component = {Todo}></Protect> </Route>
        <Route path='/register' > <Register/> </Route>
        <Route path='/login' > <Login /> </Route>
        <Route path='*'> <Error></Error> </Route>
      </Switch>
    </BrowserRouter>
  </>
  )
}

export default App
