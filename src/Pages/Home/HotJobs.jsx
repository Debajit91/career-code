import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromise}) => {
    
    const jobs = use(jobsPromise);

    return (
        <div className='py-5'>
            <h2 className='text-4xl mb-5 text-center'>Hot Jobs Of The Day</h2>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;