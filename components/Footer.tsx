import Icon from "@components/Icon";

import Github from "assests/icons/Github";
import LinkedIn from "assests/icons/LinkedIn";
import Mail from "assests/icons/Mail";

import info from "seo.config";

const Footer = () => {
  const { github, linkedin, email } = info.author.contacts;
  return (
    <div className="text-center bg-slate-300 p-4 text-xs dark:bg-code-dark">
      <div>Designed by prefer2 © 2023 All rights reserved</div>
      <div className="flex w-fit m-auto mt-3 mb-1 gap-1">
        <Icon to={github}>
          <Github />
        </Icon>
        <Icon to={linkedin}>
          <LinkedIn />
        </Icon>
        <Icon to={email}>
          <Mail />
        </Icon>
      </div>
    </div>
  );
};

export default Footer;
