const dataPosts = [
  {
    id: 1,
    imageCourse: "./src/assets/node-js.png",
    tecnology: "TypeScript, Express",
    title: "NodeJS",
    description:
      "I learned to develop rest APIs from the server side, applying the best good programming practices, solid principles and the most robust clean architectures for service scalability.",
  },
  {
    id: 2,
    imageCourse: "./src/assets/java-fundamentals.png",
    tecnology: "Java, SpringBoot",
    title: "Java Fundamentals",
    description:
      "In this course I learned the necessary skills to get a job as a java developer. With this course I was able to understand Java extremely well and was able to create my own applications in Java.",
  },
  {
    id: 3,
    imageCourse: "./src/assets/web-development.png",
    tecnology: "HTML, CSS y JavaScript",
    title: "Web Development",
    description:
      "In this course I learned to build desktop and mobile websites from scratch applying the best practices of html5, css3, javascript and git/github",
  },
];

const dataPostsDetail = [
  {
    id: 1,
    title: "Node JS Advance",
    image: "./src/assets/node-js.png",
    subtitle: "Node JS - TypeScript",
    description:`
    In this course I learned and understood how the web works today,
    how to create websites adapted to different interactive and functional devices,
    handling tagging and HTML5 best practices, handling styles
    graphics and good practices of CSS3, handling of Javascript basic - medium level.
    In turn, I will learn to publish projects under version control
    with GIT/Github and have the ability to handle new frameworks and
    frontend libraries.
    `
      ,
    information: {
      institution: "Escalab Tech Hub",
      date: "01/03/2023",
      instructor: "Carlos Chamorro",
    },
  },
  {
    id: 2,
    title: "Java Fundamentals",
    image: "./src/assets/java-fundamentals.png",
    subtitle: "Java - SpringBoot",
    description:`
    In this course I learned and understood how the web works today,
    how to create websites adapted to different interactive and functional devices,
    handling tagging and HTML5 best practices, handling styles
    graphics and good practices of CSS3, handling of Javascript basic - medium level.
    In turn, I will learn to publish projects under version control
    with GIT/Github and have the ability to handle new frameworks and
    frontend libraries.
    `
      ,
    information: {
      institution: "Escalab Tech Hub",
      date: "01/03/2023",
      instructor: "Carlos Chamorro",
    },
  },
  {
    id: 3,
    title: "Web Development",
    image: "./src/assets/web-development.png",
    subtitle: "HTML, CSS y JavaScript",
    description:`
      In this course I learned and understood how the web works today,
      how to create websites adapted to different interactive and functional devices,
      handling tagging and HTML5 best practices, handling styles
      graphics and good practices of CSS3, handling of Javascript basic - medium level.
      In turn, I will learn to publish projects under version control
      with GIT/Github and have the ability to handle new frameworks and
      frontend libraries.
      `
    ,
    information: {
      institution: "Escalab Tech Hub",
      date: "01/03/2023",
      instructor: "Carlos Chamorro",
    },
  },
];

export { dataPosts, dataPostsDetail };
