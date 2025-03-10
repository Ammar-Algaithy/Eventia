# Eventia

Eventia is an advanced event management platform built using a modern stack to efficiently handle events, manage users, and deliver a seamless experience through a well-structured API and responsive user interface. 

## Features

- **Event Creation and Management**: Users can create, update, and view events.
- **User Registration**: Event participants can sign up and attend events.
- **Event Notifications**: Notifications for event updates and reminders.
- **Secure Authentication**: Authentication for event organizers and participants.

## Technologies Used

### Backend (Server-Side)

- **.NET Core 8.0 (C#)**  
  - **Purpose**: Provides the API and business logic.  
  - **Architecture**: Implements Clean Architecture.  
  - **Layers**:  
    - **Domain Layer**: Defines core business entities (e.g., Activity).  
    - **Application Layer**: Contains use cases like **GetActivities**, **CreateActivity**.  
    - **Interface Adapters**: Includes API controllers and repository implementations.  
    - **Frameworks and Drivers**: Uses **ASP.NET Core** and **Entity Framework Core**.

- **Entity Framework Core 8**  
  - **Purpose**: Manages database interactions.  
  - **Database**: Relational database (e.g., SQL Server).  
  - **Details**: Handles CRUD operations through the repository pattern.

- **MediatR**  
  - **Purpose**: Simplifies communication between layers using **CQRS (Command Query Responsibility Segregation)**.  
  - **Usage**: Processes commands and queries (e.g., **GetActivitiesQuery**).

### Frontend (Client-Side)

- **React**  
  - **Purpose**: Builds the user interface.  
  - **Details**: React components styled with **Tailwind CSS** and written in **TypeScript** for type safety.

- **Vite**  
  - **Purpose**: Provides a fast and modern build tool for the React app.  
  - **Benefits**: Faster builds, hot module replacement (HMR), and optimized performance.

- **Axios**  
  - **Purpose**: Handles HTTP requests to the API.  
  - **Usage**: Fetches data (e.g., activities list) and sends user inputs (e.g., creating a new activity).

- **Tailwind CSS**  
  - **Purpose**: Provides a utility-first CSS framework for styling.  
  - **Details**: Tailwind classes used inline in JSX for rapid and consistent UI development.

- **TypeScript**  
  - **Purpose**: Adds type safety to the React app.  
  - **Usage**: Ensures robust data handling between the front end and back end.

## Architecture

The project follows **Clean Architecture**, which separates concerns across multiple layers:

- **Domain Layer (Entities)**: Defines business rules and core entities (e.g., Activity).
- **Application Layer (Use Cases)**: Contains specific business logic for each use case (e.g., fetching or creating activities).
- **Interface Adapters Layer (Controllers/Repositories)**: Connects the Application Layer with external systems (e.g., API, database).
- **Frameworks and Drivers Layer**: Includes external dependencies like React, Tailwind, and the database.

### Development Workflow

#### Backend:
- **API** built with **.NET Core**.
- Routes defined in API controllers (e.g., `/api/activities`).
- Business logic encapsulated in **MediatR** commands and queries.

#### Frontend:
- **React** application built using **Vite**.
- **Axios** handles API requests (e.g., fetching activities from `/api/activities`).
- **Tailwind CSS** for responsive and clean UI design.

#### Database:
- Database schema managed using **Entity Framework Core** migrations.
- CRUD operations implemented through repositories.

## Installation

### Prerequisites

- .NET 8.0 SDK installed on your machine.
- Node.js and npm installed.
- A SQL Server or relational database setup.
- Ensure your SQL database schema is set up as required (see database setup instructions below).

### Clone the Repository

```bash
git clone https://github.com/Ammar-Algaithy/Eventia.git
cd Eventia
