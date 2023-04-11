// import React from "react";
import styled from "styled-components";
import React from "react";
import Calendar from "react-calendar"; //importing calendar from the react-calendar dependency
import "react-calendar/dist/Calendar.css"; //importing styling from node_module
//tour displays the
const CalendarPicker = ({ date, setDate }) => {
  //constants date used to store the date and setDate to set the date
  //used with the useState takes the current date Date() and stores it in the date constant
  // const [date, setDate] = useState(new Date());
  // //onChange function sets the date
  // const onChange = (date) => {
  //   setDate(date);
  // };
  //disabling past dates
  const tileDisabled = ({ date }) => {
    return date < new Date();
  };

  //onChange is a property of Calendar dependency
  //onChange is called on and the value store is date
  return (
    <Wrapper>
      <div>
        <Calendar tileDisabled={tileDisabled} onChange={setDate} value={date} />
        {/* console output: Thu Nov 17 2022 00:00:00 GMT-0500 (Eastern Standard Time) */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .react-calendar {
    display: inline;
    float: none;
    width: 400px;
    max-width: 100%;
    background: white;
    border: 0px solid #ffff;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
    border-radius: 6px;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__weekNumbers {
    font-weight: bold;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
  }
  .react-calendar__month-view__days__day--weekend {
    color: black;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 0.75em 0.5em;
    background: none;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
    border-radius: 6px;
  }
  .react-calendar__tile--hasActive {
    background: #76baff;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
    border-radius: 6px;
  }
  .react-calendar__tile--active {
    background: black;
    color: white;
    border-radius: 6px;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: grey;
    border-radius: 6px;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
    border-radius: 6px;
  }
  @media (min-width: 700px) {
    .react-calendar {
      width: 600px;
      max-width: 130%;
      background: white;
      border: 0px solid #ffff;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.125em;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;
export default CalendarPicker;
