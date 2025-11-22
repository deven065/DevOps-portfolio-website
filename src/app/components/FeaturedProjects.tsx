'use client';

import React from "react";
import { Github, ExternalLink, TrendingUp, Users, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  status: string;
  tags: string[];
  metrics: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }[];
  highlights: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Kubernetes Multi-Cloud Orchestration Platform",
    description:
      "Architected and deployed a production-grade Kubernetes cluster spanning AWS and Azure, implementing service mesh with Istio, automated scaling, and multi-region failover capabilities.",
    status: "Production",
    tags: ["Kubernetes", "AWS EKS", "Azure AKS", "Istio", "Terraform", "Helm"],
    metrics: [
      { icon: <Users size={16} />, label: "Users Served", value: "2M+" },
      { icon: <TrendingUp size={16} />, label: "Uptime", value: "99.95%" },
      { icon: <Zap size={16} />, label: "Response Time", value: "<100ms" },
    ],
    highlights: [
      "Reduced infrastructure costs by 40% through auto-scaling",
      "Achieved zero-downtime deployments with blue-green strategy",
      "Implemented GitOps workflow with ArgoCD",
    ],
    github: "https://github.com/deven065",
    demo: "#",
  },
  {
    title: "Automated CI/CD Pipeline with Security Scanning",
    description:
      "Designed enterprise-grade CI/CD pipeline integrating Jenkins, SonarQube, and Trivy for automated testing, security scanning, and deployment to AWS ECS with rollback capabilities.",
    status: "Production",
    tags: ["Jenkins", "Docker", "AWS ECS", "SonarQube", "Trivy", "Terraform"],
    metrics: [
      { icon: <Zap size={16} />, label: "Build Time", value: "5 min" },
      { icon: <Shield size={16} />, label: "Security Score", value: "A+" },
      { icon: <TrendingUp size={16} />, label: "Deploy Frequency", value: "50+/day" },
    ],
    highlights: [
      "Reduced deployment time from 2 hours to 30 minutes",
      "Automated vulnerability scanning catching 100+ issues",
      "Implemented canary deployments for safer releases",
    ],
    github: "https://github.com/deven065",
    demo: "#",
  },
  {
    title: "Full-Stack Observability Platform",
    description:
      "Built comprehensive monitoring infrastructure using Prometheus, Grafana, Loki, and Tempo providing metrics, logs, and traces across 50+ microservices with custom alerting and SLA tracking.",
    status: "Production",
    tags: ["Prometheus", "Grafana", "Loki", "Tempo", "AlertManager", "Kubernetes"],
    metrics: [
      { icon: <TrendingUp size={16} />, label: "Services Monitored", value: "50+" },
      { icon: <Zap size={16} />, label: "Data Points/sec", value: "100K+" },
      { icon: <Shield size={16} />, label: "Alert Accuracy", value: "98%" },
    ],
    highlights: [
      "Reduced MTTR (Mean Time To Recovery) by 70%",
      "Created 30+ custom dashboards for different teams",
      "Automated incident detection with PagerDuty integration",
    ],
    github: "https://github.com/deven065",
    demo: "#",
  },
  {
    title: "Infrastructure as Code - AWS Multi-Account Setup",
    description:
      "Developed modular Terraform configurations managing 100+ AWS accounts with centralized billing, security controls, and compliance automation using AWS Organizations and Control Tower.",
    status: "Production",
    tags: ["Terraform", "AWS", "Python", "Lambda", "CloudFormation", "Ansible"],
    metrics: [
      { icon: <Users size={16} />, label: "Accounts Managed", value: "100+" },
      { icon: <Shield size={16} />, label: "Security Compliance", value: "100%" },
      { icon: <TrendingUp size={16} />, label: "Cost Savings", value: "35%" },
    ],
    highlights: [
      "Automated account provisioning reducing setup from days to hours",
      "Implemented cost allocation tags tracking $2M+ monthly spend",
      "Created self-service portal for infrastructure requests",
    ],
    github: "https://github.com/deven065",
    demo: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-20"
      style={{
        backgroundColor: "var(--projects-bg)",
        color: "var(--projects-text)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--projects-title)" }}
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Projects</span>
          </h2>
          <p className="text-lg mb-4 text-gray-400 max-w-3xl mx-auto">
            Production-grade DevOps implementations demonstrating expertise in cloud architecture, 
            automation, and infrastructure optimization
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
              className="flex flex-col rounded-2xl p-6 border shadow-md hover:shadow-2xl transition-all duration-300 hover-glow group gpu-accelerated"
              style={{
                backgroundColor: "var(--projects-card-bg)",
                borderColor: "var(--projects-card-border)",
                color: "var(--projects-text)",
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold leading-snug flex-1 pr-4">
                  {project.title}
                </h3>
                <span
                  className="text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap"
                  style={{
                    backgroundColor: "var(--projects-tag-bg)",
                    color: "var(--projects-tag-text)",
                  }}
                >
                  ✓ {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg p-3 text-center"
                    style={{
                      backgroundColor: "var(--projects-tag-bg)",
                    }}
                  >
                    <div className="flex justify-center mb-1 text-blue-500">
                      {metric.icon}
                    </div>
                    <div className="text-lg font-bold" style={{ color: "var(--projects-title)" }}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2" style={{ color: "var(--projects-title)" }}>
                  Key Achievements:
                </h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-full border"
                    style={{
                      backgroundColor: "var(--projects-tag-bg)",
                      color: "var(--projects-tag-text)",
                      borderColor: "var(--projects-card-border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 text-sm font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                    style={{ borderColor: "var(--projects-card-border)" }}
                  >
                    <Github size={16} /> View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-500 hover:text-white hover:border-purple-500"
                    style={{ borderColor: "var(--projects-card-border)" }}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
