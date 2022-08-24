import logo from "./logo.svg";
import "./App.css";
const url = "https://dummydata-fqqi0aufx-richinrix.vercel.app/data.json";
const clientID =
  "178417619857-2dr5pf2vgpgq31c05s4rqp880761f024.apps.googleusercontent.com";
const clientSecret = "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";
function App(props) {
  const { user } = props;
  return (
    <div className="App">
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
          {user && user.name}
        </a>
      </header>
    </div>
  );
}

export default App;
