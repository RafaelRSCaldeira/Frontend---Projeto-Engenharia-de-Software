import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListThemesComponent from './components/ListThemesComponent'
import ListUserComponent from './components/ListUserComponent'
import ListMentoringComponent from './components/ListMentoringComponent'
import MenuComponent from './components/MenuComponent'
import UserComponent from './components/UserComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      {window.location.pathname !== "sad/" && <HeaderComponent/>}
      <Routes>
        <Route path='/' element={<ListUserComponent/>}></Route>
        <Route path='/users' element={<ListUserComponent/>}></Route>
        <Route path='/themes' element={<ListThemesComponent/>}></Route>
        <Route path='/mentoring' element={<ListMentoringComponent/>}></Route>
        <Route path='/users/add-user' element={<UserComponent/>}></Route>
        <Route path='/users/edit-user/:id' element={<UserComponent/>}></Route>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
