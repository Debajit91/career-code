import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
    const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json());
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <Suspense fallback={'Loading Hot Jobs'}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;