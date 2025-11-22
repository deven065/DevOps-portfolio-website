'use client';

import { Mail, Linkedin } from 'lucide-react';

export default function ConnectSection() {
  return (
    <section
      className="text-center px-4 py-20"
      style={{ backgroundColor: 'var(--projects-bg)' }}
    >
      <h2 className="text-4xl font-bold" style={{ color: 'var(--projects-title)' }}>
        Let&apos;s <span className="text-orange-500">Connect</span>
      </h2>

      <p
        className="mt-4 max-w-2xl mx-auto"
        style={{ color: 'var(--projects-text)' }}
      >
        Ready to discuss DevOps opportunities, collaborate on projects, or just chat about
        cloud infrastructure? I&apos;d love to hear from you!
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Send Message Button */}
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-white transition-all duration-300 hover:brightness-110"
          style={{
            background: 'linear-gradient(to right, #f97316, #dc2626)',
          }}
        >
          <Mail size={18} strokeWidth={1.8} />
          Send Message
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-colors border hover:bg-orange-600"
          style={{
            color: 'var(--projects-text)',
            borderColor: 'var(--projects-card-border)',
          }}
        >
          <Linkedin size={18} strokeWidth={1.8} />
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
}
