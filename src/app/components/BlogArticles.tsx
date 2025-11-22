'use client';

import { FileText, ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}

const articles: Article[] = [
  {
    title: 'Building a Production-Ready Kubernetes Cluster on AWS',
    excerpt:
      'A comprehensive guide to setting up a highly available Kubernetes cluster using EKS, with best practices for networking, security, and scalability.',
    date: 'Nov 15, 2024',
    readTime: '8 min read',
    tags: ['Kubernetes', 'AWS', 'DevOps'],
    link: '#',
  },
  {
    title: 'CI/CD Pipeline Automation with Jenkins and Docker',
    excerpt:
      'Learn how to build a robust CI/CD pipeline that automates testing, builds, and deployments using Jenkins, Docker, and AWS ECS.',
    date: 'Oct 28, 2024',
    readTime: '10 min read',
    tags: ['Jenkins', 'Docker', 'CI/CD'],
    link: '#',
  },
  {
    title: 'Infrastructure as Code: Terraform Best Practices',
    excerpt:
      'Deep dive into Terraform modules, state management, and best practices for managing cloud infrastructure at scale.',
    date: 'Oct 10, 2024',
    readTime: '12 min read',
    tags: ['Terraform', 'IaC', 'AWS'],
    link: '#',
  },
];

export default function BlogArticles() {
  return (
    <section
      className="py-20 px-4"
      style={{
        backgroundColor: 'var(--skills-bg)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            style={{ color: 'var(--skills-title)' }}
          >
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">
              Articles
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge and insights from real-world DevOps implementations
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50, rotateX: -5 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                x: 10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              className="rounded-xl p-6 border shadow-md hover:shadow-xl transition-all duration-300 group hover-lift gpu-accelerated"
              style={{
                backgroundColor: 'var(--skills-card-bg)',
                borderColor: 'var(--projects-card-border)',
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="text-blue-500" size={24} />
                    <h3
                      className="text-xl font-bold group-hover:text-blue-500 transition-colors"
                      style={{ color: 'var(--skills-text)' }}
                    >
                      {article.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{ color: 'var(--projects-text)' }}
                  >
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <span>•</span>
                    <span>{article.readTime}</span>
                    <div className="flex gap-2">
                      {article.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded-full text-xs"
                          style={{
                            backgroundColor: 'var(--projects-tag-bg)',
                            color: 'var(--projects-tag-text)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <a
                  href={article.link}
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors font-semibold whitespace-nowrap"
                >
                  Read Article <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            style={{
              borderColor: 'var(--projects-card-border)',
              color: 'var(--skills-text)',
            }}
          >
            View All Articles <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
