const client = require("@sendgrid/mail");
require("dotenv").config();
const {
  REACT_APP_SENDGRID_API_KEY,
  REACT_APP_SENDGRID_TO_EMAIL,
  REACT_APP_SENDGRID_FROM_ORDER_EMAIL,
} = process.env;
//event, context, callback
exports.handler = async (event, context, callback) => {
  const {
    tour_name,
    guest_name,
    guest_email,
    phone_number,
    distill,
    reservation,
    guest_comment,
    date,
    mainTrans,
    guests,
    checked,
  } = JSON.parse(event.body);
  client.setApiKey(REACT_APP_SENDGRID_API_KEY);

  var formatted_date = date.map((str) => {
    return new Date(str).toLocaleDateString();
  });

  const order = () => {
    return "CUSTOM TOUR REQUEST FROM: " + `${guest_name}`; //total formatted in cents
  };

  const msg = {
    to: REACT_APP_SENDGRID_TO_EMAIL,
    from: REACT_APP_SENDGRID_FROM_ORDER_EMAIL,
    subject: order(),
    text: JSON.stringify({
      tour_name,
      guest_name,
      guest_email,
      phone_number,
      distill,
      reservation,
      guest_comment,
      formatted_date,
      mainTrans,
      guests,
      checked,
    }),
    html: JSON.stringify({
      tour_name,
      guest_name,
      guest_email,
      phone_number,
      distill,
      reservation,
      guest_comment,
      formatted_date,
      mainTrans,
      guests,
      checked,
    }),
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
