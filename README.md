# Recipe List Application

A professional React frontend implementation featuring a Recipe List Component built with Material UI in a sleek black and orange theme.

## Features

✨ **Modern Design**: Professional black and orange color scheme
🎨 **Material UI**: Fully styled with MUI components
📱 **Responsive Layout**: Works beautifully on all screen sizes
🔧 **Component Composition**: Clean separation of concerns
⚡ **Interactive**: Hover effects and button interactions

## Project Structure

```
Recipe/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── RecipeCard.jsx           # Individual recipe card component
│   │   ├── RecipeCard.styles.js     # RecipeCard styled components
│   │   ├── RecipeList.jsx           # Recipe list container component
│   │   └── RecipeList.styles.js     # RecipeList styled components
│   ├── App.jsx                      # Main app with theme configuration
│   ├── index.js                     # Entry point
│   └── index.css                    # Global styles
├── package.json
└── README.md
```

## Components

### RecipeCard Component
- **Props**: `title`, `description`, `ingredients` (array)
- **Features**:
  - Typography for title and description
  - List component with `.map()` for ingredients
  - Unique keys for list items
  - Button with alert event handler
  - Hover effects and animations

### RecipeList Component
- Contains array of recipe objects
- Maps through recipes to render multiple RecipeCards
- Uses Grid layout for responsive design
- Includes header and footer sections

### App Component
- Creates custom Material UI theme
- Configures black and orange color palette
- Wraps application with ThemeProvider

## Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server** (Vite):
   ```bash
   npm run dev
   ```

3. **Open Browser**:
   - Application will automatically open at `http://localhost:3000`

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## Technologies Used

- **React 18.2.0**: Modern React with functional components
- **Vite 5.0**: Lightning-fast build tool and dev server
- **Material UI 5.14.19**: Component library for styling
- **@mui/icons-material**: Icon components
- **@emotion/react & @emotion/styled**: Styling engine for MUI



