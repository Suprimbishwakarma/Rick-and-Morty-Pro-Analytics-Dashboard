<div align="center">

# 🔮 Rick and Morty Pro Analytics Dashboard

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000&style=for-the-badge&logo=appveyor)
![React](https://img.shields.io/badge/React_19-20232a?style=for-the-badge&logo=react&logoColor=61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-007acc?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  <strong>An immersive, professional-grade explorer for the Rick and Morty multiverse.</strong><br>
  Built with performance, aesthetics, and data depth in mind.
</p>

</div>

---

## 🎥 Demo Video

<video width="1366" height="768" alt="demo video" src="https://github.com/user-attachments/assets/d84a1efc-61bc-475e-9350-f85aa7441a13"></video>

## 📖 Project Overview

The **Rick and Morty Pro Analytics Dashboard** is a state-of-the-art web application designed to explore the vast Rick and Morty API. It goes beyond simple data fetching, offering a tailored user experience with deep linking, real-time filtering, and local persistence.

## 🚀 Key Features

- **⚡ High-Performance Architecture**: Powered by **Vite** and **React 19**, ensuring sub-second load times and silky smooth interactions.
- **🎨 Mobile-First Design**: A responsive interface that scales seamlessly from mobile phones (`375px`) to 4K desktops.
- **🔍 Smart Search & Filtering**:
  - **Debounced Search**: Reduces API load by processing input only after the user stops typing.
  - **Multi-Dimensional Filters**: Filter by Status (Alive/Dead/Unknown), Species, and Gender simultaneously.
- **🔗 Deep Linking & URL Sync**: Every filter state is mirrored in the URL. Refresh the page or share the link, and the exact search context is restored.
- **💾 Local Persistence**:
  - **Favorites System**: Mark characters as favorites.
  - **Data Survival**: Your choices persist across browser reloads using a custom logical hook.
- **📊 Deep Character Analytics**: Access granular details including Origin data, Last Known Location, and a chronological history of Episode appearances.

## 📸 Screenshots

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/e7941dd7-8481-43a7-a295-fe7b6978403c" />

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/7ceaef1a-9b44-459a-9473-4bef8db9c557" />

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/2936c63a-4d8d-451e-a351-b33e92ab39c4" />

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/7d721d60-027a-4834-b977-5e907cba1979" />

## 🛠️ Technology Stack

| Technology       | Purpose                 | Version    |
| :--------------- | :---------------------- | :--------- |
| **React**        | UI Library              | `v19.2.0`  |
| **TypeScript**   | Static Typing           | `v5.9.3`   |
| **Tailwind CSS** | Styling Engine          | `v4.1.18`  |
| **Vite**         | Build Tool & Dev Server | `v7.2.4`   |
| **React Router** | Client-Side Routing     | `v7.12.0`  |
| **Axios**        | HTTP Client             | `v1.13.2`  |
| **Lucide React** | Iconography             | `v0.562.0` |

## 📂 In-Depth Project Structure

This project follows a scalable, feature-first directory structure. Here is a breakdown of the core modules:

```bash
src/
├── components/           # Reusable UI building blocks
│   ├── CharacterCard.tsx # Displays individual character data with skeleton loading states
│   ├── CharacterFilters.tsx # Handles search inputs and dropdown selections
│   ├── Info.tsx          # Modal component for project and show information
│   └── Pagination.tsx    # Accessible pagination control
│
├── constants/            # Configuration and Immutable Data
│   └── api.ts            # Centralized API endpoints and Axios instance configuration
│                         # Contains base URL defs and query param builders
│
├── hooks/                # Custom React Hooks
│   ├── useDebounce.ts    # Custom implementation of debounce logic for search inputs
│   │                     # Delays state updates until a specified time has passed
│   └── useLocalStorage.ts # Generic hook for persisting state to browser's LocalStorage
│                         # Handles serialization/deserialization automatically
│
├── pages/                # Application Route Views
│   ├── Landing.tsx       # Entry point with branding and navigation controls
│   ├── Home.tsx          # Main dashboard with grid view and filter logic
│   └── CharacterDetail.tsx # Deep-dive view for specific character analytics
│
└── types/                # TypeScript Type Definitions
    └── dataTypes.ts      # Shared interfaces for Character, Episode, and API responses
```

## 🔌 API & Data Handling

The application interfaces with the public [Rick and Morty API](https://rickandmortyapi.com/).

- **Base URL**: Defined in `src/constants/api.ts`.
- **Endpoints Used**:
  - `/character`: Fetches paginated lists and supports filtering.
  - `/character/[id]`: Fetches detailed single-entity data.
  - `/episode/[ids]`: Batches multiple episode requests into a single call for performance.

## 📦 Installation & Setup

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Steps

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/rick-and-morty-pro-analytics-dashboard.git
    cd rick-and-morty-pro-analytics-dashboard
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start Development Server**

    ```bash
    npm run dev
    ```

    Access the app at `http://localhost:5173`.

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

<p align="center">
    developed by <strong>Suprim Bishwakarma.</strong>
</p>

---
