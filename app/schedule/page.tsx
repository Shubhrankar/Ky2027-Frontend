import { Metadata } from "next";
import { SchedulePageContent } from "@/components/pages/schedule/SchedulePageContent";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Events map for Kashi Yatra 2027 — every venue at IIT (BHU) Varanasi and what's on there, 14th–17th January 2027.",
};

export default function SchedulePage() {
  return <SchedulePageContent />;
}
