import React, { useState } from "react";

export default function App() {
    const [currentPage, setCurrentPage] = useState("About");

    const pages = ["About", "Skills", "Experience", "Projects", "Contact"];

    return (
        <div className="flex min-h-screen font-sans bg-indigo-950 text-white">
            {/* Sidebar */}
            <aside className="w-80 bg-indigo-900 rounded-r-3xl shadow-xl sticky top-0 h-screen p-8 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-yellow-400">
                    <img src="/profile.jpg" alt="Joseph Odhiambo" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-2xl font-bold mb-2 text-yellow-400 text-center">Joseph Odhiambo</h1>
                <p className="text-yellow-600 mb-4 text-center">Full-Stack Developer</p>

                <div className="flex flex-col gap-3 mb-6 text-center text-white">
                    <p>📧 mr.josephodhiambo@proton.me</p>
                    <p>📱 +254 702 293 572</p>
                </div>

                <div className="mt-auto flex gap-4">
                    <a href="https://github.com/Theonlysmartboy" className="hover:text-yellow-400 transition">GitHub</a>
                    <a href="https://profile.codersrank.io/user/theonlysmartboy" className="hover:text-yellow-400 transition">CodersRank</a>
                    <a href="https://wakatime.com/@Tosby" className="hover:text-yellow-400 transition">WakaTime</a>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Nav */}
                <header className="flex justify-between items-center p-6 bg-indigo-950/90 backdrop-blur-md shadow-md sticky top-0 z-40">
                    <h2 className="text-2xl font-bold text-yellow-400">{currentPage}</h2>
                    <nav className="flex gap-6">
                        {pages.map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`font-medium text-white hover:text-yellow-400 transition ${currentPage === page ? "underline decoration-yellow-400" : ""
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </nav>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-12 space-y-20">
                    {currentPage === "About" && (
                        <section className="bg-indigo-800 rounded-xl p-8 shadow-lg">
                            <h3 className="text-4xl font-bold mb-4 text-yellow-400">About Me</h3>
                            <p className="text-white max-w-3xl leading-relaxed">
                                I'm a technically versatile developer with hands-on experience in building modern web applications using Laravel, React, TailwindCSS, and more. I thrive on crafting clean, performant, and scalable solutions.
                            </p>
                        </section>
                    )}

                    {currentPage === "Skills" && (
                        <section className="space-y-6">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-indigo-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                                    <h4 className="text-2xl font-semibold text-yellow-600 mb-2">Frameworks</h4>
                                    <p className="text-white">Laravel, React, Next.js, TailwindCSS</p>
                                </div>
                                <div className="bg-indigo-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                                    <h4 className="text-2xl font-semibold text-yellow-600 mb-2">Databases</h4>
                                    <p className="text-white">MySQL, PostgreSQL, MongoDB</p>
                                </div>
                                <div className="bg-indigo-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                                    <h4 className="text-2xl font-semibold text-yellow-600 mb-2">Other Skills</h4>
                                    <p className="text-white">System Admin, Networking, French & English</p>
                                </div>
                            </div>
                        </section>
                    )}

                    {currentPage === "Experience" && (
                        <section className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-indigo-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                                    <h4 className="text-2xl font-semibold text-yellow-600 mb-1">Kibos Sugar & Allied Industries</h4>
                                    <p className="text-white">Full Stack Developer | 4Yrs+</p>
                                </div>
                                <div className="bg-indigo-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                                    <h4 className="text-2xl font-semibold text-yellow-600 mb-1">Otema Technology</h4>
                                    <p className="text-white">Full Stack Developer | 3Yrs+</p>
                                </div>
                                <div className="bg-indigo-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                                    <h4 className="text-2xl font-semibold text-yellow-600 mb-1">Vsoft Solutions</h4>
                                    <p className="text-white">Remote Full Stack Developer | 1Yr+</p>
                                </div>
                            </div>
                        </section>
                    )}

                    {currentPage === "Projects" && (
                        <section className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-indigo-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                                    <h4 className="text-2xl font-semibold text-yellow-600 mb-2">Portfolio Website</h4>
                                    <p className="text-white">React & TailwindCSS portfolio showcasing projects and skills.</p>
                                </div>
                                <div className="bg-indigo-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                                    <h4 className="text-2xl font-semibold text-yellow-600 mb-2">E-commerce Platform</h4>
                                    <p className="text-white">Laravel-based full-stack e-commerce system.</p>
                                </div>
                            </div>
                        </section>
                    )}

                    {currentPage === "Contact" && (
                        <section className="bg-indigo-800 rounded-xl p-8 shadow-lg">
                            <h3 className="text-4xl font-bold mb-4 text-yellow-400">Contact Me</h3>
                            <p className="text-white mb-4">📧 mr.josephodhiambo@proton.me | 📱 +254 702 293 572</p>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
}
