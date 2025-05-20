import React from "react";
import Swal from "sweetalert2";
import { IoMdMailOpen } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
function ContactPage() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "88f9a790-8572-4074-aec2-b48c5e4ba0a7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Email sent successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
   <div className="mt-28 mb-24"  id="contact">
     <div className="border px-6 p-6 rounded-xl">
      <h3 className="text-3xl  text-white font-bold text-center">
        GET IN TOUCH
      </h3>
      <div className="md:flex justify-between space-y-5 md:space-y-0 md:gap-5 lg:gap-12">
        <div className="flex-1">
          <h3 className="text-4xl font-bold mb-2 text-white">Dont't hesitate to contact me</h3>
          <p className="font-semibold text-lg mb-2 text-white">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="flex gap-3 items-center">
            <div><IoMdMailOpen className="size-12 text-white"/></div>
            <div>
              <h4 className="text-xl font-semibold text-white">Mail me</h4>
              <p className="text-sm font-semibold text-white">shahidulislamshohi7@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3 items-center mt-3">
            <div><PiPhoneCallFill className="size-12 text-white" /></div>
            <div>
              <h4 className="text-xl font-semibold text-white">Call me</h4>
              <p className="text-sm font-semibold text-white">+8801738283277(WhatsApp)</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form onSubmit={onSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered"
                id=""
              ></textarea>
            </div>
            <button
              className="btn border bg-transparent text-lg text-white mt-3 hover:text-black"
              type="submit"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
   </div>
  );
}

export default ContactPage;
