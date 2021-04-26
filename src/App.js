import { Message } from './components/Message';

import './App.css';

function App() {
  return (
    <div className="app">
      {/* инлайновые стили здесь - в демонстрационных целях, лучше использовать css */}
      <div style={{ marginLeft: '40px' }}>
        <h1 className="header">Hello React</h1>
      </div>
      <Message text="hi! i am a message" />
    </div>
  );
}

export default App;
