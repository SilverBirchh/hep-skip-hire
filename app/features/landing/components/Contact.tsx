import ContactForm from "~/components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="contact-area py-[120px]">
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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
