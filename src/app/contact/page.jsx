import React, { useState, useRef } from "react";
import ScrollSmoothProvider from "../../components/ScrollSmoothProvider";
import { sendContactEmail } from "../../services/nodemailerService";
import { useMutation } from "@tanstack/react-query";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    company: "",
    services: [],
  });

  const [missingFields, setMissingFields] = useState([]);
  const [hCaptchaToken, setHCaptchaToken] = useState(null);
  const hCaptchaRef = useRef(null);

  // TanStack Query mutation for sending contact email
  const contactMutation = useMutation({
    mutationFn: sendContactEmail,
    onSuccess: () => {
      // Reset form on success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        company: "",
        services: [],
      });
      setMissingFields([]);
      setHCaptchaToken(null);
      // Reset hCaptcha
      if (hCaptchaRef.current) {
        hCaptchaRef.current.resetCaptcha();
      }
    },
  });

  // Helper function to get label classes with highlighting for missing fields
  const getLabelClasses = (fieldName) => {
    const baseClasses = "text-lg sm:text-xl md:text-3xl font-medium block mb-3";
    const normalClasses = "text-[#4F473C] dark:text-[#808C80]";
    const errorClasses = "text-red-500 dark:text-red-400";

    return missingFields.includes(fieldName)
      ? `${baseClasses} ${errorClasses}`
      : `${baseClasses} ${normalClasses}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear missing field highlight when user starts typing
    if (missingFields.includes(name)) {
      setMissingFields((prev) => prev.filter((field) => field !== name));
    }
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      services: checked
        ? [...prevState.services, value]
        : prevState.services.filter((service) => service !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous missing fields
    setMissingFields([]);

    // Check which fields are missing
    const missing = [];
    if (!formData.firstName) missing.push("firstName");
    if (!formData.lastName) missing.push("lastName");
    if (!formData.email) missing.push("email");
    if (!formData.message) missing.push("message");
    if (!formData.company) missing.push("company");

    // Basic form validation
    if (missing.length > 0) {
      setMissingFields(missing);
      return;
    }

    // Check if hCaptcha is completed
    if (!hCaptchaToken) {
      alert("Please complete the hCaptcha verification.");
      return;
    }

    // Use TanStack Query mutation to send email with hCaptcha token
    contactMutation.mutate({ ...formData, hCaptchaToken });
  };

  const onHCaptchaChange = (token) => {
    setHCaptchaToken(token);
  };

  return (
    <>
      <ScrollSmoothProvider>
        <section className="dark:bg-[#4f473c] bg-[#cdccba] min-h-screen flex flex-col justify-center items-center w-full">
          {/* Main content container with max-width constraint */}
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-20 pb-8 sm:pb-12 flex flex-col justify-between h-full">
            {/* Top section with tagline */}
            <div className="mb-8 sm:mb-12">
              <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-[#808C80] text-[#4F473C] leading-tight max-w-5xl">
                In the wilderness of marketing it's good to have a Bear on your
                side.
              </h1>
            </div>

            {/* Divider line */}
            <div className="w-full h-1 dark:bg-[#808C80] bg-[#4F473C] my-2 sm:my-12" />

            {/* Contact section with heading and contact info */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-8 sm:mb-12">
              <h2 className="text-white font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 lg:mb-0 leading-tight">
                Let's talk.
              </h2>
              <div className="flex flex-col items-start lg:items-end gap-2">
                <a
                  href="mailto:info@thebearsberlin.com"
                  className="text-white font-medium text-base sm:text-lg md:text-xl hover:underline break-all sm:break-normal"
                >
                  info@thebearsberlin.com
                </a>
                {/* <a
                href="#"
                className="text-white font-medium text-base sm:text-lg md:text-xl hover:underline"
              >
                @thebearsberlin
              </a> */}
              </div>
            </div>

            {/* Form section with max-width constraint */}
            <div className="w-full max-w-6xl">
              {/* Name fields - stack on mobile, side by side on larger screens */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-8">
                <div className="form-group">
                  <label className={getLabelClasses("firstName")}>
                    [FIRST NAME]
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="We like to know who we're talking to."
                    className="w-full bg-transparent border-b-4 border-[#4F473C] dark:border-[#808C80] focus:border-[#4F473C] dark:focus:border-[#808C80] outline-none py-3 text-[#4F473C] dark:text-[#808C80] placeholder-[#4F473C] dark:placeholder-[#808C80] text-sm sm:text-base transition-colors"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className={getLabelClasses("lastName")}>
                    [LAST NAME]
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-4 border-[#4F473C] dark:border-[#808C80] focus:border-[#4F473C] dark:focus:border-[#808C80] outline-none py-3 text-[#4F473C] dark:text-[#808C80] placeholder-[#4F473C] dark:placeholder-[#808C80] text-sm sm:text-base transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="form-group mb-8">
                <label className={getLabelClasses("email")}>[EMAIL]</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="So we can get back to you with ideas, not spam."
                  className="w-full bg-transparent border-b-4 border-[#4F473C] dark:border-[#808C80] focus:border-[#4F473C] dark:focus:border-[#808C80] outline-none py-3 text-[#4F473C] dark:text-[#808C80] placeholder-[#4F473C] dark:placeholder-[#808C80] text-sm sm:text-base transition-colors"
                  required
                />
              </div>

              {/* Company field */}
              <div className="form-group mb-8">
                <label className={getLabelClasses("company")}>[COMPANY]</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Just so we have context."
                  className="w-full bg-transparent border-b-4 border-[#4F473C] dark:border-[#808C80] focus:border-[#4F473C] dark:focus:border-[#808C80] outline-none py-3 text-[#4F473C] dark:text-[#808C80] placeholder-[#4F473C] dark:placeholder-[#808C80] text-sm sm:text-base transition-colors"
                  required
                />
              </div>

              {/* Message field */}
              <div className="form-group mb-10">
                <label className={getLabelClasses("message")}>[MESSAGE]</label>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Quick one-liner or spill the tea. We're all ears."
                  className="w-full bg-transparent border-b-4 border-[#4F473C] dark:border-[#808C80] focus:border-[#4F473C] dark:focus:border-[#808C80] outline-none py-3 text-[#4F473C] dark:text-[#808C80] placeholder-[#4F473C] dark:placeholder-[#808C80] text-sm sm:text-base transition-colors"
                  required
                />
              </div>

              {/* Services section */}
              <div className="form-group mb-10 border-b-4 border-[#4F473C] dark:border-[#808C80] pb-8">
                <label className="text-[#4F473C] dark:text-[#808C80] text-lg sm:text-xl md:text-3xl font-medium mb-6 block">
                  [SERVICE YOU ARE INTERESTED IN]
                </label>
                <div className="space-y-4">
                  {[
                    "Social Media",
                    "Influencer Marketing",
                    "Paid Campaigns",
                    "Design & Development",
                    "Content Production",
                    "Not Sure Yet / Let's Talk",
                  ].map((service) => (
                    <div
                      key={service}
                      className="flex items-center justify-between gap-4 max-w-lg"
                    >
                      <span className="text-[#4F473C] dark:text-[#808C80] text-base sm:text-lg md:text-xl font-medium">
                        {service}
                      </span>
                      <input
                        type="checkbox"
                        id={service}
                        name="services"
                        value={service}
                        onChange={handleServiceChange}
                        checked={formData.services.includes(service)}
                        className="w-5 h-5 sm:w-6 sm:h-6 border-2 rounded border-[#4F473C] dark:border-[#808C80] accent-[#4F473C] dark:accent-[#808C80] cursor-pointer transition flex-shrink-0"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Status message */}
              {(contactMutation.isSuccess ||
                contactMutation.isError ||
                missingFields.length > 0) && (
                <div
                  className={`mb-6 p-4 rounded-md ${
                    contactMutation.isSuccess
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : contactMutation.isError || missingFields.length > 0
                      ? "bg-red-100 text-red-800 border border-red-300"
                      : "bg-blue-100 text-blue-800 border border-blue-300"
                  }`}
                >
                  <p className="text-sm sm:text-base font-medium">
                    {contactMutation.isSuccess &&
                      "Thank you! Your message has been sent successfully. We'll get back to you soon."}
                    {contactMutation.isError &&
                      (contactMutation.error?.message ||
                        "Failed to send email. Please try again.")}
                    {missingFields.length > 0 &&
                      "Please fill in all required fields."}
                  </p>
                </div>
              )}

              <div className="mb-12">
                <HCaptcha
                  ref={hCaptchaRef}
                  sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                  reCaptchaCompat={false}
                  onVerify={onHCaptchaChange}
                />
              </div>

              {/* Submit button */}
              <div className="flex justify-start mb-12">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={contactMutation.isPending}
                  className={`px-8 py-3 font-medium rounded-md transition-all uppercase text-base shadow-sm ${
                    contactMutation.isPending
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-white text-[#4f473c] dark:text-[#4f473c] hover:bg-opacity-90 cursor-pointer"
                  }`}
                >
                  {contactMutation.isPending ? "Sending..." : "Submit"}
                </button>
              </div>

              {/* Footer text */}
              {/* <div className="space-y-8 text-center max-w-6xl">
              <p className="text-[#4F473C] dark:text-[#808C80] text-base sm:text-lg md:text-xl lg:text-3xl font-medium leading-relaxed">
                We also donate a share of every project to wild bear
                conservation efforts. Work with us—and give back to the real
                bears too.
              </p>
              <p className="text-[#4F473C] dark:text-[#808C80] text-base sm:text-lg md:text-xl lg:text-3xl font-medium leading-relaxed text-shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:text-shadow-[0_0_10px_rgba(128, 140, 128, 0.5)]">
                Bear donation & NGO & wild life,{" "}
                <span className="font-bold">explore</span>. We donate from every
                project.
              </p>
            </div> */}
            </div>
          </div>
        </section>
      </ScrollSmoothProvider>
    </>
  );
};

export default Contact;
