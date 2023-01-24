// import images
import Hero_person from "./assets/images/Hero/tirth.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import sql from "./assets/images/Skills/sql.png";
import aws from "./assets/images/Skills/aws.png";
import tensorflow from "./assets/images/Skills/tensorflow.png";
import opencv from "./assets/images/Skills/opencv.png";
import django from "./assets/images/Skills/django.png";




import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import tirthpatel from "./assets/images/Testimonials/tirthpatel.jpg";
import yashtelkhade from "./assets/images/Testimonials/yashtelkhade.jpg";


import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "AI/ML Enthusiast",
    firstName: "TIRTH",
    LastName: "HIHORIYA",
    btnText: "Resume",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experinse in ML/AI development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "SQL",
        para: "Expertise in SQL",
        logo: sql,
      },
      {
        name: "AWS",
        para: "Proficiency in AWS",
        logo: aws,
      },
      {
        name: "Tensorflow",
        para: "Hands-on Trained in Tensorflow",
        logo: tensorflow,
      },
      {
        name: "OpenCV",
        para: "Maestro in OpenCV",
        logo: opencv,
      },
      {
        name: "Django",
        para: "Specialist in Django",
        logo: django,
      },
      {
        name: "Python",
        para: "My Native Coding Language",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "AI/ML Development",
        para: "As an AI/ML developer, I strive to use the latest technologies to create innovative applications that will impact the world.",
        logo: services_logo1,
      },
      {
        title: "Software Development",
        para: "I'm a passionate software developer interested in solving complex problems and building innovative solutions.",
        logo: services_logo2,
      },
      {
        title: "Big Data",
        para: "With my expertise in big data technologies, I make data-driven decisions that can help organizations optimize their business processes and make data-driven decisions.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Autoscaling Image Classifier using AWS",
        image: project2,
      },
      {
        title: "Chest X-Ray Analysis for Pneumonia Detection",
        image: project3,
      },
      {
        title: "HOMTEL (Hostel Information Portal)",
        image: project2,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Tirth was instrumental in delivering my project on time and within budget - he was a real asset to our team.”",
        img: yashtelkhade,
        name: "Yash Telkhade",
      },
      {
        review:
          "“His development skills are top-notch and always go above and beyond what's expected!”",
        img: tirthpatel,
        name: "Tirth Patel",
      }
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: " tirth.hihoriya09@gmail.com",
        icon: GrMail,
        link: "mailto:tirth.hihoriya09@gmail.com",
      },
      {
        text: " +1 (602) 813-8833",
        icon: MdCall,
        link: "https://wa.me/602813-8833",
      },
      {
        text: "Tirth Hihoriya",
        icon: BsInstagram,
        link: "linkedin.com/in/tirth-hihoriya-who-helps/",
      },
    ],
  },

  Work:{
    Projects: [

      {
          "_id": "c5de9522-78fe-4cf9-9228-73be399b0115",
          "_type": "works",
          // "codeLink": "https://github.com/YashTelkhade/HacksforHumanity",
          "description": "An end to end application created with MERN Stack, Tailwind CSS and Material UI with authentication. Here we aim to incentivize the volunteering process",
          "imgUrl": "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png",
          "projectLink": "https://revitalize.netlify.app/",
          "tags": [
              "MERN Stack",
              "Web App",
              "UI/UX",
              "All"
          ],
          "title": "Revitalize - Incentivizing Volunteering Process"
      },
      {
          "_id": "dec6721d-9272-4a35-911f-51c1a7a4f1e6",
          "_type": "works",
          "codeLink": "https://github.com/Tejas1510/TatKal-Booking-System",
          "description": "This initiative is taken by me and Indian Railways Nagpur Region to remove the hectic and time-consuming process of Offline Tatkal Reservation System",
          "imgUrl": "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png",
          "projectLink": "https://tatkal-reservation-system.netlify.app/",
          "tags": [
              "MERN Stack",
              "All",
              "Web App"
          ],
          "title": "Online TATKAL Reservation System"
      }
  ]
  },

  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
