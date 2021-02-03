import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  //Stripe want it in cent e.g instead of $50 they want 5000 cents
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IGhPPJW43g40YfKVtSYUTvt0cRc6vvc8kh4K9QF5SZn7l6UMuRCGuzUEbeypvueOXEU9nNfM2J6Cn2Eltu0yCVG00q9F6hiEq";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Famazone Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
