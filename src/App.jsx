import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/general/Footer'
import Navbar from './components/general/Navbar'
import Home from './components/general/Home'
import Users from './components/users/Users'
import Themes from './components/themes/Themes'
import Mentoring from './components/mentorings/Mentorings'
import AboutUs from './components/general/AboutUs'
import ListManagers from './components/users/ListManagers'
import AddManager from './components/users/AddManager'
import ListMentors from './components/users/ListMentors'
import AddMentor from './components/users/AddMentor'
import ListMentoreds from './components/users/ListMentoreds'
import AddMentored from './components/users/AddMentored'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/themes' element={<Themes/>}></Route>
        <Route path='/mentorings' element={<Mentoring/>}></Route>
        <Route path='/about_us' element={<AboutUs/>}></Route>
        <Route path='/users/manager' element={<ListManagers/>}></Route>
        <Route path='/users/manager/add-user' element={<AddManager/>}></Route>
        <Route path='/users/mentor' element={<ListMentors/>}></Route>
        <Route path='/users/mentor/add-user' element={<AddMentor/>}></Route>
        <Route path='/users/mentored' element={<ListMentoreds/>}></Route>
        <Route path='/users/mentored/add-user' element={<AddMentored/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
