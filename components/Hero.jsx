import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import "../app/globals.css";

const Hero = () => {
  return (
 
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-2xl uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-1"> Hi there,<br/> I’m Abhi.</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            Welcome to the Web Development portfolio of Abhi Hothi.
            </p>
            {/* button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me
                  <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV
                {/* <Download size={18} /> */}
              </Button>
            </div>
            {/* social */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          {/* "hidden xl:flex relative" */}
          <div className=" profile-pic blob drop-shadow-div hidden xl:flex relative ">
            {/* badge  */}
            <Badge
              icon={<RiBriefcase4Fill />}
              // endCountNum={3}
              badgeText="1.5 year experience"
            />

            {/* <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeaat relative bg-bottom" imgSrc="/hero/developer.png"/> */}
          </div>
        </div>
        {/* icon */}
        <div className=" hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
