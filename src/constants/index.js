import { browsericon, cssicon, framerlogo, htmlicon, jslogo, phone, reacticon, sliderhor, slidervert, tailwindicon } from "../assets/Icons";
import { AgeCalculator, NewsEra, Nike, Portfolio, TextMaster, ToDo, textrepeater } from "../assets/images";

const Navlinks = [
    { href: "#Projects", label: "Projects" },
    { href: "#mySkills", label: "Skills" },
    { href: "#AboutMe", label: "About" },
    { href: "#ContactMe", label: "Contact Me" },


]
const services = [
    {
        icon: sliderhor, title: "Responsive Web Develepment", description: "Developing websites that are visually appealing and function seamlessly across various devices and screen sizes. This involves using frameworks like Tailwind, and ensuring the site is optimized for both desktop and mobile experiences."
    },
    {
        icon: phone, title: "Interactive User Interface (UI)", description: "Creating interactive and engaging user interfaces using modern JavaScript frameworks and libraries. This includes building dynamic elements, such as sliders, modals, and forms, that enhance user experience."
    },
    {
        icon: slidervert, title: "Performance Optimization", description: "Ensuring websites load quickly and efficiently by optimizing code, images, and other resources. This involves techniques like lazy loading, minification, and caching."
    },
    {
        icon: browsericon, title: "Cross-Browser Compatibility", description: "Ensuring websites work consistently across different browsers and platforms. This includes testing and fixing issues related to HTML, CSS, and JavaScript compatibility."
    }
]
const toolkit = [
    {
        icon: htmlicon, title: "HTML"
    },
    {
        icon: cssicon, title: "CSS"
    },
    {
        icon: jslogo, title: "Javascript"
    },
    {
        icon: reacticon, title: "React"
    },
    {
        icon: tailwindicon, title: "Tailwind"
    },
    {
        icon: framerlogo, title: "Framer"
    }

]
const projects = [
    {
        image: Nike, tiltle: "Nike Landing Page", description: "Developed Nike Landing Page completely Styled and Responsive on all devices", href: "https://nike-shan.vercel.app/",
        skills: [
            {
                title: "React"
            },
            {
                title: "Vite"
            },
            {
                title: "Tailwind"
            }
        ]
    },
    {
        image: TextMaster, tiltle: "Text Master", description: "Developed text editor app  completely Styled functional , can write,change,modify ,preview and edit text", href: "https://textmaster.vercel.app",
        skills: [
            {
                title: "React"
            },
            {
                title: "Bootstrap"
            },

        ]
    },
    {
        image: NewsEra, tiltle: "NewsEra News Website", description: "Developed News app  completely Styled functional , can fetch News from database for different catagories", href: "https://newsera-five.vercel.app/",
        skills: [
            {
                title: "React"
            },
            {
                title: "Bootstrap"
            },
            {
                title: "MongoDB"
            }
        ]
    },
    {
        image: ToDo, tiltle: "ToDo App", description: "Developed ToDo app  completely Styled functional , can add delete and mark the daily ToDos", href: "/",
        skills: [
            {
                title: "HTML"
            },
            {
                title: "CSS"
            },
            {
                title: "Javascript"
            }
        ]
    },
    {
        image: Portfolio, tiltle: "Develepor Portfolio", description: "Developed Portfolio webpage  completely Styled and responsive with animation", href: "https://developerportfolio-mocha.vercel.app/",
        skills: [
            {
                title: "HTML"
            },
            {
                title: "CSS"
            },
            {
                title: "Javascript"
            }
        ]
    },
    {
        image: AgeCalculator, tiltle: "Age Calculator", description: "An Age Calculator   completely Styled and Functional. Displays age in years , months and days when Date of Birth is Entered", href: "https://developerportfolio-mocha.vercel.app/",
        skills: [
            {
                title: "HTML"
            },
            {
                title: "CSS"
            },
            {
                title: "Javascript"
            }
        ]
    }

]
export {
    Navlinks,
    services,
    toolkit,
    projects
}