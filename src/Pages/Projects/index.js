import React, { Component } from "react";
import Header from "../../Components/NavBar/index";
import ProjectCards from "../../Components/Cards/index";
import "./reset.css";
import "./style.css";

const allProjects = [
  {
    id: 1,
    projectTitle: "NEON RAIN",
    projectDescription: "WEB CARD GAME",
    projectLanguages:
      "REACT, BCRYPT, EXPRESS, AJAX, JQUERY, HTML, CSS, JAVASCRIPT",
    projectImage: require("../../assets/images/neonRainImage.png"),
    gitHubIcon: require("../../assets/icons/largeGithubIcon.png"),
    projectGitHubLink: "https://github.com/Stimoe/neon-3",
    websiteIcon: require("../../assets/icons/monitor-icon.jpg"),
    websiteLink: "https://neon-3-1.herokuapp.com",
  },

  {
    id: 2,
    projectTitle: "MARVEL CLICKER",
    projectDescription: "WEB APP",
    projectLanguages: "HTML, CSS, JAVASCRIPT",
    projectImage: require("../../assets/images/MARVEL-IMAGE.jpg"),
    gitHubIcon: require("../../assets/icons/largeGithubIcon.png"),
    projectGitHubLink: "https://github.com/Stimoe/marvel-Clicker",
    websiteIcon: require("../../assets/icons/monitor-icon.jpg"),
    websiteLink: "https://marvel-clicker-game.herokuapp.com",
  },
  {
    id: 3,
    projectTitle: "ROCK EVENT",
    projectDescription: "WEB APP FOR LOOKING FOR ROCK CONCERTS",
    projectLanguages: "HTML, CSS, JAVASCRIPT, JQUERY, AXIOS",
    projectImage: require("../../assets/images/rockGroupImage.jpg"),
    gitHubIcon: require("../../assets/icons/largeGithubIcon.png"),
    projectGitHubLink: "https://github.com/Stimoe/RockEventApp",
    websiteIcon: require("../../assets/icons/monitor-icon.jpg"),
    websiteLink: "https://stimoe.github.io/RockEventApp",
  },
  {
    id: 4,
    projectTitle: "BAMAZON",
    projectDescription: "INTERACTIVE DATABASE",
    projectLanguages: "MYSQL, NODE.JS, MYSQL",
    projectImage: require("../../assets/images/booksImage.jpg"),
    gitHubIcon: require("../../assets/icons/largeGithubIcon.png"),
    projectGitHubLink: "https://github.com/Stimoe/Bamazon",
    websiteIcon: require("../../assets/icons/monitor-icon.jpg"),
    websiteLink: "https://github.com/Stimoe/Bamazon",
  },
  {
    id: 5,
    projectTitle: "LITTLE LIBRARY",
    projectDescription: "WEB APP WITH DATABASE AND USERS",
    projectLanguages:
      "BCRYPT, DOTENV, EXPRESS, EXPRESS-SESSION, MOMENT, MYSQL, SEQUELIZE",
    projectImage: require("../../assets/images/littleLibraryImage.jpg"),
    gitHubIcon: require("../../assets/icons/largeGithubIcon.png"),
    projectGitHubLink: "https://github.com/Stimoe/LittleLibrary",
    websiteIcon: require("../../assets/icons/monitor-icon.jpg"),
    websiteLink: "https://little-library-app.herokuapp.com",
  },

  {
    id: 6,
    projectTitle: "SIMPSONS GIFS",
    projectDescription: "GHIPHY API RANDOMIZER",
    projectLanguages: "HTML, CSS, JAVASCRIPT, AXIOS, GHIPHY API",
    projectImage: require("../../assets/images/theSimpsonsImage.jpeg"),
    gitHubIcon: require("../../assets/icons/largeGithubIcon.png"),
    projectGitHubLink: "https://github.com/Stimoe/GifTastic",
    websiteIcon: require("../../assets/icons/monitor-icon.jpg"),
    websiteLink: "https://stimoe.github.io/GifTastic",
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
        <div className="project-main-div">
          <ProjectCards
            projectTitle={card.projectTitle}
            projectDescription={card.projectDescription}
            projectLanguages={card.projectLanguages}
            projectImage={card.projectImage}
            gitHubIcon={card.gitHubIcon}
            projectGitHubLink={card.projectGitHubLink}
            projectHostSiteLink={card.projectHostSiteLink}
            websiteIcon={card.websiteIcon}
            websiteLink={card.websiteLink}
          />
        </div>
      );
    });

    return (
      <div>
        <div className="sticky-top">
          <Header />
        </div>
        <div>
          <div className="currentProjects">
            {currentProjects.length ? currentProjects : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
