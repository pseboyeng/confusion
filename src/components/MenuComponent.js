import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle,ListGroup, ListGroupItem } from 'reactstrap';
import DishDetail from './DishdetailComponent';
class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <DishDetail id={dish.id} name={dish.name} image={dish.image} label={dish.label} price={dish.price} description={dish.description}/>
            );
        else
            return(
                <div></div>
            );
    }
   
    renderComments(comments) {

        if(comments != null)
         return(
                 <Comment  comments={comments.comments.map(comment => 
                 <div>
                      <p>{comment.comment}</p>
                      <p> --{comment.author}, {comment.date}</p>
                 </div>
                   
                 )}/>
         );
    }

    render() {
        const menu = this.props.dishes.map((dish) => 
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
           );

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                <div className="row">

                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>

                  <div className='col-12 col-md-5 m-1'>
                    {this.renderComments(this.state.selectedDish)}
                  </div>

                </div>
            </div>
        );
    }
}

const Comment =(props)=>{
    return(
        <div>
            <h4>Comments</h4>
            <ListGroup>
                <ListGroupItem>{props.comments}</ListGroupItem> 
            </ListGroup>
        </div>
    );
}

export default Menu;
