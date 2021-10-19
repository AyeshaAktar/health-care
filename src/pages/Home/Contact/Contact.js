import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineContacts, AiOutlineClockCircle } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="mt-5">
      <h2>Contact with us</h2>
      <div className="row mt-5 mx-0 p-0">
        <div className="col-md-4 border-sm-0 border-end">
          <div>
            <h4>Address</h4>
            <GoLocation />
            <div>
              <p>110E 16th St</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 border-sm-0 border-end">
          <div>
            <h4>Contact</h4>
            <AiOutlineContacts />
            <div>
              <p>melody123@gmail.com</p>
              <p>17871234567</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h4>Open hour</h4>
            <AiOutlineClockCircle />
            <div>
              <p>Monday - Friday: 12pm - 8pm</p>
              <p>Saturday: 10am - 2pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
