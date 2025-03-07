# Backend Server

## Introduction

Welcome to the backend server! This is a .NET API server built using .NET SDK 8. It serves as a backend service providing RESTful API endpoints. This README will guide you through the setup and usage of the project, even if you're not familiar with .NET, C#, or backend development.

## Prerequisites

Before you begin, ensure you have the following installed:

- [.NET SDK 8](https://dotnet.microsoft.com/en-us/download)
- [Git](https://git-scm.com/downloads)

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Restore Dependencies:**

   ```bash
   dotnet restore
   ```

3. **Build the Project:**

   ```bash
   dotnet build
   ```

4. **Run the Application:**

   ```bash
   dotnet run
   ```

5. **Use `dotnet watch run`:**
   During development, you can use the following command to automatically recompile and restart the application whenever you make changes:

   ```bash
   dotnet watch run
   ```

   This will save you time by eliminating the need to manually stop and restart the server after each change.

   By default, the application will be running on `https://localhost:7149` for HTTPS or `http://localhost:5189` for HTTP.

## API Endpoints

Here are some basic API endpoints templates included in the project at creation:

- **GET /api/weatherforecast**
  Retrieves weather forecast data.
