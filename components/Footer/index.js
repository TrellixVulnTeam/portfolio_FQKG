import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitterSquare,
  faLinkedin,
  faInstagramSquare,
  faGoogleDrive,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="text-sm py-6">
      <div className="border-t flex flex-col items-center pt-6">
        <a href="https://twitter.com/luke_chap" target="_blank">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a
          href="https://uk.linkedin.com/in/luke-chaplin-70a521b0?trk=people-guest_people_search-card"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/lukechap47/" target="_blank">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a
          href="https://docs.google.com/document/d/1yL9qfQDGfGMZzAIRZsP7-gSKzyRbbkNZ/edit"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGoogleDrive} />
        </a>
        <a href="https://github.com/lukechaplin" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <div className="flex mb-4 space-x-4"></div>
        <div className="flex mt-2 mb-2 space-x-2">
          <div>{`© Copyright ${new Date().getFullYear()}`}</div>
          <div>{" • "}</div>
          <div>Luke Chaplin</div>
        </div>
      </div>
    </footer>
  );
}