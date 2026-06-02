const posts = [
  {
    href: 'blog/verpasste-anrufe-shk-betrieb.html',
    img: 'https://images.unsplash.com/photo-1544659638-792b2d32b3e9?auto=format&fit=crop&w=800&q=80',
    cat: 'SHK · Erreichbarkeit',
    read: '7 Min',
    title: 'Verpasste Anrufe im SHK-Betrieb: Wie viel Umsatz verlieren Sie wirklich?',
    excerpt: 'Rund 30 % aller Anrufe in SHK-Betrieben werden nicht angenommen – und 85 % der Anrufer rufen nie zurück. Was das in Euro bedeutet, warum es strukturell passiert und welche Maßnahmen wirklich helfen.',
    arrow: 'Artikel lesen',
    featured: true,
  },
  {
    href: 'blog/website-shk-betrieb-worauf-kommt-es-an.html',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    cat: 'SHK · Website',
    read: '8 Min',
    title: 'Website für SHK-Betriebe: Was wirklich zählt',
    excerpt: 'Mobile First, Notdienst-Nummer, Leistungsseiten statt Leistungsliste. Was Sie sich sparen können – und was nicht.',
    arrow: 'Lesen',
    featured: false,
  },
  {
    href: 'blog/elektriker-website-mehr-anfragen.html',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    cat: 'Elektrik · Lokal-SEO',
    read: '8 Min',
    title: 'Mehr Anfragen als Elektriker: Warum Ihre Website der Schlüssel ist',
    excerpt: 'Über 80 % aller Elektriker-Suchanfragen sind lokal. Wer im Local Pack fehlt, kommt nicht vor – egal wie gut die Arbeit ist.',
    arrow: 'Lesen',
    featured: false,
  },
  {
    href: 'blog/handwerker-digitale-rezeption-was-ist-das.html',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    cat: 'Konzept · Grundlagen',
    read: '6 Min',
    title: 'Was ist eine digitale Rezeption – und warum braucht Ihr Betrieb eine?',
    excerpt: 'Vier Bausteine: Website als Empfang, Formular als Eingang, Routing als Nervensystem, optional die Anrufannahme. Was eine normale Website nicht leistet.',
    arrow: 'Lesen',
    featured: false,
  },
];

export default function BlogSection() {
  return (
    <section id="blog">
      <div className="container">
        <div className="section-head">
          <span className="label">Journal</span>
          <h2>Was wir über Erreichbarkeit, Anfragen und das Handwerk schreiben.</h2>
          <p className="lede">Vier Texte, die wir intern auch unseren Kunden als Vorab-Lektüre schicken. Kein Hype, kein Buzzword-Bingo – Zahlen, Quellen, konkrete Hebel.</p>
        </div>
        <div className="blog-grid">
          {posts.map((p) => (
            <a key={p.href} href={p.href} className={`post${p.featured ? ' featured' : ''}`}>
              <div className="post-img" style={{ backgroundImage: `url('${p.img}')` }} />
              <div className="post-cat">
                <span className="dot" />
                {p.cat}
                <span className="read">{p.read}</span>
              </div>
              <div className="post-title">{p.title}</div>
              <p className="post-excerpt">{p.excerpt}</p>
              <div className="post-arrow">{p.arrow} <span>→</span></div>
            </a>
          ))}
        </div>
        <div className="blog-all">
          <span className="l">Weitere Themen in Vorbereitung · Heizungsnotdienst, Google Business, KI-Telefonassistenten</span>
          <a href="blog/index.html" className="btn btn-ghost">Alle Beiträge <span className="arr">→</span></a>
        </div>
      </div>
    </section>
  );
}
