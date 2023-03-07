import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { Routes, Route } from "react-router-dom"

import Test1 from './pages/1'
import Test2 from './pages/2'

function App() {

  return (
    <div className="App">
      <header>
        <ResponsiveAppBar />
      </header>

      <main>
        <Routes>
          <Route path="/test1" element={<h1>Hello 1</h1>} />
          <Route path="/test2" component={<Test2 />} />
        </Routes>
      </main>

      <footer></footer>
    </div>
  )
}

export default App
