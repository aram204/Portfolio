 export const works = [
  {
    id: 1,
    image : './images/Tello-EDU-websize.png',
    name: 'Drone Project',
    about: `A real-time drone object detection and tracking system using a custom-trained YOLOv11s model. The project
            supports detection via webcam, video files, and live DJI Tello drone feed. It includes autonomous object
            following, manual drone control, and a complete training pipeline using YOLO format datasets.`,
    skills : [
      'Python', 'Yolo', 'OpenCV', 'DJITelloPy'
    ],
    githubLink : 'https://github.com/aram204/DroneProject'
  },
  {
    id: 2,
    image : './images/Database-featured-image.png',
    name: 'Job Market Analysis with SQL',
    about: `This project uses SQL to explore machine learning job postings, focusing on roles, salaries, and required skills by analyzing data with PostgreSQL and running queries in VS Code, where each query was designed to extract job titles, link them with relevant skills, calculate average salaries, and measure skill demand, with the goal of uncovering patterns in the ML job market through structured data exploration.`,
    skills : [
      'SQL', 'PostgreSQL'
    ],
    githubLink : 'https://github.com/aram204/project_sql'
  },
  {
    id: 3,
    image : './images/1b8cd859-e3dd-49fa-af41-947e534f0914.webp',
    name: 'Telegram Bot',
    about: `A Telegram bot that lets users upload and store media files in a database, allowing them to safely delete the files from their phone and access them anytime through the bot. Ideal for freeing up storage while keeping media easily retrievable on demand.`,
    skills : [
      'Python', 'MongoDB', 'pymongo', 'telebot' 
    ],
    githubLink : 'https://github.com/aram204/TgBotPhoto'
  },
]