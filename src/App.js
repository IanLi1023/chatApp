import './App.css';
import { ChatEngine } from "react-chat-engine"

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="7702c753-895b-4532-b441-b4454a02bf1b"
        userName="mamba"
        userSecret="fiverings"
      >
      </ChatEngine>
    </div>
  );
}

export default App;
