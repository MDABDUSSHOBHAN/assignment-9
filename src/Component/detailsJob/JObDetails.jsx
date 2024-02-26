import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import Footer from '../Footer/Footer';
import { getStoredJobApplication, saveJobApplication } from '../Utility/Utlity';
const JObDetails = () => {
  
    const jobs = useLoaderData()


    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(jobs);
    // This is Function Section:
    const handleApplyJob = () =>{
    
        saveJobApplication(idInt);
        

    }

 
  
    return (
        <div>
             <h2 className="text-6xl text-center mb-3 bg-indigo-300"> Jobs Details </h2> 
             <div className="grid gap-4 md:grid-cols-4">

                <div className="border md:col-span-3">

                    <div className='p-4'>
                        <p> <span className='font-bold'>Job Description:</span> {job.job_description}</p>
                        <p><span className='font-bold' >Job Responsibility: </span> {job.job_responsibility}</p>
                        <p><span className='font-bold' >Location: </span>{job.location}</p>
                        <p> <span className='font-bold'>Exprience</span>:2 Years</p>
                    </div>
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl ">Job Details</h2>
                    <div className=' bg-purple-100 p-2'>
                        <p className='flex gap-2'> <CurrencyDollarIcon className="h-6 w-6 text-blue-500" /> <span className='font-bold'>Salary:</span> {job.salary}  </p>
                        <p className='flex gap-2'> <CurrencyDollarIcon className="h-6 w-6 text-blue-500" /> <span className='font-bold'>Job Title:</span> {job.job_title} </p>
                        <h2 className='mt-4 font-bold '>Contact Information</h2>
                        <div>
                            <p><span className='font-bold'>Phone:  </span>+21544574</p>
                            <p><span className='font-bold'>E-mail: </span>info@shobhan.com</p>
                            <p><span className='font-bold'>Address: </span>{job.location} </p>
                        </div>
                    </div>


                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>


                
            </div> 
            <Footer></Footer>





        </div>
    );
};

export default JObDetails;