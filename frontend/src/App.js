import Appbar from './components/Appbar'
import './App.css'
import SignIn from './page/SignIn'
import Error from './page/Error'
import Main from './page/Main'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Appbar></Appbar>

      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/login" element={<SignIn></SignIn>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </>
  )
}

export default App
