import { Link } from "@tanstack/react-router";

const ServicesMobile = () => {
  return (
    <main className="flex flex-col w-full h-full">
      <div className="relative">
        {/* Hero Section */}
        <section className="bg-[#808c80] dark:bg-[#2F3A36] min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4">
          {/* Text Content */}
          <div className="text-center mb-8 z-10">
            <p className="font-medium text-sm leading-relaxed text-[#2F3A36] dark:text-[#808c80]">
              At The Bears Berlin, we are hungry for your success and offer
              everything you need to thrive in the ever-evolving digital jungle.
              We deliver integrated marketing and creative solutions across
              digital, social, content, design, and development. Whether you are
              a start-up or established brand, whatever your current goal, our
              Teddy Bears stay by your side, end to end.
            </p>
          </div>

          {/* Service Categories */}
          <div className="flex flex-wrap justify-center gap-2  z-10">
            {[
              "SOCIAL MEDIA",
              "PAID CAMPAIGNS",
              "DESIGN & DEV",
              "INFLUENCER MARKETING",
              "CONTENT PRODUCTION",
              "AI",
            ].map((item, index) => (
              <div
                key={index}
                className="text-[#2F3A36] dark:text-[#808c80] text-xs px-2 py-1 whitespace-nowrap font-semibold"
              >
                [ {item} ]
              </div>
            ))}
          </div>

          {/* Services Text with Gradient */}
          <div className="absolute bottom-0 left-0 right-0 w-full">
            <div className="relative w-full h-32 overflow-hidden">
              <div className="w-screen inset-0 z-10 absolute bottom-0 p-6 bg-gradient-to-t dark:from-[#808c80] from-[#2F3A36] transition-colors" />
              <h1 className="service-heading">Services</h1>
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="bg-[#808c80] dark:bg-[#2F3A36] min-h-screen w-full pt-8 pb-5 px-4">
          <div className="space-y-8">
            {/* Social Media */}
            <div className="service-category text-center">
              <h2 className="text-lg font-semibold mb-4 text-[#2F3A36] dark:text-[#808c80]">
                [SOCIAL MEDIA]
              </h2>
              <ul className="space-y-2 text-[#2F3A36] dark:text-[#808c80] font-medium text-sm">
                <li>Social media strategy & management</li>
                <li>Social-first content creation</li>
                <li>Paid social campaigns</li>
                <li>Gen Z & Gen Alpha targeting</li>
                <li>Social media copywriting</li>
                <li>Community management</li>
              </ul>
            </div>

            {/* Paid Campaigns */}
            <div className="service-category text-center">
              <h2 className="text-lg font-semibold mb-4 text-[#2F3A36] dark:text-[#808c80]">
                [PAID CAMPAIGNS]
              </h2>
              <ul className="space-y-2 text-[#2F3A36] dark:text-[#808c80] font-medium text-sm">
                <li>Paid media strategy</li>
                <li>Media planning & budgeting</li>
                <li>Funnel strategy & retargeting</li>
                <li>Creative development for ads</li>
                <li>Ad performance testing & optimisation</li>
                <li>Meta, TikTok, Google, YouTube Ads, etc.</li>
              </ul>
            </div>

            {/* Design & Dev */}
            <div className="service-category text-center">
              <h2 className="text-lg font-semibold mb-4 text-[#2F3A36] dark:text-[#808c80]">
                [DESIGN & DEV]
              </h2>
              <ul className="space-y-2 text-[#2F3A36] dark:text-[#808c80] font-medium text-sm">
                <li>Web design & development</li>
                <li>UX/UI design</li>
                <li>Branding & visual identity</li>
                <li>Graphic & creative design</li>
                <li>3D modelling & visualisation</li>
                <li>Motion graphics & animation</li>
                <li>Presentations & pitch decks</li>
              </ul>
            </div>

            {/* Influencer Marketing */}
            <div className="service-category text-center">
              <h2 className="text-lg font-semibold mb-4 text-[#2F3A36] dark:text-[#808c80]">
                [INFLUENCER MARKETING]
              </h2>
              <ul className="space-y-2 text-[#2F3A36] dark:text-[#808c80] font-medium text-sm">
                <li>Influencer & creator strategy</li>
                <li>Influencer scouting & outreach</li>
                <li>Influencer campaign planning & execution</li>
                <li>UGC content creation</li>
              </ul>
            </div>

            {/* AI */}
            <div className="service-category text-center">
              <h2 className="text-lg font-semibold mb-4 text-[#2F3A36] dark:text-[#808c80]">
                [AI]
              </h2>
              <ul className="space-y-2 text-[#2F3A36] dark:text-[#808c80] font-medium text-sm">
                <li>AI strategy & consulting</li>
                <li>Workflow automation</li>
                <li>AI tool integration</li>
                <li>Custom AI solutions</li>
                <li>Data & insight automation</li>
              </ul>
            </div>

            {/* Content Production */}
            <div className="service-category text-center">
              <h2 className="text-lg font-semibold mb-4 text-[#2F3A36] dark:text-[#808c80]">
                [CONTENT PRODUCTION]
              </h2>
              <ul className="space-y-2 text-[#2F3A36] dark:text-[#808c80] font-medium text-sm">
                <li>Brand campaign production</li>
                <li>Social media content creation & UGC content</li>
                <li>Event photography & video recaps</li>
                <li>Product photography</li>
                <li>Videography & editing</li>
              </ul>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <h3 className="mb-4 text-base text-[#2F3A36] dark:text-[#808c80] font-extrabold">
              LOOKING FOR SOMETHING SPECIFIC?
            </h3>
            <button className="px-6 py-2 bg-[#2F3A36] dark:bg-[#808c80] text-[#808c80] dark:text-[#2F3A36] rounded-full hover:opacity-90 transition-opacity font-extrabold text-sm">
              <Link to={`/contact`} className="group block">
                LET'S TALK
              </Link>
            </button>
            <p className="mt-4 text-[#2F3A36] dark:text-[#808c80] font-extrabold text-sm">
              WE LOVE A CHALLENGE.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServicesMobile;
