export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap" style={{ paddingTop: 8 }}>
        <div className="sheet-head" style={{ marginBottom: 0, borderBottom: "none" }}>
          <span className="tag">TB</span>
          <h2>Contact</h2>
          <span className="fill" />
        </div>
      </div>
      <div className="footblock wrap" style={{ padding: "0 28px" }}>
        <div className="cell brand">
          <div className="h">Giorgi Zoidze</div>
          <div className="s">Full-Stack Developer</div>
        </div>
        <div className="cell">
          <div className="label">Email</div>
          <div className="v">
            <a href="mailto:gzoidze1997@gmail.com">gzoidze1997@gmail.com</a>
          </div>
        </div>
        <div className="cell">
          <div className="label">LinkedIn</div>
          <div className="v">
            <a
              href="http://linkedin.com/in/giorgi-zoidze-b78b28222/"
              target="_blank"
              rel="noopener"
            >
              in/giorgi-zoidze
            </a>
          </div>
        </div>
        <div className="cell">
          <div className="label">GitHub</div>
          <div className="v">
            <a href="https://github.com/giorgizoidze" target="_blank" rel="noopener">
              @giorgizoidze
            </a>
          </div>
        </div>
      </div>
      <div className="foot-tail">
        <span>SCALE: NTS</span>
        <span>DRAWN — TBILISI, GE</span>
      </div>
    </footer>
  );
}
