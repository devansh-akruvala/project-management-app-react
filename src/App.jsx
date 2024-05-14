
import NewProject from "./component/NewPorject";
import NoProjectSelected from "./component/NoProjectSelected";
import SideBar from "./component/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar/>
      <NoProjectSelected/>
    </main>
  );
}

export default App;
