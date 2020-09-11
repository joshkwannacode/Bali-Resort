import React from "react";

function Footer() {
  return (
    <div>
      <footer id="footer">
        <ul className="icons">
          <li>
            <a href="#" className="icon brands circle fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands circle fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands circle fa-google-plus-g">
              <span className="label">Google+</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands circle fa-github">
              <span className="label">Github</span>
            </a>
          </li>
        </ul>

        <ul className="copyright">
          <li>&copy; Bali Resort</li>
          <li>Bali by Bali Resort</li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
