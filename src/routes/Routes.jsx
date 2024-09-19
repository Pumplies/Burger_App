import { Route, Routes } from 'react-router-dom'
import StartPage from '../pages/StartPage'
import RegistrationFirst from '../pages/RegistrationFirst'
import RegistrationSecond from '../pages/RegistrationSecond'
import SuccesfulRegistration from '../pages/SuccesfulRegistration'
import Login from '../pages/Login'
import MainPage from '../pages/Main'
export default function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<StartPage/>} />
            <Route path='/registrationFirst' element={<RegistrationFirst/>} />
            <Route path='/registrationSecond' element={<RegistrationSecond/>} />
            <Route path='/succesfulRegistration' element={<SuccesfulRegistration/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/mainPage' element={<MainPage/>} />
            
            
        </Routes>
    )
}