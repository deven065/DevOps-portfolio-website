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
    role: 'Senior DevOps Engineer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2024 – Present',
    location: 'Remote',
    summary:
      'Leading DevOps initiatives for enterprise clients, architecting cloud-native solutions, and implementing robust CI/CD pipelines serving 2M+ users. Drove infrastructure automation resulting in 60% faster deployments and 40% cost reduction.',
    achievements: [
      '🚀 Reduced deployment time from 2 hours to 30 minutes (60% improvement)',
      '☁️ Migrated 50+ microservices to Kubernetes on AWS EKS with zero downtime',
      '📊 Implemented full-stack observability with Prometheus & Grafana monitoring 100+ servers',
      '💰 Optimized AWS infrastructure saving $50K+ annually through auto-scaling and resource optimization',
      '🔒 Achieved SOC 2 compliance by implementing security scanning in CI/CD pipelines',
      '⚡ Improved application performance by 40% through infrastructure optimization',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'CloudScale Systems',
    duration: 'Jul 2023 – Dec 2023',
    location: 'Hybrid',
    summary:
      'Spearheaded infrastructure automation and container orchestration projects. Built production-grade Kubernetes clusters and implemented GitOps workflows with ArgoCD.',
    achievements: [
      '🐳 Containerized 30+ legacy applications using Docker reducing deployment complexity by 70%',
      '🔄 Implemented Jenkins pipelines automating 100+ daily deployments',
      '📈 Designed disaster recovery strategy achieving RPO of 1 hour and RTO of 4 hours',
      '🛡️ Set up centralized logging with ELK stack processing 1M+ logs daily',
      '🤝 Mentored 3 junior engineers on DevOps best practices and tools',
    ],
  },
  {
    role: 'QA Engineer → DevOps Transition',
    company: 'Accenture',
    duration: 'Jul 2022 – Jun 2023',
    location: 'Mumbai, India',
    summary:
      'Started career in QA testing and transitioned to DevOps by automating test infrastructure and building CI/CD pipelines. Gained foundational experience in software development lifecycle and quality assurance.',
    achievements: [
      '✅ Detected and resolved 300+ bugs improving product quality',
      '🤖 Automated regression testing reducing testing time by 50%',
      '🔧 Built Docker-based test environments for consistent testing',
      '📋 Improved test coverage from 60% to 85% across applications',
      '🚦 Integrated automated testing into CI/CD pipelines with Jenkins',
    ],
  },
];

export default function ExperienceCard() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center px-4 py-20 space-y-12"
      style={{ backgroundColor: 'var(--skills-bg)' }}
    >
      <div>
        <h2 className="text-4xl font-bold text-[var(--projects-title)] text-center">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">Journey</span>
        </h2>
        <p className="mt-2 text-gray-400 text-center max-w-2xl mx-auto">
          Proven track record of delivering scalable infrastructure solutions and driving operational excellence 
          through automation and DevOps best practices
        </p>
      </div>

      {/* Timeline */}
      <div className="w-full max-w-4xl relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`flex items-center mb-12 ${
              idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-col`}
          >
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-[var(--skills-bg)] z-10" />

            {/* Card */}
            <div
              className={`w-full md:w-5/12 ${
                idx % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              }`}
            >
              <div
                className="rounded-xl p-6 border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--projects-card-bg)',
                  borderColor: 'var(--projects-card-border)',
                  color: 'var(--projects-text)',
                }}
              >
                <h3 className="text-xl font-bold text-[var(--projects-title)] mb-1">
                  {exp.role}
                </h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 font-semibold">
                  {exp.company}
                </p>

                <div className="flex items-center text-sm text-gray-400 mt-3 space-x-4 flex-wrap gap-2">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} strokeWidth={1.75} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} strokeWidth={1.75} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="mt-4 leading-relaxed text-sm text-[var(--projects-text)]">
                  {exp.summary}
                </p>

                <div className="mt-5">
                  <p className="font-semibold text-[var(--projects-title)] mb-2">
                    Key Achievements:
                  </p>
                  <ul className="space-y-2 text-sm">
                    {exp.achievements.map((point, i) => (
                      <li
                        key={i}
                        className="text-[var(--projects-text)] flex items-start gap-2"
                      >
                        <span className="mt-0.5">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
