import { useTransition } from "@remix-run/react";
import { useRef, useEffect } from "react";
import Button from "~/components/Button";
import DatePicker from "~/components/DatePicker";
import SkipSize from "./SkipSize";

const Contact = () => {
  const transition = useTransition();

  let form = useRef<HTMLFormElement>(null);

  return (
    <section id="contact" className="contact-area py-120">
      <div className="container">
        <div className="justify-center row">
          <div className="w-full mx-4 lg:w-1/2">
            <div className="pb-10 text-center section-title">
              <h4 className="title">Get In touch</h4>
            </div>
          </div>
        </div>
        <div className="justify-center row">
          <div className="w-full lg:w-2/3">
            <div className="contact-form">
              <form
                ref={form}
                onSubmit={() => form.current?.reset()}
                id="contact-form"
                method="post"
                action="https://formspree.io/f/xknyqryq"
              >
                <div className="row">
                  <div className="w-full md:w-1/2">
                    <div className="mx-4 mb-6 single-form form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        data-error="Name is required."
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="mx-4 mb-6 single-form form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        data-error="Valid email is required."
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="mx-4 mb-6 single-form form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        data-error="Phone is required."
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="mx-4 mb-6 single-form form-group">
                      <DatePicker />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mx-4 mb-6 single-form form-group">
                      <input
                        type="text"
                        name="address"
                        placeholder="Your Address"
                        data-error="Name is required."
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="mx-4 mb-6 single-form form-group">
                      <input
                        type="text"
                        name="waste-type"
                        placeholder="Waste Type"
                        data-error="Waste type is required."
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="mx-4 mb-6 single-form form-group">
                      <SkipSize />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mx-4 mb-6 single-form form-group">
                      <textarea
                        rows={5}
                        placeholder="Your Mesaage"
                        name="message"
                        data-error="Please, leave us a message."
                        required
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <p className="mx-4 form-message"></p>
                  <div className="w-full">
                    <div className="mx-4 mt-2 text-center single-form form-group">
                      <Button
                        label="send message"
                        loadingLabel="sending..."
                        isLoading={transition.state === "submitting"}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
