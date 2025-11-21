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

## Key Concepts Demonstrated

✅ **Props**: Passing data from RecipeList to RecipeCard
✅ **Component Composition**: Nested component structure
✅ **Array Mapping**: Using `.map()` with unique keys
✅ **Event Handling**: Button click triggers alert
✅ **MUI Styled Components**: External styled components for better organization
✅ **ES6 Syntax**: Arrow functions, destructuring, template literals
✅ **Functional Components**: Modern React approach
✅ **Separation of Concerns**: Styles separated into dedicated files

## Theme Customization

The application uses a custom Material UI theme with:
- **Primary Color**: Orange (#ff6b35)
- **Secondary Color**: Black (#1a1a1a)
- **Background**: Pure black (#000000)
- **Text**: White and light gray
- **Custom component overrides** for Cards and Buttons

## Recipes Included

1. Pasta - Creamy tomato pasta
2. Chicken Curry - Spicy Indian curry
3. Greek Salad - Mediterranean salad with feta
4. Chocolate Brownies - Rich and fudgy brownies
5. Caesar Salad - Classic Caesar with romaine
6. Beef Tacos - Seasoned ground beef tacos

## Styling Features

- Smooth hover animations
- Professional spacing and layout
- Responsive grid system
- Clean card design with borders
- Icon integration
- Custom bullet points for ingredients
- Professional typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes.

---

**Created with ❤️ using React and Material UI**

