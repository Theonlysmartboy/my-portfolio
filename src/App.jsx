import React, { useState } from "react";

export default function App() {
    const [currentPage, setCurrentPage] = useState("About");
    const [activeCategory, setActiveCategory] = useState("All");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const pages = ["About", "Skills", "Experience", "Projects", "Contact"];

    const projectCategories = ["All", "Web Applications", "Mobile Apps", "Management Systems", "E-commerce"];

    const projects = [
        {
            id: 1,
            title: "Payroll Management System",
            description: "Comprehensive payroll processing system with employee management and reporting features.",
            category: "Management Systems",
            image: "/projects/payroll-system.png",
            technologies: ["Laravel", "Spring Boot", "MySQL", "React"],
            link: "#"
        },
        {
            id: 2,
            title: "E-commerce Platform",
            description: "Full-stack e-commerce solution with inventory management and payment integration.",
            category: "E-commerce",
            image: "/projects/ecommerce-platform.jpg",
            technologies: ["Laravel", "MySQL", "React", "Daraja API", "Ipay API", "PayStack API"],
            link: "#"
        },
        {
            id: 3,
            title: "Inventory Tracking App",
            description: "Mobile application for real-time inventory tracking and management.",
            category: "Mobile Apps",
            image: "/projects/inventory-app.png",
            technologies: ["React Native", "Firebase", "Node.js"],
            link: "#"
        },
        {
            id: 4,
            title: "Hospital Management System",
            description: "Enterprise-level system for patient records, appointments, and medical staff management.",
            category: "Management Systems",
            image: "/projects/hospital-system.png",
            technologies: ["Laravel", "Flutter", "MySQL", "Firebase"],
            link: "#"
        },
        {
            id: 5,
            title: "Task Management Dashboard",
            description: "Collaborative project management tool with real-time updates and team collaboration features.",
            category: "Web Applications",
            image: "/projects/task-dashboard.jpg",
            technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
            link: "#"
        },
        {
            id: 6,
            title: "Online Learning Platform",
            description: "Educational platform with course management, video streaming, and progress tracking.",
            category: "Web Applications",
            image: "/projects/learning-platform.jpg",
            technologies: ["Laravel", "MySQL", "Vue.js", "AWS S3"],
            link: "#"
        }
    ];

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    // Contact functionality
    const phoneNumber = "+254702293572";
    const emailAddress = "mr.josephodhiambo@proton.me";

    const handleWhatsAppClick = () => {
        const message = "Hello Joseph, I came across your portfolio and would like to connect with you.";
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleEmailClick = () => {
        const subject = "Interest in Your Services";
        const body = "Hello Joseph,\n\nI came across your portfolio and would like to discuss potential opportunities.";
        const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send via WhatsApp
        const whatsappMessage = `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

        // Send via Email
        const emailSubject = `Portfolio Contact: ${formData.subject}`;
        const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        // Open both (user can choose)
        window.open(whatsappUrl, '_blank');
        setTimeout(() => {
            window.location.href = mailtoUrl;
        }, 1000);

        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });

        alert("Thank you for your message! You'll be redirected to WhatsApp and email to send your message.");
    };

    return (
        <div className="flex min-h-screen font-sans bg-indigo-950 text-white">
            {/* Sidebar */}
            <aside className="w-80 bg-indigo-900 rounded-r-3xl shadow-xl sticky top-0 h-screen p-8 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-yellow-400">
                    <img src="/profile.png" alt="Joseph Odhiambo" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-2xl font-bold mb-2 text-yellow-400 text-center">Joseph Odhiambo</h1>
                <p className="text-yellow-600 mb-4 text-center">Full-Stack Developer</p>

                <div className="flex flex-col gap-3 mb-6 text-center text-white">
                    <button
                        onClick={handleEmailClick}
                        className="hover:text-yellow-400 transition cursor-pointer flex items-center justify-center gap-2"
                    >
                        📧 {emailAddress}
                    </button>
                    <button
                        onClick={handleWhatsAppClick}
                        className="hover:text-yellow-400 transition cursor-pointer flex items-center justify-center gap-2"
                    >
                        📱 {phoneNumber}
                    </button>
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
                    <h2 className="text-4xl font-bold text-yellow-400">{currentPage}</h2>
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
                            <h3 className="text-2xl font-bold mb-4 text-yellow-400"> Hello, I'm Odhiambo Joseph</h3>
                            <h4 className="font-bold text-white">👨‍💻 Senior Java & Laravel Developer | Full Stack Specialist | Clean Code Advocate</h4>
                            <p className="text-white max-w-3xl leading-relaxed">
                                I'm a technically versatile developer With 10+ years of hands-on experience building scalable, high-performance applications, I specialize in Java (Spring Boot) and PHP (Laravel) for delivering robust backend solutions. I'm passionate about clean architecture, RESTful APIs, and optimizing systems for speed and reliability.
                            </p>
                            <p className="text-white"> My expertise extends to modern frontend frameworks like React and Next.js, enabling me to create seamless user experiences. I thrive in agile environments, collaborating closely with cross-functional teams to deliver impactful software solutions that drive business success.
                            </p>
                        </section>

                    )}

                    {currentPage === "Skills" && (
                        <section className="space-y-6">
                            <h3 className="text-2xl font-bold mb-4 text-yellow-400"> 🔧 What I Bring to the Table</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-indigo-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                                    <h4 className="text-2xl font-semibold text-yellow-600 mb-2">Backend Development</h4>
                                    <p className="text-white">Expertise in Java (Spring, Hibernate) & Laravel (Eloquent, Livewire).</p>
                                </div>
                                <div className="bg-indigo-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                                    <h4 className="text-2xl font-semibold text-yellow-600 mb-2">API Design</h4>
                                    <p className="text-white">Advance Knowledge In crafting Secure, scalable REST & GraphQL APIs.</p>
                                </div>
                                <div className="bg-indigo-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                                    <h4 className="text-2xl font-semibold text-yellow-600 mb-2">Database Mastery</h4>
                                    <p className="text-white">SQL (MySQL, PostgreSQL) & NoSQL (MongoDB, Redis, Firebase).</p>
                                </div>
                                <div className="bg-indigo-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                                    <h4 className="text-2xl font-semibold text-yellow-600 mb-2">DevOps & Deployment</h4>
                                    <p className="text-white">Docker, AWS, CI/CD pipelines.</p>
                                </div>
                                <div className="bg-indigo-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                                    <h4 className="text-2xl font-semibold text-yellow-600 mb-2">Problem Solver</h4>
                                    <p className="text-white"> Debugging complex systems, improving legacy code and optimizing performance</p>
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
                            <h3 className="text-2xl font-bold mb-4 text-yellow-400"> 💼 Why Work With Me?</h3>
                            <p className="text-white">I bridge the gap between business needs and technical execution, crafting solutions that are not only functional but also maintainable and future-proof. Whether it's a startup MVP or an enterprise-grade system, I transform challenges into seamless digital experiences.</p>
                            <p>Following are some of my happy clients/employers</p>
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
                                <div className="bg-indigo-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                                    <h4 className="text-2xl font-semibold text-yellow-600 mb-1">Maseno University Kisumu Campus  </h4>
                                    <p className="text-white">Lab Assistant & programming students Trainer | 3Yrs+</p>
                                </div>
                            </div>
                        </section>
                    )}

                    {currentPage === "Projects" && (
                        <section className="space-y-8">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold mb-4 text-yellow-400">🚀 My Projects Gallery</h3>
                                <p className="text-white max-w-2xl mx-auto">
                                    Explore my portfolio of projects across different categories. Each project represents unique challenges and innovative solutions.
                                </p>
                            </div>
                            {/* Category Tabs */}
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {projectCategories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                                ? "bg-yellow-400 text-indigo-900 shadow-lg"
                                                : "bg-indigo-700 text-white hover:bg-indigo-600"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Projects Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="bg-indigo-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
                                    >
                                        {/* Project Image */}
                                        <div className="h-48 bg-indigo-700 relative overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    console.error(`Failed to load image: ${project.image}`);
                                                    e.target.style.display = 'none';
                                                    // Show fallback
                                                    const fallback = e.target.parentElement.querySelector('.image-fallback');
                                                    if (fallback) fallback.style.display = 'flex';
                                                }}
                                            />
                                            <div className="image-fallback absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center hidden">
                                                <div className="text-center">
                                                    <span className="text-4xl">📁</span>
                                                    <p className="text-sm mt-2">Image not found</p>
                                                    <p className="text-xs">{project.image}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Project Content */}
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <h4 className="text-xl font-semibold text-yellow-400">
                                                    {project.title}
                                                </h4>
                                                <span className="bg-indigo-600 text-xs px-2 py-1 rounded-full">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <p className="text-white text-sm mb-4 leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-indigo-900 text-yellow-300 text-xs px-2 py-1 rounded"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Action Button */}
                                            <button className="w-full bg-yellow-400 text-indigo-900 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
                                                View Project Details
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {currentPage === "Contact" && (
                        <section className="space-y-8">
                            <div className="text-center">
                                <h3 className="text-4xl font-bold mb-4 text-yellow-400">Let's Work Together</h3>
                                <p className="text-white text-lg max-w-2xl mx-auto">
                                    Ready to bring your next project to life? Get in touch and let's discuss how we can create something amazing together.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Contact Information */}
                                <div className="bg-indigo-800 rounded-xl p-8 shadow-lg">
                                    <h4 className="text-2xl font-bold mb-6 text-yellow-400">Get In Touch</h4>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 p-4 bg-indigo-700 rounded-lg hover:bg-indigo-600 transition cursor-pointer"
                                            onClick={handleEmailClick}>
                                            <div className="text-2xl">📧</div>
                                            <div>
                                                <p className="font-semibold">Email</p>
                                                <p className="text-sm">{emailAddress}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 p-4 bg-indigo-700 rounded-lg hover:bg-indigo-600 transition cursor-pointer"
                                            onClick={handleWhatsAppClick}>
                                            <div className="text-2xl">💬</div>
                                            <div>
                                                <p className="font-semibold">WhatsApp</p>
                                                <p className="text-sm">{phoneNumber}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 p-4 bg-indigo-700 rounded-lg">
                                            <div className="text-2xl">📍</div>
                                            <div>
                                                <p className="font-semibold">Location</p>
                                                <p className="text-sm">Kisumu, Kenya</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h5 className="text-lg font-semibold mb-4 text-yellow-400">Quick Connect</h5>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={handleWhatsAppClick}
                                                className="flex-1 bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                                            >
                                                💬 WhatsApp
                                            </button>
                                            <button
                                                onClick={handleEmailClick}
                                                className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                                            >
                                                📧 Email
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div className="bg-indigo-800 rounded-xl p-8 shadow-lg">
                                    <h4 className="text-2xl font-bold mb-6 text-yellow-400">Send Message</h4>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full bg-indigo-700 border border-indigo-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full bg-indigo-700 border border-indigo-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">Subject *</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-indigo-700 border border-indigo-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                                placeholder="Project Discussion"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">Message *</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows="5"
                                                className="w-full bg-indigo-700 border border-indigo-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                                placeholder="Tell me about your project..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-yellow-400 hover:bg-yellow-300 text-indigo-900 py-3 rounded-lg font-semibold transition duration-300"
                                        >
                                            Send Message via WhatsApp & Email
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
}