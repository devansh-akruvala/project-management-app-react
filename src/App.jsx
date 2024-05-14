
import { useState } from "react";
import NewProject from "./component/NewPorject";
import NoProjectSelected from "./component/NoProjectSelected";
import SideBar from "./component/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId:undefined,
    projects:[]
  })

  function handleStartAddProject(){
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:null
      }
    })
  }

  function handleCancleAddproject(){
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:undefined
      }
    }) 
  }

  function handleAddProject(projectData){

    const newProject = {
      ...projectData,
      id: Math.random()
    }
    setProjectState((prevState)=>{
      return {
        ...prevState,
        projects:[...prevState.projects,newProject]
      }
    })
  }


  let content
  if(projectState.selectedProjectId===undefined)
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  else if(projectState.selectedProjectId===null)
    content = <NewProject onSave={handleAddProject} onCancle = {handleCancleAddproject}/>

  
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
