import React, { Suspense } from 'react';
import useAuth from '../../Hooks/useAuth';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {

    const {user} = useAuth();

    return (
        <div>
            <h2>My Posted Jobs: </h2>
            <Suspense>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;