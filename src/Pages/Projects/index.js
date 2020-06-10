import React, { Fragment, Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../../Components/NavBar/index";
import ProjectCards from "../../Components/Cards/index";
import projectCardsJson from "../../projects.json";
import "./reset.css";
import "./style.css";

const allProjects = [
  {
    id: 1,
    projectTitle: "Neon Rain",
    projectDescription: "Web card game",
    projectLanguages:
      "React, Bcrypt, Dotenv, Express, Express-Sessions, Bootstrap, Ajax, JQuery",
    projectImage: require("../../assets/images/neonRainImage.png"),
    projectGitHubLink: "https://github.com/Stimoe/neon-3",
    projectHostSiteLink: "https://neon-3-1.herokuapp.com",
    gitHubIcon: require("../../assets/icons/largeGithubIcon.png"),
    gitHubLink: "https://github.com/Stimoe/neon-3",
    websiteIcon: require("../../assets/icons/monitor-icon.jpg"),
    websiteLink: "https://neon-3-1.herokuapp.com",
  },

  {
    id: 2,
    projectTitle: "Marvel Clicker",
    projectDescription: "Web App",
    projectLanguages: "Html, Javascript, Css",
    projectImage: require("../../assets/images/marvelImage.jpg"),
    projectGitHubLink: "https://github.com/Stimoe/marvel-Clicker",
    projectHostSiteLink: "https://marvel-clicker-game.herokuapp.com",
    gitHubIcon: require("../../assets/icons/largeGithubIcon.png"),
    gitHubLink: "https://github.com/Stimoe/neon-3",
    websiteIcon: require("../../assets/icons/monitor-icon.jpg"),
    websiteLink: "https://neon-3-1.herokuapp.com",
  },
  {
    id: 3,
    projectTitle: "Rock Event",
    projectDescription: "Web app that uses outside API",
    projectLanguages: "Html, Javascript, Css, Jquery",
    projectImage: require("../../assets/images/rockGroupImage.jpg"),
    projectGitHubLink: "https://github.com/Stimoe/RockEventApp",
    projectHostSiteLink: "https://stimoe.github.io/RockEventApp",
    gitHubIcon: require("../../assets/icons/largeGithubIcon.png"),
    gitHubLink: "https://github.com/Stimoe/neon-3",
    websiteIcon: require("../../assets/icons/monitor-icon.jpg"),
    websiteLink: "https://neon-3-1.herokuapp.com",
  },
  {
    id: 4,
    projectTitle: "Bamazon",
    projectDescription: "Interactive database",
    projectLanguages: "Mysql, Javascript Node",
    projectImage: require("../../assets/images/booksImage.jpg"),
    projectGitHubLink: "https://github.com/Stimoe/Bamazon",
    projectHostSiteLink: "https://github.com/Stimoe/Bamazon",
    gitHubIcon: require("../../assets/icons/largeGithubIcon.png"),
    gitHubLink: "https://github.com/Stimoe/neon-3",
    websiteIcon: require("../../assets/icons/monitor-icon.jpg"),
    websiteLink: "https://neon-3-1.herokuapp.com",
  },
  {
    id: 5,
    projectTitle: "Little Library",
    projectDescription: "Web app with database and users",
    projectLanguages:
      "Bcrypt, Dotenv, Express, Express-session, Moment, Mysql2, Sequelize",
    projectImage: require("../../assets/images/littleLibraryImage.jpg"),
    projectGitHubLink: "https://github.com/Stimoe/LittleLibrary",
    projectHostSiteLink: "https://little-library-app.herokuapp.com",
    gitHubIcon: require("../../assets/icons/largeGithubIcon.png"),
    gitHubLink: "https://github.com/Stimoe/neon-3",
    websiteIcon: require("../../assets/icons/monitor-icon.jpg"),
    websiteLink: "https://neon-3-1.herokuapp.com",
  },

  {
    id: 6,
    projectTitle: "Simpsons Gifs",
    projectDescription: "Ghiphy API randomizer",
    projectLanguages: "Html, Javascript, Axios, Ghiphy Api",
    projectImage: require("../../assets/images/theSimpsonsImage.jpeg"),
    projectGitHubLink: "https://github.com/Stimoe/GifTastic",
    projectHostSiteLink: "https://stimoe.github.io/GifTastic",
    gitHubIcon: require("../../assets/icons/largeGithubIcon.png"),
    gitHubLink: "https://github.com/Stimoe/neon-3",
    websiteIcon: require("../../assets/icons/monitor-icon.jpg"),
    websiteLink: "https://neon-3-1.herokuapp.com",
  },
];

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    this.setState({
      projects: allProjects,
    });
  }

  render() {
    let currentProjects = this.state.projects.map((card, index) => {
      return (
        <div className="individual-card">
          <ProjectCards
            projectTitle={card.projectTitle}
            projectDescription={card.projectDescription}
            projectLanguages={card.projectLanguages}
            projectImage={card.projectImage}
            projectGitHubLink={card.projectGitHubLink}
            gitHubIcon={card.gitHubIcon}
            websiteIcon={card.websiteIcon}
          />
        </div>
      );
    });

    return (
      <div>
        <Header />
        <div className="container">
          <div className="currentProjects">
            {currentProjects.length ? currentProjects : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
