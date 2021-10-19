import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineContacts } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";

const Contact = () => {
  return (
    <div className="container p-3 mt-5">
      <h2>Contact with us</h2>
      <div className="row mt-5 mx-0 p-2 bg-white">
        <div className="col-md-4 border-sm-0 border-end">
          <div>
            <h4>Address</h4>
            <GoLocation />
            <div>
              <p>110E 16th St</p>
              <p>Dhaka, BD</p>
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
            <h4>Emergency</h4>
            <IoIosCall />
            <div>
              <p>19971234567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
