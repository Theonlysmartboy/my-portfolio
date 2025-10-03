import { Briefcase, Home, Mail, User } from "lucide-react";

export default function App() {
    return (
        <div className="font-sans">
            {/* Navbar */}
            <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-indigo-600">Joseph.dev</h1>
                    <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
                        <li className="flex items-center gap-2">
                            <Home size={18} />
                            <a href="#hero" className="hover:text-indigo-600">Home</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <User size={18} />
                            <a href="#about" className="hover:text-indigo-600">About</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Briefcase size={18} />
                            <a href="#projects" className="hover:text-indigo-600">Projects</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={18} />
                            <a href="#contact" className="hover:text-indigo-600">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-center px-4">
                <h2 className="text-6xl font-extrabold mb-6 leading-tight">
                    Hi, I'm <span className="text-yellow-300">Joseph</span> 👋
                </h2>
                <p className="text-xl mb-8 max-w-2xl">
                    Full-Stack Developer passionate about <span className="font-semibold">building modern web apps</span> with Laravel, React & TailwindCSS.
                </p>
                <div className="flex gap-4">
                    <a
                        href="#projects"
                        className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition"
                    >
                        Contact Me
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 max-w-5xl mx-auto px-6 text-center">
                <h3 className="text-4xl font-bold mb-8 text-indigo-600">About Me</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                    I’m a full-stack developer based in Kenya with a passion for crafting clean, scalable,
                    and user-friendly applications. My expertise is in Laravel, React, and TailwindCSS.
                    <br /><br />
                    I enjoy learning new technologies, contributing to open-source, and helping others grow.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="text-4xl font-bold mb-12 text-center text-indigo-600">Projects</h3>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: "Clinic Management System", desc: "Healthcare system built with Laravel, React & MySQL." },
                            { title: "Portfolio Website", desc: "A sleek personal portfolio powered by React & TailwindCSS." },
                            { title: "POS System", desc: "Point of Sale app with inventory & financial reports." },
                        ].map((project, i) => (
                            <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                                <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                                <p className="text-gray-600 mb-4">{project.desc}</p>
                                <a href="#" className="text-indigo-600 font-semibold hover:underline">View Details →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className="text-4xl font-bold mb-8">Contact Me</h3>
                    <p className="text-lg mb-6">
                        Got a project in mind? Let’s build something amazing together.
                    </p>
                    <form className="space-y-4 max-w-lg mx-auto">
                        <input type="text" placeholder="Your Name" className="w-full border rounded-lg px-4 py-3 text-gray-900" />
                        <input type="email" placeholder="Your Email" className="w-full border rounded-lg px-4 py-3 text-gray-900" />
                        <textarea placeholder="Your Message" rows={5} className="w-full border rounded-lg px-4 py-3 text-gray-900"></textarea>
                        <button type="submit" className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center bg-gray-900 text-gray-400">
                © {new Date().getFullYear()} Joseph Odhiambo • Built with ❤️ using React & TailwindCSS
            </footer>
        </div>
    );
}
