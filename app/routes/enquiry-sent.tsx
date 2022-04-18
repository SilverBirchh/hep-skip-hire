import { Link } from "@remix-run/react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const EnquirySent = () => {
  return (
    <div className="relative">
      <Header />
      <div className="container px-24 flex flex-col gap-16 mb-10 mt-5">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-5xl">Enquiry Sent</h2>
          <p className="text-gray-400">
            Thank you for you message. A member of the team will be in touch
            shortly.
          </p>
          <Link to="/" className="main-btn gradient-btn self-start">
            Go Back
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EnquirySent;
