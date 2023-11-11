
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SideNav from './Components/SideNav';
import PageContent from './Components/PageContent';


function App() {
  return (
    <BrowserRouter>
    <div className="App"style={{display:'flex',}} >
      <SideNav />
      <div style={{width:'100%'}}>
        <PageContent />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
