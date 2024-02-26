import React from 'react';
import Main from '../MainContainer/Main';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCart/job';
import Job from '../ProductCart/job';





// import myImage from '../public/image/s'

const Shop = () => {


    const data = useLoaderData();
    console.log(data);

    return (
        <>

            <div className='h-96  px-18  bg-gradient-to-r from-gray-500 to-blue-200' >
                <div className='flex  bg-cover p-2 	'>
                    <div>

                        <h2 className='text-6xl font-bold '>One Step<br ></br> Closer To Your</h2>


                        <span className='8xl'></span> <span className='text-7xl text-purple-700 font-bold'>Dream Job</span>

                        <p className='mt-4 mb-4 text-2xl font-thin'> Job experience refers to the knowledge, skills,<br></br> and expertise an individual has developed through their work history<br></br> It includes the various roles, responsibilities, and tasks  </p>

                        <button className='btn-primary'>Get Started</button>
                    </div>
                    <div>

                        <img className=' h-96 bg-cover bg-center bg-auto md:bg-contain' src="/image/s.jpg" alt="" />
                    </div>

                </div>
                <Main></Main>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:px-12 my-8' >
                    {
                        data.map((product) => (
                            <Job job={product} key={product.id}></Job>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Shop;