import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="w-full border-t"
      style={{
        backgroundColor: 'var(--projects-bg)',
        color: 'var(--projects-text)',
        borderColor: 'var(--projects-card-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-center sm:text-left">
          © {new Date().getFullYear()} DevOps Portfolio. Built with Next.js, TypeScript & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4 sm:gap-6 text-lg sm:text-xl">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-github hover:text-gray-400 transition duration-200"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dipenrikkaame/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-linkedin hover:text-blue-500 transition duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:you@example.com"
            className="social-email hover:text-red-400 transition duration-200"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
