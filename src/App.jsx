import { Route, BrowserRouter, Routes, Navigate } from 'react-router'


import { useEffect, useState } from 'react'

import Login from './pages/Login'
import Register from './pages/Register'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import { authFirebase, dbFirebase } from './firebase'
import { collection, getDocs } from "firebase/firestore";




function App() {

  const [user, setUser] = useState("")

  const [maquetas, setMaquetas] = useState([])

  const handleGet = async () => {
      const snapshot = await getDocs(collection(dbFirebase, "maquetas"));
      const documentos = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setMaquetas(documentos);
  }


  useEffect(() => {
    handleGet()
    authFirebase.onAuthStateChanged((user)=>{
      setUser(user)
    })
  }, [])
  

  return (
    <>
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<Landing maquetas={maquetas} />} />
                <Route path="/dashboard" element={user ? <Dashboard user={user.email} /> : <Navigate to='/login'/>} />
                <Route path="/login" element={user ? <Navigate to="/dashboard"/> : <Login />} />
                <Route path="/register" element={user ? <Navigate to="/dashboard"/>: <Register />} />
              </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
