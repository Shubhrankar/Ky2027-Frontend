import { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kashi Yatra 2027 team at IIT BHU Varanasi. Reach out for queries, sponsorships, collaborations or media partnerships.",
  openGraph: {
    title: "Contact Kashi Yatra 2027",
    description: "Get in touch with IIT BHU's biggest cultural fest team.",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
