import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51Gv10TAx3m8T4xU5ebOMDBZkL8Gz6GtNvyULMHfW1GmnnXhICDzpgjLJc5WAvcvh1Gm0jxMokYiso6PVELeQsLiE00zuk9TZuE';
    const onToken = token => {
        console.log(token);
        alert('Payment Successfull');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;