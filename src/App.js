import './index.css';
import MainMenu from './MainMenu';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="font-sans font-medium
    mt-10 shadow-md w-3/4 m-auto xl:grid xl:grid-cols-6 lg:grid lg:grid-cols-3"
    >
      <Sidebar />
      <MainMenu />
    </div>
  );
}

export default App;
