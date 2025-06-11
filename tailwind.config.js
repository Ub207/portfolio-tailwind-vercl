"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "15px",
            },
            colors: {
                accent: "#08E95E"
            },
        },
    },
    plugins: [],
};
exports.default = config;
