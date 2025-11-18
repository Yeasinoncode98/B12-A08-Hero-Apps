# 🚀 Hero Apps: Trending Mobile Application Showcase

**Hero Apps** is a modern, responsive single-page application built with React, designed to showcase a curated list of trending mobile applications. Users can explore app details, view real-time ratings and download statistics, and access direct links to the official app stores. It focuses on **smooth performance** and **user-friendly filtering** for a superior browsing experience.

## 🔗 Project Links

| Resource | Link |
| :--- | :--- |
| **Live Demo (Netlify)** | 👉 **[https://b12-a08-hero-app.netlify.app/](https://b12-a08-hero-app.netlify.app/)** |
| **GitHub Repository** | 💻 **[Yeasinoncode98/B12-A08-Hero-Apps](https://github.com/Yeasinoncode98/B12-A08-Hero-Apps)** |
| **Author** | 👤 **[Yeasinoncode98 (Yeasin Arafat)](https://github.com/Yeasinoncode98)** |

---

## 💡 Features

The application provides a feature-rich experience for discovering and managing trending apps:

1.  **Browse Trending Apps:** Displays essential information for each app, including image, title, total downloads, and user ratings.
2.  **Dynamic Sorting:** Users can sort the app list by **Downloads** in both **High to Low** and **Low to High** order.
3.  **Installed Apps Management:** A dedicated section to manage "installed" apps, utilizing `localStorage` with **Remove/Uninstall** functionality.
4.  **Interactive Statistics:** Utilizes **Recharts** to display engaging charts and statistics based on the app data.
5.  **Seamless Navigation:** Fast and fluid page transitions powered by **React Router**.
6.  **Direct Store Links:** Easy access to the apps via the **Google Play Store** and **Apple App Store**.
7.  **Responsive Design:** Fully optimized layout for an excellent experience on **mobile, tablet, and desktop** devices.
8.  **User Notifications:** Provides clear success/error feedback using elegant **React Toastify** notifications.

---

## 🛠️ Tech Stack & Utilities

Hero Apps is built with a powerful and modern combination of front-end technologies:

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | **React** | Core library for building the user interface. |
| **Routing** | **React Router** | Managing client-side navigation and routes. |
| **UI Library** | **DaisyUI** | Ready-to-use component library for Tailwind CSS. |
| **Styling** | **Tailwind CSS & Vanilla CSS** | Utility-first CSS framework for rapid and custom styling. |
| **Data Fetching** | **Axios & Fetch API** | Promises-based HTTP client for efficient data handling. |
| **Data Storage** | **localStorage** | Client-side persistence for installed apps and user settings. |
| **Charts** | **Recharts** | Composable charting library built with React. |
| **Notifications** | **React Toastify** | Adding sleek, non-blocking toast notifications. |
| **Data Source** | **Local JSON Files** | Simulating a back-end API for initial app data. |
| **Icons** | **React Icons, Lucide React** | A comprehensive collection of popular icon sets. |

---

## 📂 Key Components

The application architecture is structured into reusable and modular components:

* **`Hero`**: The main landing section that features prominent content and app highlights.
* **`HomeProduct`**: The card component used to display the details of a single app in the trending list.
* **`InstallCard`**: Displays an "installed" app in the dedicated section and includes the uninstall action.
* **`Spinner / Loading`**: Components to provide visual feedback during data fetching or page loading states.
* **`Filters / Sort Select`**: A dedicated component to handle the sorting and filtering logic (e.g., sorting by downloads).

---

## ⬇️ Local Setup and Installation

Follow these steps to get a local copy of the project up and running on your machine. This is a simple, full copy-paste process for clients or recruiters to test the application quickly.

### Prerequisites

* **Node.js** (v14.x or later)
* **npm** (Node Package Manager)

### Step-by-Step Guide

1.  **Clone the Repository**

    Open your terminal or command prompt and run:

    ```bash
    git clone [https://github.com/Yeasinoncode98/B12-A08-Hero-Apps.git](https://github.com/Yeasinoncode98/B12-A08-Hero-Apps.git)
    cd B12-A08-Hero-Apps
    ```

2.  **Install Dependencies**

    Install all required project dependencies using npm:

    ```bash
    npm install
    ```

3.  **Run the Development Server**

    Start the application in development mode:

    ```bash
    npm run dev 
    # OR if your package.json uses "npm start":
    # npm start
    ```

4.  **View the App**

    The terminal will provide the local host address (e.g., `http://localhost:5173/`). Open your web browser and navigate to that address to view the live application.

---

## 📚 Library Documentation

Here are the official documentation links for the primary tools and libraries used in this project:

* **React**: [https://reactjs.org/](https://reactjs.org/)
* **React Router**: [https://reactrouter.com/](https://reactrouter.com/)
* **DaisyUI**: [https://daisyui.com/](https://daisyui.com/)
* **Tailwind CSS**: [https://tailwindcss.com/](https://tailwindcss.com/)
* **Axios**: [https://axios-http.com/](https://axios-http.com/)
* **Recharts**: [https://recharts.org/en-US/](https://recharts.org/en-US/)
* **React Toastify**: [https://fkhadra.github.io/react-toastify/](https://fkhadra.github.io/react-toastify/)
