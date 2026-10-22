###### TeamTask Pro Architecture

High-Level Architecture
User ↓ React Frontend ↓ Node.js API ↓ MongoDB Database

**Frontend
Technology:**

.React
.React Router
.Axios
.Tailwind CSS
.Responsibilities:

UI Rendering:
.Form Validation
.API Calls
.State Management

**Backend
Technology:**
Node.js
Express.js

Responsibilities:
.Authentication
.Authorization
.Business Logic
.Database Communication
.Database

Collections:
.Users
.id
.name
.email
.password
.role

Projects:
.id
.name
.description
.status
.owner
.members
.Tasks
.id
.title
.description
.status
.priority
.assignee
.projectId

**Authentication Flow**
User Login

↓

Validate Credentials

↓

Generate JWT

↓

Send JWT to Frontend

↓

Store Token

↓

Access Protected Routes

**Authorization**
Admin:
Manage Users
Manage Projects

Member:
Manage Assigned Tasks

Project Manager:
Manage Project Members

Contributor:
Work On Assigned Tasks
