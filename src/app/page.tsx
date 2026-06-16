import { SitePage } from "@/components/SitePage";
import { buildSiteMetadata } from "@/lib/metadata";
import { defaultLocale } from "@/lib/site-data";

export const metadata = buildSiteMetadata(defaultLocale, "/");

export default function Home() {
  return <SitePage locale={defaultLocale} />;
}
