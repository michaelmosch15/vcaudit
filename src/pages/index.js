import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../components/CircularProgressBar';
import './styles.css'; 

const IndexPage = () => {
  const ParentComponent = () => {
    const [progress, setProgress] = useState(0);
  

  }
  return (
    <main>

    <div className="center-container"> 
          <div classname="titlecontainer">
      <h1></h1><center>Vestor</center>
      </div>
      <div className="circle-container"> 
      <CircularProgressBar progress={25} animate={true} />      </div>
    </div>
    </main>
  );
};


export default IndexPage;