# Sticky Notes App

This is a Sticky Notes app built using Electron and React. It's designed to provide a simple, user-friendly interface for creating and managing sticky notes on your desktop.

## Features

- Multiple sticky notes can be created and managed.
- Sticky notes are draggable, so you can move them around your screen.
- Simple, intuitive design inspired by Microsoft's Sticky Notes app.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Running the App](#running-the-app)
- [Building the App](#building-the-app)
- [Using npm](#using-npm)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/sticky-notes-app.git
   cd sticky-notes-app
   ```

2. Install the dependencies using npm:

   ```bash
   npm install
   ```

   This will download and install all the necessary packages listed in the `package.json` file.

## Usage

### Running the App

To run the app in development mode, use the following command:

```bash
npm start
```

This will start the Electron app in development mode, and you should see the app pop up on your screen.

### Building the App

To build the app for production (i.e., package it for distribution), use:

```bash
npm run make
```

This will generate the installer files for the app in the `out/` directory. The app will be packaged and ready for distribution based on your platform (Windows, macOS, or Linux).

### Using npm

- **Installing Dependencies**: The `npm install` command is used to install all the necessary dependencies defined in the `package.json` file.
  
- **Starting the Development Server**: `npm start` launches the Electron app in development mode. It will also open a development environment with live-reload functionality so you can see changes instantly while you develop.

- **Building the App**: `npm run make` packages your app into an installer for your platform. The packaged app can be distributed to users.

For more information on using npm, refer to the [official npm documentation](https://docs.npmjs.com/).

## Contributing

Feel free to fork this project, submit issues, or send pull requests. Any contributions to improve the app are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

