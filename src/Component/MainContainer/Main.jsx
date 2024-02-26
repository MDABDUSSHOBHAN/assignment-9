import React from 'react';
import { CurrencyDollarIcon,BriefcaseIcon} from '@heroicons/react/24/solid'
const Main = () => {
    return (
        <div>
            <div className=' text-center '>
                <h1 className='text-5xl font-semibold'>Jobs Category List</h1>
                <p className='mt-3'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit alias, at iste libero laboriosam autem? </p>
            </div>
            <div className='product-container mt-14 rounded'>
                    <div className="card w-96 bg-gray-300 shadow-lg p-5 mb-3 ">
                         <figure className="px-10 pt-10 text-center">
                         <CurrencyDollarIcon className="h-12 w-12 text-blue-500" />
                        </figure> 
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold text-3xl">Accounting & Finance</h2>
                            <p>100 Jobs Available!</p>
                            <div className="card-actions">  
                            </div>
                        </div>
                    </div>  
                    <div className="card w-96 bg-gray-300 shadow-lg mb-3">
                         <figure className="px-10 pt-10 text-center">
                         <BriefcaseIcon className="h-12 w-12 text-blue-500" />
                        </figure> 
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold text-3xl">Creative & Design! </h2>
                            <p>500 Jobs Available</p>
                            <div className="card-actions">  
                            </div>
                        </div>
                    </div>  
                    <div className="card w-96 bg-gray-300 shadow-lg mb-3">
                         <figure className="px-10 pt-10 text-center">
                         <BriefcaseIcon className="h-12 w-12 text-blue-500" />
                        </figure> 
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold text-3xl">Engineering & Design </h2>
                            <p>200 Jobs Available!</p>
                            <div className="card-actions">  
                            </div>
                        </div>
                    </div>  
                </div>
                <h2 className='text-center mb-2 text-5xl'>Featured Jobs</h2>


        </div>
    );
};

export default Main;