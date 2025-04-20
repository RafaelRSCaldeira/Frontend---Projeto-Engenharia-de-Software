import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FooterComponent from './components/general/FooterComponent'
import NavbarComponent from './components/general/NavbarComponent'
import HomeComponent from './components/general/HomeComponent'
import UsersComponent from './components/users/UsersComponent'
import ThemesComponent from './components/themes/ThemesComponent'
import MentoringsComponent from './components/mentorings/MentoringsComponent'
import AboutUsComponent from './components/general/AboutUsComponent'

function App() {

  return (
    <>
    <BrowserRouter>
      {window.location.pathname !== "/" && <NavbarComponent/>}
      <Routes>
        <Route path='/' element={<HomeComponent/>}></Route>
        <Route path='/users' element={<UsersComponent/>}></Route>
        <Route path='/themes' element={<ThemesComponent/>}></Route>
        <Route path='/mentorings' element={<MentoringsComponent/>}></Route>
        <Route path='/about_us' element={<AboutUsComponent/>}></Route>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
