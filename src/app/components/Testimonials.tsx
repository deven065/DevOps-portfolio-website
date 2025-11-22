'use client';

import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Engineering Manager',
    company: 'Tech Solutions Inc.',
    testimonial:
      'Outstanding DevOps engineer who transformed our deployment pipeline. Cut our release time by 60% and significantly improved system reliability. A true asset to any team.',
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'CloudScale Systems',
    testimonial:
      'Exceptional expertise in Kubernetes and AWS. Designed and implemented a scalable infrastructure that handles 10x our previous traffic. Highly recommend for any DevOps project.',
    avatar: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Lead',
    company: 'StartupXYZ',
    testimonial:
      'Incredible problem solver with deep knowledge of CI/CD pipelines. Helped us achieve zero-downtime deployments and built monitoring systems that saved us from multiple potential outages.',
    avatar: 'ER',
  },
];

export default function Testimonials() {
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
            Client{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Testimonials
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              className="rounded-xl p-6 border shadow-md hover:shadow-xl transition-all duration-300 relative hover-lift gpu-accelerated group"
              style={{
                backgroundColor: 'var(--projects-card-bg)',
                borderColor: 'var(--projects-card-border)',
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-500 opacity-20">
                <Quote size={40} />
              </div>

              {/* Testimonial Text */}
              <p
                className="text-sm leading-relaxed mb-6 relative z-10"
                style={{ color: 'var(--projects-text)' }}
              >
                &quot;{testimonial.testimonial}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold"
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: 'var(--projects-title)' }}
                  >
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
