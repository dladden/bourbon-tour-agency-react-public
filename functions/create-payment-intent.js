//domain/.netlify/functions/create-payment-intent
//handler (async) with two arguments event and context that return a promise (all NODE)

const dotenv = require("dotenv"); //importing dotenv
dotenv.config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_PRIVATE_KEY);

exports.handler = async function (event, context, callback) {
  //if: if event body property exists on event object only then create POST request,
  //prase the data, else return create payment intent
  if (event.body) {
    //parsing: converting string data into javascript JSON object
    const { total_amount, tax, discountAmount } = JSON.parse(event.body);
    //IMPORTANT: this is where total is actually calculated for security purposes
    //Connect to the back end, pass in the id and get values of the total
    //TODO: set up calculation for the total amount like in the reducer
    const calculateOrderAmount = () => {
      // const total_amount_disc = 0;
      //if discount amount is not null return new total amount
      if (discountAmount) {
        var total_amount_disc = total_amount - discountAmount;

        const total_tax = total_amount_disc * (tax / 100);
        var total_amount_int = Math.ceil(total_amount_disc + total_tax);
        return total_amount_int;
      } else {
        const total_tax = total_amount * (tax / 100);
        var total_amount_int = Math.ceil(total_amount + total_tax);
        return total_amount_int; //total formatted in cents
      }
    };
    //try-catch: for connection to stripe
    try {
      //Stripe API from the docs:
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd",

        // statement_descriptor_suffix: "Bourbon Tours",
        // name: cart.name,
        automatic_payment_methods: {
          enabled: true,
        },
      });
      return {
        statusCode: 200,
        body: JSON.stringify({
          clientSecret: paymentIntent.client_secret,
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  } //END if: event.body
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
