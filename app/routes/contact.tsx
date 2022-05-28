import Header from "~/components/Header";
import Footer from "~/components/Footer";
import {
  AtSymbolIcon,
  DeviceMobileIcon,
  MapIcon,
  PhoneIcon,
  SunIcon,
} from "@heroicons/react/solid";
import ContactForm from "~/components/ContactForm";
import { LinksFunction, MetaFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "prefetch",
    as: "image",
    href: "/contact-skips.jpg",
  },
];

export const meta: MetaFunction = () => ({
  title: "Hep Skip Hire | Contact",
  description:
    "Skip Hire for household clearances, garden clearances, builders/trade waste, industrial/factory waste in London, Greater London, Hertfordshire and Buckinghamshire.",
});

const Contact = () => {
  return (
    <div className="relative">
      <Header />
      <div className="container px-24 flex flex-col gap-16 mb-10 mt-5">
        <div className="flex gap-5 justify-between items-center flex-col sm:flex-row">
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-5xl">Get in touch</h2>
            <p className="text-gray-400">
              If you have any questions please submit an enquiry, drop us an
              email or give us a call.
            </p>
          </div>
          <img
            width="300px"
            height="175px"
            src="/contact-skips.jpg"
            alt="Contact Hep Skip Hire"
            className="rounded shadow w-[300px]"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="max-w-xs flex flex-col gap-5">
            <h3 className="font-bold text-2xl">Contact Information</h3>
            <div className="flex gap-5 items-center">
              <AtSymbolIcon className="h-5 w-5 text-yellow-400" />
              <div>
                <a
                  className="font-medium"
                  href="mailto:joseph@hepskiphire.co.uk"
                >
                  Email
                  <br />
                  <span className="font-extralight">
                    joseph@hepskiphire.co.uk
                  </span>
                </a>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <PhoneIcon className="h-5 w-5 text-yellow-400" />
              <div>
                <a className="font-medium" href="tel:01895 820454">
                  Landline
                  <br />
                  <span className="font-extralight">01895 820454</span>
                </a>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <DeviceMobileIcon className="h-5 w-5 text-yellow-400" />
              <div>
                <a className="font-medium" href="tel:07766 391528">
                  Mobile
                  <br />
                  <span className="font-extralight">07766 391528</span>
                </a>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <SunIcon className="h-5 w-5 text-yellow-400" />
              <div>
                <div className="font-medium">
                  Opening hours
                  <span className="font-extralight">
                    <br />
                    Mon-Fri 7am-5pm
                    <br />
                    Sat 7am-1pm
                    <br />
                    Sunday deliveries upon request
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <MapIcon className="h-5 w-5 text-yellow-400" />
              <div>
                <p className="font-medium text-black">
                  Areas we cover
                  <br />
                  <ul className="font-extralight">
                    <li>London</li>
                    <li>Greater London</li>
                    <li>Hertfordshire</li>
                    <li>Buckinghamshire</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-black flex flex-col gap-10">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
