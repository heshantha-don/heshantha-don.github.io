import React from "react";
import '@fortawesome/free-regular-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Artificial intelligence (AI)", 
    "Multi agent workflows", 
    "Vibe coding (Cursor, Codex, OpenClaw)", 
    "AI Automation",
    "React Native",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Swift",
    "Objective-C",
    "UIKit",
    "SwiftUI",
    "SQL",
    "Redux",
    "Redux Toolkit",
    "CoreData",
    "SwiftData",
    "Unit Testing",
    "Bluetooth (BLE)",
    "Gitlab",
    "Accessibility",
    "UI/UX Strategy",
    "Persona (User Experience)",
    "Ideation",
    "CICD (GitHub, Xcode Cloud)",
    "Yarn",
    "NPM",
    "NPX",
    "CocoaPods",
    "Swift Package Manager",
    "Design patterns",
    "MVVM",
    "MVP",
    "Clean Architecture",
    "Generics",
    "SOLID",
    "OOP",
    "Data structures and algorithms",
    "RESTful API (Fetch, Axios, URLSession, Alamofire)",
    "Bitbucket",
    "Git",
    "Jira",
    "Memory profiling (Instruments)",
    "React Hooks",
    "Promise",
    "Async Await",
    "GCD",
    "NSOperationQueue",
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
    "App Store",
    "Google Play Store"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Who I am</h1>
                <div className="skill">
                    <p>Hello, I’m Heshantha, a curious Tech Professional with over seven years of experience across healthcare, education, fintech, and marine tech. Right now, I’m at Open Bionics, where I help people with limb differences get the absolute best out of their prosthetic arms. My day-to-day involves diving into our ecosystem to troubleshoot and fix issues between the hardware devices and our app, working closely with both users and management to elevate the experience. We also use AI and automation to keep our workflows fast and reliable, so we can focus on what matters most: helping our users become heroes again.</p>
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