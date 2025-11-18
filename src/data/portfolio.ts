export const HERO_CONTENT = "Building scalable systems from code to cloud. DevOps Engineer | Cloud Automation Specialist. Passionate about automating deployments, optimizing cloud infrastructure, and creating robust CI/CD pipelines with modern technologies.";

export const ABOUT_TEXT = "I am Asim Ullah, a passionate DevOps Engineer focused on building automated, scalable, and reliable infrastructure. I specialize in Docker, Kubernetes, CI/CD pipelines, and cloud technologies, with hands-on experience deploying real applications using Jenkins, Argo CD, and container orchestration. I work across AWS, orchestrate containers with Docker and Kubernetes, and define infrastructure with Terraform and Ansible. Behind the command line, I'm equally comfortable in version control and workflow automation, using Git, GitHub Actions, GitLab CI, and Bash scripting to bridge collaboration and delivery. For me, DevOps isn't just about speed—it's about precision, repeatability, and creating systems that empower developers to ship confidently and innovate faster.";

export const SKILLS = [
  // Cloud
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 85 },
  { name: 'OCI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'cloud', level: 80 },

  // Containers
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 90 },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers', level: 85 },

  // Infrastructure
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'infrastructure', level: 85 },
  { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original-wordmark.svg', category: 'infrastructure', level: 80 },
  { name: 'AWS CloudFormation', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscloudformation.svg', category: 'infrastructure', level: 75 },

  // DevOps / Automation
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'devops', level: 90 },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', category: 'devops', level: 85 },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops', level: 85 },
  { name: 'GitLab CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', category: 'devops', level: 80 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 90 },
  { name: 'AWS CodePipeline', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscodepipeline.svg', category: 'devops', level: 75 },
  { name: 'AWS CodeBuild', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscodebuild.svg', category: 'devops', level: 75 },
  { name: 'Bash Scripting', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'devops', level: 85 },

  // Development
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'development', level: 80 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', category: 'development', level: 75 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg', category: 'development', level: 75 },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'development', level: 70 },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg', category: 'development', level: 85 },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg', category: 'development', level: 80 },

  // Databases
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database', level: 75 },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database', level: 80 },
  { name: 'Oracle SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'database', level: 75 },
];

export const PROJECTS = [
  {
    title: 'Amazon Clone — EKS & ArgoCD Deployment',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Deployed a production-grade Amazon Clone on AWS EKS with full GitOps automation via ArgoCD. Integrated CI/CD pipelines using GitHub Actions, containerized microservices with Docker, and managed configuration using Kustomize for seamless auto-sync deployments.',
    technologies: ['AWS EKS', 'Kubernetes', 'ArgoCD', 'GitHub Actions', 'Kustomize', 'Docker', 'Terraform'],
    category: 'devops',
    githubLink: 'https://github.com/asimullah312',
    websiteLink: '',
  },
  {
    title: 'Next.js CI/CD Pipeline with Docker & Kubernetes',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Developed and containerized a Next.js application, deploying it to Kubernetes clusters using GitHub Actions for automated CI/CD. Implemented multi-stage Docker builds, health probes, resource limits, and rolling updates for high availability.',
    technologies: ['Next.js', 'Docker', 'Kubernetes', 'GitHub Actions', 'GHCR'],
    category: 'devops',
    githubLink: 'https://github.com/asimullah312',
    websiteLink: '',
  },
  {
    title: 'Cloud Infrastructure Automation',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Automated AWS infrastructure provisioning using Terraform with reusable modules for EC2, VPC, and S3. Integrated CI/CD with GitHub Actions for continuous deployment of cloud environments.',
    technologies: ['AWS', 'Terraform', 'GitHub Actions', 'EC2', 'S3'],
    category: 'devops',
    githubLink: 'https://github.com/asimullah312',
    websiteLink: '',
  }
];

export const CONTACT = {
  address: 'Islamabad, Pakistan',
  phoneNo: '+92 312 9573653',
  email: 'asimullah312@gmail.com',
  social: {
    github: 'https://github.com/asimullah312',
    linkedin: 'https://linkedin.com/in/asim-ullah-43ab75270',
    twitter: 'https://twitter.com',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
};
