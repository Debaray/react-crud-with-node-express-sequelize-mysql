import { response } from "express";
import React, {Component} from "react";
import TutorialService from "../services/tutorial.service";

export default class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.getTutorial = this.getTutorial.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateTutorial = this.updateTutorial.bind(this);
        this.deleteTutorial = this.deleteTutorial.bind(this);

        this.state = {
            currentTutorial:{
                id: null,
                title: "",
                description: "",
                published: false
            },
            message: ""
        };
    }

    componentDidMount(){
        this.getTutorial(this.props.match.params.id);
    }

    onChangeTitle(e){
        const title = e.target.value;

        this.setState(function(prevState){
            return {
                currentTutorial: {
                    ...prevState.currentTutorial,
                    title: title
                }
            };
        });
    }

    onChangeDescription(e){
        const description = e.target.value;
        
        this.setState(prevState =>({
            currentTutorial: {
                ...prevState.currentTutorial,
                description:description
            }
        }))
    }

    getTutorial(id){
        TutorialService.get(id)
        .then(response => {
            this.setState({
                currentTutorial:response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        })
    }

    updatePublished(status){
        var data ={
            id: this.state.currentTutorial.id,
            title: this.state.currentTutorial.title,
            description:this.state.currentTutorial.description,
            published: status
        };

        TutorialService.update(this.state.currentTutorial.id, data)
        .then(response => {
             this.setState(prevState =>({

                currentTutorial:{
                    ...prevState.currentTutorial,
                    published:status
                }
             }))
        })
        .catch(e => {
            console.log(e);
        });
    }

    
}