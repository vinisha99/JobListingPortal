import React, { useEffect, useState } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';

console.log(data);

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(()=> setJobs(data),[]);

  return (
    <div className="App">
      <header>
        <img src='/images/bg-header-desktop.svg' alt="bg-image"/>
      </header>
        {
          jobs.length == 0 ?(
            <p>Jobs are fetching.. </p>
          ) : (
            jobs.map((job) => 
              <JobBoardComponent job={job} key={job.id} />)
          )
        }
    </div>
  );
}

export default App;
