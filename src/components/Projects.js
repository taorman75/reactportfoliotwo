import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
} from "react-mdl";
import portpic from "./pictures/Portfolio.jpg";
import empsyspic from "./pictures/MainMenu.jpg";
import readmepic from "./pictures/GeneratedREADME.jpg";
import weathpic from "./pictures/WeatherDashboard.jpg";
import donutpic from "./pictures/DancyDonut.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* REACT Portfolio */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: `url(${portpic}) center / cover`,
              }}
            >
              React Portfolio
            </CardTitle>
            <CardText>The React version of my Portfolio on GitHub</CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/taorman75/reactportfoliotwo"
                target="_blank"
              >
                Github
              </Button>
              <Button
                colored
                href="https://powerful-brook-36462.herokuapp.com"
                target="_blank"
              >
                Live
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Employee Management System */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: `url(${empsyspic}) center / cover`,
              }}
            >
              Employee Management System
            </CardTitle>
            <CardText>
              This Node.js app allows a user to view, add, remove, and alter
              employee information sourced from a MySQL database. The app allows
              the user to view different combinations of employee information,
              utilizing SQL Joins.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/taorman75/Employee_Management_System"
                target="blank"
              >
                Github
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
          {/* README Generator  */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: `url(${readmepic}) center / cover`,
              }}
            >
              README Generator
            </CardTitle>
            <CardText>
              This README generator creates a customized README.md file based on
              the user's answers to a series of prompts in Node.JS. The
              generated README will include the following sections: Title, Table
              of Contents, Badge , Description, Installation, Usage, Licensing,
              Contribution, Testing, and Questions.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/taorman75/README-Generator"
                target="blank"
              >
                Github
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Donut Seeker  */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: `url(${donutpic}) center / cover`,
              }}
            >
              Donut Seeker
            </CardTitle>
            <CardText>
              Donut Seeker is a collaborative creation of a group of bootcamp
              students! The app tells the user where the nearest donuts can be
              acquired, based on current location or a zip code search. Utilizes
              Google Places, Google Maps, and the Giphy API. Built with Bulma.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/taorman75/donut-seeker"
                target="_blank"
              >
                Github
              </Button>
              <Button
                colored
                href="https://britt1216.github.io/donut-seeker/"
                target="_blank"
              >
                Live
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
          {/* Weather Dashboard */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: `url(${weathpic}) center / cover`,
              }}
            >
              Weather Dashboard
            </CardTitle>
            <CardText>
              This weather dashboard provides both the current conditions and
              the 5-day forecast of any city that the user enters in the search
              box. Information for the current day includes the current
              temperature, humidity, wind speed, and a color-coded UV index. The
              5-day forecast includes the date, high temperature, and humidity.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/taorman75/Weather-Dashboard"
                target="blank"
              >
                Github
              </Button>
              <Button
                colored
                href="https://taorman75.github.io/Weather-Dashboard/"
                target="blank"
              >
                Live
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* NeighBOARD */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500) center / cover",
              }}
            >
              NeighBOARD
            </CardTitle>
            <CardText>
              This boot camp group project - utilizing SQL, Sequelize, and
              Handlebars - allows a user to interact with their community;
              includes a post option, a board, and a neighbor listing.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/taorman75/NeighBOARD"
                target="_blank"
              >
                Github
              </Button>
              <Button
                colored
                href="https://infinite-springs-66297.herokuapp.com"
                target="_blank"
              >
                Live
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Node.js</Tab>
          <Tab>JavaScript/APIs</Tab>
          <Tab>Handlebars/Sequelize</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
