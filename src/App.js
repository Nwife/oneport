import { BrowserRouter } from 'react-router-dom';
import './App.css';

//components
import Sidebar from './component/sidebar/Sidebar';
import Content from './component/content/Content';

function App() {
  return (
    <div className="App flex font-inter min-h-screen">
      <BrowserRouter>
          <Sidebar />
          <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
