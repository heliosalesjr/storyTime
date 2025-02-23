

// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, toggleDarkMode }) => {
    return (
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
        <div className="text-2xl font-bold">StoryTime</div>
        <div className="flex space-x-6 items-center">
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="https://github.com/seu-repositorio" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            GitHub
          </a>
          <button
            onClick={toggleDarkMode}
            className="bg-primary dark:bg-dark-primary text-white font-kids text-xl py-2 px-4 rounded-md"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
  