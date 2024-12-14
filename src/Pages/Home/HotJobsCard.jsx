import { p } from "motion/react-client";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const HotJobsCard = ({job}) => {
    

    const{_id,title,company,company_logo,requirements,description,location,salaryRange} =job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-6  ">
        <div className="flex justify-start  gap-6">
        <figure>
          <img
          className="w-12"
            src={company_logo}
            alt="Shoes" />
        </figure>
        <div>
            <h2 className="font-semibold text-2xl">{company}</h2>
             <p className="flex items-center gap-2"><CiLocationOn />{location}</p>
        </div>
        </div>
        <div className="card-body">
          <h2 className="card-title text-nowrap">{title}
          <div className="badge badge-secondary">NEW</div>
          </h2>
             <p>{description}</p>
             <div className="flex gap-2 flex-wrap">
                {
                    requirements.map(skill => <p className="border rounded-lg text-center bg-slate-100 px-2 hover:text-white hover:bg-gray-500">{skill}</p>)
                }
             </div>
          <div className="card-actions justify-end">

            <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
            <Link to={`/jobs/${_id}`} className="btn btn-primary">Apply</Link>
          </div>
        </div>
      </div>
    );
};

export default HotJobsCard;