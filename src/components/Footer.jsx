const Footer = () => {
    const currentYear = new Date().getFullYear(); // Obtém o ano atual
  
    return (
      <footer className="text-center py-4 text-gray-500 text-sm">
        &copy; {currentYear} All rights reserved. Created by <a href="https://github.com/heliosalesjr" className="underline hover:text-gray-400">@heliosalesjr</a>
      </footer>
    );
  };
  
  export default Footer;
  