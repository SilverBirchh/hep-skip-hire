import { ActionFunction, redirect } from "@remix-run/node";
import sendgrid from "~/lib/sendgrid/index.server";

const generateMessage = (formData: FormData) => ({
  to: ["fjh.solutions@gmail.com", "joseph@hepskiphire.co.uk"],
  from: "welwyndigital@gmail.com",
  subject: "New Skip Hire Enquiry",
  html: `
    Hey!
    <br /><br />
    You've had a new form submission for Hep Skip Hire.
    <br /><br />
    Name: ${formData.get("name")}
    <br /><br />
    Email: ${formData.get("email")}
    <br /><br />
    Phone: ${formData.get("phone")}
    <br /><br />
    Delivery Date:  ${formData.get("date")}
    <br /><br />
    Address:  ${formData.get("address")}
    <br /><br />
    Waste Type:  ${formData.get("waste-type")}
    <br /><br />
    Skip Size:  ${formData.get("skip-size")}
    <br /><br />
    Message: ${formData.get("message")}
    <br /><br />
    Thanks,
    <br /><br />
    Welwyn Digital`,
});

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  if (!formData.get("name")) return null;
  await sendgrid.send(generateMessage(formData));
  return redirect("/enquiry-sent");
};
