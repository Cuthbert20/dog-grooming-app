import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminDash from '../src/components/AdminDash/AdminDash'
import Booking from '../src/components/Booking/Booking'
import Contact from '../src/components/Contact/Contact'
import Login from '../src/components/Login/Login'
import Main from '../src/components/Main/Main'
// import Nav from '../src/components/Nav/Nav'
import Register from '../src/components/Register/Register'
import SetupApp from '../src/components/SetupApp/SetupApp'
import UserDash from '../src/components/UserDash/UserDash'
import UserList from '../src/components/UserList/UserList'
import UserInfo from '../src/components/UserInfo/UserInfo'
import UserDogs from '../src/components/UserDogs/UserDogs'
import AdminMgs from '../src/components/AdminDash/AdminMgs'

export default (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/dashboard' component={UserDash} />
        <Route path='/contact' component={Contact} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/setupapp' component={SetupApp} />
        <Route path='/userlist' component={UserList} />
        <Route path='/setupapp/booking' component={Booking} />
        <Route path='/dashboard/admin' component={AdminDash} />
        <Route path='/dashboard/history' component={UserInfo} />
        <Route path='/dashboard/userdog' component={UserDogs} />
        <Route exact path='/dashboard/messages' component={AdminMgs} />
    </Switch>
)