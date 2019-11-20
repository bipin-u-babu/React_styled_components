import React, { Component } from 'react';
import {Productconsumer} from '../context';
import Link from 'react-router-dom';
import ButtonContainer from '../styledComponents/ButtonContainer'
import styled from 'styled-components';

export default class Details extends Component {
    render() {
        return (
            
            <Productconsumer>
                {
                   ({detailProduct}) => {
                       const {id , title, img, info} = detailProduct;
                       console.log(title);
                   return  (
                       <div className="container py-5">
                           <div className="row">
                               <div className="col-10  my-5 text-center text-blue">
                                   <h1>{title}</h1>
                               </div>
                           </div>

                           <div className = "row">
                               <div className = "col-10 mx-auto my-3 col-md-6">
                               <ImageContainer src = {img} alt = "product" className = "img-fluid">
                                    
                                 </ImageContainer>   
                               </div>

                               <div className = "col-10  mx-auto my-3 col-md-6">
                                    <p className = "lead text-muted">{info}</p>
                               </div>
                               </div>
                       </div>
                   
                   )
                    }
                }
            </Productconsumer>
        )
    }
}

const ImageContainer = styled.img`
 
transition: all 1s;
&:hover {
    transform: scale(1.3);
}
`
