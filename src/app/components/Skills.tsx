import React from "react";

const skills = [
  {
    name: "Docker",
    desc: "Containerization",
    logo: "https://cdn.simpleicons.org/docker/2496ED",
  },
  {
    name: "Kubernetes",
    desc: "Orchestration",
    logo: "https://cdn.simpleicons.org/kubernetes/326CE5",
  },
  {
    name: "AWS",
    desc: "Cloud",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "Jenkins",
    desc: "CI/CD",
    logo: "https://cdn.simpleicons.org/jenkins/D24939",
  },
  {
    name: "Terraform",
    desc: "IaC",
    logo: "https://cdn.simpleicons.org/terraform/7B42BC",
  },
  {
    name: "Ansible",
    desc: "Configuration",
    logo: "https://cdn.simpleicons.org/ansible/EE0000",
  },
  {
    name: "Git",
    desc: "Version Control",
    logo: "https://cdn.simpleicons.org/git/F05032",
  },
  {
    name: "Linux",
    desc: "Operating Systems",
    logo: "https://cdn.simpleicons.org/linux/FCC624",
  },
  {
    name: "Prometheus",
    desc: "Monitoring",
    logo: "https://cdn.simpleicons.org/prometheus/E6522C",
  },
  {
    name: "Grafana",
    desc: "Visualization",
    logo: "https://cdn.simpleicons.org/grafana/F46800",
  },
  {
    name: "Python",
    desc: "Scripting",
    logo: "https://cdn.simpleicons.org/python/3776AB",
  },
  {
    name: "Bash",
    desc: "Scripting",
    logo: "https://cdn.simpleicons.org/gnubash/4EAA25",
  },
];

const Skills = () => {
  return (
    <section
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
            color: "var(--skills-title)", // controlled via new variable
          }}
        >
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Skills
          </span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Experienced in modern DevOps tools and practices for building reliable, scalable
          infrastructure
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 shadow-md transition transform hover:-translate-y-2 hover:shadow-xl"
            style={{
              backgroundColor: "var(--skills-card-bg)",
            }}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-12 h-12 mb-4 mx-auto"
            />
            <h3
              className="text-xl font-semibold mb-1"
              style={{
                color: "var(--skills-text)",
              }}
            >
              {skill.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
