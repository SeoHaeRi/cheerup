import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Group from './Pages/Group';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Main from './Pages/Main';
import Study from './Pages/Study';
import Board from './Pages/Board';
import Navbar from './components/Navbar';
import MyPage from './Pages/MyPage';
import Group_page from './Pages/Group_page';
import { useCallback, useRef, useState } from 'react';

function App() {
  return (
    <>
      {/* <BrowserRouter>
      </BrowserRouter> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/board" element={<Board />} />
          <Route path="/studygroup" element={<Group_page />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/study" element={<Study />} />
          {/* 추후 에러 페이지 추가  + 마이페이지 추가, domain 은 수정 가능!*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
