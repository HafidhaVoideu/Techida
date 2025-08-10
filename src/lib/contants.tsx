//Social media
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";

// experience icons

import { Earth } from "lucide-react";
import { Headset } from "lucide-react";
import { Gamepad2 } from "lucide-react";

import { Gift, Wallet, Star, Crown } from "lucide-react";

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
];

export const ICONS = [
  { id: 1, icon: <Linkedin />, href: "https://www.linkedin.com" },
  { id: 2, icon: <Facebook />, href: "https://www.facebook.com" },
  { id: 3, icon: <Youtube />, href: "https://www.youtube.com" },
  { id: 4, icon: <Instagram />, href: "https://www.instagram.com" },
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

    title: "web development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.",
    link: "/services/web-development",
  },

  {
    id: 2,
    icon: Search,
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.",
    link: "/services/seo",
  },

  {
    id: 3,
    icon: Megaphone,
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.",
    link: "/services/marketing",
  },
  {
    id: 4,
    icon: Bug,
    title: "Cyber Security",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.",
    link: "/services/bug-fixing",
  },
  {
    id: 5,
    icon: LayoutGrid,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.",
    link: "/services/ui-ux-design",
  },
  {
    id: 6,
    icon: Palette,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.",
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
    id: 2,
    title: "Support 24/24",
    icon: Headset,
  },
  {
    id: 3,
    title: "Easy to reach",
    icon: Gamepad2,
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
    },

    {
      id: 3,
      label: "services",
    },
    {
      id: 2,
      label: "about",
    },
    {
      id: 4,
      label: "contact",
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
    name: "Racim Benali",
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
