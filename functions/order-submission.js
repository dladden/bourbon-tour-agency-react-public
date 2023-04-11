const client = require("@sendgrid/mail");
require("dotenv").config();
const {
  REACT_APP_SENDGRID_API_KEY,
  REACT_APP_SENDGRID_TO_EMAIL,
  REACT_APP_SENDGRID_FROM_ORDER_EMAIL,
} = process.env;
//This function sends email with data for a custom tour
//event, context, callback
exports.handler = async (event, context, callback) => {
  const { cart, total_amount, tourUser } = JSON.parse(event.body);
  client.setApiKey(REACT_APP_SENDGRID_API_KEY);
  //mapping through ids
  const { ids } = {
    ids: cart.map((a) => a.id),
  };

  const order = () => {
    return "ORDER CONFIRMED:" + `${ids}`; //total formatted in cents
  };

  const msg = {
    to: REACT_APP_SENDGRID_TO_EMAIL,
    from: REACT_APP_SENDGRID_FROM_ORDER_EMAIL,
    subject: order(),
    text: JSON.stringify({ cart, total_amount, tourUser }),
    number: JSON.stringify(total_amount),
    html: JSON.stringify({ cart, total_amount, tourUser }),
  };

  try {
    await client.send(msg);
    return {
      statusCode: 200,
      body: "Message sent",
    };
  } catch (error) {
    return {
      statusCode: error.code,
      body: JSON.stringify({ msg: error.message }),
    };
  }
};
