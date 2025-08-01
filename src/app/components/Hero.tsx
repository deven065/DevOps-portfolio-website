import { Download } from "lucide-react";
import { FaEnvelope, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center text-center px-4"
            style={{
                backgroundColor: 'var(--body-bg)',
                color: 'var(--text-main)',
            }}
        >
            {/* Role Badge */}
            <div className="mb-4">
                <span className="px-4 py-1 rounded-full border border-blue-400 text-blue-400 text-sm">
                    DevOps Engineer
                </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    Scalable
                </span>{" "}
                Infrastructure
            </h1>

            {/* Description */}
            <p className="text-[var(--text-main)] dark:text-gray-400 max-w-2xl text-lg sm:text-xl mb-8">
                DevOps Engineer with 1 year of experience in automating deployment processes,
                managing cloud infrastructure, and building robust CI/CD pipelines that drive
                efficiency and reliability.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                    href="/Deven's_Resume.pdf" // replace with actual resume path
                    download
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2"
                >
                    <Download /> Download Resume
                </a>

                <a
                    href="/contact"
                    className="button-link border border-blue-400 dark:border-white hover:bg-gray-100 dark:hover:bg-white hover:text-black dark:hover:text-black px-6 py-3 rounded-md flex items-center justify-center gap-2 transition duration-300"
                    style={{
                        border: '1px solid var(--button-border-light)',
                    }}
                >
                    <FaEnvelope /> Get in Touch
                </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 text-2xl">
                <a
                    className="social-github text-[var(--text-main)] dark:text-gray-400 dark:hover:text-white transition-colors"
                    href="https://github.com/deven065"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    className="social-linkedin text-[var(--text-main)] dark:text-gray-400 dark:hover:text-blue-600 transition-colors"
                    href="https://linkedin.com/in/dev55"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a
                    className="social-google text-[var(--text-main)] dark:text-gray-400 dark:hover:text-red-500 transition-colors"
                    href="mailto:dipenrikkaame@gmail.com"
                >
                    <FaGoogle />
                </a>
            </div>

        </section>
    );
};

export default Hero;
