import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
function Footer(){
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Logo / Brand Name */}
              <div className="mb-4 md:mb-0">
                <h1 className="text-2xl font-bold text-white">FoodieDelight</h1>
                <p className="text-sm text-gray-400">Delivering Happiness at Your Doorstep</p>
              </div>
    
              {/* Social Media Icons */}
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
    
            {/* Footer Links */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6">
              <div className="text-sm text-gray-400">
                © 2024 FoodieDelight. All rights reserved.
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </footer>
      );
    };

export default Footer;
