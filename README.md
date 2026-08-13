# QSkill Developer Tools

A professional front-end development project showcasing modern React practices, API integration, and responsive design. This is the QSkill Front-End Development Internship Slab 1 submission.

## 📋 Project Overview

This application demonstrates three core front-end development tasks:

1. **Text Translator** - Translate English text to multiple languages using RapidAPI
2. **Random String Generator** - Generate customizable random strings with React hooks
3. **Client-Side Routing** - Seamless navigation with React Router DOM

## 🎯 QSkill Slab 1 Requirements

### Task 1: Text Translator ✓
- User can enter English text
- Multi-language selection (15+ languages)
- Click translate button for real-time translation
- RapidAPI integration for translations
- Loading and error states handled
- Empty input validation
- Copy-to-clipboard functionality
- Clear/reset button
- Environment-based configuration (no hardcoded keys)
- `.env.example` file provided

### Task 2: Random String Generator ✓
- Generate random strings with customizable length (1-1000 characters)
- Character type options: uppercase, lowercase, numbers, special characters
- Uses `useState` for state management
- Uses `useCallback` for generation function (reusable logic)
- Uses `useEffect` for initialization and side effects
- Copy-to-clipboard button
- Length validation
- Error handling for no selected character type
- Crypto-based randomness for security

### Task 3: Client-Side Routing ✓
- React Router DOM with 6+ routes
- Responsive navigation bar with active route highlighting
- 404 Not Found page
- No full-page reloads during navigation
- All routes support direct access and browser refresh

## 🛠️ Technologies Used

- **React 18+** - UI library with functional components and hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM v6** - Client-side routing
- **RapidAPI** - Translation service integration
- **JavaScript ES6+** - Modern JavaScript

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation bar
│   ├── Footer.jsx              # Footer
│   ├── Button.jsx              # Reusable button
│   └── PageContainer.jsx       # Page layout
│
├── pages/
│   ├── Home.jsx                # Landing page
│   ├── Translator.jsx          # Translation tool
│   ├── RandomString.jsx        # String generator
│   ├── About.jsx               # Project info
│   └── NotFound.jsx            # 404 page
│
├── services/
│   └── translationService.js   # API service layer
│
├── App.jsx                     # Main app with routing
├── main.jsx                    # Entry point
├── index.css                   # Tailwind CSS
└── App.css                     # App styles
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16+ installed
- npm package manager

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure RapidAPI (For Translator Feature)

1. Sign up at [rapidapi.com](https://rapidapi.com)
2. Subscribe to a translation API (e.g., Google Translate API)
3. Get your API Key and Host from the dashboard
4. Copy `.env.example` to `.env`:
```bash
VITE_RAPIDAPI_KEY=your_actual_api_key_here
VITE_RAPIDAPI_HOST=google-translate1.p.rapidapi.com
```
5. Restart the development server

### Step 3: Run Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Step 4: Build for Production
```bash
npm run build
npm run preview
```

## 📖 Available Routes

| Route | Purpose |
|-------|---------|
| `/` | Home page with project overview |
| `/translator` | Text translation tool |
| `/random-string` | Random string generator |
| `/about` | Project information |
| `/not-found` | 404 error page |
| `*` | Catch-all route (redirects to 404) |

## ✨ Key Features

### Text Translator
- Real-time translation to 15+ languages
- Loading states and error handling
- Copy translation to clipboard
- Professional responsive design

### Random String Generator
- Customizable length (1-1000 characters)
- Character type options (uppercase, lowercase, numbers, special)
- Crypto-based secure randomness
- Copy string to clipboard
- Real-time generation

### Navigation
- Sticky navbar with active route highlighting
- Mobile-friendly design
- Fast client-side routing

## ♿ Accessibility
- Semantic HTML elements
- ARIA labels
- Keyboard-accessible controls
- Visible focus states
- Color contrast compliance

## 🔒 Security
- No hardcoded API keys
- Environment variables for configuration
- API service layer separation
- Web Crypto API for randomness

## 📚 React Hooks Usage

### Task 2: Random String Generator
This component meaningfully demonstrates all required hooks:

- **`useState`**: Manages generated string, length, character types, and error states
- **`useCallback`**: Wraps the generation function for performance and reusability
- **`useEffect`**: Initializes string on mount and responds to settings changes

Each hook serves a specific, necessary purpose in the component logic.

## 🧪 Testing

All requirements tested and verified:
- ✅ All pages load correctly
- ✅ Navigation works without page reloads
- ✅ Translator accepts input and displays results
- ✅ Random string generator works
- ✅ All React hooks properly implemented
- ✅ Responsive design on all screen sizes
- ✅ No console errors or warnings
- ✅ No API secrets in source code

## 📝 Environment Variables

Create a `.env` file (copy from `.env.example`):

```
VITE_RAPIDAPI_KEY=your_api_key_here
VITE_RAPIDAPI_HOST=google-translate1.p.rapidapi.com
```

**Important:** Never commit `.env` to version control. Use `.env.example` to document required variables.

## 🌐 Deployment

This project can be deployed to Vercel, Netlify, GitHub Pages, or traditional hosting. Ensure environment variables are configured on your hosting platform.

## 🎓 Learning Outcomes

- React functional components and hooks
- Client-side routing
- API integration
- State management
- Responsive design
- Error handling
- Accessibility best practices
- Professional code organization

## 📄 License

Created for the QSkill Internship program.

---

**Status:** ✅ Complete - All three Slab 1 requirements fully implemented
