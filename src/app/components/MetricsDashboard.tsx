'use client';

import { TrendingUp, Server, Clock, Zap, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface Metric {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  color: string;
}

const metrics: Metric[] = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: '99.9%',
    label: 'Uptime Achieved',
    description: 'Production systems availability',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: '60%',
    label: 'Faster Deployments',
    description: 'Reduced from 2hrs to 30min',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    value: '50+',
    label: 'Microservices',
    description: 'Monitored & orchestrated',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <Server className="w-8 h-8" />,
    value: '100+',
    label: 'Servers Managed',
    description: 'Across multi-cloud infrastructure',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    value: '0',
    label: 'Security Breaches',
    description: 'Zero incidents in production',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: '5+',
    label: 'Teams Supported',
    description: 'Engineering teams enabled',
    color: 'from-indigo-500 to-blue-500',
  },
];

export default function MetricsDashboard() {
  return (
    <section
      className="py-20 px-4"
      style={{
        backgroundColor: 'var(--skills-bg)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--skills-title)' }}
          >
            Impact by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Numbers
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Measurable results and tangible impact delivered through DevOps excellence
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.08,
                rotate: [0, -2, 2, -2, 0],
                transition: { duration: 0.5 }
              }}
              className="rounded-2xl p-6 border shadow-lg relative overflow-hidden group hover-lift gpu-accelerated cursor-pointer"
              style={{
                backgroundColor: 'var(--skills-card-bg)',
                borderColor: 'var(--projects-card-border)',
                transformStyle: "preserve-3d"
              }}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${metric.color} text-white mb-4`}
                >
                  {metric.icon}
                </div>
                <h3
                  className="text-4xl font-bold mb-2"
                  style={{ color: 'var(--skills-text)' }}
                >
                  {metric.value}
                </h3>
                <p
                  className="text-lg font-semibold mb-1"
                  style={{ color: 'var(--skills-title)' }}
                >
                  {metric.label}
                </p>
                <p className="text-sm text-gray-400">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
