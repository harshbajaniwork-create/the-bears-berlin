import ScrollSmoothProvider from "../../components/ScrollSmoothProvider";

export default function PrivacyStatement() {
  return (
    <ScrollSmoothProvider>
      <section className="bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 py-28  text-black dark:text-white">
          <h1 className="text-4xl font-bold mb-8">Privacy Statement</h1>

          {/* Section: General Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">General Information</h2>
            <p className="mb-4">
              The following information provides a simple overview of what
              happens to your personal data when you visit our website. Personal
              data is any data by which you can be personally identified. For
              more detailed information on data protection, please refer to our
              privacy policy listed below this text.
            </p>
          </section>

          {/* Section: Data Collection */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              Data Collection on Our Website
            </h2>

            <h3 className="text-xl font-medium mt-6 mb-2">
              Who is responsible for data collection on this website?
            </h3>
            <p className="mb-4">
              Data processing on this website is carried out by the website
              operator. You can find their contact details in the imprint of
              this website.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">
              How do we collect your data?
            </h3>
            <p className="mb-4">
              Some data is collected when you provide it to us—e.g., by filling
              out a contact form. Other data is collected automatically by our
              IT systems when you visit the website. This mainly includes
              technical data (e.g., browser, OS, time of visit).
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">
              What do we use your data for?
            </h3>
            <p className="mb-4">
              Part of the data is collected to ensure the website works
              correctly. Other data may be used to analyze user behavior.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">
              What rights do you have?
            </h3>
            <p className="mb-4">
              You have the right to receive information about your stored
              personal data at any time, including its origin, recipient, and
              processing purpose. You can also request correction, blocking, or
              deletion of this data, and have the right to lodge a complaint
              with a supervisory authority.
            </p>
          </section>

          {/* Section: Legal and Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              General Notes and Mandatory Information
            </h2>

            <h3 className="text-xl font-medium mt-6 mb-2">Data Protection</h3>
            <p className="mb-4">
              We treat your personal data confidentially and in accordance with
              statutory data protection laws and this declaration. Data
              transmission via the internet can have security gaps; complete
              protection is not possible.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">
              Responsible Office
            </h3>
            <p className="mb-2 font-medium">The Bears Marketing Berlin UG</p>
            <p>Rahul Jain</p>
            <p>Hosemannstrasse 6, 10409 Berlin</p>
            <p>Phone: 01761 55 77 555</p>
            <p>
              Email:{" "}
              <a href="mailto:rahul@thebearsberlin.com" className="underline">
                rahul@thebearsberlin.com
              </a>
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">
              Revocation of Consent
            </h3>
            <p className="mb-4">
              You can revoke consent at any time via informal email. The
              legality of processing up to the point of revocation remains
              unaffected.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">
              Right to Object (Art. 21 DSGVO)
            </h3>
            <p className="mb-4">
              If processing is based on Art. 6(1)(e/f) DSGVO, you can object at
              any time. If your data is processed for direct marketing, you may
              object to that as well.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">
              Right of Complaint
            </h3>
            <p className="mb-4">
              You have the right to complain to a supervisory authority,
              particularly in your habitual residence or workplace.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">Data Portability</h3>
            <p className="mb-4">
              You can request data you provided in a machine-readable format, or
              request direct transfer to another controller where feasible.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">
              SSL or TLS Encryption
            </h3>
            <p className="mb-4">
              For security, this site uses SSL or TLS encryption. You can
              recognize this by the “https://” and a lock icon in the browser
              address bar.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">
              Access, Correction, Deletion
            </h3>
            <p className="mb-4">
              You have the right to request access to your personal data and
              demand correction, deletion, or restriction as legally permitted.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">
              Objection to Promotional Emails
            </h3>
            <p className="mb-4">
              We object to the use of published contact data for unsolicited
              marketing. Legal action may be taken in such cases.
            </p>
          </section>

          {/* Section: Data Collection Details */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              Data Collection on Our Website
            </h2>

            <h3 className="text-xl font-medium mt-6 mb-2">Server Log Files</h3>
            <p className="mb-4">
              Your browser automatically transmits technical data (e.g. IP
              address, browser type, OS, time of request), which we store in log
              files for performance and security (Art. 6 para. 1 lit. f DSGVO).
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">Contact Form</h3>
            <p className="mb-4">
              Data submitted via the contact form is stored for handling your
              request. It is processed based on your consent (Art. 6 para. 1
              lit. a DSGVO) and deleted upon request unless legally required to
              retain it.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">
              Inquiry via Email, Phone or Fax
            </h3>
            <p className="mb-4">
              When you contact us directly, your data is stored and processed
              for the purpose of handling your request (Art. 6 para. 1 lit. b or
              f DSGVO).
            </p>
          </section>

          {/* Section: Job Applications */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              Own Services: Applications
            </h2>

            <h3 className="text-xl font-medium mt-6 mb-2">Scope and Purpose</h3>
            <p className="mb-4">
              We collect and process applicant data to determine suitability for
              employment. Legal basis includes Section 26 BDSG-neu and Art. 6
              (1) lit. b DSGVO.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">Retention</h3>
            <p className="mb-4">
              Application data is retained for 6 months after the process ends
              unless extended for legal reasons. You may object to this storage.
            </p>
          </section>
        </div>
      </section>
    </ScrollSmoothProvider>
  );
}
