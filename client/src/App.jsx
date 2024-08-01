import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UserTable from './Table/UserTable';
import DefaultSidebar from './Component/SideBar';
import Expendetures from './Pages/Expendetures'
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <Router>
      <div className='flex'>
        <DefaultSidebar />
        <div className='flex-grow p-4'>
          <Toaster />
          <Routes>
          
            <Route path="/expenditures" element={<Expendetures />} />
            <Route path="/" element={<UserTable />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
