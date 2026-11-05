import React, { useContext } from "react";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { CursorContext } from "../../Context";
import { contactEmail, socialLinks } from "../../data";

const Contact = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);

  return (
    <Header id="Connect">
      <Title id="Connect" page={5} />
      <Content>
        <div
          className="intro"
          onMouseEnter={() => mouseEnter("link")}
          onMouseLeave={mouseLeave}
        >
          <p className="spaced-text">
            Got an idea, a question, or just want to say hi? Find me here.
          </p>
          <ul className="contact-links">
            {contactEmail && (
              <li>
                <a className="more" href={`mailto:${contactEmail}`}>
                  Email
                </a>
              </li>
            )}
            {socialLinks
              .filter((link) => link.href)
              .map((link) => (
                <li key={link.label}>
                  <a
                    className="more"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </Content>
    </Header>
  );
};

export default Contact;
