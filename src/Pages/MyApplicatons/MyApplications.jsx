import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import useAuth from '../../Hooks/useAuth';
import { myApplicationsPromise } from '../../api/myApplicationsPromise';



const MyApplications = () => {
    const {user} = useAuth();
    return (
        <div className='max-w-7xl mx-auto'>
            <ApplicationStat></ApplicationStat>
            <Suspense fallback={'loading your applications'}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise (user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;