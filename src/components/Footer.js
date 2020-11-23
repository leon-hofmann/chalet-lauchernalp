import React from 'react';
import { Link } from 'gatsby';
export default function Footer() {
  return (
    <footer id="footer">
      {/* <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul> */}
      <ul className="copyright">
        <li>
          <a href="mailto:brunhild-hofmann@t-online.de">Kontakt</a>
        </li>
        <li>
        <Link to="/Impressum">Impressum</Link>
          </li>
        <li>
          &copy; chalet-lauchernalp.ch
          </li>
      </ul>
    </footer>
  );
}
