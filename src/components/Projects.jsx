import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Lock, Globe, Database, Server, ShieldAlert, Terminal, Wifi, Cloud, Activity } from 'lucide-react';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Offensive Security', 'Defensive Security', 'Application Security', 'Network Security', 'Cloud Security'];

    const projects = [
        // --- Offensive Security ---
        {
            title: "Vulnerability Scanner Dashboard",
            description: "Web interface for visualizing scan results from tools like Nmap and OpenVAS.",
            tags: ["React", "D3.js", "Express", "MongoDB"],
            github: "#",
            demo: "#",
            icon: Database,
            category: "Offensive Security",
            status: "Completed"
        },
        {
            title: "Automated Pentesting Scripts",
            description: "Collection of Bash and Python scripts designed to automate enumeration, scanning, and basic exploitation tasks.",
            tags: ["Python", "Bash", "Automation", "Nmap"],
            github: "#",
            demo: "#",
            icon: Terminal,
            category: "Offensive Security",
            status: "Completed"
        },
        {
            title: "Phishing Assessment Platform",
            description: "Internal tool to simulate phishing campaigns and measure employee awareness, featuring trackable links and statistics.",
            tags: ["React.js", "Express", "PostgreSQL", "Nodemailer"],
            github: "#",
            demo: "#",
            icon: ShieldAlert,
            category: "Offensive Security",
            status: "In Progress"
        },
        {
            title: "Active Directory Pentest Lab",
            description: "Built a fully functional Windows Active Directory environment to simulate and analyze common attacks like Pass-the-Hash and Kerberoasting.",
            tags: ["Windows Server", "Active Directory", "BloodHound", "Mimikatz"],
            github: "#",
            demo: "#",
            icon: Activity,
            category: "Offensive Security",
            status: "Completed"
        },
        {
            title: "Custom C2 Framework",
            description: "Developed a stealthy Command and Control framework to manage post-exploitation remote agents over encrypted channels.",
            tags: ["Python", "C++", "Red Teaming", "Networking"],
            github: "#",
            demo: "#",
            icon: Server,
            category: "Offensive Security",
            status: "Planned"
        },
        {
            title: "Exploit Payload Generator",
            description: "A tool for generating custom, obfuscated shellcode and bypass payloads to evade common antivirus engines.",
            tags: ["Go", "Shellcode", "Evasion", "Metasploit"],
            github: "#",
            demo: "#",
            icon: Terminal,
            category: "Offensive Security",
            status: "In Progress"
        },

        // --- Defensive Security ---
        {
            title: "Network Intrusion Detection System",
            description: "A Python-based NIDS that analyzes packet signatures to detect potential threats in real-time.",
            tags: ["Python", "Scapy", "Machine Learning"],
            github: "#",
            demo: "#",
            icon: Lock,
            category: "Defensive Security",
            status: "Completed"
        },
        {
            title: "SIEM Log Forwarder",
            description: "A lightweight agent written in Go that gathers system logs and transmits them securely to a central SIEM server.",
            tags: ["Golang", "Syslog", "Elasticsearch", "Security"],
            github: "#",
            demo: "#",
            icon: Server,
            category: "Defensive Security",
            status: "Completed"
        },
        {
            title: "Automated Malware Sandbox",
            description: "Isolated virtual environment capable of safely detonating malware and analyzing its behavioral patterns.",
            tags: ["Python", "Cuckoo", "VirtualBox", "Analysis"],
            github: "#",
            demo: "#",
            icon: ShieldAlert,
            category: "Defensive Security",
            status: "In Progress"
        },
        {
            title: "Threat Intelligence Feeder",
            description: "Aggregates global threat intelligence data and feeds it into local firewalls using automated scripts.",
            tags: ["Node.js", "ELK Stack", "OSINT", "APIs"],
            github: "#",
            demo: "#",
            icon: Database,
            category: "Defensive Security",
            status: "Completed"
        },
        {
            title: "Custom EDR Agent",
            description: "Endpoint Detection and Response agent that monitors kernel-level API calls for suspicious execution flows.",
            tags: ["Rust", "Windows API", "Kernel", "Monitoring"],
            github: "#",
            demo: "#",
            icon: Activity,
            category: "Defensive Security",
            status: "Planned"
        },
        {
            title: "Phishing Email Analyzer",
            description: "Utility using machine learning to parse headers, domains, and content in emails to detect phishing attempts.",
            tags: ["Python", "NLP", "YARA", "Exchange"],
            github: "#",
            demo: "#",
            icon: Globe,
            category: "Defensive Security",
            status: "Completed"
        },

        // --- Application Security ---
        {
            title: "Secure Chat Application",
            description: "End-to-end encrypted messaging platform built with React and Socket.io using AES-256 encryption.",
            tags: ["React", "Node.js", "Socket.io", "CryptoJS"],
            github: "#",
            demo: "#",
            icon: Globe,
            category: "Application Security",
            status: "Completed"
        },
        {
            title: "DevSecOps CI/CD Pipeline",
            description: "Integrated automated SAST, DAST, and dependency scanning into enterprise CI/CD workflows.",
            tags: ["GitLab CI", "SonarQube", "Trivy", "Docker"],
            github: "#",
            demo: "#",
            icon: Database,
            category: "Application Security",
            status: "In Progress"
        },
        {
            title: "API Fuzzer Toolkit",
            description: "A tailored toolkit designed to detect injection vulnerabilities and auth bypasses in modern REST and GraphQL APIs.",
            tags: ["Python", "GraphQL", "REST", "Burp Suite"],
            github: "#",
            demo: "#",
            icon: Terminal,
            category: "Application Security",
            status: "Completed"
        },
        {
            title: "Authenticator & MFA Provider",
            description: "Secure, robust TOTP-based Multi-Factor Authentication backend and frontend component library.",
            tags: ["React", "Node.js", "TOTP", "Auth"],
            github: "#",
            demo: "#",
            icon: Lock,
            category: "Application Security",
            status: "Completed"
        },
        {
            title: "Lightweight Web Application Firewall",
            description: "Custom reverse proxy WAF written in Go that blocks common OWASP Top 10 web vulnerabilities.",
            tags: ["Go", "Reverse Proxy", "RegEx", "WAF"],
            github: "#",
            demo: "#",
            icon: ShieldAlert,
            category: "Application Security",
            status: "Planned"
        },
        {
            title: "JWT Vulnerability Scanner",
            description: "An automated scanning script designed to test implementations of JSON Web Tokens for known weaknesses.",
            tags: ["JavaScript", "JWT", "Cryptography", "Testing"],
            github: "#",
            demo: "#",
            icon: Terminal,
            category: "Application Security",
            status: "Completed"
        },

        // --- Network Security ---
        {
            title: "Rogue Wi-Fi Access Point Detector",
            description: "A tool monitoring wireless traffic to identify unapproved access points on corporate networks, mitigating Evil Twin attacks.",
            tags: ["Python", "Aircrack-ng", "Linux", "Networking"],
            github: "#",
            demo: "#",
            icon: Wifi,
            category: "Network Security",
            status: "Completed"
        },
        {
            title: "Custom VPN Tunnel",
            description: "Developed a secure encapsulation protocol over UDP, ensuring resilient and private network communication.",
            tags: ["C", "Linux", "Cryptography", "Sockets"],
            github: "#",
            demo: "#",
            icon: Globe,
            category: "Network Security",
            status: "In Progress"
        },
        {
            title: "Honeypot Deployment System",
            description: "Automated provisioning of highly interactive honeypots connected to centralized alerting systems.",
            tags: ["Python", "Docker", "T-Pot", "Deception"],
            github: "#",
            demo: "#",
            icon: Server,
            category: "Network Security",
            status: "Completed"
        },
        {
            title: "ARP Spoofing Mitigation Tool",
            description: "Monitors local networks (L2) for unsolicited ARP replies and blocks associated malicious MAC addresses.",
            tags: ["Python", "Scapy", "L2 Networks", "Defense"],
            github: "#",
            demo: "#",
            icon: ShieldAlert,
            category: "Network Security",
            status: "Completed"
        },
        {
            title: "Network Load & DDoS Simulator",
            description: "Stress-testing framework that simulates volumetric traffic floods to evaluate firewall and router limits.",
            tags: ["Go", "Load Testing", "Stress", "Botnet"],
            github: "#",
            demo: "#",
            icon: Activity,
            category: "Network Security",
            status: "Planned"
        },
        {
            title: "Network Traffic Visualizer",
            description: "A real-time dashboard plotting node connections and active protocols across local network segments.",
            tags: ["React", "Wireshark", "D3.js", "PCAP"],
            github: "#",
            demo: "#",
            icon: Wifi,
            category: "Network Security",
            status: "Completed"
        },

        // --- Cloud Security ---
        {
            title: "Secure Cloud File Storage",
            description: "A Laravel-based file storage system implementing secure file upload, encryption at rest, and RBAC authentication.",
            tags: ["PHP", "Laravel 11", "MySQL", "AWS S3"],
            github: "#",
            demo: "#",
            icon: Cloud,
            category: "Cloud Security",
            status: "Completed"
        },
        {
            title: "AWS IAM Privilege Escalation Scanner",
            description: "Audits AWS IAM configurations by evaluating trust policies to identify potential paths to administrative access.",
            tags: ["Python", "Boto3", "AWS IAM", "Audit"],
            github: "#",
            demo: "#",
            icon: Lock,
            category: "Cloud Security",
            status: "Completed"
        },
        {
            title: "Serverless Secret Manager Helper",
            description: "Middleware for securely injecting credentials from AWS KMS into Lambda functions at runtime.",
            tags: ["AWS Lambda", "KMS", "DynamoDB", "Node.js"],
            github: "#",
            demo: "#",
            icon: Database,
            category: "Cloud Security",
            status: "In Progress"
        },
        {
            title: "Cloud Security Posture Management",
            description: "Dashboard presenting compliance drift and misconfigured terraform modules across multi-cloud environments.",
            tags: ["React", "Terraform", "AWS API", "Compliance"],
            github: "#",
            demo: "#",
            icon: Activity,
            category: "Cloud Security",
            status: "Planned"
        },
        {
            title: "Kubernetes Container Security Scanner",
            description: "Inspects deployed K8s pods against CIS benchmarks and triggers alerts using Falco engines.",
            tags: ["Go", "K8s", "Falco", "DevOps"],
            github: "#",
            demo: "#",
            icon: Server,
            category: "Cloud Security",
            status: "Completed"
        },
        {
            title: "Azure Sentinel Alert Automator",
            description: "Playbooks triggered by Sentinel SIEM rules to handle automated containment of compromised Azure AD identities.",
            tags: ["PowerShell", "Azure", "Logic Apps", "Automation"],
            github: "#",
            demo: "#",
            icon: ShieldAlert,
            category: "Cloud Security",
            status: "Completed"
        }
    ];

    const filteredProjects = activeTab === 'All'
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <section id="projects" className="py-20 bg-cyber-light/40 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-neon mb-4">
                        &lt;PROJECTS /&gt;
                    </h2>
                    <div className="w-24 h-1 bg-cyber-neon mx-auto mb-8"></div>
                </motion.div>

                {/* Categories Tab Selector */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-4 py-2 font-mono text-sm md:text-base rounded transition-all duration-300 border ${activeTab === category
                                ? 'bg-cyber-neon text-black border-cyber-neon font-bold shadow-[0_0_15px_rgba(0,255,204,0.5)]'
                                : 'bg-cyber-dark text-gray-300 border-gray-700 hover:border-cyber-neon/50 hover:text-cyber-neon'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -10 }}
                                className="bg-cyber-dark border border-gray-800 rounded-lg overflow-hidden flex flex-col hover:border-cyber-neon transition-all duration-300"
                            >
                                <div className="h-48 bg-gray-900 flex items-center justify-center border-b border-gray-800 relative group overflow-hidden">
                                    <div className="absolute inset-0 bg-cyber-neon/5 group-hover:bg-cyber-neon/10 transition-colors"></div>
                                    <project.icon size={64} className="text-gray-700 group-hover:text-cyber-neon transition-colors duration-300" />
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex flex-col gap-2 mb-3">
                                        <h3 className="text-xl font-bold font-mono text-white leading-tight">{project.title}</h3>
                                        <div className="self-start">
                                            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded border whitespace-nowrap ${project.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                project.status === 'In Progress' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                                                    'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                                }`}>
                                                {project.status || 'Completed'}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="text-xs font-mono text-cyber-neon bg-cyber-neon/10 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex justify-between items-center mt-auto">
                                        <a href={project.github} className="flex items-center text-gray-300 hover:text-white transition-colors">
                                            <Github size={18} className="mr-2" />
                                            <span className="text-sm font-mono">Code</span>
                                        </a>
                                        <a href={project.demo} className="flex items-center text-cyber-neon hover:text-white transition-colors">
                                            <span className="text-sm font-mono mr-2">Live Demo</span>
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
