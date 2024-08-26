# 🎵 Spotify Clone

A sleek and modern Spotify clone application built using **React** and **Vite**. This project replicates some of the core features of Spotify, offering a smooth and responsive user experience for music streaming.

## 🌟 Features

- **User Authentication**: 
  - Sign up and log in with secure authentication.
  - Manage user profiles and playlists.

- **Music Player**:
  - Play, pause, and skip tracks.
  - Adjust volume and seek within a track.
  - Display album art, track information, and artist details.

- **Search and Explore**:
  - Search for songs, albums, and artists.
  - Browse trending and popular playlists.

- **Responsive Design**:
  - Fully responsive UI, optimized for mobile and desktop screens.
  - Smooth navigation and interactive animations.

## 🛠️ Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast and efficient development build tool.
- **React Router**: For managing app navigation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for making API requests.
- **Spotify API**: Used for fetching music data and user information.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (version 14.x or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/spotify-clone.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd spotify-clone
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

4. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following keys with your Spotify API configuration:
     ```env
     VITE_SPOTIFY_CLIENT_ID=your-client-id
     VITE_SPOTIFY_CLIENT_SECRET=your-client-secret
     VITE_REDIRECT_URI=http://localhost:3000/callback
     ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

6. **Open the app** in your browser:
   - Visit `http://localhost:3000` to see the app in action.

## 📂 Project Structure

- **src/**: Contains all source files.
  - **components/**: Reusable UI components.
  - **pages/**: Different pages/routes of the app.
  - **assets/**: Images, icons, and other static files.
  - **styles/**: Global styles and Tailwind CSS configurations.
  - **utils/**: Utility functions and helper scripts.
  - **hooks/**: Custom React hooks.

- **public/**: Static files served directly.
- **.env**: Environment variables for API keys and configuration.

## 📱 Screenshots
![Screenshot 2024-08-26 at 00 28 56](https://github.com/user-attachments/assets/80741be7-0a2c-4a53-bd0a-0066eb67869d)
![Screenshot 2024-08-26 at 00 29 18](https://github.com/user-attachments/assets/373a2a78-e34b-422c-9e36-b2578a8652e8)

## Live Demo: https://spotify-clone-plum-pi.vercel.app


## 🔧 Customization

- **API Integration**: You can extend or modify the app by integrating additional features from the Spotify API.
- **UI/UX**: Customize the UI using Tailwind CSS to fit your design preferences.

## 📜 License

This project is licensed under the MIT License. Feel free to fork, modify, and use it for your own projects.

## 🙏 Acknowledgements

- Thanks to **Spotify** for providing an excellent API for developers.
- Gratitude to the **React** and **Vite** communities for their powerful tools and libraries.

