import ScrollSmoothProvider from "../../components/ScrollSmoothProvider";

const Impressum = () => {
  return (
    <ScrollSmoothProvider>
      <section className="bg-white dark:bg-black">
        <div className="min-h-screen  text-black dark:text-white px-6 py-28 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Impressum</h1>

          <p className="mb-4">The Bears Marketing Berlin UG</p>
          <p className="mb-4">
            Hosemannstrasse 6,
            <br />
            10409 Berlin
          </p>

          <h2 className="font-semibold mt-8 mb-2">Managing Director:</h2>
          <p className="mb-4">Rahul Jain</p>

          <h2 className="font-semibold mt-8 mb-2">Contact:</h2>
          <p className="mb-1">Phone: 01761 55 77 555</p>
          <p className="mb-4">E-mail: rahul@thebearsberlin.com</p>

          <h2 className="font-semibold mt-8 mb-2">Registration:</h2>
          <p className="mb-1">Entry in the commercial register.</p>
          <p className="mb-1">Register court: Local court Charlottenburg</p>
          <p className="mb-4">Registration number: HRB 245064 B</p>

          <h2 className="font-semibold mt-8 mb-2">Sales Tax:</h2>
          <p className="mb-1">
            Sales tax identification number according to §27 a
          </p>
          <p className="mb-4">
            Tax number at the tax office for corporations II: 37/557/52060
          </p>

          <h2 className="font-semibold mt-8 mb-2">Dispute Resolution:</h2>
          <p className="mb-4">
            We are not willing or obligated to participate in dispute resolution
            proceedings before a consumer arbitration board.
          </p>

          <h2 className="font-semibold mt-8 mb-2">Liability for Content:</h2>
          <p className="mb-4">
            As a service provider, we are responsible for our own content on
            these pages in accordance with general legislation pursuant to
            Section 7 (1) of the German Telemedia Act (TMG). According to §§ 8
            to 10 TMG, we are not obligated to monitor transmitted or stored
            third-party information or to investigate circumstances that
            indicate illegal activity. Obligations to remove or block the use of
            information remain unaffected. However, liability is only possible
            from the time of knowledge of a specific infringement. Upon becoming
            aware of such violations, we will remove the content immediately.
          </p>

          <h2 className="font-semibold mt-8 mb-2">Liability for Links:</h2>
          <p className="mb-4">
            Our website contains links to external websites of third parties,
            whose contents we have no influence on. Therefore, we cannot assume
            any liability for these external contents. The respective provider
            or operator is always responsible for the contents of the linked
            pages. At the time of linking, these pages were checked for possible
            legal violations. Illegal content was not recognizable at that time.
            Permanent monitoring is not reasonable without specific indications
            of a violation. Upon becoming aware of such violations, we will
            remove the links immediately.
          </p>

          <h2 className="font-semibold mt-8 mb-2">Copyright:</h2>
          <p className="mb-4">
            The contents and works created by the site operators on these pages
            are subject to German copyright law. Duplication, processing,
            distribution, or commercialization beyond the scope of copyright law
            requires the written consent of the author. Downloads and copies are
            permitted only for private, non-commercial use. Third-party content
            is marked as such. If you become aware of any copyright
            infringement, please inform us. Upon becoming aware, we will remove
            such content immediately.
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-12">
            Last updated: {new Date().toLocaleDateString("de-DE")}
          </p>
        </div>
      </section>
    </ScrollSmoothProvider>
  );
};

export default Impressum;
