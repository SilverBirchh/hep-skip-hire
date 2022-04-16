import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SkipCard from "~/features/skips/components/SkipCard";
import { SkipDetails } from "~/features/skips/types/types";

const SkipTypes: SkipDetails[] = [
  {
    image: "https://via.placeholder.com/150",
    title: "4yd  Skip",
    size: "w: 145cm, h: 95cm, l: 1.3m",
    description:
      "35 bin bags approx. Ideal for smaller jobs and garden clearances etc.",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "6yd  Skip",
    size: "w: 1.7m, h: 1.1m, l: 1.9m",
    description: "60-70 bin bags approx. Popular household skip.",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "8yd  Skip",
    size: "w:1.7m, h:1.3m, l: 2.5m",
    description:
      "75-85 bin bags approx. The most popular choice. Ideal for all jobs and the largest skip to be filled with hardcore or earth.",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "12yd Skip",
    size: "w: 1.7m, h: 1.85m, l: 3.1m",
    description:
      "140-160 bin bags approx. Great for large clear out jobs with large bulky items. Not to be filled with hardcore and soil.",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "16yd Skip",
    size: "w: 1.7m, h: 2m, l: 3.4m",
    description:
      "190-210 bin bags approx. The biggest skip we offer. Perfect for light bulky items. Not to be filled with hardcore and soil.",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "20yd Skip",
    size: "For industrial and trade use",
    description: "Perfect for hardcore and soil. Please call for more info.",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "40yd Skip",
    size: "For industrial and trade use",
    description: "Perfect for light bulky waste. Please call for more info.",
  },
];

export const meta: MetaFunction = () => ({
  title: "Hep Skip Hire | Skip Guide",
  description:
    "Skip Hire for household clearances, garden clearances, builders/trade waste, industrial/factory waste in London, Greater London, Hertfordshire and Buckinghamshire.",
});

const Skips = () => {
  return (
    <div className="relative">
      <Header />
      <div className="container px-24 flex flex-col gap-16 mb-10 mt-5">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-5xl">Skip Guide</h2>
          <p className="text-gray-400 max-w-xl">
            We have many different skips to suit your needs, if you are unsure
            which skip you might need please get in touch and we'll be happy to
            help. Please remember that all measurements are estimates.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="max-w-xs flex flex-col gap-5"></div>
          <div className="flex-1 text-black grid grid-cols-[repeat(_auto-fill,_350px)] gap-10 flex-wrap items-center justify-center">
            {SkipTypes.map((skip) => (
              <SkipCard skip={skip} key={skip.title} />
            ))}
          </div>
        </div>
      </div>
      <section id="area" className="bg-gray-100 pricing-area py-10">
        <div className="container">
          <div className="justify-center row">
            <div className="w-full mx-4 lg:w-1/2">
              <div className="section-title">
                <h4 className="title pb-10">Things to Note</h4>
                <div className="text-left flex flex-col gap-5">
                  <div>
                    <p className="font-bold text-black">
                      The following can be loaded into a skip
                    </p>
                    <p className="font-light text-sm">
                      Paper/cardboard, green/garden waste, soil, wood, plastic,
                      metal, plasterboard (bagged), hardcore/rubble, bricks and
                      tiles
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-black">
                      Please call for collection of the following items
                    </p>
                    <p className="font-light text-sm">
                      Mattresses, tyres, fridge freezers
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-black">
                      Items which cannot go into a skip
                    </p>
                    <p className="font-light text-sm">
                      Asbestos, fluorescent tubes, paint and aerosoles, clinical
                      and medical waste, oils, hazardous and toxic materials
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="area" className="py-10">
        <div className="container">
          <div className="justify-center row">
            <div className="w-full mx-4 lg:w-1/2">
              <div className="section-title">
                <h4 className="title pb-10">How to Order</h4>
                <div className="text-left flex flex-col gap-5">
                  <p>
                    Hep Skip Hire offers a simple, great value service. If you
                    know exactly what you're after please{" "}
                    <Link
                      to={"/contact"}
                      className="text-blue-400 hover:underline"
                    >
                      get in touch
                    </Link>{" "}
                    with us right away. We'll be able to help with any
                    requirements that you have. We'll provide a price and can
                    book a delivery date right away. There are no hidden
                    charges.
                  </p>
                  <p>
                    If you have questions about our service please visit our{" "}
                    <Link to={"/faq"} className="text-blue-400 hover:underline">
                      FAQs
                    </Link>
                    .
                  </p>
                  <p>
                    If you need any advice or help choosing the skip that you
                    need please{" "}
                    <Link
                      to={"/contact"}
                      className="text-blue-400 hover:underline"
                    >
                      get in touch
                    </Link>{" "}
                    and we'll be more than happy to help out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Skips;
