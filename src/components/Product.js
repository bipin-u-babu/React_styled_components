import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"
import { Productconsumer} from "../context";

export default class Product extends Component {

    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className='col-9 col-md-6 col-lg-3 my-3 mx-auto'>
                <div className="card">
                  <Productconsumer>

                    {(val) => (
                            <div className="img-container p-5" onClick={() => {
                                                val.handleDetail(id);
                                              }}>
                                <Link to="/details">
                                    <img src={img} alt='product' className="card-img-top"></img>
                                </Link>
                                <button className="card-btn px-3 py-1 " disabled={inCart}>
                                    {inCart ? (<p className="text-capitalize mb-0" disabled>in cart</p>) : (<i className="fas fa-cart-plus" />)}
                                </button>
                            </div>

                    )}
                    </Productconsumer>

                   <div className="card-footer d-flex justify-content-between">
                                <p className="align-self-center mb-0">{title}</p>
                                <h5 className="text-blue"><span className='mr-1'>$</span>{price}</h5>
                     </div>

                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
.card {
    border-color: transparent;
    transition: all 1s;
}

.card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s;
}

&:hover {
    .card {
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    }
    .card-footer {
       background:  rgba(247,247,247)
    }
}

.img-container {
    position: relative;
    overflow: hidden;
}

.img-container:hover .card-img-top {
    transform: scale(1.3);
}

.card-img-top {
    transition: all 1s linear;
}

.card-btn {
    position:absolute;
    bottom:0;
    right: 0;
    
    background:var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
}

.img-container:hover .card-btn {
    transform: translate(0,0);
}

.card-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
}

`
