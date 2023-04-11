import React from "react";
import { MdFreeCancellation, MdCancelPresentation } from "react-icons/md";
import styled from "styled-components";
//List View is responsible for displaying the tours in an inline view
const Cancelation = () => {
  return (
    <Wrapper>
      <div>
        <div className="contact">
          <h2 className="heading">Quick & Easy Cancelation</h2>

          <div className="event-card">
            <div className="left">
              <div className="qr-code color-1">
                <MdFreeCancellation size={80} />
              </div>

              <div className="event-info">
                <h3 className="event-name">
                  {" "}
                  <MdCancelPresentation /> Flexible Cancelation
                </h3>

                <p className="event-detail">
                  Please give us a 48-hour notice and receive your money back.
                  Cancellations are easy; if you made a reservation within our
                  PRESELECTED TOURS, email us your name, the date of your tour,
                  and your tour order number. If you made a CUSTOM TOUR
                  reservation, email us: the tour's name and your name. We will
                  confirm your cancellation, and a refund takes about a week to
                  appear on your statement.
                </p>
              </div>
            </div>

            <div className="right">
              {/* <a
                href="https://business.facebook.com/latest/inbox/all?bpn_id=679586316341571&asset_id=106294562241990&nav_ref=redirect_biz_inbox_comet_profile_plus_ap_page_inbox_message_button"
                className="add-to-calender"
              >
                Contact
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    margin: 0;
    padding: 0;
    transition: ease 0.5s;
  }

  .heading {
    text-align: center;
  }

  .contact {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .event-info {
  }
  .event-name {
    font-size: 17px;
  }
  @media (min-width: 576px) {
    .event-name {
      width: 100%;
      font-size: 17px;
    }
  }

  .right {
    // position: relative;
    // width: -10px;
    // margin-right: 30px;
  }

  .event-card {
    width: 100%;
    background: var(--clr-white);
    border-radius: var(--content-radius);
    padding: 1rem;
    display: flex;
    align-items: center;
  }
  .event-card:hover {
    box-shadow: var(--clr-primary-9) 0 0 10px 5px;
  }

  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }

  .qr-code {
    flex: 0 0 80px;
    width: 100px;
    height: 80px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
  }

  .color-1 {
    background: #fff;
  }

  .event-detail {
    font-size: 11px;
    color: #4b4b4b;
    margin-top: 5px;
  }
  @media (min-width: 576px) {
    .event-detail {
      width: 100%;
      font-size: 14px;
    }
  }

  .add-to-calender:hover {
    box-shadow: #cfd5e0 0 0 10px 5px;
    transform: scale(1.1);
  }
`;

export default Cancelation;
