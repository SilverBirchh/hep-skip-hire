import { Form, useTransition } from "@remix-run/react";
import { useRef, useEffect } from "react";
import SkipSize from "~/components/SkipSize";
import Button from "./Button";
import DatePicker from "./DatePicker";

const ContactForm = () => {
  let formRef = useRef<HTMLFormElement>(null);
  const transition = useTransition();
  const isSubmitting = transition.state === "submitting";

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current?.reset();
    }
  }, [isSubmitting]);

  return (
    <div className="contact-form">
      <Form ref={formRef} id="contact-form" method="post" action="/enquiry">
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
                placeholder="Your Message"
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
                label="Send Message"
                isLoading={transition.state === "submitting"}
                loadingLabel="sending..."
              />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default ContactForm;
