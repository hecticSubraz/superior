export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
  icon: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  year: number;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export const stats = [
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Projects Completed", value: 120, suffix: "+" },
  { label: "Skilled Workforce", value: 250, suffix: "+" },
  { label: "Satisfied Clients", value: 98, suffix: "%" },
];

export const services: Service[] = [
  {
    id: "building-construction",
    title: "Building Construction",
    description:
      "Comprehensive building construction services from foundation to finishing, delivering structurally sound and aesthetically refined structures.",
    image: "/images/service-building.jpg",
    benefits: [
      "End-to-end project execution",
      "Quality materials and craftsmanship",
      "On-time delivery guarantee",
      "Transparent cost management",
    ],
    icon: "building",
  },
  {
    id: "residential-construction",
    title: "Residential Construction",
    description:
      "Custom homes and housing projects designed for comfort, durability, and modern living standards across Nepal.",
    image: "/images/service-residential.jpg",
    benefits: [
      "Personalized design consultation",
      "Energy-efficient construction",
      "Premium finishing options",
      "Post-construction support",
    ],
    icon: "home",
  },
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    description:
      "Office buildings, retail spaces, and commercial complexes built to meet business needs and regulatory standards.",
    image: "/images/service-commercial.jpg",
    benefits: [
      "Scalable commercial solutions",
      "Code-compliant construction",
      "Minimal business disruption",
      "Long-term structural integrity",
    ],
    icon: "commercial",
  },
  {
    id: "road-construction",
    title: "Road Construction",
    description:
      "Road and infrastructure development including grading, paving, drainage systems, and civil engineering works.",
    image: "/images/service-road.jpg",
    benefits: [
      "Heavy civil engineering expertise",
      "Durable road surfaces",
      "Efficient project scheduling",
      "Government compliance",
    ],
    icon: "road",
  },
  {
    id: "renovation-remodeling",
    title: "Renovation & Remodeling",
    description:
      "Transform existing spaces with expert renovation, structural upgrades, and modern interior remodeling.",
    image: "/images/service-renovation.jpg",
    benefits: [
      "Structural assessment included",
      "Modern design integration",
      "Minimal downtime approach",
      "Value-enhancing upgrades",
    ],
    icon: "renovation",
  },
  {
    id: "architecture-estimation",
    title: "Architecture & Estimation",
    description:
      "Comprehensive architectural design and precise cost estimation services that transform ideas into detailed blueprints and accurate project budgets before construction begins.",
    image: "/images/service-architecture.jpg",
    benefits: [
      "Detailed architectural drawings",
      "Accurate BOQ & cost estimation",
      "Structural design consultancy",
      "3D visualization & planning",
    ],
    icon: "architecture",
  },
  {
    id: "supply-installation",
    title: "Supply & Installation",
    description:
      "End-to-end supply and installation of construction materials, fittings, and equipment — sourced from trusted suppliers and installed by our skilled technical team.",
    image: "/images/service-supply.jpg",
    benefits: [
      "Genuine quality materials",
      "Certified installation team",
      "Plumbing, electrical & finishing",
      "Post-installation warranty",
    ],
    icon: "supply",
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "Professional project management ensuring timelines, budgets, quality control, and stakeholder coordination.",
    image: "/images/service-management.jpg",
    benefits: [
      "Dedicated project managers",
      "Real-time progress reporting",
      "Risk mitigation strategies",
      "Vendor coordination",
    ],
    icon: "management",
  },
];

export const projects: Project[] = [
  {
    id: "hanspur-hospital",
    name: "Hanspur Hospital (10 Bed)",
    location: "Hanspur, Dhanusa",
    year: 2024,
    category: "Commercial",
    image: "/images/project1.jpg",
    description:
      "A 10-bed hospital facility built to serve the Hanspur community in Dhanusa district, featuring modern structural design, quality finishing, and healthcare-compliant construction standards.",
  },
  {
    id: "noc-quarter-residency",
    name: "Nepal Oil Corporation Quarter Residency",
    location: "Thankot, Kathmandu",
    year: 2023,
    category: "Residential",
    image: "/images/project2.jpg",
    description:
      "Residential quarter complex constructed for Nepal Oil Corporation staff in Thankot, Kathmandu, featuring multi-unit housing with modern amenities and durable finishing.",
  },
  {
    id: "patyani-highway",
    name: "Patyani Highway",
    location: "Bharatpur, Chitwan",
    year: 2022,
    category: "Infrastructure",
    image: "/images/project3.jpg",
    description:
      "Road construction and black-topping project on the Patyani Highway in Bharatpur, Chitwan, delivering smooth connectivity with quality asphalt paving and durable engineering.",
  },
  {
    id: "magani-dhol-river-drain",
    name: "Magani Dhol River Drain",
    location: "Khairini, Chitwan",
    year: 2024,
    category: "Infrastructure",
    image: "/images/project4.jpg",
    description:
      "Ongoing river drain and embankment construction project in Khairini, Chitwan — a critical flood control and drainage infrastructure initiative improving community safety and water management.",
  },
  {
    id: "nea-office-jorpati",
    name: "Nepal Electricity Authority (NEA) Office",
    location: "Jorpati, Kathmandu",
    year: 2022,
    category: "Commercial",
    image: "/images/project5.jpg",
    description:
      "Modern multi-storey office building constructed for Nepal Electricity Authority in Jorpati, Kathmandu, featuring contemporary curved architecture, premium glazing, and quality structural finishing.",
  },
  {
    id: "murgiya-sewage-treatment",
    name: "Murgiya Sewage Treatment Plant",
    location: "Rupandehi, Nepal",
    year: 2017,
    category: "Infrastructure",
    image: "/images/project6.jpg",
    description:
      "Construction of the Murgiya Sewage Treatment Plant in Rupandehi — a critical civil infrastructure project delivering wastewater treatment facilities with reinforced concrete structures and precise engineering.",
  },
  {
    id: "chulachuli-municipality-building",
    name: "Chulachuli Rural Municipality Executive Building",
    location: "Ilam, Nepal",
    year: 2021,
    category: "Commercial",
    image: "/images/project7.jpg",
    description:
      "Construction of the Chulachuli Rural Municipality Executive Building in Ilam — a government administrative facility built with quality structural finishing, modern layout, and durable construction standards.",
  },
  {
    id: "hiley-cover-hall",
    name: "Hiley Cover Hall",
    location: "Hiley, Dhankuta",
    year: 2024,
    category: "Commercial",
    image: "/images/project8.jpg",
    description:
      "Construction of the Hiley Cover Hall in Dhankuta — a large-span community hall featuring bold red and white exterior, quality structural finishing, and a spacious design suited for public gatherings and events.",
  },
  {
    id: "aaap-khola-drinking-water",
    name: "Aaap Khola Drinking Water Project",
    location: "Rupandehi, Nepal",
    year: 2016,
    category: "Infrastructure",
    image: "/images/project9.jpg",
    description:
      "Construction of the Aaap Khola Drinking Water Project water tower in Rupandehi — a reinforced concrete elevated tank structure providing clean drinking water supply to the local community.",
  },
];

export const timeline = [
  {
    step: "01",
    title: "Planning",
    description:
      "Comprehensive site analysis, feasibility studies, and strategic project planning aligned with client objectives.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Collaborative architectural and engineering design with detailed blueprints and regulatory compliance.",
  },
  {
    step: "03",
    title: "Construction",
    description:
      "Expert execution with skilled workforce, quality materials, and rigorous on-site project management.",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description:
      "Multi-stage inspections, testing protocols, and adherence to international construction standards.",
  },
  {
    step: "05",
    title: "Delivery",
    description:
      "Timely handover with documentation, warranty support, and post-completion client satisfaction.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Sharma",
    role: "Property Developer",
    company: "Sharma Holdings",
    quote:
      "Superior Nirman Sewa exceeded our expectations on every front. Their professionalism, attention to detail, and commitment to deadlines made our commercial project a resounding success.",
  },
  {
    id: "2",
    name: "Anita Gurung",
    role: "Homeowner",
    company: "Private Client",
    quote:
      "Building our dream home was seamless with their team. From design consultation to final handover, the quality of workmanship and communication was outstanding.",
  },
  {
    id: "3",
    name: "Dr. Bikash Thapa",
    role: "Director",
    company: "Nepal Infrastructure Group",
    quote:
      "For large-scale infrastructure projects, reliability is everything. Superior Nirman Sewa delivered exceptional engineering solutions on time and within budget.",
  },
  {
    id: "4",
    name: "Sunita Karki",
    role: "Head of Operations",
    company: "Karki Enterprises",
    quote:
      "Their project management expertise transformed our renovation project. The team handled every challenge with professionalism and delivered beyond our vision.",
  },
];

export const values = [
  {
    title: "Integrity",
    description: "Honest dealings and transparent communication in every project engagement.",
  },
  {
    title: "Excellence",
    description: "Uncompromising quality standards in materials, methods, and outcomes.",
  },
  {
    title: "Innovation",
    description: "Modern techniques and sustainable practices for future-ready construction.",
  },
  {
    title: "Safety",
    description: "Rigorous safety protocols protecting workers, clients, and communities.",
  },
];

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Mr. Uddhab Karki",
    role: "Managing Director",
    bio: "Over 20 years of experience leading major construction and infrastructure projects across Nepal.",
  },
  {
    id: "2",
    name: "Eng. Krishna Khatiwada",
    role: "Chief Engineer",
    bio: "Structural engineering expert specializing in earthquake-resistant design and civil infrastructure.",
  },
  {
    id: "3",
    name: "Pradip Karki",
    role: "Project Manager",
    bio: "Visionary construction leader driving excellence, innovation, and successful project delivery.",
  },
  {
    id: "4",
    name: "Uddhab Khadka",
    role: "Project Manager",
    bio: "Leading transformative construction projects with strategic vision and unwavering commitment to excellence.",
  },
];

export const managingDirector = {
  name: "Mr. Uddhab Karki",
  position: "Managing Director",
  image: "/images/managing-director.jpg",
  quote:
    "At Superior Nirman Sewa, we believe that every structure we build is a testament to Nepal's growing ambition. Our commitment goes beyond bricks and mortar — we build trust, communities, and a legacy of excellence that stands the test of time. With over two decades of experience, our team brings unparalleled dedication to every project, ensuring that quality, safety, and innovation remain at the heart of everything we do.",
  signature: "Uddhab Karki",
};

export const companyHistory = [
  {
    year: "2009",
    title: "Foundation",
    description: "Superior Nirman Sewa established in Kathmandu with a vision for quality construction.",
  },
  {
    year: "2014",
    title: "Expansion",
    description: "Expanded operations to commercial and infrastructure projects across Bagmati Province.",
  },
  {
    year: "2019",
    title: "Recognition",
    description: "Recognized as a leading construction firm with 50+ completed projects.",
  },
  {
    year: "2024",
    title: "Innovation",
    description: "Adopted sustainable building practices and modern project management systems.",
  },
];

export const projectCategories = ["All", "Residential", "Commercial", "Infrastructure"];
