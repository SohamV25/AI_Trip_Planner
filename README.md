# 🏕️ AI Trip Planner - Intelligent Travel Companion

An advanced, AI-powered travel planning application that takes the stress out of vacation organizing. Built with a modern tech stack including **React**, **Tailwind CSS**, and **Google Gemini 3**, this platform generates highly personalized itineraries, hotel suggestions, and daily activity plans in seconds.

---

## ✨ Key Features

- **AI Itinerary Engine:** Powered by Google Gemini 3 Flash to generate realistic day-by-day plans with pricing and travel times.
- **Dynamic Image Sourcing:** Integrated with Google Places API to fetch real-world photos of destinations and landmarks.
- **Smart Location Autocomplete:** Smooth destination selection using Google Places Autocomplete.
- **Cloud Persistence:** Securely save and manage your trips using Firebase Firestore.
- **Google Authentication:** Seamless user onboarding with Google OAuth 2.0.
- **Modern UI/UX:** A sleek, responsive interface built with Shadcn/UI and optimized for all devices.

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/UI & Radix UI
- **Icons:** Lucide React & React Icons

### Backend & AI

- **Artificial Intelligence:** Google Gemini 3 Flash API
- **Database:** Firebase Firestore
- **Authentication:** Google Cloud OAuth
- **APIs:** Google Places API (New), Google Photos API

---

## 📂 Project Structure

````text
src/
├── components/
│   ├── custom/      # Reusable UI elements (Header, Hero)
│   └── ui/          # Shadcn pre-built components
├── create-trip/     # Trip generation logic and form handling
├── view-trip/       # Itinerary display and data fetching
├── constants/       # Options for budget, travelers, and AI prompts
└── service/         # Firebase, Gemini, and Google API configurations

## 🚀 Getting Started

Follow these steps to get a local copy of the project up and running.

### 1. Clone the Repository
Open your terminal and run:
```bash
git clone [https://github.com/SohamV25/AI_Trip_Planner.git](https://github.com/SohamV25/AI_Trip_Planner.git)
cd AI_Trip_Planner

npm install

VITE_GOOGLE_PLACE_API_KEY=your_google_places_api_key
VITE_GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_oauth_client_id

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

npm run dev
````
