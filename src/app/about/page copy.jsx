import SmokeTriangles from "../../components/SmokeTriangles";
import Clients from "../../components/Clients";
import MobileClientMarquee from "../../components/MobileClientMarquee";

const About = () => {
  return (
    <main className="bg-[#CDCCBA] dark:bg-[#252525] relative overflow-hidden">
      {/* Background layer with triangles */}
      <SmokeTriangles />

      {/* Section 1 - Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center relative z-20 px-6 py-12">
        <div className="flex flex-col items-center justify-center container text-center max-w-5xl">
          {/* Main Heading */}
          <h1 className="font-semibold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-black dark:text-[#CDCBBC] leading-tight mb-8">
            Every business needs marketing
          </h1>

          {/* Centered Image */}
          <div className="mb-8">
            <img
              src="/Head.png"
              alt="Marketing Teddy Bear Concept"
              className="object-contain w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto"
            />
          </div>

          {/* Subheading */}
          <h1 className="font-semibold text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-black dark:text-[#CDCBBC] leading-tight">
            Just as every kid needs a teddy bear.
          </h1>
        </div>
      </section>

      {/* Section 2 - Content with images */}
      <section className="min-h-screen flex items-center relative z-20 px-6 py-16">
        <div className="container mx-auto w-full">
          {/* First content block */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="w-full lg:w-1/2 ">
              <p className="sm:text-xl text-lg font-medium text-black dark:text-[#CDCBBC] leading-relaxed">
                Born in the vibrant city of Berlin, we're a{" "}
                <strong>pack of forward-thinkers, creative minds,</strong>{" "}
                <strong>strategists</strong>, and{" "}
                <strong>industry experts</strong> - here to guide you through
                the wilderness of the modern digital jungle.
                <br />
                <br />
                In a landscape that shifts by the hour, we operate with true
                agility. At our core is a tight, powerhouse team of six, backed
                by a network of over 100 top-tier experts from all over the
                world. For every project, we assemble a custom-built team with
                the precise expertise needed. No bloated setups, no unnecessary
                layers. Just the right talent, at the right time, to solve your
                challenge.
                <br />
                <br />
                Founded in 2022, we've been growing fast and getting hungrier.
                Hungry for ideas that break through. Hungry for results. Hungry
                for your success.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/gifs/hello.gif"
                alt="Bear illustration"
                className="object-contain w-full max-w-[400px] sm:max-w-[600px] md:max-w-[828px] max-h-[300px] sm:max-h-[400px] md:max-h-[466px]"
              />
            </div>
          </div>

          {/* Second content block */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/gifs/wink.gif"
                alt="Bear illustration"
                className="object-contain w-full max-w-[300px] sm:max-w-md"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="sm:text-xl text-lg font-medium text-black dark:text-[#CDCBBC] leading-relaxed">
                Most of us had that one toy growing up — a teddy bear, a soft
                blanket, something we carried everywhere. It was the first thing
                we held onto while learning to navigate the world. It offered a
                sense of confidence, comfort, and love.
                <br />
                <br />
                We didn't think of it as a luxury.
                <br />
                We just needed it.
                <br />
                <br />
                For businesses, marketing is exactly that.
                <br />
                <br />
                It's not an add-on and a nice-to-have. It's what shapes how
                people see you, remember you, and choose you. It's what gives
                your brand a place in a world full of noise. Without it, even
                the best ideas risk going unnoticed.
                <br />
                <br />
                The Bears Berlin was born out of the idea that no brand should
                grow up without that support. Because behind every iconic name
                is <strong>a story, a strategy,</strong> and{" "}
                <strong>a community</strong> — and that's what we craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Born in Berlin */}
      <section className="min-h-screen flex flex-col justify-center relative z-20 px-6 py-20">
        <div className="flex flex-col items-center justify-center space-y-14 flex-grow">
          <div className="space-y-28">
            <h1 className="font-bold text-[60px] sm:text-[80px] md:text-[100px] lg:text-[110px] text-black dark:text-[#CDCBBC] leading-tight text-center">
              Born in Berlin.
            </h1>
            <h1 className="font-bold text-[60px] sm:text-[80px] md:text-[100px] lg:text-[110px] text-black dark:text-[#CDCBBC] leading-tight text-center">
              Built for <span className="font-normal italic">bold ideas.</span>
            </h1>
            <h1 className="font-bold text-[60px] sm:text-[80px] md:text-[100px] lg:text-[110px] text-black dark:text-[#CDCBBC] leading-tight text-center">
              Powered by purpose.
            </h1>
          </div>
          <div>
            <p className="sm:text-xl text-lg font-medium text-black dark:text-[#CDCBBC] text-center px-4">
              We believe in marketing that moves people. Stories that stir
            </p>
            <p className="sm:text-xl text-lg font-medium text-black dark:text-[#CDCBBC] text-center px-4">
              something. Design that makes you stop scrolling. And results you
              can feel.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Wild Results */}
      <section className="min-h-screen flex items-center relative z-20 px-6 py-16">
        <div className="container mx-auto w-full">
          {/* Top heading */}
          <div className="text-center mb-16">
            <h2 className="font-semibold text-[50px] sm:text-[70px] md:text-[90px] text-black dark:text-[#CDCBBC] leading-[0.9] mb-4">
              Wild results.
            </h2>
            <h2 className="font-semibold text-[50px] sm:text-[70px] md:text-[90px] text-black dark:text-[#CDCBBC] leading-[0.9]">
              Wrapped in teddy care.
            </h2>
          </div>

          {/* Content with bear image */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left paragraph */}
            <div className="w-full lg:w-1/3 text-left">
              <p className="sm:text-xl text-lg font-medium text-black dark:text-[#CDCBBC] leading-relaxed">
                In a world where everyone has access to the same AI tools and
                everything starts to look and sound the same,{" "}
                <strong>authenticity</strong> is what sets a brand apart.
                <br />
                <br />
                We build marketing that goes beyond templates. Every campaign,
                every post, every touchpoint is built to resonate and deliver
                results, not just noise.
              </p>
            </div>

            {/* Bear image - centered */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <img
                src="/heart.png"
                alt="Bear illustration"
                className="w-auto max-w-[300px] sm:max-w-[400px] md:max-w-[622px] h-auto max-h-[250px] sm:max-h-[300px] md:max-h-[350px] object-contain"
              />
            </div>

            {/* Right paragraph */}
            <div className="w-full lg:w-1/3 text-left lg:text-right">
              <p className="sm:text-xl text-lg font-medium text-black dark:text-[#CDCBBC] leading-relaxed">
                Our teddies are trained to care — and they work closely with
                your team to identify pain points and understand what matters.
                They work quietly behind the scenes — so you can take a moment
                to breathe, knowing we've got it covered.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <h1 className="sm:text-[40px] text-2xl font-semibold text-center text-black dark:text-[#CDCBBC]">
              In a world where everyone has access to the same AI tools and
              everything starts to look and sound the same, authenticity is what
              sets a brand apart.
            </h1>
          </div>
        </div>
      </section>

      {/* Client Components - No margin, goes edge to edge */}
      <div className="relative z-20">
        {/* Desktop Clients */}
        <div className="hidden md:block">
          <Clients />
        </div>

        {/* Mobile Client Marquee */}
        <div className="block md:hidden">
          <MobileClientMarquee />
        </div>
      </div>
    </main>
  );
};

export default About;
