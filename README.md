# Hacker News Dashboard

A simple React-based dashboard to display the latest Hacker News posts. This project fetches data from the [Hacker News API](https://hn.algolia.com/api/v1/search?tags=front_page) and allows users to search and paginate through the data. The app also provides a login/logout feature and dynamically renders a navigation bar with a search bar.

## Features

- **Search Functionality:** Search through the Hacker News titles in real-time.
- **Pagination:** View the results in pages with dynamic page buttons based on the number of results.
- **Login/Logout System:** A simple login/logout mechanism that stores the username in `localStorage`.
- **Responsive Design:** The app is mobile-responsive and adapts to different screen sizes.

## Installation

### Prerequisites
Make sure you have `Node.js` and `npm` installed. If you don’t have them, you can install them from the [official Node.js website](https://nodejs.org/).

### Steps to run the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/ritik7739/Hacker_news.git
   ```

2. Navigate to the project folder:

   ```bash
   cd Hacker_news
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   The app will open in your default web browser at [http://localhost:5173](http://localhost:5173).

## Project Structure

```plaintext
hacker-news-dashboard/
├── public/              # Static files
├── src/                 # Source code
│   ├── components/      # Reusable components
|   |   └── Login.jsx
|   |   └── Signup.jsx
│   ├── pages/           # Page components
│   │   └── Dashboard.jsx
|   |   └── NotFound.jsx
│   ├── App.jsx          # Main app entry point
│   ├── App.css          # Global Tailwind styles
│   └── index.js         # React entry point
├── package.json         # Project dependencies
├── README.md            # This file
└── .gitignore           # Git ignore file
```

### Key Files:

- **`App.jsx`**: The main component that handles the routing and authentication logic.
- **`Dashboard.jsx`**: Displays the Hacker News posts and handles the search, pagination, and login/logout functionality.
- **`App.css`**: Global styles for the app.
- **`index.js`**: The entry point of the application where React is initialized.

## Usage

Once the application is running, the following features are available:

1. **Login:** Enter your username and it will be stored in `localStorage` for the session. This feature will display the username on the dashboard and allows for a personalized experience.
2. **Search:** Use the search bar to filter Hacker News posts by title. As you type, the list will be dynamically filtered.
3. **Pagination:** The posts are paginated with dynamically generated page buttons. This allows you to navigate through large sets of data easily.
4. **Logout:** You can log out, which will clear the username from `localStorage`, and you will be redirected to the login page.

## Libraries Used

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Material-UI](https://mui.com/) - React UI framework for building custom components.
- [React Router](https://reactrouter.com/) - For handling client-side routing.
- [Axios](https://axios-http.com/) - Could be added for API requests, though the current implementation uses native fetch for API calls.

## Screenshots

### Dashboard
![Dashboard Screenshot](https://via.placeholder.com/800x400.png?text=Dashboard)

### Search Functionality
![Search Functionality Screenshot](https://via.placeholder.com/800x400.png?text=Search+Functionality)

### Pagination
![Pagination Screenshot](https://via.placeholder.com/800x400.png?text=Pagination)

## Contributing

Feel free to fork this project, open issues, and submit pull requests. If you have any suggestions or feature requests, please open an issue and we will discuss it!

To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new pull request

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Hacker News API](https://hn.algolia.com/api/v1/search?tags=front_page) for providing the data.
- [Material UI](https://mui.com/) for the beautiful and responsive UI components.
- [React](https://reactjs.org/) for building modern web applications.
- Inspiration from various open-source projects on GitHub.

---

**Note:** Make sure to replace the placeholder text, especially for screenshots and repository URLs, with your actual data or images when updating the README. This provides a clean, professional overview of your project.