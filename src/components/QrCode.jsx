import  { useState } from "react";
import axios from "axios";

const QrCode = () => {
  const [content, setContent] = useState("");
  const [size, setSize] = useState(300);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState(
    "https://api.qrserver.com/v1/create-qr-code/?data=QR%20Code%20Generator&size=300x300&bgcolor=ffffff"
  );

  const GenerateQR = () => {
    axios
      .get(
        `https://api.qrserver.com/v1/create-qr-code/?data=${content}&size=${size}x${size}&bgcolor=${bgColor}`
      )
      .then((res) => {
        setQrCode(res.config.url);
      });
  };

  return (
    <div className="qr-code">
      <div className="input-box">
        <div className="input-container">
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter content"
          />
           
        </div>
        
        <div className="input-color">
          <h4>Background Color:</h4>
          <input
            type="color"
            value={`#${bgColor}`}
            onChange={(e) => setBgColor(e.target.value.substring(1))}
          />
        </div>
        <div className="input-dimension">
          <h4>Dimension:</h4>
          <input
            type="range"
            min="200"
            max="600"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <button className="generate-btn" onClick={GenerateQR}>
          Generate QR
        </button>
      </div>
      <div className="output-box">
        <div className="qr-image">
          {qrCode && <img src={qrCode} alt="Generated QR Code" />}
        </div>
        {qrCode && (
          <div className="download-btn">
            <a href={qrCode} download="QRCode.png">
              <button type="button">Download</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default QrCode;
