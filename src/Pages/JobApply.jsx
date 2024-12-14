import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../Components/hooks/UseAuth';

const JobApply = () => {

    const {id} = useParams();
    const {user} = useAuth();

    console.log(id,user)




    const handleJobApply = e => {
        e.preventDefault();
        
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        

        // console.log(github,resume,linkedIn)
       

        const jobApplication  = {
          job_id: id,
          applicant_name: user.email,
          linkedIn,
          github,
          resume,
        }

    }


    return (
        
          <div className="card bg-base-100 w-full text-center shadow-2xl px-4 py-2">
          <h1 className="text-3xl font-bold text-center">Apply job and good luck!</h1>

            <form onSubmit={handleJobApply} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">LinkedIn URL</span>
                </label>
                <input type="url"  name='linkedIn' placeholder="Your linkedIn url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Github URL</span>
                </label>
                <input type="url" name='github' placeholder="Your Github url" className="input input-bordered" required />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Resume URL</span>
                </label>
                <input type="url" name='resume' placeholder="Your Resume url" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Apply</button>
              </div>
            </form>
          </div>
       
    );
};

export default JobApply;