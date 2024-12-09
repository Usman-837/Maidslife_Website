import React, { useState } from "react"
import { RxCross2 } from "react-icons/rx"
import emailjs from "emailjs-com"

const SubmitPopup = ({
  toggleSubmitPopup,
  totalCost,
  bookingDetails,
  selectedDate,
  selectedTime,
  professionals,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedTotalCost = totalCost ? totalCost.toFixed(2) : "0.00 AED";

    const formattedBookingDetails = bookingDetails
      .map((item) => {
        let description = "Details not available";

        if (React.isValidElement(item.des)) {
          if (item.title === "Date and Start Time") {
            description = `${selectedDate ? selectedDate : "No date selected"} ${selectedTime || "No time selected"
              }`;
          } else if (item.title === "Service Details" && item.des.props.children) {
            // Extract service details from React children
            description = item.des.props.children.map((child) =>
              typeof child === "object"
                ? `${child.props.children.join("")}`
                : `${child.join("")}`
            ).join("\n\n");
          }
          else if (item.des.props && Array.isArray(item.des.props.children)) {
            description = item.des.props.children
              .map((child) => (typeof child === "string" ? child : ""))
              .join("\n");
          }
        } else if (typeof item.des === "number") {
          description = item.des.toString();
        } else if (typeof item.des === "string" && item.des.trim() !== "") {
          description = item.des;
        } else if (item.title === "Name of Professionals") {
          description = professionals.includes("Auto Assign")
            ? "Auto Assign"
            : professionals.length > 0
              ? professionals.join("")
              : "N/A";
        }

        return `${item.title} : ${description}`;
      }).join("\n\n");

    console.log("Formatted Booking Details:", formattedBookingDetails);
    console.log("Selected Date:", selectedDate);

    const emailData = {
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      address: formData.address,
      bookingdetails: formattedBookingDetails,
      totalCost: `${formattedTotalCost} AED`,
    };

    console.log("Sending email data:", emailData);

    emailjs
      .send(
        "service_9c91f8f", // Replace with your service ID
        "template_9unq75t", // Replace with your template ID
        emailData,
        "GYkUsD2PjtM-aUVWJ" // Replace with your user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Form Submitted Successfully!");
          toggleSubmitPopup();
        },
        (error) => {
          console.error("Error sending email:", error);
          alert(
            "There was an error submitting the form. Please check the console for more details."
          );
        }
      );
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold mb-4">Submit Your Details</h1>
        <RxCross2 className="text-2xl font-semibold" onClick={toggleSubmitPopup} />
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter Name"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        {/* Contact */}
        <div>
          <label htmlFor="contact" className="block text-gray-700 font-medium">
            Contact Number
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact number"
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-gray-700 font-medium">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter Address"
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-yellow-400 text-white font-bold rounded-md hover:bg-yellow-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitPopup
