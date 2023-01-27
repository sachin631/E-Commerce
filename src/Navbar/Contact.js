import React from "react";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FcCellPhone } from "react-icons/fc";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdReviews } from "react-icons/md";

function Contact() {
  return (
    <div>
      <div className="gmap">
        <iframe
        title="title1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.528656012631!2d76.18320111440455!3d28.52382559574488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39128e03caeb249f%3A0x3a5bda41effa6d1b!2skalali%2C%20Haryana%20127306!5e0!3m2!1sen!2sin!4v1664627810032!5m2!1sen!2sin"
          width="100%"
          height="50%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-[5%]">
        <form
          action="https://formspree.io/f/xlevngly"
          method="post"
          className="flex flex-col justify-center items-center gap-4 "
        >
          <div className="relative flex justify-start items-center ">
            <i className="absolute top-1 left-1 pointer-events-none hover:scale-105 ">
              <MdOutlineDriveFileRenameOutline />
            </i>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="Name"
              required
              autoComplete="off"
              className="border-[3px] border-slate-500 hover:border-blue-600 hover:scale-105 text-center rounded-md pl-6"
            />
          </div>

          <div className="relative flex justify-start items-center">
            <i className="absolute top-1 left-1 pointer-events-none hover:scale-105 ">
              <FcCellPhone />
            </i>

            <input
              type="tel"
              pattern="[0-9]{10}" //it means number should be b/w 0-9 and of 10 digit
              placeholder="PhoneNumber"
              name="PhoneNumber"
              autoComplete="off"
              className="border-[3px] border-slate-500 hover:border-blue-600 hover:scale-105 text-center rounded-md pl-6"
            />
          </div>

          <div className="relative flex justify-start items-center">
            <i className="absolute top-1 left-1 pointer-events-none hover:scale-105 ">
              <MdOutlineMailOutline />
            </i>
            <input
              type="email"
              placeholder="Enter Your Gmail"
              name="Email"
              required
              autoComplete="off"
              className="border-[3px] border-slate-500 hover:border-blue-600 hover:scale-105  text-center rounded-md pl-6"
            />
          </div>
          <div className="relative flex justify-start items-center">
            <i className="absolute top-1 left-4">
              <MdReviews />
            </i>
            <textarea
              rows="4"
              cols="40"
              name="Review/Comments"
              placeholder="Please Give your Review"
              className="mx-2 border-[3px] border-slate-500 hover:border-blue-600 hover:scale-105 text-center rounded-md pl-6 "
              autoComplete="off"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            className="bg-blue-500 rounded-md px-2 py-2  border-[3px]  hover:border-blue-600 hover:scale-105  text-center "
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
