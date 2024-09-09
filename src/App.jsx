import QrCode from "./components/QrCode";
import "./App.css"
const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>Qr Code Generator</h1>
      </div>
      <QrCode />
      <div className="footer">
        <p>Made with ❤️ by Abhishek Gurjar</p>
      </div>
    </div>
  );
};

export default App;
