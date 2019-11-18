import React, { Component } from 'react'
import Product from "./Product";
import Title from "./Title";
import {storeProducts} from "../data";

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
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
