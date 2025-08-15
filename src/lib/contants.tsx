//Social media
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";

import {
  Gift,
  Wallet,
  Star,
  Crown,
  Mail,
  Smartphone,
  MapPin,
  Globe,
  Building2,
  UserRoundPen,
  Clock,
  MessageCircle,
  Gamepad2,
  Headset,
  Earth,
} from "lucide-react";

export const contactInfoData = [
  {
    id: 1,
    icon: Mail,
    info: "techidaCorporation@gmail.com",
  },
  {
    id: 2,
    icon: Smartphone,
    info: "+213 456 6789",
  },
  {
    id: 3,
    icon: MapPin,
    info: "A108 Adam Street, New York, NY 535022",
  },
  {
    id: 4,
    icon: Globe,
    info: "www.techida_corporation.com",
  },
  {
    id: 5,
    icon: Building2,
    info: "techida-company",
  },
];

export const menu_items = [
  {
    label: "Home",
    id: 1,
    href: "/",
  },
  {
    label: "About",
    id: 2,
    href: "/about",
  },
  {
    label: "Services",
    id: 3,
    href: "/services",
  },
  {
    label: "Contact",
    id: 4,
    href: "/contact",
  },

  {
    label: "Portfolio",
    id: 5,
    href: "/portfolio",
  },
  {
    label: "Blog",
    id: 6,
    href: "/blog",
  },
  {
    label: "Join in",
    id: 7,
    href: "/login",
  },
];

export const ICONS = [
  {
    id: 1,
    icon: <Linkedin />,
    href: "https://www.linkedin.com",
  },
  {
    id: 2,
    icon: <Facebook className="normal-icon" />,
    href: "https://www.facebook.com",
  },
  {
    id: 3,
    icon: <Youtube className="normal-icon" />,
    href: "https://www.youtube.com",
  },
  {
    id: 4,
    icon: <Instagram className="normal-icon" />,
    href: "https://www.instagram.com",
  },
];

import { Search } from "lucide-react";
import { Megaphone } from "lucide-react";
import { Bug } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { Palette } from "lucide-react";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import { TServiceItem } from "./types";

export const servicesData: TServiceItem[] = [
  {
    id: 1,
    icon: ChevronsLeftRightEllipsis,
    title: "Web Development",
    description:
      "Custom, responsive, and high-performance websites built to engage your audience and drive results.",
    link: "/services/web-development",
  },
  {
    id: 2,
    icon: Search,
    title: "SEO",
    description:
      "Optimize your online presence with data-driven SEO strategies that improve rankings and boost traffic.",
    link: "/services/seo",
  },
  {
    id: 3,
    icon: Megaphone,
    title: "Marketing",
    description:
      "Targeted digital marketing campaigns that increase brand awareness and generate quality leads.",
    link: "/services/marketing",
  },
  {
    id: 4,
    icon: Bug,
    title: "Cyber Security",
    description:
      "Protect your business with advanced cybersecurity solutions and proactive threat detection.",
    link: "/services/bug-fixing",
  },
  {
    id: 5,
    icon: LayoutGrid,
    title: "UI/UX Design",
    description:
      "User-centered designs that combine functionality and aesthetics to deliver exceptional experiences.",
    link: "/services/ui-ux-design",
  },
  {
    id: 6,
    icon: Palette,
    title: "Graphic Design",
    description:
      "Creative and impactful visuals that communicate your brand message effectively across all platforms.",
    link: "/services/graphic-design",
  },
];

export const experienceData = [
  {
    id: 1,
    title: "Worldwide service",

    icon: Earth,
  },

  {
    id: 3,
    title: "Easy to reach",
    icon: Gamepad2,
  },
  {
    id: 2,
    title: "Support 24/24",
    icon: Headset,
  },
  {
    id: 4,
    title: "First in fields",
    icon: Star,
  },
];

export const statisticsData = [
  {
    id: 1,
    title: "App Development",
    percentage: 70,
  },
  {
    id: 2,
    title: "UI/UX Design",
    percentage: 20,
  },
  {
    id: 3,
    title: "Web Development",
    percentage: 55,
  },
];

export const faqData = [
  {
    id: 1,
    question: "Do you offer both on-site and remote IT support?",

    isQuestionOpen: false,
    answer:
      "Yes, we provide both on-site and remote IT support to meet the needs of different clients. Our remote services allow for quick troubleshooting, while on-site visits are available for more complex issues.",
  },
  {
    id: 2,
    question: "What is Techida?",
    isQuestionOpen: false,

    answer:
      "Techida is our comprehensive IT solutions platform that offers services ranging from technical support to software development, all tailored to help businesses operate more efficiently.",
  },
  {
    id: 3,
    question: "Is there any update in the future?",
    isQuestionOpen: false,

    answer:
      "We are constantly improving our services and platform. Expect new features, enhanced performance, and additional support options in our upcoming updates.",
  },
  {
    id: 4,
    question: "How much for the service?",
    isQuestionOpen: false,

    answer:
      "Our pricing depends on the type of service, the complexity of the task, and the duration of engagement. We offer flexible plans to suit both individuals and businesses.",
  },
];

export const pricingData = [
  {
    id: 1,
    offerType: "free",
    price: 0,
    trial: "Get Started",
    icon: Gift,
    options: [
      { id: 1, isAvailable: true, option: "1 Website Template" },
      { id: 2, isAvailable: false, option: "Custom Domain" },
      { id: 3, isAvailable: false, option: "Basic Mobile App" },
      { id: 4, isAvailable: false, option: "Custom UI/UX Design" },
    ],
  },
  {
    id: 2,
    offerType: "basic",
    price: 49,
    trial: "Start Basic",
    icon: Wallet,
    options: [
      { id: 1, isAvailable: true, option: "Up to 3 Website Templates" },
      { id: 2, isAvailable: true, option: "Custom Domain" },
      { id: 3, isAvailable: false, option: "Advanced Mobile App Features" },
      { id: 4, isAvailable: false, option: "Priority Support" },
    ],
  },
  {
    id: 3,
    offerType: "standard",
    price: 99,
    trial: "Go Standard",
    icon: Star,
    options: [
      { id: 1, isAvailable: true, option: "Unlimited Website Templates" },
      { id: 2, isAvailable: true, option: "Custom Domain" },
      { id: 3, isAvailable: true, option: "Basic Mobile App" },
      { id: 4, isAvailable: false, option: "Full Custom UI/UX Design" },
    ],
  },
  {
    id: 4,
    offerType: "pro",
    price: 199,
    trial: "Go Pro",
    icon: Crown,
    options: [
      {
        id: 1,
        isAvailable: true,
        option: "Unlimited Website & Mobile App Projects",
      },
      { id: 2, isAvailable: true, option: "Custom Domain & Hosting" },
      { id: 3, isAvailable: true, option: "Advanced Mobile App Features" },
      { id: 4, isAvailable: true, option: "Full Custom UI/UX Design" },
      { id: 5, isAvailable: true, option: "Dedicated Account Manager" },
    ],
  },
];

// *** FOOTER

export const siteMap = {
  id: "site map",
  list: "site map",
  elements: [
    {
      id: 1,
      label: "home",
      href: "/",
    },

    {
      id: 3,
      label: "services",
      href: "/services",
    },
    {
      id: 2,
      label: "about",
      href: "/about",
    },
    {
      id: 4,
      label: "contact",
      href: "/contact",
    },
  ],
};

export const socials = {
  id: "socials",

  list: "follow us",

  elements: [
    {
      id: 3,
      label: "linkedin",
      icon: <Linkedin />,
    },
    {
      id: 4,
      label: "youtube",

      icon: <Youtube />,
    },
    {
      id: 1,
      label: "facebook",
      icon: <Facebook />,
    },
    {
      id: 2,
      label: "instagram",
      icon: <Instagram />,
    },
  ],
};

export const ourServices = {
  id: "our services",
  list: "our services",
  elements: [
    {
      id: 3,
      label: "cyber security",
    },
    {
      id: 4,
      label: "graphic design",
    },

    {
      id: 1,
      label: "digital marketing",
    },
    {
      id: 2,
      label: "web developement",
    },
  ],
};

export const chooseData = [
  {
    id: 1,
    title: "Latest Technologies",
    desc: "We stay ahead of the curve by integrating the newest tools and innovations into every project.",
  },
  {
    id: 2,
    title: "Unique Solutions",
    desc: "Our team crafts tailored strategies designed to meet your specific goals and challenges.",
  },
  {
    id: 3,
    title: "Powerful Strategies",
    desc: "We implement proven methods that drive results and deliver long-term success.",
  },
];

export const statsData = [
  {
    id: 1,
    stat: 90,
    title: "happy clients",
  },
  {
    id: 2,
    stat: 60,
    title: "hard worker",
  },
  {
    id: 3,
    stat: 90,
    title: "complete project",
  },
  {
    id: 4,
    stat: 15,
    title: "Years Of Exprience",
  },
];

export const teamData = [
  {
    id: 1,
    name: "Bodih Dgmas",
    photo: "/assets/team/person1.jpg",
    job: "Front-End Developer",
    facebook: "https://www.facebook.com/",
    Linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
    Instagram: "https://www.instagram.com/",
  },
  {
    id: 2,
    name: "Robert Benali",
    photo: "/assets/team/person2.jpg",
    job: "UI/UX Designer",
    facebook: "https://www.facebook.com/",
    Linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
    Instagram: "https://www.instagram.com/",
  },
  {
    id: 3,
    name: "Khaled Messaoud",
    photo: "/assets/team/person3.jpg",
    job: "Back-End Developer",
    facebook: "https://www.facebook.com/",
    Linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
    Instagram: "https://www.instagram.com/",
  },
  {
    id: 4,
    name: "Amine Hadj",
    photo: "/assets/team/person4.jpg",
    job: "Project Manager",
    facebook: "https://www.facebook.com/",
    Linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
    Instagram: "https://www.instagram.com/",
  },
];

export const testimonialsData = [
  {
    id: 1,
    image: "/assets/testimonials/person1.jpg",
    rating: 5,
    name: "Alice Johnson",
    testimonial:
      "This service exceeded my expectations! The team was professional and attentive throughout.",
  },
  {
    id: 2,
    image: "/assets/testimonials/person2.jpg",
    rating: 4.5,
    name: "Michael Lee",
    testimonial:
      "Great experience overall. A few minor hiccups, but the final results were excellent.",
  },
  {
    id: 3,
    image: "/assets/testimonials/person3.jpg",
    rating: 5,
    name: "Sofia Martinez",
    testimonial:
      "I highly recommend them! Their attention to detail and customer care are top-notch.",
  },
  {
    id: 4,
    image: "/assets/testimonials/person4.jpg",
    rating: 3.5,
    name: "David Kim",
    testimonial:
      "Good service, but the delivery took longer than expected. Still satisfied with the outcome.",
  },
  {
    id: 5,
    image: "/assets/testimonials/person5.jpg",
    rating: 4.5,
    name: "Emma Wilson",
    testimonial:
      "Friendly staff and excellent support. I will definitely use their services again.",
  },
  {
    id: 6,
    image: "/assets/testimonials/person6.jpg",
    rating: 5,
    name: "Liam Brown",
    testimonial:
      "Fantastic results and smooth communication. Highly recommended for anyone looking for quality.",
  },
  {
    id: 7,
    image: "/assets/testimonials/person7.jpg",
    rating: 4,
    name: "Olivia Davis",
    testimonial:
      "Very pleased with the service. The team was responsive and helpful every step of the way.",
  },
  {
    id: 8,
    image: "/assets/testimonials/person8.jpg",
    rating: 5,
    name: "Noah Thompson",
    testimonial:
      "Impressive quality and fast turnaround. I couldn’t ask for more.",
  },
  {
    id: 9,
    image: "/assets/testimonials/person9.jpg",
    rating: 4.5,
    name: "Isabella Garcia",
    testimonial:
      "Great value for the price. The team delivered exactly what they promised.",
  },
];

export const portfolioData = [
  {
    id: 1,
    image: "/assets/portfolio/port1.jpg",
    projectName: "Smart Data Dashboard",
    projectType: "data",
    technologies: ["Python", "Pandas", "Plotly", "Dash"],
  },
  {
    id: 2,
    image: "/assets/portfolio/port2.jpg",
    projectName: "AI-Powered Chatbot",
    projectType: "web",
    technologies: ["React", "Node.js", "Express", "TensorFlow"],
  },
  {
    id: 3,
    image: "/assets/portfolio/port3.jpg",
    projectName: "E-commerce Store",
    projectType: "web",
    technologies: ["Next.js", "Tailwind CSS", "Stripe API"],
  },
  {
    id: 4,
    image: "/assets/portfolio/port4.jpg",
    projectName: "Travel Booking App",
    projectType: "mobile",
    technologies: ["React Native", "Redux", "Firebase"],
  },
  {
    id: 5,
    image: "/assets/portfolio/port5.jpg",
    projectName: "Stock Prediction Model",
    projectType: "data",
    technologies: ["Python", "Scikit-learn", "Matplotlib"],
  },
  {
    id: 6,
    image: "/assets/portfolio/port6.jpg",
    projectName: "Portfolio Website",
    projectType: "web",
    technologies: ["React", "Framer Motion", "EmailJS"],
  },
  {
    id: 7,
    image: "/assets/portfolio/port7.jpg",
    projectName: "Food Delivery App",
    projectType: "mobile",
    technologies: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: 8,
    image: "/assets/portfolio/port8.jpg",
    projectName: "Customer Analytics Dashboard",
    projectType: "data",
    technologies: ["Python", "Power BI", "SQL"],
  },
  {
    id: 9,
    image: "/assets/portfolio/port9.jpg",
    projectName: "Real-time Chat Application",
    projectType: "web",
    technologies: ["Next.js", "Socket.io", "MongoDB"],
  },
];

export const filtersData = [
  {
    id: 0,
    label: "all",
  },
  {
    id: 1,
    label: "data",
  },
  {
    id: 2,
    label: "web",
  },
  {
    id: 3,
    label: "mobile",
  },
];

export const BlogInfoData = [
  {
    id: 1,
    icon: UserRoundPen,
    info: "John Doe",
  },

  {
    id: 2,
    icon: Clock,
    info: "Jan 1, 2024",
  },
  {
    id: 3,
    icon: MessageCircle,
    info: 8,
  },
];

export const recentPostData = [
  {
    id: 1,
    image: "/assets/posts/post1.jpg",
    title: "The AI Revolution: How Machine Learning is Reshaping Our Future",
    date: "01/03/2025",
  },
  {
    id: 2,
    image: "/assets/posts/post2.jpg",
    title:
      "Quantum Computing Explained: Breaking the Limits of Classical Machines",
    date: "18/02/2025",
  },
  {
    id: 3,
    image: "/assets/posts/post3.jpg",
    title: "Top Cybersecurity Trends to Watch in 2025",
    date: "08/02/2025",
  },
  {
    id: 4,
    image: "/assets/posts/post4.jpg",
    title: "Beyond Cryptocurrency: The Expanding Role of Blockchain",
    date: "25/01/2025",
  },
  {
    id: 5,
    image: "/assets/posts/post5.jpg",
    title: "10 Programming Languages That Will Dominate the Next Decade",
    date: "10/01/2025",
  },
];

export const tagsData = [
  { id: 1, title: "App" },
  { id: 2, title: "IT" },
  { id: 3, title: "Business" },
  { id: 4, title: "Mac" },
  { id: 5, title: "Design" },
  { id: 6, title: "Office" },
  { id: 7, title: "Creative" },
  { id: 8, title: "Studio" },
  { id: 9, title: "Smart Tips" },
  { id: 10, title: "Marketing" },
];

export const categoriesData = [
  { id: 1, title: "General", count: 25 },
  { id: 2, title: "Lifestyle", count: 12 },
  { id: 3, title: "Travel", count: 5 },
  { id: 4, title: "Design", count: 22 },
  { id: 5, title: "Creative", count: 8 },
  { id: 6, title: "Education", count: 14 },
];

export const commentsData = [
  {
    id: 1,
    name: "Sarah Mitchell",
    image: "/assets/testimonials/person1.jpg",
    comment: "This article was super helpful, thank you for sharing!",
    date: "2025-08-01",
    replies: [
      {
        id: 5,
        name: "Mark Peterson",
        image: "/assets/testimonials/person6.jpg",
        comment: "Glad you found it useful, Sarah!",
        date: "2025-08-02",
        replies: [],
      },
    ],
  },
  {
    id: 2,
    name: "David Carter",
    image: "/assets/testimonials/person3.jpg",
    comment: "I have a question about the second point you mentioned.",
    date: "2025-08-03",
    replies: [],
  },
  {
    id: 3,
    name: "Emily Johnson",
    image: "/assets/testimonials/person4.jpg",
    comment:
      "Great insights here! I especially liked the part about practical applications.",
    date: "2025-08-04",
    replies: [
      {
        id: 6,
        name: "Sarah Mitchell",
        image: "/assets/testimonials/person7.jpg",
        comment: "Exactly! That part resonated with me too.",
        date: "2025-08-04",
        replies: [],
      },
    ],
  },
  {
    id: 4,
    name: "Michael Smith",
    image: "/assets/testimonials/person8.jpg",
    comment:
      "Could you elaborate on the last example? It wasn’t entirely clear to me.",
    date: "2025-08-05",
    replies: [],
  },
];

export const brandsData = [
  {
    id: 1,
    logo: "/assets/brands/goodrich.png",

    brand: "goodrich",
  },
  {
    id: 2,
    logo: "/assets/brands/maxim.svg",
    brand: "maxim",
  },
  {
    id: 3,
    logo: "/assets/brands/metabo.png",
    brand: "metabo",
  },
  {
    id: 4,
    logo: "/assets/brands/neuralink.svg",
    brand: "neuralink",
  },
  {
    id: 5,
    logo: "/assets/brands/redtube.svg",
    brand: "redtube",
  },
  {
    id: 6,
    logo: "/assets/brands/sonny.png",
    brand: "sonny",
  },
  {
    id: 7,
    logo: "/assets/brands/sunExpress.png",
    brand: "sunExpress",
  },
];
