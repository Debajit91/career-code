import React from 'react';
import { useParams } from 'react-router';

import useAuth from '../../Hooks/useAuth';

const JobApply = () => {
    const {id} = useParams();
    const {user} = useAuth();
    console.log(id, user);
    return (
        <div>
            <h3 className="-text-4xl">Apply Job for</h3>
        </div>
    );
};

export default JobApply;