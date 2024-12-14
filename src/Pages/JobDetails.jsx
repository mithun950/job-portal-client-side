import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';

const JobDetails = () => {

    const location = useLocation()
    const jobLoader = useLoaderData();
    const { _id,title, company, applicationDeadline } = jobLoader;

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="card w-96 bg-white shadow-xl border border-gray-200">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-gray-800">
                        Job Details for {title}
                    </h2>
                    <p className="text-gray-600">
                        <span className="font-medium">Company:</span> {company}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-medium">Application Deadline:</span> {applicationDeadline}
                    </p>
                    <div className="card-actions justify-end mt-4">
                        <Link to={`/jobApply/${_id}`} className="btn btn-primary">Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
