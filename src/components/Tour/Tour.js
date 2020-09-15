import React,{Component} from 'react'
import  "./Tour.scss"


class Tour extends Component{

  render(){
    return(
        <article className="tour">
        <div className="img-container">
        <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="howdy"/>
        <span className="close-button"><i className="fas fa-window-close"/></span>
        </div>
        <div className="tour-info">
        <h3>City</h3>
        <h4>Name</h4>
        <h5>info{" "}
        <span>
        <i className="fas fa-caret-square-down"/>
        </span>
        </h5>
        <p>Lorem ipsum</p>

        </div>

        </article>
    )
  }
}

export default Tour;
