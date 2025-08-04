'use client';

import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  summary: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    role: 'DevOps Engineer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2024 – Present',
    location: 'Remote',
    summary:
      'Automated deployment processes, reduced deployment time by 60%, and improved system reliability through infrastructure as code.',
    achievements: [
      'Reduced deployment time from 2 hours to 30 minutes',
      'Implemented monitoring for 50+ microservices',
      'Achieved 99.9% uptime across production systems',
    ],
  },
  {
    role: 'Tester',
    company: 'Accenture',
    duration: 'Jul 2022 – Dec 2023',
    location: 'Mumbai, India',
    summary:
      'Performed functional and regression testing across multiple client applications, ensuring product quality and stability.',
    achievements: [
      'Detected and reported 300+ bugs',
      'Improved test coverage by 40%',
      'Led UAT cycles with client teams',
    ],
  },
];

export default function ExperienceCard() {
  return (
    <section
      className="flex flex-col items-center px-4 py-16 space-y-12"
      style={{ backgroundColor: 'var(--skills-bg)' }}
    >
      <div>
        <h2 className="text-4xl font-bold text-[var(--projects-title)] text-center">
          Professional <span className="text-green-500">Experience</span>
        </h2>
        <p className="mt-2 text-gray-400 text-center max-w-xl mx-auto">
          Building expertise in DevOps practices, QA methodologies, and cloud infrastructure.
        </p>
      </div>

      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="w-full max-w-3xl rounded-xl p-6 md:p-8 border shadow-md transition-colors"
          style={{
            backgroundColor: 'var(--projects-card-bg)',
            borderColor: 'var(--projects-card-border)',
            color: 'var(--projects-text)',
          }}
        >
          <h3 className="text-xl font-bold text-[var(--projects-title)]">{exp.role}</h3>
          <p className="text-green-500 font-medium mt-1">{exp.company}</p>

          <div className="flex items-center text-sm text-gray-400 mt-3 space-x-4">
            <div className="flex items-center gap-1">
              <Calendar size={16} strokeWidth={1.75} /> <span>{exp.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} strokeWidth={1.75} /> <span>{exp.location}</span>
            </div>
          </div>

          <p className="mt-4 leading-relaxed text-[var(--projects-text)]">{exp.summary}</p>

          <p className="mt-5 font-semibold text-[var(--projects-title)]">Key Achievements:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-[var(--projects-text)]">
            {exp.achievements.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
