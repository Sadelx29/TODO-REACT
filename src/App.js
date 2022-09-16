import logo from './logo.svg';
import './App.css';
import TaskList from './components/containers/task_list';
import ContactList from './components/containers/contact_list';

// import Greeting from './components/greeting';
// import GreetingF from './components/greetingF';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <TaskList></TaskList>
        </p>
        <p>
          <ContactList></ContactList>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
