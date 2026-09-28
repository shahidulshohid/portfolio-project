import React from "react";
import Swal from "sweetalert2";
import { IoMdMailOpen } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { FiSend } from "react-icons/fi";

function ContactPage() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "88f9a790-8572-4074-aec2-b48c5e4ba0a7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((r) => r.json());

      if (res.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Email sent successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again!",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not send message at this time.",
      });
    }
  };

  return (
    <div className="mt-28 mb-24" id="contact">
      <div className="border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-zinc-900/30 backdrop-blur-sm p-6 sm:p-10 rounded-2xl shadow-sm dark:shadow-none transition-colors duration-300">
        <div className="text-center mb-10">
          <h2 className="mb-3 text-4xl md:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-green-400 dark:to-green-700">
              Get In Touch
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Don't hesitate to reach out
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4 items-center p-4 rounded-xl bg-gray-50 dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 transition-all">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-[#417E38] dark:text-[#9CC842]">
                  <IoMdMailOpen className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white">
                    Mail me
                  </h4>
                  <a
                    href="mailto:shahidulislamshohi7@gmail.com"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#417E38] dark:hover:text-[#9CC842] transition-colors break-all"
                  >
                    shahidulislamshohi7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center p-4 rounded-xl bg-gray-50 dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 transition-all">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-[#417E38] dark:text-[#9CC842]">
                  <PiPhoneCallFill className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white">
                    Call me
                  </h4>
                  <a
                    href="tel:+8801738283277"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#417E38] dark:hover:text-[#9CC842] transition-colors"
                  >
                    +8801738283277 (WhatsApp)
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900/80 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-sm">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label pb-1.5">
                  <span className="label-text font-semibold text-gray-700 dark:text-gray-300">
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="input input-bordered w-full bg-gray-50 dark:bg-zinc-800/80 border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#417E38]"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label pb-1.5">
                  <span className="label-text font-semibold text-gray-700 dark:text-gray-300">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="input input-bordered w-full bg-gray-50 dark:bg-zinc-800/80 border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#417E38]"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label pb-1.5">
                  <span className="label-text font-semibold text-gray-700 dark:text-gray-300">
                    Message
                  </span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="How can I help you?"
                  className="textarea textarea-bordered w-full bg-gray-50 dark:bg-zinc-800/80 border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#417E38]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#417E38] hover:bg-[#34682c] text-white font-bold text-base transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
              >
                <FiSend className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
