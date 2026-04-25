# Tenzies Game 🎲

A fun and interactive **Tenzies dice game** built with **React**. The goal is simple: roll the dice until all 10 dice show the same value. Click on each die to freeze (hold) its value between rolls.

![Tenzies Game](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## 🎮 Live Demo

[Play Tenzies Now](https://tenzies-rolldice-game.netlify.app)

## ✨ Features

- **Roll Dice** - Click to roll all non-held dice
- **Hold Dice** - Click any die to freeze its value
- **Timer** - Track your game time
- **Roll Counter** - Count your total rolls
- **Win Detection** - Automatically detects when you win
- **Confetti Celebration** - Fun animation on winning
- **New Game** - Start fresh with one click
- **Realistic Dice** - Beautiful dice images
- **Accessible** - ARIA labels for screen readers

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React | UI Framework |
| JavaScript | Programming Language |
| CSS | Styling |
| Vite | Build Tool |
| nanoid | Unique ID Generation |
| react-confetti | Win Celebration Effect |

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Fahad-Pervaiz/tenzies-game.git

# Navigate to the project directory
cd tenzies

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## 📖 How to Play

1. Click **Roll** to roll all dice
2. Click on any die to **hold** (freeze) its value
3. Keep rolling and holding until all dice show the same number
4. Try to win in as few rolls as possible!

## 📁 Project Structure

```
Tenzies/
├── public/
├── src/
│   ├── images/          # Dice images
│   ├── App.jsx          # Main game component
│   ├── Die.jsx          # Die component
│   ├── index.css        # Global styles
│   └── index.jsx        # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 What I Learned

This project helped me practice important React concepts:

- **Components** - Building reusable UI components
- **Props** - Passing data between components
- **State** - Managing dynamic data with `useState`
- **useEffect** - Handling side effects and timers
- **useRef** - Accessing DOM elements
- **Event Handling** - Responding to user interactions
- **Conditional Rendering** - Showing content based on state
- **Accessibility** - ARIA labels and semantic HTML

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ during the Scrimba React Course