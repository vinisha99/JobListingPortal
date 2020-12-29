import React from 'react';

const JobBoardComponent = ({job}) => {
    const tags =[job.role, job.level];

    if(job.languages){
        tags.push(...job.languages);
    }
    if(job.tools){
        tags.push(...job.tools)
    }


    return(
    <div className='flex bg-white shadow'>
        <div>
            <img src = {job.logo} alt = {job.company}/>
        </div>
        <div>
            <h3>
                {job.company}
                {job.new && (<span>New</span>)}
                {job.featured && (<span>Featured</span>)}
            </h3>
            <h2>{job.position}</h2>
            <p>
                {job.postedAt} &middot; {job.contract} &middot; {job.location}
            </p>
        </div>
        <div className='flex'>
            {tags ? tags.map((tag) =>
                <span>{tag}</span>):''
            }
        </div>
    </div>
)}

export default JobBoardComponent;