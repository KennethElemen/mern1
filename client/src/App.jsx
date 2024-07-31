import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Corrected import path for Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Corrected import path for Bootstrap JS
import './App.css';
import UserTable from './Table/UserTable';
import DefaultSidebar from './Component/SideBar'

import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <div className='flex flex gap-10 items-center'>
    <DefaultSidebar/>   
      <UserTable />    
    </div>
  );
}
