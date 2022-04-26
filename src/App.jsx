import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import ShowProduct from './components/ShowProduct'


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/showproduct" element={<ShowProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
