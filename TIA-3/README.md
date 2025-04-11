# 💻 TIA-3

This project is a practice that implements basic CRUD operations for the PA/PIA project types at IUPB.

## ✨ Features
- Create, read, update, and delete
- Follows best coding practices   
- Middlewares

 
## 📁 Repository Structure

```bash
📦 proyectos_pia-api/
├── 📁 client/             # Frontend application code
│   ├── 📁 Css/            # Stylesheet files
│   ├── 📁 Js/             # JavaScript client-side code
│   ├── 📄 Index.html      # Main entry HTML file
│   └── ...
├── 📁 server/             # Backend application code
│   ├── 📁 config/         # Configuration files
│   ├── 📁 middleware/     # Server middleware functions
│   ├── 📁 migrations/     # Database migration scripts
│   ├── 📁 models/         # Data models
│   ├── 📁 repositories/   # Data access layer
│   ├── 📁 routes/         # API route definitions
│   ├── 📄 server.js       # Main server entry point
├── 📄 .env.example        # Template for environment variables
├── 📄 crea_estructura_proyecto.bat # Script to create project structure
├── 📄 README.md           # Project documentation
└── ...
```

# 🚀 Installation Guide
## 📋 Prerequisites

- Node.js (v14.x or higher) 📦
- npm (v6.x or higher) 📦
- Git 🔄

## 📥 Step 1: Clone the Repository
```bash 
Clone the repository
https://github.com/MagicExist/WebDevelopment.git

Navigate to the project directory
cd proyectos_pia-api
```
## ⚙️ Step 2: Set Up Environment Variables
```bash 
Copy the example environment file
cp .env.example .env
```
Now open the .env file in your favorite text editor and configure the necessary environment variables:
# 💾Database Configuration
```dotenv
- DB_HOST=localhost
- DB_USER=your_database_user
- DB_PASSWORD=your_database_password
- DB_NAME=your_database_name
- DB_PORT=5432 default port
```
## 📦Step 3: Install Dependencies
```bash 
Navigate to the main directory
cd proyectos_pia-api

Install server dependencies
npm install
```
## 🚀Step 4: Start the Server
```bash 
From the server directory
node server.js

- If everything is set up correctly, you should see a message indicating that the server is running, typically something like:
Server running on port 3000
```

## 🌐Step 5: Open the Client Application
- Open the client/Index.html file in your web browser. You can do this by:

- 📁Navigating to the client directory and double-clicking on the Index.html file
- 🔗 Or using the file:// protocol in your browser: file:///path/to/proyectos_pia-api/client/Index.html


__✅Your application should now be running.__

## 📌 Contribution
Please remember to check the [CONTRIBUTING.md](https://github.com/MagicExist/WebDevelopment/blob/main/CONTRIBUTING.md)  file before making any contributions.

## 👥 Authors  

- [@Johhan Parra](https://github.com/MagicExist) 
- [@Andres Gonzales](https://github.com/Darkandrox) 
- [@Estefania Marin](https://github.com/Estefanii2730) 
