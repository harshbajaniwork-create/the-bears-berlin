import axios from "axios";

// Client-side email service using Web3Forms
export const sendContactEmail = async (formData) => {
  try {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      throw new Error(
        "Web3Forms access key is not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file."
      );
    }

    // Send email to business owner
    const ownerEmailResponse = await axios.post(
      "https://api.web3forms.com/submit",
      {
        access_key: accessKey,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        company: formData.company,
        services: `${formData.services?.join(", ") || "None selected"}`,
        Message: formData.message,
        subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
        from_name: "The Bears Berlin Website",
        "h-captcha-response": formData.hCaptchaToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Check if both emails were sent successfully
    if (ownerEmailResponse.status === 200 && ownerEmailResponse.data.success) {
      return {
        success: true,
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      };
    } else {
      throw new Error("Failed to send one or both emails");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        error.message ||
        "Failed to send email. Please try again.",
    };
  }
};
