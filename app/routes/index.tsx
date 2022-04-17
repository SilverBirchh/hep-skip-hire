import { LinksFunction, MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";
import Contact from "~/features/landing/components/Contact";
import Header from "~/features/landing/components/Header";
import OurArea from "~/features/landing/components/OurArea";
import OurService from "~/features/landing/components/OurService";

export const links: LinksFunction = () => [
  {
    rel: "prefetch",
    as: "image",
    href: "/header-bg.jpg",
  },
  {
    rel: "prefetch",
    as: "image",
    href: "/services.svg",
  },
  {
    rel: "prefetch",
    as: "image",
    href: "/header-shape.svg",
  },
];

export const meta: MetaFunction = () => ({
  title: "Hep Skip Hire",
  description:
    "Skip Hire for household clearances, garden clearances, builders/trade waste, industrial/factory waste in London, Greater London, Hertfordshire and Buckinghamshire.",
});

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
