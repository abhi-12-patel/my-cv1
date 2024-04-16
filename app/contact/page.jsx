import { MailIcon, HomeIcon, PhoneCall, Component } from "lucide-react";

// Components
import Form from "@/components/form";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text / illustraion  */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="text-xl max-w-[400px] ">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
          </div>
          {/* illustraion */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat">
          </div>
        </div>
        {/* info / and form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* Info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8 ">
              <MailIcon size={18} className="text-primary" />
              <div>abhihothi800@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8 ">
              <HomeIcon size={18} className="text-primary" />
              <div>Rajkot</div>
            </div>
            {/* mail */}
            <div className="flex items-center gap-x-8 ">
              <PhoneCall size={18} className="text-primary" />
              <div>+91 9016457163</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;