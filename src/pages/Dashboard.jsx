import React, { useState, useEffect,useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";


const Dashboard = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth(); // Access the authentication context
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "Guest"; // Get the username from localStorage
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch Hacker News data
    fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
      .then((res) => res.json())
      .then((data) => setData(data.hits))
      .catch((err) => console.error("Failed to fetch data", err));
  }, []);

  const filteredData = data.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleLogout = () => {
    localStorage.removeItem("username"); // Clear user data
    setIsLoggedIn(false); // Update global authentication state
    navigate("/login"); // Redirect to login page
  };
   
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchTerm]);

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 6,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: '50ch', // Set a fixed width, adjust as needed
      [theme.breakpoints.up('md')]: {
        width: '80ch', // Larger width on larger screens
      },
    },
  }));
   

  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome, {username}</h1>
        {isLoggedIn && (
          <button
            className="btn-logout text-red-500"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </header>
    <div className="mb-4">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{ backgroundColor: '#ff742b' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            
            <div style={{ display: "flex", alignItems: "center", color: "#000" }}>
               <img
                 src="./Hacker_news.png"
                 alt="Hacker News Logo"
                 style={{ height: "60px", width: "60px", marginRight: "10px" }}
                />
             <div>
               <div style={{ fontWeight: "bold" }}>Search</div>
               <div style={{ fontWeight: "bold" }}>Hacker News</div>
             </div>
           </div>

          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            
            <StyledInputBase
             placeholder="Search Hacker News"
             inputRef={searchInputRef}
             inputProps={{ 'aria-label': 'search' }}
             type="text"
             value={searchTerm}
             onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to page 1 on a new search
            }}
             
            />
            
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
</div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Author</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.objectID} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {item.title}
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2">{item.author}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, i) => (
          <button
            key={i}
            className={`px-4 py-2 mx-1 border rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
