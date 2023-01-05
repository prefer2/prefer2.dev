import Github from "assests/icons/Github";
import LinkedIn from "assests/icons/LinkedIn";
import Mail from "assests/icons/Mail";
import Icon from "./Icon";

const Footer = () => {
  return (
    <div className="text-center bg-slate-300 p-4 text-xs dark:bg-code-dark">
      <div>Designed by prefer2 © 2023 All rights reserved</div>
      <div className="flex w-fit m-auto mt-3 mb-1 gap-1">
        <Icon to="https://github.com/prefer2">
          <Github />
        </Icon>
        <Icon
          to={
            "https://www.linkedin.com/in/%EC%84%A0%ED%98%B8-%EB%B0%95-431917256/"
          }
        >
          <LinkedIn />
        </Icon>
        <Icon to="mailto:prefer2park@gmail.com">
          <Mail />
        </Icon>
      </div>
    </div>
  );
};

export default Footer;
