import React from 'react';
import Header from './Component/Header/Header';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <>
    <div className='max-w-6xl mx-auto'>
    <Header></Header>
    <div className='min-h-[calc(100vh-137px)]' >
       <Outlet></Outlet>
       
    </div>
  
    </div>
     
     {/* <Footer></Footer> */}
    </>
  );
};

export default App;