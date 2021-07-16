import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Card >
                    <CardImg top src={this.props.image} alt={this.props.name} />
                    <CardBody>
                      <CardTitle>{this.props.name}</CardTitle>
                      <CardText>{this.props.description}</CardText>
                    </CardBody>
                </Card>
        );
    }
}

export default DishDetail;