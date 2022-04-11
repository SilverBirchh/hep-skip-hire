import Footer from "~/components/Footer";
import Contact from "~/features/landing/components/Contact";
import Header from "~/features/landing/components/Header";
import OurArea from "~/features/landing/components/OurArea";
import OurService from "~/features/landing/components/OurService";

export default function Index() {
  return (
    <>
      <Header />
      <OurService />
      <OurArea />
      <Contact />
      <Footer />
    </>
  );
}
