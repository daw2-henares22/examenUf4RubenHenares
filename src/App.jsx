import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
import { Home } from './views/Home'
import { Login } from './components/Login'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return(
    <>
    <div className='bg-orange-300 dark:bg-gray-800 min-h-screen'>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
    </>
  )
}