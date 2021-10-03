import './index.css';
import MainMenu from './MainMenu';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="font-sans font-medium
    mt-10 shadow-md w-3/4 m-auto md:grid md:grid-cols-6"
    >
      <Sidebar />
      <MainMenu />
    </div>
  );
}

export default App;
