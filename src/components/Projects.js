import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
        return(
            <div className="projects-grid">

            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"}}>React Portfolio</CardTitle> 
                <CardText>
                    The React version of my Portfolio on GitHub
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/taorman75/react-portfolio" target="_blank">Github</Button>
                <Button colored>Live</Button>
                
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
            </div>
        )
    } else if (this.state.activeTab === 1) {
        return(
            <div className="projects-grid">
                <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"}}>Employee Management System</CardTitle> 
                <CardText>
                This Node.js app allows a user to view, add, remove, and alter employment information sourced from a MySQL database. The app allows the user to view different combinations of employee information, utilizing SQL Joins.
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/taorman75/Employee_Management_System" target="blank">Github</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"}}>README Generator</CardTitle> 
                <CardText>
                This README generator creates a customized README.md file based on the user's answers to a series of prompts in Node.JS. The generated README will include the following sections: Title, Table of Contents, Badge , Description, Installation, Usage, Licensing, Contribution, Testing, and Questions.
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/taorman75/README-Generator" target="blank">Github</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
            </div>
        )
    } else if (this.state.activeTab === 2) {
        return(
            <div className="projects-grid">
                <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "black", height: "176px", background: "url(data:image/png;base64,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) center / cover"}}>Donut Seeker</CardTitle> 
                <CardText>
                Donut Seeker is a collaborative creation of a group of bootcamp students! The app tells the user where the nearest donuts can be acquired, based on current location or a zip code search. Utilizes Google Places, Google Maps, and the Giphy API. Built with Bulma.
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/taorman75/donut-seeker" target="_blank">Github</Button>
                <Button colored href="https://britt1216.github.io/donut-seeker/" target="_blank">Live</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "black", height: "176px", background: "url(data:image/jpeg;base64,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) center / cover"}}>Weather Dashboard</CardTitle> 
                <CardText>
                This weather dashboard provides both the current conditions and the 5-day forecast of any city that the user enters in the search box. Information for the current day includes the current temperature, humidity, wind speed, and a color-coded UV index. The 5-day forecast includes the date, high temperature, and humidity.
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/taorman75/README-Generator" target="blank">Github</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
            </div>
        )
    } else if (this.state.activeTab === 3) {
        return(
            <div>
                <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500) center / cover"}}>NeighBOARD</CardTitle> 
                <CardText>
                This boot camp group project - utilizing SQL, Sequelize, and Handlebars - allows a user to interact with their community; includes a post option, a board, and a neighbor listing.
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/taorman75/NeighBOARD" target="_blank">Github</Button>
                <Button colored href="https://infinite-springs-66297.herokuapp.com">Live</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
            </div>
        )
    }
}

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
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
        )
    }
}

export default Projects;