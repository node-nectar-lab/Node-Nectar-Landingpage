export default function EditorialBand() {
  return (
    <div className="editorial-band">
      <div
        className="img-wrap"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1717281234297-3def5ae3eee1?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="overlay" />
        <div className="caption">
          <div className="e">Aus der Werkstatt</div>
          <p className="q">„Abends, wenn ich endlich am Schreibtisch sitze, sind die Kunden längst beim nächsten Betrieb."</p>
        </div>
      </div>
    </div>
  );
}
