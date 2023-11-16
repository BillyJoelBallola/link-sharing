import React from 'react'
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Preview from './pages/Preview';
import Editor from './pages/Editor';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/:page?' element={<Editor />} />
        <Route path='/preview' element={<Preview />} />
      </Route>
    </Routes>
  )
}

export default App