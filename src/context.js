import React, { Component } from 'react';
import { storeProducts,detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }

    handleDetail = (id) => {
        const items = this.state.products.find(item => item.id === id);
        this.setState({
            detailProduct: items
        });
    }
    render() {
        return (
           <ProductContext.Provider value = {{...this.state, handleDetail: this.handleDetail}}>
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}

const Productconsumer = ProductContext.Consumer;

export {ProductProvider , Productconsumer}
