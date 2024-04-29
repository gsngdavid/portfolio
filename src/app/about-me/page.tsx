"use client";

import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div>
      <div className="container my-10">
        <div className="flex justify-between gap-20">
          <div className="md:max-w-[35rem] space-y-8 text-xs">
            <p className="text-gray">Hello, i’m David!</p>
            <p className="text-gray">
              I’m a  fullstack developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.{" "}
            </p>
            <p className="text-gray">
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/david-img-2.png"
              width={200}
              height={400}
              alt="David"
            />
          </div>
        </div>
      </div>

      <div className="container my-10">
        <div className="relative py-8">
          <h1 className="text-2xl">
            <span className="text-primary">#</span> Skills
          </h1>
        </div>

        <div className="flex items-start flex-wrap gap-4">
          <div className="max-w-40 border border-gray">
            <h1 className="border-b border-gray py-1 px-2">Languages</h1>
            <div className="flex gap-2 flex-wrap text-sm text-gray py-1 px-2">
              <span>TypeScript</span>
              <span>Lua</span>
              <span>Python</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="max-w-40 border border-gray">
            <h1 className="border-b border-gray py-1 px-2">Databases</h1>
            <div className="flex gap-2 flex-wrap text-sm text-gray py-1 px-2">
              <span>SQLite</span>
              <span>PostgresSQL</span>
              <span>Mongo</span>
            </div>
          </div>

          <div className="max-w-40 border border-gray">
            <h1 className="border-b border-gray py-1 px-2">Tools</h1>
            <div className="flex gap-2 flex-wrap text-sm text-gray py-1 px-2">
              <span>VSCode</span>
              <span>Neovim</span>
              <span>Linux</span>
              <span>Figma</span>
              <span>XFCE</span>
              <span>Arch</span>
              <span>Git</span>
              <span>Font Awesome</span>
            </div>
          </div>

          <div className="max-w-40 border border-gray">
            <h1 className="border-b border-gray py-1 px-2">Others</h1>
            <div className="flex gap-2 flex-wrap text-sm text-gray py-1 px-2">
              <span>HTML</span>
              <span>CSS</span>
              <span>EJS</span>
              <span>SCSS</span>
              <span>REST</span>
              <span>Jinja</span>
            </div>
          </div>

          <div className="max-w-40 border border-gray">
            <h1 className="border-b border-gray py-1 px-2">Frameworks</h1>
            <div className="flex gap-2 flex-wrap text-sm text-gray py-1 px-2">
              <span>Vue</span>
              <span>React</span>
              <span>Disnake</span>
              <span>Discord.js</span>
              <span>Flask</span>
              <span>Express</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-10">
        <div className="relative py-8">
          <h1 className="text-2xl">
            <span className="text-primary">#</span> my-fun-facts
          </h1>
        </div>

        <div className="flex gap-4 text-gray text-sm">
            <span className="border border-gray py-1 px-3">I like winter more than summer</span>
            <span className="border border-gray py-1 px-3">I often bike with my friends</span>
            <span className="border border-gray py-1 px-3">I like pizza and pasta</span>
        </div>
      </div>
    </div>
  );
}
