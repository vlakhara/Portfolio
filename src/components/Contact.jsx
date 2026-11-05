import React from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { contactEmail, socialLinks } from "../data";
import SectionHead from "./SectionHead";

const icons = { github: FaGithub, linkedin: FaLinkedinIn, x: FaXTwitter };

const Contact = () => (
  <>
    <section className="section contact" id="contact">
      <div className="wrap">
        <SectionHead
          no="05"
          label="Contact"
          take={2}
          title={
            <>
              Say <em>hi</em>
            </>
          }
        />
        <p className="contact-lede reveal">
          Got a project, a question, or a movie I should watch? I read everything.
        </p>
        <ul className="big-links">
          {contactEmail && (
            <li className="reveal">
              <a className="big-link" href={`mailto:${contactEmail}`}>
                <span>Email</span>
                <i aria-hidden="true">↗</i>
              </a>
            </li>
          )}
          {socialLinks
            .filter((link) => link.href)
            .map((link, i) => {
              const Icon = icons[link.key];
              return (
                <li className="reveal" style={{ "--d": `${(i + 1) * 0.1}s` }} key={link.key}>
                  <a className="big-link" href={link.href} target="_blank" rel="noopener noreferrer">
                    {Icon && <Icon aria-hidden />}
                    <span>{link.label}</span>
                    <i aria-hidden="true">↗</i>
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
    <footer className="footer">
      <div className="wrap">
        <p>© {new Date().getFullYear()} Vipul Lakhara. Built with React. The chess moves are scripted, the mates are not.</p>
      </div>
    </footer>
  </>
);

export default Contact;
