"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ai_1 = require("react-icons/ai");
const react_2 = require("react");
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = (0, react_2.useState)(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (<div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-2xl lg:text-3xl font-bold">Ubaid</div>
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink  text-lg lg:text-xl"><a href="#hero">Home</a></li>
          <li className="menuLink text-lg lg:text-xl"><a href="#about">About</a></li>
          <li className="menuLink text-lg lg:text-xl"><a href="#projects">Projects</a></li>
          <li className="menuLink text-lg lg:text-xl"><a href="#skills">Skills</a></li>
          <li className="menuLink text-lg lg:text-xl"><a href="#contact">Contact</a></li>
        </ul>
        <div className="md:hidden" onClick={toggleMenu}>

          {isMenuOpen ? <ai_1.AiOutlineClose size={30}/> :
            <ai_1.AiOutlineMenu size={30}/>}
        </div>
      </div>
      {isMenuOpen && (<ul className="flex flex-col gap-4 mt-4 md:hidden">
          <li className="menuLink"><a href="#hero" onClick={toggleMenu}>Home</a></li>
          <li className="menuLink"><a href="#about" onClick={toggleMenu}>About</a></li>
          <li className="menuLink"><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li className="menuLink"><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li className="menuLink"><a href="#contact" onClick={toggleMenu}>Contact</a></li>

        </ul>)}


    </div>);
};
exports.default = Navbar;
