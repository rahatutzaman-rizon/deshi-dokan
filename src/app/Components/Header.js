import Image from "next/image";
import image from "../../logo_size.jpg";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2">
        <a href="/" className="text-blue-600 font-bold text-2xl flex items-center">
          <Image src={image} alt="Logo" className="h-12 w-64 mr-2" />
         
        </a>

        <nav className="text-sm">
          <ul className="flex space-x-2">
            <li>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md"
              >
                Categories
              </a>
            </li>


            <li>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="flashSales"
                className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md"
              >
                Flash Sales
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;