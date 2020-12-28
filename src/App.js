import './App.css';
import React, { useEffect, useState } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';

console.log(data);

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(()=> setJobs(data),[]);

  const filterFunc = ({role, level, tools, languages}) =>
    {
      if(filters.length === 0){
        return true;
      }
      const tags = [role, level];

      if(languages){
        tags.push(...languages);
      }
      if(tools){
        tags.push(...tools)
      }

      return tags.some((tag) => filters.includes(tag));
    };

    const clearFilters = () =>{
      setFilters([]);
    }
    const handleTagClick =(tag) =>{
      //to avoid adding same tags
      if(filters.includes(tag)) return;
      setFilters([...filters, tag]);
    }

    const handleFilterClick = (passedFilter) =>{
      setFilters(filters.filter((f) => f !== passedFilter));
    };

    const filteredJobs = jobs.filter(filterFunc);

  return (
    <div className="main-container">
      <header>
        <img src='/images/bg-header-desktop.svg' alt="bg-image"/>
      </header>
      <div className="container">
      {filters.length > 0 && (
        <div className="search-box">
          {filters.map((filter) => (
            <span class="filter-text" onClick={() => handleFilterClick(filter)}>{filter}
            <span className="clear-cross">x</span></span>
          ))}
          <span className="clear-text" onClick={clearFilters}>Clear</span>
        </div>
      )}
      {jobs.length === 0 ?(
            <p>Jobs are fetching.. </p>
          ) : (
            filteredJobs.map((job) => 
              <JobBoardComponent job={job} key={job.id}
                handleTagClick={handleTagClick} />)
          )
        }
    </div>
    </div>
  );
}

export default App;
