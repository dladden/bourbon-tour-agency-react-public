const client = require("@sendgrid/mail");
require("dotenv").config();
const {
  REACT_APP_SENDGRID_API_KEY,
  REACT_APP_SENDGRID_TEMPLATE_ID2,
  REACT_APP_SENDGRID_FROM_NOREPLY_EMAIL,
} = process.env;
//event, context, callback
//Order Confirmation sends en order confirmation email to the customer
//with details like tour picked, date, total cost etc..
exports.handler = async (event, context, callback) => {
  const { guest_email, tour_name, guest_name, date, mainTrans, guests } =
    JSON.parse(event.body);
  client.setApiKey(REACT_APP_SENDGRID_API_KEY);
  //generating order date
  var today = new Date().toLocaleDateString();
  //destructuring date individually
  const start = date[0];
  var startDate = new Date(start).toLocaleDateString();
  const end = date[1];
  var endDate = new Date(end).toLocaleDateString();
  const orderSubject = () => {
    return "Custom Order Submission for: " + `${tour_name}`; //total formatted in cents
  };

  const msg = {
    to: guest_email,
    from: REACT_APP_SENDGRID_FROM_NOREPLY_EMAIL,
    templateId: REACT_APP_SENDGRID_TEMPLATE_ID2,
    dynamic_template_data: {
      subject: orderSubject(),
      date: today,
      tour_date1: startDate,
      tour_date2: endDate,
      name: guest_name,
      tour_name: tour_name,
      tour_guests: guests,
      total_trans: mainTrans,
    },
    // text: JSON.stringify({ cart, total_amount, tourUser }),
    // number: JSON.stringify(total_amount),
    // html: JSON.stringify({ cart, total_amount, tourUser }),
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
