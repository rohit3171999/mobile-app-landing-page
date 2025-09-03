import React from "react";
import "./App.css"; // CSS file for styling

export default function App() {
    return (
        <div className="page">
            {/* Navbar */}
            <header className="navbar">
                <h1 className="logo">MyApp</h1>
                <nav>
                    <a href="#features">Features</a>
                    <a href="#screenshots">Screenshots</a>
                    <a href="#download">Download</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h2>Experience Productivity on the Go</h2>
                    <p>
                        MyApp is your all-in-one mobile solution to manage tasks, track
                        progress, and stay organized wherever you are.
                    </p>
                    <a
                        href="https://www.apple.com/app-store/"
                        className="app-store-btn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="Download on the App Store"
                        />
                    </a>
                </div>
                <div className="hero-image">
                    <img
                        src="https://via.placeholder.com/250x500"
                        alt="App Mockup"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <h3>Why Choose MyApp?</h3>
                <div className="feature-list">
                    <div className="feature-card">
                        <h4>⚡ Fast & Simple</h4>
                        <p>Get things done quickly with our easy-to-use interface.</p>
                    </div>
                    <div className="feature-card">
                        <h4>🔔 Smart Reminders</h4>
                        <p>Never miss a deadline with custom notifications.</p>
                    </div>
                    <div className="feature-card">
                        <h4>☁️ Cloud Sync</h4>
                        <p>Access your tasks anywhere, anytime, across all devices.</p>
                    </div>
                </div>
            </section>

            {/* Screenshots Section */}
            <section id="screenshots" className="screenshots">
                <h3>App Screenshots</h3>
                <div className="screenshot-gallery">
                    <img src="https://via.placeholder.com/200x400" alt="Screenshot 1" />
                    <img src="https://via.placeholder.com/200x400" alt="Screenshot 2" />
                    <img src="https://via.placeholder.com/200x400" alt="Screenshot 3" />
                </div>
            </section>

            {/* Download Section */}
            <section id="download" className="download">
                <h3>Get Started Today</h3>
                <p>Download MyApp now and boost your productivity instantly.</p>
                <a
                    href="https://www.apple.com/app-store/"
                    className="app-store-btn"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="Download on the App Store"
                    />
                </a>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 MyApp. All rights reserved.</p>
            </footer>
        </div>
    );
}
