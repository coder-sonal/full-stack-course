import logo from './logo.svg';
import './App.css';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
        <Buttons name = "JOIN US" color="Blue"/>
        <Buttons name = "SETTING" color="light blue" />
        <Buttons name = "LOGIN" color="orange"/>
        <Buttons name = "CONTACT US" color="red"/>
        <Buttons name = "SEARCH" color="green"/>
        <Buttons name = "HELP" color="purple"/>
        <Buttons name = "HOME" color="pink"/>
        <Buttons name = "DOWNLOAD" color="brown"/>
    </div>
  );
}

export default App;
