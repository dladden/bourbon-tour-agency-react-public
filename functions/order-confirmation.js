const client = require("@sendgrid/mail");
require("dotenv").config();
const {
  REACT_APP_SENDGRID_API_KEY,
  REACT_APP_SENDGRID_TEMPLATE_ID,
  REACT_APP_SENDGRID_FROM_NOREPLY_EMAIL,
} = process.env;
//event, context, callback
//Order Confirmation sends en order confirmation email to the customer
//with details like tour picked, date, total cost etc..
exports.handler = async (event, context, callback) => {
  const { cart, total_formatted, tourUser } = JSON.parse(event.body);
  client.setApiKey(REACT_APP_SENDGRID_API_KEY);

  const { ids, dates, names, guests, transports, images } = {
    ids: cart.map((a) => a.id),
    dates: cart.map((a) => a.date),
    names: cart.map((a) => a.name),
    guests: cart.map((a) => a.guests),
    transports: cart.map((a) => a.trans),
    images: cart.map((a) => a.image),
  };
  var dateId = new Date(dates).toLocaleDateString();
  //destructuring user
  const { email, name } = tourUser;

  const orderSubject = () => {
    return "Order Confirmation: " + `${names}`; //total formatted in cents
  };

  const msg = {
    to: email,
    from: REACT_APP_SENDGRID_FROM_NOREPLY_EMAIL,
    templateId: REACT_APP_SENDGRID_TEMPLATE_ID,
    dynamic_template_data: {
      subject: orderSubject(),
      ids: ids,
      tour_date: dateId,
      url: images,
      name: name,
      tour_name: names,
      tour_guests: guests,
      total_trans: transports,
      style: "currency",
      currency: "USD",
      total_amount: total_formatted,
    },
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
