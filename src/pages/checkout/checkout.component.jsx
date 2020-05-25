import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss'

const Checkout = ({ items, total }) => {

    const header = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

    return (
        <div className=''>
            <table className="checkout-page">
                <thead className='checkout-header'>
                        {
                            header.map(
                                title => (<td className='header-block'>{title}</td>)
                            )
                        }
                        {/* <td className='header-block'>Product</td>
                            <td className='header-block'>Description</td>
                            <td className='header-block'>Quantity</td>
                            <td className='header-block'>Price</td>
                            <td className='header-block'>Remove</td> */}
                </thead>
                <tbody className='checkout-body'>
                    {
                        items.map(item => <CheckoutItem key = {item.id} item = {item} />)
                    }
                </tbody>
                <tfoot className='total'>
                    <tr>Total: ${total}</tr>
                </tfoot>


            </table>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(Checkout);