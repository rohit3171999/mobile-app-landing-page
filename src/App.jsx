import React from "react";

export default function App() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}>
            {/* Hero Section */}
            <section
                style={{
                    textAlign: "center",
                    padding: "80px 20px",
                    background: "linear-gradient(135deg, #6c63ff, #00c9ff)",
                    color: "#fff",
                }}
            >
                <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>AppEase</h1>
                <p style={{ fontSize: "20px", marginBottom: "30px" }}>
                    Organize Your Life, One Tap Away
                </p>
                <div>
                    <a
                        href="#appstore"
                        style={{
                            display: "inline-block",
                            margin: "10px",
                            padding: "12px 25px",
                            backgroundColor: "#000",
                            color: "#fff",
                            borderRadius: "6px",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Download on App Store
                    </a>
                    <a
                        href="#playstore"
                        style={{
                            display: "inline-block",
                            margin: "10px",
                            padding: "12px 25px",
                            backgroundColor: "#34a853",
                            color: "#fff",
                            borderRadius: "6px",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Get it on Google Play
                    </a>
                </div>
                <div style={{ marginTop: "40px" }}>
                    <img
                        src="https://via.placeholder.com/250x500"
                        alt="App Mockup"
                        style={{ borderRadius: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
                    />
                </div>
            </section>

            {/* Features Section */}
            <section style={{ padding: "60px 20px", textAlign: "center" }}>
                <h2>Features</h2>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "20px",
                        marginTop: "40px",
                    }}
                >
                    <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
                        <h3>Smart Reminders</h3>
                        <p>Never miss important tasks with intelligent alerts.</p>
                    </div>
                    <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
                        <h3>Daily Planner</h3>
                        <p>Plan your day efficiently and stay organized.</p>
                    </div>
                    <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
                        <h3>Progress Tracking</h3>
                        <p>Track goals and visualize your achievements.</p>
                    </div>
                    <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
                        <h3>Notifications</h3>
                        <p>Stay on top of deadlines with instant updates.</p>
                    </div>
                </div>
            </section>

            {/* Screenshots Section */}
            <section style={{ padding: "60px 20px", backgroundColor: "#eef2ff", textAlign: "center" }}>
                <h2>App Screenshots</h2>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "20px",
                        marginTop: "30px",
                    }}
                >
                    <img src="https://via.placeholder.com/200x400" alt="Screenshot 1" style={{ borderRadius: "12px" }} />
                    <img src="https://via.placeholder.com/200x400" alt="Screenshot 2" style={{ borderRadius: "12px" }} />
                    <img src="https://via.placeholder.com/200x400" alt="Screenshot 3" style={{ borderRadius: "12px" }} />
                </div>
            </section>

            {/* Testimonials Section */}
            <section style={{ padding: "60px 20px", textAlign: "center" }}>
                <h2>Loved by Our Users</h2>
                <p style={{ fontSize: "18px", marginTop: "20px" }}>⭐ 4.8/5 from 2,000+ users</p>
                <blockquote style={{ marginTop: "30px", fontStyle: "italic", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
                    “AppEase keeps me on track every day!” – Happy User
                </blockquote>
            </section>

            {/* Secondary CTA */}
            <section style={{ padding: "60px 20px", textAlign: "center", background: "#f0f0f0" }}>
                <h2>Download AppEase Now</h2>
                <div style={{ marginTop: "20px" }}>
                    <a
                        href="#appstore"
                        style={{
                            display: "inline-block",
                            margin: "10px",
                            padding: "12px 25px",
                            backgroundColor: "#000",
                            color: "#fff",
                            borderRadius: "6px",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Download on App Store
                    </a>
                    <a
                        href="#playstore"
                        style={{
                            display: "inline-block",
                            margin: "10px",
                            padding: "12px 25px",
                            backgroundColor: "#34a853",
                            color: "#fff",
                            borderRadius: "6px",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Get it on Google Play
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ backgroundColor: "#333", color: "#fff", textAlign: "center", padding: "20px" }}>
                <p>© 2025 AppEase. All rights reserved.</p>
                <div style={{ marginTop: "10px" }}>
                    <a href="#about" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>About</a>
                    <a href="#privacy" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>Privacy</a>
                    <a href="#terms" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>Terms</a>
                    <a href="#contact" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>Contact</a>
                </div>
            </footer>
        </div>
    );
}
