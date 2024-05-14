import { useState } from "react";
import NewProject from "./component/NewPorject";
import NoProjectSelected from "./component/NoProjectSelected";
import SideBar from "./component/Sidebar";
import SelectedProject from "./component/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });

  function handleAddtask(taskText){
    setProjectState((prevState) => {
      const taskId = Math.random()
      const newTask = {
        text:taskText,
        projectId:prevState.selectedProjectId,
        id: taskId
      };
    
      return {
        ...prevState,
        tasks: [newTask,...prevState.tasks],
      };
    });

  }

 function handleDeletetask(id){
  setProjectState((prevState) => {
    return {
      ...prevState,
      tasks: prevState.tasks.filter(
        (task) => task.id !== id
      ),
    };
  });
 }
  
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancleAddproject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    
    setProjectState((prevState) => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      };
    
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  let content = (
    <SelectedProject
      project={selectedProject}
      selectedProjectId={projectState.selectedProjectId}
      onDelete={handleDeleteProject}
      onAddTask={handleAddtask}
      onDeleteTask={handleDeletetask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === undefined)
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  else if (projectState.selectedProjectId === null)
    content = (
      <NewProject onSave={handleAddProject} onCancle={handleCancleAddproject} />
    );

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
