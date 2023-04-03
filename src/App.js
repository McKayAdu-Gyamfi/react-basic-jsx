import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Content from './components/content';

function App() {
  return (
    <div>
      <Navbar />
      <Content/>
    </div>
  );
}

export default App;
//What makes your imported file defined but never read in app.js?