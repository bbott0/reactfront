import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/main/Main';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp.js';
import RecruitBoard from './components/recruitboard/RecruitBoard';
import Profile from './components/profile/Myprofile.js';
import UserProfile from './components/profile/userProfile.js';
import NotFound from './components/NotFound';
import RecruitBoardDetail from './components/recruitboard/RecruitBoardDetail'; 
import RecruitBoardWrite from './components/recruitboard/RecruitBoardWrite'; 
import './App.css';
import './fonts/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header className="header" />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />}></Route>
		  <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/main" element={<Main />} />
          <Route path="/recruitboard" element={<RecruitBoard />} />
          <Route path="/Myprofile" element={<Profile />}></Route>
          <Route path="/RecruitBoard/userProfile" element={<UserProfile />}></Route>
          <Route path="/board/:boardNo" element={<RecruitBoardDetail />} /> 
          <Route path="/recruitboardwrite" element={<RecruitBoardWrite />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer className="footer" />
      </BrowserRouter>
    </div>
  );
};

export default App;