import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getVenueBySlug,
  getEventsAtVenue,
  getAllVenueSlugs,
} from "@/components/pages/schedule/config/campusMap.config";
import { VenuePageContent } from "@/components/pages/schedule";

interface PageProps {
  params: Promise<{ venue: string }>;
}

export async function generateStaticParams() {
  return getAllVenueSlugs().map((slug) => ({
    venue: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { venue: slug } = await params;
  const venue = getVenueBySlug(slug);

  if (!venue) {
    return {
      title: "Venue Not Found",
    };
  }

  return {
    title: `${venue.name} | Schedule`,
    description: `All Kashi Yatra 2027 events happening at ${venue.name}, IIT (BHU) Varanasi.`,
  };
}

export default async function VenuePage({ params }: PageProps) {
  const { venue: slug } = await params;
  const venue = getVenueBySlug(slug);

  if (!venue) {
    notFound();
  }

  return <VenuePageContent venue={venue} events={getEventsAtVenue(slug)} />;
}
