import Image from "next/image";

import Icon from "@components/Icon";

import Github from "assests/icons/Github";
import LinkedIn from "assests/icons/LinkedIn";
import Mail from "assests/icons/Mail";
import profile from "public/profile.png";
import info from "seo.config";

const About = () => {
  const { github, linkedin, email } = info.author.contacts;
  return (
    <div>
      <h1 className="font-bold text-5xl mt-10 text-center sm:text-left">
        About
      </h1>
      <div className="flex flex-col mt-7 gap-8 sm:flex-row">
        <div className="flex flex-col w-full sm:w-fit">
          <Image
            src={profile}
            alt="profile image"
            width={200}
            height={200}
            className="mx-auto"
          />
          <div className="font-bold text-2xl text-center mt-3">prefer2</div>
          <div className="flex justify-center mt-7">
            <Icon size="m" to={github}>
              <Github />
            </Icon>
            <Icon size="m" to={linkedin}>
              <LinkedIn />
            </Icon>
            <Icon size="m" to={email}>
              <Mail />
            </Icon>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-3xl">안녕하세요, 박선호입니다</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
