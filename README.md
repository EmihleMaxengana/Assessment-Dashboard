# Dashboard - Legal Matters Management

A modern, responsive React dashboard for managing legal matters and tasks. Built with React, Vite, and Tailwind CSS.

## Features

- **Search Functionality**: Quickly search matters by title or assigned attorney
- **Status Filtering**: Filter matters by status (All, In Progress, Completed, Not Started)
- **Priority Filtering**: Filter matters by priority level (All, High, Medium, Low)
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **Persistent Storage**: All filters, search queries, and preferences are saved to local storage
- **Loading States**: Skeleton loaders and loading indicators for better UX
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **Empty States**: Helpful messaging when no matters match the current filters

## Project Structure

```
src/
├── components/
│   ├── EmptyState.jsx          # Empty state component
│   ├── Header.jsx              # Main header with dark mode toggle
│   ├── LoadingSkeleton.jsx      # Skeleton loader component
│   ├── LoadingState.jsx         # Loading state component
│   ├── MatterCard.jsx           # Individual matter card component
│   ├── MatterList.jsx           # List of matters
│   ├── PriorityFilter.jsx       # Priority filter component
│   ├── SearchAndFiltersBar.jsx  # Search and filter controls
│   ├── SearchInput.jsx          # Search input component
│   └── StatusFilter.jsx         # Status filter component
├── data/
│   └── mockMatters.js           # Mock data for matters
├── App.jsx                      # Main application component
├── App.css                      # Application styles
├── main.jsx                     # Application entry point
└── index.css                    # Global styles
```

## Technologies Used

- **React 19**: UI library
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:

```bash
cd Dashboard
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building

Build the project for production:

```bash
npm run build
```

The optimized build will be generated in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm lint
```

## Data Structure

Each matter object contains the following properties:

```javascript
{
  id: number,
  title: string,
  status: "Not Started" | "In Progress" | "Completed",
  priority: "Low" | "Medium" | "High",
  assignedTo: string,
  dueDate: string (ISO format)
}
```

## Local Storage

The application persists the following user preferences to local storage:

- `searchQuery`: Current search query
- `statusFilter`: Selected status filter
- `priorityFilter`: Selected priority filter
- `darkMode`: Dark mode toggle state

## Future Enhancements

- Backend API integration to replace mock data
- Matter detail view and editing capabilities
- User authentication
- Matter creation and deletion
- Email notifications for due dates
- Export functionality (PDF, CSV)
- Advanced filtering and sorting options

## License

This project is private and for internal use only.