import { useState } from "react"
import { connect } from "react-redux";
import _ from 'lodash';
import Product from "../product/product";


const Group = ({idGroup, group, products}) => {
    const [ state, toggleState ] = useState(true);
    const onHandlerClick = () => toggleState(!state)

    
    return <div className="group__container" onClick={onHandlerClick}>
        <div className="group__header">{group.G}</div>
        {state &&
            <div className="group__content">
                <div className="products-list">
                    {products.map((product, i) => 
                        <Product className="product-list__item" product={product} key={product.id} />
                    )}
                </div>
            </div>
        }
    </div>
}

const mapStateToProps = (state, ownProps) => {
    const group = state.fullProducts[ownProps.idGroup]; // current group to render
 
    const products =  _.map(
        _.filter(state.products, group => group.G === ownProps.idGroup),
        product => ({...group.B[product.T], id: product.T, ...product})
    );

    return {
        products: products,
        group: group
    }
}

export default connect(mapStateToProps)(Group)