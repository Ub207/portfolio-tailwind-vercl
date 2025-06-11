"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const react_1 = require("react");
const Hero_1 = __importDefault(require("@/components/Hero"));
const Projects_1 = __importDefault(require("@/components/Projects"));
const Skills_1 = __importDefault(require("@/components/Skills"));
const Contact_1 = __importDefault(require("@/components/Contact"));
const About_1 = __importDefault(require("@/components/About"));
const aos_1 = __importDefault(require("aos"));
require("aos/dist/aos.css");
function Home() {
    (0, react_1.useEffect)(() => {
        aos_1.default.init({
            easing: "ease-out-back",
            duration: 1200,
            delay: 100,
            mirror: true,
            anchorPlacement: "bottom-bottom",
            offset: 160,
        });
        aos_1.default.refresh();
    }, []);
    return (<main>
      <Hero_1.default />
      <Projects_1.default />
      <Skills_1.default />
      <Contact_1.default />
      <About_1.default />
    </main>);
}
