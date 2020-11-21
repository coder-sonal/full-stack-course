import logo from './logo.svg';
import './App.css';
import OperatingSystem from './components/OperatingSystem';
import Heading1 from './components/Heading1';

function App() {
  return (
    <div className = "App">
      <Heading1 name = "Mobile Operating System" />
      <OperatingSystem name = "Android"/>
      <OperatingSystem name = "BlackBerry" />
      <OperatingSystem name = "iPhone" />
      <OperatingSystem name = "Windows Phone" />
      <Heading1 name = "Mobile Manufacturs" />
      <OperatingSystem name = "Samsung" />
      <OperatingSystem name = "HTC" />
      <OperatingSystem name = "Micromax" />
      <OperatingSystem name = "Apple" />
    </div>
  );
}

export default App;
