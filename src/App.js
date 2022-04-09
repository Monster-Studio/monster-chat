import './App.css';
import Sidebar from './Sidebar.js';
import ChatWindow from './ChatWindow.js';

function App() {
  return (
    <div className="app">
      <div className='app-header'>
        <h1>Monster Chat</h1>
      </div>
      <div className='app-body'>
        <Sidebar/>
        <ChatWindow/>
      </div>
      <div className='app-footer'>
      </div>
    </div>
  );
}

export default App;
