import { Link } from "@remix-run/react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-100 footer-area py-5">
      <div className="footer-widget">
        <div className="container">
          <div className="row">
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
              <div className="mb-8 footer-link">
                <h6 className="footer-title font-bold">
                  Hep <span className="text-yellow-400">Skip</span> Hire
                </h6>

                <ul>
                  <li>
                    <Link to="/skips" prefetch="intent">
                      Our Skips
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" prefetch="intent">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" prefetch="intent">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="mb-8 footer-link">
                <h6 className="footer-title">Get In Touch</h6>
                <ul>
                  <li>
                    <a href="tel:01895 820454">
                      Landline
                      <br />
                      <span className="font-light">01895 820454</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:07766 391528">
                      Mobile
                      <br />
                      <span className="font-light">07766 391528</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:joseph@hepskiphire.co.uk">
                      Email
                      <br />
                      <span className="font-light">
                        joseph@hepskiphire.co.uk
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-center container text-center">
          <p className="text-2xs">
            Hep Skip Hire is registered in England & Wales. Number: 363118022.
          </p>
          <p className="text-2xs">Waste carriers Reg - CBDU360767</p>
          <p className="text-2xs">
            © Hep Skip Hire. All rights reserved. Website by{" "}
            <a className="hover:underline" href="https://welwyn.digital">
              Welwyn Digital
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
