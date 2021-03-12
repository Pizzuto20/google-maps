import './App.css';
import GoogleMap from './components/GoogleMap';
import {Helmet} from "react-helmet";
function App() {
  return (
    <div className="App">
      <h1>Google Maps App</h1>
      <GoogleMap />
      <Helmet>
      <script defer data-key="af76afd4-55cd-463b-be2a-77eaea9dd8ea" src="https://widget.tochat.be/bundle.js"></script>
      </Helmet>
    </div>
  );
}

export default App;
