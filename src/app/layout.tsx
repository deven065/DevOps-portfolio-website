import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dipen - DevOps Engineer & Cloud Architect | AWS, Kubernetes, CI/CD Expert",
  description: "Senior DevOps Engineer specializing in AWS, Kubernetes, Terraform, and CI/CD automation. Proven track record of reducing deployment times by 60%, achieving 99.9% uptime, and managing infrastructure for high-traffic applications serving millions of users.",
  keywords: ["DevOps Engineer", "AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "Cloud Architecture", "Infrastructure as Code", "Jenkins", "Prometheus", "Grafana"],
  authors: [{ name: "Dipen" }],
  openGraph: {
    title: "Dipen - DevOps Engineer & Cloud Architect",
    description: "Expert DevOps Engineer with proven track record in cloud infrastructure, automation, and scalable system design",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipen - DevOps Engineer & Cloud Architect",
    description: "Expert DevOps Engineer specializing in AWS, Kubernetes, and CI/CD automation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
