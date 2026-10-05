import { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover Kashi Yatra - IIT BHU's grandest cultural festival since decades. Experience the legacy, spirit, and vision where tradition meets celebration in Varanasi.",
  openGraph: {
    title: "About Kashi Yatra 2027",
    description:
      "The legacy of IIT BHU's biggest cultural fest. 4 days of art, music, dance & cultural extravaganza.",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
