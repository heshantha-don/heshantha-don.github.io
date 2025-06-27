import React from "react";
import '@fortawesome/free-regular-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React Native",
    "JavaScript",
    "TypeScript",
    "Swift",
    "Objective-C",
    "UIKit",
    "SwiftUI",
    "SQL",
    "Redux Toolkit",
    "CoreData",
    "SwiftData",
    "Unit Testing",
    "Bluetooth (BLE)",
    "Gitlab",
    "Accessibility",
    "App Store",
    "Google Play Store",
    "CICD (GitHub, Xcode Cloud)",
    "Dependency Management (NPM, NPX, CocoaPods, Swift Package Manager)",
    "Git",
    "Design patterns",
    "MVVM",
    "MVP",
    "Clean Architecture",
    "Generics",
    "SOLID",
    "OOP",
    "Data structures and algorithms",
    "RESTful API (Fetch, URLSession, Alamofire)",
    "JSON",
    "Memory profiling (Instruments)",
    "Async Await",
    "GCD",
    "NSOperationQueue",
    "React Hooks",
    "Combine",
    "Observation",
    "Actor",
    "Code smell",
    "Troubleshooting and debugging",
    "Keychain",
    "Biometric authentication",
    "SDLC (Scrum, Agile)",
    "QR payments",
    "In-app purchases (Stripe, StoreKit)",
    "Planning poker",
    "AdMob",
    "Firebase",
    "Google Analytics",
    "Crashlytics",
    "Bitbucket",
    "Jira"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Who I am</h1>
                <div className="skill">
                    <p>Hello, I’m Heshantha, a mobile application developer based in United Kingdom. With over five years of experience, I’ve contributed to a wide range of products across fintech, education, and marine industries, focusing on clean architecture, smooth performance, and strong security practices. My goal is always to create apps that are not only functional, but also intuitive and genuinely helpful to the people who use them.</p>
                    <p>I enjoy working in agile, collaborative environments where clean code, open dialogue, and continuous learning are part of the culture. Over the years, I’ve worked across all stages of the development process, including planning, prototyping, release, iteration, and ongoing support. I regularly contribute to code reviews, mentor junior developers, and help shape thoughtful solutions that meet both user needs and business goals. Whether building features from scratch or improving existing ones, I always aim to write maintainable, scalable code that makes a difference.</p>
                    <p>I’m currently open to joining a new team where I can grow, share my skills, and take on meaningful challenges. In the meantime, I enjoy building my own products, writing articles, and immersing myself in books that broaden my perspective. I’m always eager to keep learning and push the boundaries of what I can do. While developing my skills, I also want to contribute to the team I work with by making a positive impact using my skill set.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
        </div>
    </div>
    );
}

export default Expertise;