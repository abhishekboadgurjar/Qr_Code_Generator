# QR Code Generator Website

## Introduction

In this tutorial, we'll create a QR Code Generator web application using React. This project is ideal for those looking to learn about integrating APIs, managing state, and generating dynamic content.

## Project Overview

The QR Code Generator allows users to create QR codes by entering content, adjusting the size, and selecting a background color. It utilizes a public API to generate the QR codes and displays them on the screen. Users can generate, view, and download QR codes for various purposes.

## Features

- **Content Input**: Users can input the content they want to encode into a QR code.
- **Dynamic Size**: Adjust the size of the QR code dynamically.
- **Background Color Customization**: Choose a background color for the QR code.
- **API Integration**: Fetches QR codes from a public QR code generation API.
- **Download Option**: Allows users to download the generated QR code.

## Technologies Used

- **React**: For building the user interface and managing component states.
- **CSS**: For styling the application.
- **JavaScript**: For handling API requests and app logic.

## Project Structure

The project is organized as follows:

```
├── public
├── src
│   ├── components
│   │   ├── QrCode.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

### Key Components

- **QrCode.jsx**: Manages the QR code generation and display.
- **App.jsx**: Renders the main layout and the `QrCode` component.


## Installation and Usage

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/abhishekgurjar-in/qr_code_generator.git
cd qr-code-generator
npm install
npm start
```

This will start the development server, and the application will be running at `http://localhost:3000`.

## Live Demo

Check out the live demo of the QR Code Generator [here](https://qr-code-generator-in-web.netlify.app/).
## Screenhots
![Screenshot 2024-09-09 225442](https://github.com/user-attachments/assets/80fbacc9-83c5-4329-bc5e-8ec8933ec950)


## Conclusion

The QR Code Generator project is a practical example of how to integrate APIs and manage dynamic content in React. It provides a simple yet effective tool for generating QR codes with a user-friendly interface.

## Credits

- **Inspiration**: The project is inspired by the need for easy QR code generation for various applications.

### Author

**Abhishek Gurjar** is a web developer passionate about creating interactive and useful web applications. You can follow his work on [GitHub](https://github.com/abhishekgurjar-in).

