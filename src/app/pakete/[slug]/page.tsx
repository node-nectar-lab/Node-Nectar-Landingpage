import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaketHero from '@/components/paket-detail/PaketHero';
import PaketWasIstEs from '@/components/paket-detail/PaketWasIstEs';
import PaketProcess from '@/components/paket-detail/PaketProcess';
import PaketFuerWen from '@/components/paket-detail/PaketFuerWen';
import PaketSzenario from '@/components/paket-detail/PaketSzenario';
import PaketFAQ from '@/components/paket-detail/PaketFAQ';
import PaketPreisCTA from '@/components/paket-detail/PaketPreisCTA';
import { getPaketBySlug, getSlugs } from '@/lib/pakete-data';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const paket = getPaketBySlug(slug);
  if (!paket) return {};
  const description = paket.longDesc
    ? paket.longDesc.slice(0, 160).replace(/\n/g, ' ')
    : paket.desc;
  return {
    title: `${paket.name} | NodeNectar`,
    description,
  };
}

export default async function PaketDetailPage({ params }: Props) {
  const { slug } = await params;
  const paket = getPaketBySlug(slug);

  if (!paket) notFound();

  return (
    <>
      <Header />
      <main>
        <PaketHero paket={paket} />
        {paket.longDesc && <PaketWasIstEs longDesc={paket.longDesc} />}
        {paket.processSteps && <PaketProcess steps={paket.processSteps} />}
        {paket.forWhom && <PaketFuerWen forWhom={paket.forWhom} forWhomIntro={paket.forWhomIntro} />}
        {paket.szenario && <PaketSzenario szenario={paket.szenario} />}
        {paket.faq && <PaketFAQ faq={paket.faq} />}
        <PaketPreisCTA paket={paket} />
      </main>
      <Footer />
    </>
  );
}
