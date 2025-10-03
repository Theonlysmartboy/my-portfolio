export default function App() {
    return (
        <div>
            {/* Navbar */}
            <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-indigo-600">MyPortfolio</h1>
                    <ul className="flex space-x-6 text-gray-700">
                        <li><a href="#about" className="hover:text-indigo-600">About</a></li>
                        <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
                        <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero */}
            <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <h2 className="text-5xl font-bold mb-4">Hi, I'm Joseph 👋</h2>
                <p className="text-xl mb-6">I build modern web apps with Laravel & React</p>
                <a
                    href="#services"
                    className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
                >
                    View My Work
                </a>
            </section>

            {/* About */}
            <section id="about" className="py-20 max-w-5xl mx-auto px-4">
                <h3 className="text-3xl font-bold mb-6 text-center">About Me</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                    I’m a passionate developer who loves building clean, modern, and scalable solutions.
                    Experienced in Laravel, Tailwind, React, and cloud deployments.
                </p>
            </section>

            {/* Services */}
            <section id="services" className="py-20 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <h3 className="text-3xl font-bold mb-12 text-center">Services</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-2">Web Development</h4>
                            <p>Full-stack apps using Laravel, React, and Tailwind CSS.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-2">API Integration</h4>
                            <p>Seamless third-party service integrations for your apps.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-2">Deployment</h4>
                            <p>Cloud hosting, CI/CD pipelines, and scalable environments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 max-w-4xl mx-auto px-4">
                <h3 className="text-3xl font-bold mb-6 text-center">Contact Me</h3>
                <form className="space-y-4 max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full border rounded-lg px-4 py-2"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
                    >
                        Send
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center bg-gray-800 text-white">
                © {new Date().getFullYear()} Joseph Odhiambo. All rights reserved.
            </footer>
        </div>
    );
}
