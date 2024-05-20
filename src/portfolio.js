/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sai Nikhil Reddy Vatti",
  title: "Hi all, I'm Sai Nikhil Reddy Vatti",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://my-resume-1605.s3.amazonaws.com/Sai-Nikhil-Reddy-Vatti-Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sainikhil1605",
  linkedin: "https://www.linkedin.com/in/nikhilreddy1605",
  gmail: "sainikhilvatti1605@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React JS", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "eIQdigital",
      companylogo: require("./assets/images/eiqdigital.jpeg"),
      desc: "Houston, TX",
      date: "May 2024 - Present"
    },
    {
      role: "Software Engineer",
      company: "Sureify",
      companylogo: require("./assets/images/sureify.jpg"),
      date: "March 2021 – Aug 2022",
      desc: "Hyderabad, India",
      descBullets: [
        "Developed complex multi-page features like beneficiary management, payments, account updates, dashboard and few other pages using ReactJs and Redux",
        "Enhanced the accessibility of the UI elements by migrating the webApp from legacy frameworks to the Material UI."
      ]
    },

    {
      role: "Programmer Analyst",
      company: "Cognizant",
      companylogo: require("./assets/images/cognizant.webp"),
      date: "Hyderabad, India",
      descBullets: [
        "Received comprehensive training in React, SQL, Java, and Spring Boot technologies.",
        "Utilized Spring Boot API and MySQL to develop a Movie ticket booking system, incorporating unit test cases using Junit for quality assurance.",
        "Achieved 1st place in a coding competition among 1000 interns, showcasing proficiency in backend development and problem-solving skills."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Open Source Projects",
  subtitle: "Open source projects that I have contributed to",
  projects: [
    {
      image: require("./assets/images/miru-blue-logo.png"),
      projectName: "Miru Web",
      projectDesc:
        "Miru | Time Tracking and Invoicing and Employee Benefits. Built using Ruby On Rails and ReactJS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/saeloun/miru-web"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
const mobileApps = {
  projects: [
    {
      image: require("./assets/images/journal-app.gif"),
      projectName: "Journal App",
      projectDesc:
        "A journal taking app build using React Native where user can add Image and Text to their journal. User can add location for a journal",
      projectLink: {
        name: "View Code",
        url: "https://github.com/sainikhil1605/journal-app"
      }
    },
    {
      image: require("./assets/images/buddies-app.png"),
      projectName: "Buddies App",
      projectDesc:
        "Buddies is a dynamic social media platform built with React Native and Node.js, leveraging microservices architecture to deliver a seamless and scalable user experience for connecting and sharing with friends.",
      projectLink: {
        name: "View Code",
        url: "https://github.com/sainikhil1605/buddies-social-app"
      }
    }
  ]
};
// Chrome Extension
const chromeExtensions = {
  projects: [
    {
      image: require("./assets/images/applyEase.png"),
      projectName: "Apply Ease",
      projectDesc:
        "A chrome extension that can autofill the job application form with user's details and for custom questions such as 'Why are you interested in this company?', the extension sends the job description and application question to the Node server. There, it parses the user's resume and sends both the resume and the questions to the OpenAI API to generate a tailored answer, which is then autofilled in the text area. ",
      projectLink: {
        name: "View Code",
        url: "https://github.com/sainikhil1605/ApplyEase"
      }
    }
  ]
};
const chatBots = {
  projects: [
    {
      image: require("./assets/images/Stark-ai.webp"),
      projectName: "Stark: Intelligent Travel Assistant",
      projectDesc:
        "Stark is a cutting-edge chatbot designed to assist travelers in finding the most economical flight options. Built using Hume AI, Stark supports both voice and text interactions, providing audio outputs for a more engaging user experience. Its ability to recognize human emotions and handle interruptions seamlessly makes it not just a tool, but a responsive and empathetic travel companion. Whether you're chatting or speaking, Stark understands your needs and guides you effortlessly through your travel planning.",
      projectLink: {
        name: "View Code",
        url: "https://github.com/sainikhil1605/stark-ai"
      }
    }
  ]
}
// NPM Packages
const npmPackages = {
  projects: [
    {
      image: require("./assets/images/auth-zen.webp"),
      projectName: "Auth Zen",
      projectDesc:
        "Auth Zen is a powerful and intuitive authentication middleware for Node.js, designed to simplify the implementation of secure authentication processes in web applications. It provides developers with an intuitive and straightforward authentication middleware, ensuring robust security without the complexity.",
      projectLink: {
        name: "View Code",
        url: "https://github.com/sainikhil1605/auth-zen",
        registryLink: "https://www.npmjs.com/package/auth-zen"
      }
    }
  ]
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Completed the AWS Cloud Quest and earned the Cloud Practitioner Badge.",
      image: require("./assets/images/aws.png"),
      imageAlt: "AWS Cloud Practitioner Badge",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://my-resume-1605.s3.amazonaws.com/AWS+Certified+Cloud+Practitioner+certificate.pdf"
        }
      ]
    },
    {
      title: "Infosys Certified Software Programmer",
      subtitle: "Certified as Software Programer from Infosys.",
      image: require("./assets/images/infytq.png"),
      imageAlt: "Infytq Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://my-resume-1605.s3.amazonaws.com/Infosys+Certification+-+Vatti+Sai+Nikhil.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(720)-736-2293",
  email_address: "sainikhilvatti1605@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  mobileApps,
  chromeExtensions,
  npmPackages,
  chatBots
};
