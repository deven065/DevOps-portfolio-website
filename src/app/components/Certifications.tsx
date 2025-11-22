'use client';

import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  icon: string;
  verifyLink?: string;
}

const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'Valid until Dec 2026',
    credentialId: 'AWS-SAA-2024',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    verifyLink: '#',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'Valid until Jun 2026',
    credentialId: 'LF-CKA-2024',
    icon: 'https://cdn.simpleicons.org/kubernetes/326CE5',
    verifyLink: '#',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    date: 'Valid until Mar 2027',
    credentialId: 'HC-TF-2024',
    icon: 'https://cdn.simpleicons.org/terraform/7B42BC',
    verifyLink: '#',
  },
  {
    name: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: 'Valid until Sep 2026',
    credentialId: 'DCA-2024',
    icon: 'https://cdn.simpleicons.org/docker/2496ED',
    verifyLink: '#',
  },
];

export default function Certifications() {
  return (
    <section
      className="py-20 px-4"
      style={{
        backgroundColor: 'var(--projects-bg)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            style={{ color: 'var(--projects-title)' }}
          >
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              Certifications
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in cloud infrastructure,
            container orchestration, and DevOps tools
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                borderColor: "rgba(59, 130, 246, 0.5)",
                transition: { duration: 0.3 }
              }}
              className="rounded-xl p-6 border shadow-md hover:shadow-xl transition-all duration-300 hover-lift gpu-accelerated cursor-pointer group"
              style={{
                backgroundColor: 'var(--projects-card-bg)',
                borderColor: 'var(--projects-card-border)',
                transformStyle: "preserve-3d"
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={cert.icon}
                    alt={cert.issuer}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ color: 'var(--projects-title)' }}
                  >
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Award size={14} />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: 'var(--projects-tag-bg)',
                        color: 'var(--projects-tag-text)',
                      }}
                    >
                      {cert.credentialId}
                    </span>
                    {cert.verifyLink && (
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1 text-sm"
                      >
                        Verify <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
