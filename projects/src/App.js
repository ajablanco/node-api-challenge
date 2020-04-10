import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:5009/api/projects")
    .then((res) => {
      setProjects(res.data);
    })
    .catch((err) => console.error(err.message));
  }, []);

  useEffect(() => {}, [projects]);


  const deleteProject = (id) => {
    axios
    .delete(`http://localhost:5009/api/projects/${id}`)
    .then((res) => {
      setProjects(res.data);
    })
    .catch((err) => console.log(err.message));
  };


  return (
    <div className="App" >
      <h1>CURRENT PROJECTS</h1>
      <div style={{display: "flex", justifyContent:"center"}}>
      {projects.map((project) => (
        <div style={{width: "600px", border: "1px solid black"}}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div style={{border:"1px solid red", color: "red"}} onClick={() => deleteProject(project.id)}>DELETE</div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;

