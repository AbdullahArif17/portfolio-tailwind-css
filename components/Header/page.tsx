import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white p-4 shadow-lg">
     <h1 className="text-3xl flex justify-center items-center px-4 py-2 font-extrabold text-indigo-300 bg-clip-text text-transparent">
          My Portfolio
        </h1> 
      <nav className="container mx-auto flex justify-between items-center">
        
          <ul className="flex space-x-8">
          <li>
            <Link
              href="/"
              className="hover:text-secondary transition-colors font-bold flex flex-col justify-center items-center duration-200 px-2 py-1"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-secondary flex flex-col font-bold justify-center items-center transition-colors duration-200 px-2 py-1"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-secondary flex flex-col justify-center font-bold  items-center transition-colors duration-200 px-2 py-1"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-secondary flex flex-col justify-center items-center font-bold  transition-colors duration-200 px-2 py-1"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
