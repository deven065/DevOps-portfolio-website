import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CI/CD Pipeline Automation",
    description:
      "Built end-to-end CI/CD pipeline using Jenkins, Docker, and AWS ECS for microservices deployment",
    status: "Production",
    tags: ["Jenkins", "Docker", "AWS ECS", "Terraform"],
  },
  {
    title: "Infrastructure as Code",
    description:
      "Automated AWS infrastructure provisioning using Terraform and Ansible for scalable applications",
    status: "Active",
    tags: ["Terraform", "Ansible", "AWS", "CloudFormation"],
  },
  {
    title: "Monitoring & Alerting System",
    description:
      "Implemented comprehensive monitoring solution with Prometheus, Grafana, and custom alerting",
    status: "Complete",
    tags: ["Prometheus", "Grafana", "AlertManager", "Docker"],
  },
];

export default function FeaturedProjects() {
  return (
    <section
      className="py-20"
      style={{
        backgroundColor: "var(--projects-bg)",
        color: "var(--projects-text)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-4xl font-bold mb-4"
          style={{ color: "var(--projects-title)" }}
        >
          Featured <span className="text-purple-500">Projects</span>
        </h2>
        <p className="text-lg mb-12 text-gray-400">
          Key projects showcasing automation, infrastructure management, and DevOps best practices
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl p-6 border shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              style={{
                backgroundColor: "var(--projects-card-bg)",
                borderColor: "var(--projects-card-border)",
                color: "var(--projects-text)",
              }}
            >
              <div className="flex flex-col flex-grow">
                {/* Title & Status */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold leading-snug">
                    {project.title}
                  </h3>
                  <span
                    className="text-sm px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--projects-tag-bg)",
                      color: "var(--projects-tag-text)",
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full border"
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

                {/* Spacer */}
                <div className="flex-grow" />
              </div>

              {/* Buttons with hover animation */}
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 text-sm transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:scale-[1.02]"
                  style={{ borderColor: "var(--projects-card-border)" }}
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 text-sm transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:scale-[1.02]"
                  style={{ borderColor: "var(--projects-card-border)" }}
                >
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
