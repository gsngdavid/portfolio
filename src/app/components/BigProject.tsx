import Image from "next/image";
import Button from "./Button";
import { ButtonVariant } from "../types/enums";

function BigProject() {
  return (
    <div className="border border-gray">
      <Image
        src="/images/project.png"
        alt="Project X"
        width={100}
        height={100}
        className="w-full object-fit"
      />
      <div className="">
        <div className="flex flex-wrap gap-x-3 text-gray text-sm border border-gray py-1 px-2">
          <span>React</span>
          <span>Express</span>
          <span>Discord.js</span>
          <span>Node.js</span>
          <span>HTML</span>
          <span>SCSS</span>
          <span>Python</span>
          <span>Flask</span>
        </div>
        <div className="flex flex-col justify-between py-3 px-2 space-y-2">
          <h1 className="text-lg">Project X</h1>
          <p className="text-gray">Discord ant-crash bot</p>
          <div className="flex gap-4">
            <Button>Live &lt;~&gt;</Button>
            <Button variant={ButtonVariant.SECONDARY}>Cached &ge;</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigProject;
