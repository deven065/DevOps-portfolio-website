'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
  name: string;
  desc: string;
  logo: string;
  proficiency: number;
  years: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Cloud & Infrastructure",
    icon: "☁️",
    skills: [
      {
        name: "AWS",
        desc: "Cloud Platform",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        proficiency: 90,
        years: "2+ years",
      },
      {
        name: "Azure",
        desc: "Cloud Platform",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
        proficiency: 75,
        years: "1+ year",
      },
      {
        name: "Linux",
        desc: "Operating System",
        logo: "https://cdn.simpleicons.org/linux/FCC624",
        proficiency: 95,
        years: "3+ years",
      },
    ],
  },
  {
    category: "Containers & Orchestration",
    icon: "🐳",
    skills: [
      {
        name: "Docker",
        desc: "Containerization",
        logo: "https://cdn.simpleicons.org/docker/2496ED",
        proficiency: 95,
        years: "2+ years",
      },
      {
        name: "Kubernetes",
        desc: "Orchestration",
        logo: "https://cdn.simpleicons.org/kubernetes/326CE5",
        proficiency: 85,
        years: "2+ years",
      },
      {
        name: "Helm",
        desc: "Package Manager",
        logo: "https://cdn.simpleicons.org/helm/0F1689",
        proficiency: 80,
        years: "1+ year",
      },
    ],
  },
  {
    category: "CI/CD & Automation",
    icon: "🚀",
    skills: [
      {
        name: "Jenkins",
        desc: "CI/CD Platform",
        logo: "https://cdn.simpleicons.org/jenkins/D24939",
        proficiency: 90,
        years: "2+ years",
      },
      {
        name: "GitHub Actions",
        desc: "CI/CD Platform",
        logo: "https://cdn.simpleicons.org/githubactions/2088FF",
        proficiency: 85,
        years: "1+ year",
      },
      {
        name: "GitLab CI",
        desc: "CI/CD Platform",
        logo: "https://cdn.simpleicons.org/gitlab/FC6D26",
        proficiency: 80,
        years: "1+ year",
      },
    ],
  },
  {
    category: "Infrastructure as Code",
    icon: "📜",
    skills: [
      {
        name: "Terraform",
        desc: "IaC Tool",
        logo: "https://cdn.simpleicons.org/terraform/7B42BC",
        proficiency: 90,
        years: "2+ years",
      },
      {
        name: "Ansible",
        desc: "Configuration Mgmt",
        logo: "https://cdn.simpleicons.org/ansible/EE0000",
        proficiency: 85,
        years: "2+ years",
      },
      {
        name: "CloudFormation",
        desc: "AWS IaC",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        proficiency: 75,
        years: "1+ year",
      },
    ],
  },
  {
    category: "Monitoring & Logging",
    icon: "📊",
    skills: [
      {
        name: "Prometheus",
        desc: "Monitoring",
        logo: "https://cdn.simpleicons.org/prometheus/E6522C",
        proficiency: 85,
        years: "2+ years",
      },
      {
        name: "Grafana",
        desc: "Visualization",
        logo: "https://cdn.simpleicons.org/grafana/F46800",
        proficiency: 85,
        years: "2+ years",
      },
      {
        name: "ELK Stack",
        desc: "Log Management",
        logo: "https://cdn.simpleicons.org/elastic/005571",
        proficiency: 80,
        years: "1+ year",
      },
    ],
  },
  {
    category: "Scripting & Programming",
    icon: "💻",
    skills: [
      {
        name: "Python",
        desc: "Programming",
        logo: "https://cdn.simpleicons.org/python/3776AB",
        proficiency: 85,
        years: "2+ years",
      },
      {
        name: "Bash",
        desc: "Shell Scripting",
        logo: "https://cdn.simpleicons.org/gnubash/4EAA25",
        proficiency: 90,
        years: "3+ years",
      },
      {
        name: "Git",
        desc: "Version Control",
        logo: "https://cdn.simpleicons.org/git/F05032",
        proficiency: 95,
        years: "3+ years",
      },
    ],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displayedCategories = selectedCategory
    ? skillsData.filter((cat) => cat.category === selectedCategory)
    : skillsData;

  return (
    <section
      id="skills"
      className="py-20 px-4"
      style={{
        backgroundColor: "var(--skills-bg)",
      }}
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-extrabold mb-4"
          style={{
            color: "var(--skills-title)",
          }}
        >
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Expertise
          </span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Comprehensive DevOps toolkit spanning cloud platforms, automation, orchestration, and
          monitoring solutions
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
            selectedCategory === null
              ? "bg-blue-500 text-white border-blue-500"
              : "border-gray-300 dark:border-gray-600 hover:border-blue-500"
          }`}
        >
          All Skills
        </button>
        {skillsData.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category.category)}
            className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
              selectedCategory === category.category
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-300 dark:border-gray-600 hover:border-blue-500"
            }`}
          >
            {category.icon} {category.category}
          </button>
        ))}
      </div>

      {/* Skills Categories */}
      <div className="max-w-7xl mx-auto space-y-12">
        {displayedCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl font-bold mb-6 flex items-center gap-2"
              style={{ color: "var(--skills-title)" }}
            >
              <span className="text-3xl">{category.icon}</span>
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="rounded-2xl p-6 shadow-md hover:shadow-2xl relative overflow-hidden group transition-all duration-300 hover-lift gpu-accelerated"
                  style={{
                    backgroundColor: "var(--skills-card-bg)",
                  }}
                >
                  {/* Skill Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 relative flex-shrink-0">
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-lg font-bold"
                        style={{
                          color: "var(--skills-text)",
                        }}
                      >
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{skill.desc}</p>
                    </div>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500 dark:text-gray-400">Proficiency</span>
                      <span className="text-blue-500 font-semibold">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center justify-between text-xs">
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "var(--projects-tag-bg)",
                        color: "var(--projects-tag-text)",
                      }}
                    >
                      {skill.years}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
