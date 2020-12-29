import React from 'react';

const JobBoardComponent = ({job, handleTagClick}) => {
    const tags =[job.role, job.level];

    if(job.languages){
        tags.push(...job.languages);
    }
    if(job.tools){
        tags.push(...job.tools)
    }


    return(
    <div className='job-component flex bg-white shadow'>
        <div className="job-logo">
            <img src = {job.logo} alt = {job.company}/>
        </div>
        <div className="mid-contents">
            <h3 className="">
                {job.company}
                {job.new && (<span className="tag-new">New!</span>)}
                {job.featured && (<span className="tag-featured">Featured</span>)}
            </h3>
            <h2>{job.position}</h2>
            <p className="bottom-text">
                <span className="bottom-text-spacing">{job.postedAt}</span><span className="bottom-text-spacing">&middot; </span><span className="bottom-text-spacing">{job.contract}</span><span className="bottom-text-spacing">&middot;</span><span className="bottom-text-spacing">{job.location}</span>
            </p>
        </div>
        <div className='tags'>
            {tags ? tags.map((tag) =>
                <span className="font-color font-weight font-size tag-style" onClick={() => handleTagClick(tag)}>{tag}</span>):''
            }
        </div>
    </div>
)}

export default JobBoardComponent;