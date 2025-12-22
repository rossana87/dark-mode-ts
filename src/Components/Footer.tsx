import React from "react";
import useTheme from "../assets/context/useTheme";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

type links = {
  href: string;
  icon: string;
};

const links = [
  {
    href: "https://www.linkedin.com/in/rossana-ventrella/",
    icon: faLinkedin,
  },
  {
    href: "https://github.com/rossana87",
    icon: faGithub,
  },
];

function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="icon-footer">
      {links.map((link, index) => (
        <a className={theme.icon} key={index} href={link.href} target="_blank">
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
      <Button />
    </footer>
  );
}

export default Footer;
