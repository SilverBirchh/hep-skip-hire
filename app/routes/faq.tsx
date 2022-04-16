import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Link } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  title: "Hep Skip Hire | FAQs",
  description:
    "Skip Hire for household clearances, garden clearances, builders/trade waste, industrial/factory waste in London, Greater London, Hertfordshire and Buckinghamshire.",
});

const FAQS = [
  {
    question: "Which size skip do I need?",
    Answer: () => (
      <>
        Check out our{" "}
        <Link to="/skips" className="text-blue-400 hover:underline">
          skip guide
        </Link>{" "}
        or{" "}
        <Link to="/contact" className="text-blue-400 hover:underline">
          contact us
        </Link>{" "}
        to have a chat about your needs.
      </>
    ),
  },

  {
    question: "What can I put in my skip?",
    Answer: () => (
      <>
        {" "}
        Check out our{" "}
        <Link to="/skips" className="text-blue-400 hover:underline">
          skip guide
        </Link>{" "}
        or{" "}
        <Link to="/contact" className="text-blue-400 hover:underline">
          contact us
        </Link>{" "}
        to have a chat about your needs.
      </>
    ),
  },

  {
    question: "Where can my skip be placed?",
    Answer: () => (
      <>
        On a driveway, on the road side with a council permit that we can obtain
        or wait and load service.
      </>
    ),
  },
  {
    question: "Will it damage my driveway?",
    Answer: () => (
      <>
        Very rarely, we can provide protection sheets upon request. We do not
        accept any responsibility for any damage.
      </>
    ),
  },
  {
    question: "How long can I keep my skip?",
    Answer: () => <>14 days, longer hire is available upon request.</>,
  },
  {
    question: "When can you deliver, exchange and collect?",
    Answer: () => (
      <>
        We aim for delivery, exchange and collection within 24 hours of the
        order.
        <br />
        Opening times <br />
        <br />
        Mon-Fri 7am-5pm
        <br />
        Sat 7am-1pm
        <br />
        Sunday deliveries upon request
      </>
    ),
  },
  {
    question: "How do I order and how do I pay?",
    Answer: () => (
      <>
        Please{" "}
        <Link to="/contact" className="text-blue-400 hover:underline">
          call
        </Link>{" "}
        and we'll be happy to help.
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <div className="relative">
      <Header />
      <div className="container px-24 flex flex-col md:flex-row gap-10 mb-10 mt-5">
        <div className="max-w-xs flex flex-col gap-5">
          <h3 className="font-bold text-2xl">Frequently Asked Questions</h3>
          <div className="text-gray-400">
            <p>Can't find the answer you're looking for?</p>
            <p>
              Reach out to us through our{" "}
              <Link to="/contact" className="text-blue-400 hover:underline">
                contact form.
              </Link>
            </p>
          </div>
        </div>
        <div className="flex-1 text-black flex flex-col gap-10">
          {FAQS.map(({ question, Answer }) => (
            <div className="max-w-lg" key={question}>
              <p className="font-bold text-black">{question}</p>
              <p className="font-light">{<Answer />}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
