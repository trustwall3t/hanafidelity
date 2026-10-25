import { PublicPageShell } from "@/components/public/PublicPageShell";
import { PublicSlugBody } from "@/content/PublicSlugBody";
import {
  isPublicSlug,
  PUBLIC_SLUGS,
  SLUG_META,
} from "@/content/public-slugs";
import { getHomePayload, getPublicSite } from "@/lib/public/home-payload";
import { getPublicPage } from "@/lib/public/public-page-content";
import { notFound } from "next/navigation";

export const revalidate = 300;

export function generateStaticParams() {
  return PUBLIC_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (!isPublicSlug(slug)) return {};
  const site = await getPublicSite();
  const page = getPublicPage(slug, site.siteName);
  const fallback = SLUG_META[slug];
  const title = page.title ?? fallback.title;
  return {
    title: `${title} | ${site.siteName}`,
  };
}

export default async function PublicSlugPage({ params }: Props) {
  const { slug } = await params;
  if (!isPublicSlug(slug)) notFound();

  const site = await getPublicSite();
  const home = slug === "statistic" ? await getHomePayload() : null;

  return (
    <PublicPageShell site={site}>
      <PublicSlugBody slug={slug} site={site} stats={home?.stats ?? null} />
    </PublicPageShell>
  );
}
