import React, { Component } from 'react'
import Product from "./Product";
import Title from "./Title";
import { Productconsumer } from "../context";


export default class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container py-5">
                        <Title text='Products'></Title>

                        {/* product row*/} 
                        <div className = 'row'>
                            <Productconsumer>
                                {
                                    (value) => {
                                         return value.products.map(product => {
                                             return <Product key = {product.id} product = {product}></Product>
                                         })
                                    }
                                }
                            </Productconsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
