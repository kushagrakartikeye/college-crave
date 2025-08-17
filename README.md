## Event Explorer – College Crave App Developer Intern Coding Assignment
# Overview
Event Explorer is a mini React Native application developed as part of the College Crave App Developer Intern coding round. The app demonstrates practical skills in authentication UI, API integration, HTTP networking, data display, and navigation for Android (and easily expandable to iOS).

# Features
Login and Signup UI:
Modern, user-friendly forms with field validation and navigation.

# API Integration:
Fetches real event data from a live public endpoint (GitHub Gist).

# Event List Page:
Displays upcoming events in a structured list, fetched from the API.

# Navigation:
Seamless screen navigation using React Navigation library.

# Robust Error Handling:
Shows activity indicators during loading; displays error messages if network/API fails.

# API Endpoint (Live Example Used)
All event data is obtained via HTTP fetch from the following public endpoint:

# text
https://gist.githubusercontent.com/kushagrakartikeye/859c6897af26b5ed72e904d5670e3fbe/raw/23499d95c20f60595078419ac2d0873a471fcc13/events.json
This satisfies the assignment’s “API integration” requirement.

# How to Run
Install Dependencies:

bash
npm install
Start Metro Bundler:

bash
npx react-native start
Run the App on Android Emulator or Device:

bash
npx react-native run-android
Screenshots (Attach these in your submission)
Attach clear screenshots showing:

Login Screen
(default start screen; blank fields or filled)

Signup Screen
(after tapping "Sign up" on Login)

Event List Screen
(after successful login – must show at least 2–3 fetched events)

Event List With Loading Indicator
(optional, quick screenshot during API fetch to highlight responsiveness)

Event List With Error Message
(optional, temporarily disconnect internet, show error message for bonus marks)

API Endpoint in Browser
(show your live gist URL returning the JSON for extra clarity—bonus but not mandatory)

Project Structure (Key Files)
App.tsx – Root file for navigation setup.

screens/LoginScreen.tsx – Login page UI and logic.

screens/SignupScreen.tsx – Signup page UI and logic.

screens/EventListScreen.tsx – Fetches and displays events from API.

README.md – This document.

# Notable Technologies
React Native v0.81.0

TypeScript

@react-navigation/native for navigation stack

GitHub Gist as public REST API (for events)

Notes for Reviewers
This project is intentionally designed for code clarity, practical UI, and API integration demonstration.

No credentials or registration required. Authentication is UI-only for demo purposes; can be hooked to any real backend in future.

API URL and event data can easily be swapped to a production endpoint.

Contact
Developed by Kushagra Kartikeye
Email: kushagrakartikeye@gmail.com
