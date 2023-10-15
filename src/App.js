import './App.css';
import CounterView from './features/Counter/counterView';
import PostView from './features/Posts/PostView';

function App() {
  return (
    <div>
      <div>
          <CounterView />
          <PostView />
      </div>
          
    </div>
  );
}

export default App;
