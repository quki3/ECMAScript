import logo from '../logo.svg';
import './App.css';
import Login from "../components/login/Login.js";
import Profile from "../components/login/contents/cards/cardProfile/Profile.js";

function App() {
  return (
    <div className="App">
	<Profile
	  name='JOn'
	  title='team'
	  details='this details'
	  />
	<Login/>
      	<header className="App-header">
        	<img src={logo} className="App-logo" alt="logo" />
        	<p>
          		Edit <code>src/App.js</code> and save to reload.
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
