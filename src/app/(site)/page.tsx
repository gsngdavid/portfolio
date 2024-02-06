"use client";

import Image from "next/image";
import Link from "next/link";
import DiscordIcon from "../../assets/Icons/DiscordIcon";
import EmailIcon from "../../assets/Icons/EmainIcon";
import { useQuery } from "@tanstack/react-query";
import { BigProjectDto } from "../../utils/api";
import Button from "../../components/ui/Button";
import BigProject from "../../components/BigProject";
import fetchHelper from "../../helpers/fetch-helper";

export default function Home() {
  const {
    data: projects,
    isLoading: projectsLoading,
    error: projectsError,
  } = useQuery<BigProjectDto[]>({
    queryFn: () => fetchHelper("http://localhost:3001/big-projects"),
    queryKey: ["projects"],
  });

  return (
    <main>
      <div className="container">
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 sm:justify-between gap-14 sm:items-center pt-6 pb-16">
          <div className="sm:max-w-96 space-y-5 text-center sm:text-left sm:justify-self-start">
            <h1 className="text-xl font-semibold">
              David is a <span className="text-primary">web designer</span> and{" "}
              <span className="text-primary">front-end developer</span>
            </h1>
            <p className="text-gray text-sm">
              He crafts responsive websites where technologies meet creativity
            </p>
            <Button>
              <span className="text-sm">Contact me !!</span>
            </Button>
          </div>
          <div className=" sm:justify-self-end">
            <Image
              src="/images/david-img-1.png"
              alt="David"
              width={350}
              height={350}
            />
            <div className="flex items-center gap-1 border border-gray text-gray text-sm p-1">
              <div className="w-3 h-3 bg-primary inline-block"></div>
              <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                Currently working on{" "}
                <span className="text-white">Portfolio</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto flex flex-col">
          <p className="relative border border-gray py-2 px-4">
            <Image
              src="/images/quotes.png"
              alt="Quotes"
              className="absolute -top-2 left-3"
              width={25}
              height={25}
            />
            <span>With great power comes great electricity bill</span>
          </p>
          <p className="relative w-fit self-end border border-t-0 border-gray py-2 px-4">
            <Image
              src="/images/quotes.png"
              alt="Quotes"
              className="absolute -top-2 right-3"
              width={25}
              height={25}
            />
            <span>- Dr. Who</span>
          </p>
        </div>
      </div>

      <div className="container my-20">
        <div className="relative flex justify-between py-8">
          <h1 className="text-2xl after:content-['']  after:absolute after:top-1/2 after:translate-x-2 after:inline-block after:w-1/2 after:h-0.5 after:bg-primary">
            <span className="text-primary">#</span> projects
          </h1>
          <Link className="hidden sm:inline" href="#">
            View all ~~&gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectsError && <h1>Something went wrong, try it again later.</h1>}
          {projects === null || (projectsLoading && <h1>Loading...</h1>)}
          {projects?.map((project) => (
            <BigProject key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center py-8 sm:hidden">
          <Button>View all ~~&gt;</Button>
        </div>
      </div>

      <div className="container my-20">
        <div className="relative py-8">
          <h1 className="text-2xl after:content-['']  after:absolute after:top-1/2 after:translate-x-2 after:inline-block after:w-1/3 after:h-0.5 after:bg-primary">
            <span className="text-primary">#</span> Skills
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-3 lg:grid-cols-5 gap-4">
          <div className="sm:hidden lg:block lg:col-span-2">
            <Image
              src="/images/icons.png"
              alt="Icons"
              width={200}
              height={100}
              className="w-full"
            />
          </div>

          <div>
            <div className="border border-gray">
              <h1 className="border-b border-gray py-1 px-2">Languages</h1>
              <div className="flex gap-2 flex-wrap text-sm text-gray py-1 px-2">
                <span>TypeScript</span>
                <span>Lua</span>
                <span>Python</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-gray">
              <h1 className="border-b border-gray py-1 px-2">Databases</h1>
              <div className="flex gap-2 flex-wrap text-sm text-gray py-1 px-2">
                <span>SQLite</span>
                <span>PostgresSQL</span>
                <span>Mongo</span>
              </div>
            </div>

            <div className="border border-gray">
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
          </div>

          <div className="space-y-4">
            <div className="border border-gray">
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

            <div className="border border-gray">
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
      </div>

      <div className="container my-20">
        <div className="relative py-8">
          <h1 className="text-2xl after:content-['']  after:absolute after:top-1/2 after:translate-x-2 after:inline-block after:w-1/3 after:h-0.5 after:bg-primary">
            <span className="text-primary">#</span> About-me
          </h1>
        </div>

        <div className="flex justify-between gap-20">
          <div className="md:max-w-96 space-y-8 text-xs">
            <p className="text-gray">Hello, i’m David!</p>
            <p className="text-gray">
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.{" "}
            </p>
            <p className="text-gray">
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <Button>Read more →</Button>
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

      <div className="container my-20">
        <div className="relative py-8 overflow-hidden">
          <h1 className="text-2xl after:content-['']  after:absolute after:top-1/2 after:translate-x-2 after:inline-block after:w-full md:after:w-1/3  after:h-0.5 after:bg-primary">
            <span className="text-primary">#</span> Contacts
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-x-20 gap-y-10">
          <div className="md:max-w-96 space-y-8 text-xs">
            <p className="text-gray">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
            <Button>Read more →</Button>
          </div>
          <div className="flex flex-col gap-y-4 border border-gray text-gray text-sm p-4">
            <p className="text-white text-base">Message me here</p>
            <Link href="#" className="flex items-center gap-1">
              <DiscordIcon className="w-4 h-4" />
              !gsngdavid
            </Link>
            <Link href="#" className="flex items-center gap-1">
              <EmailIcon className="w-4 h-4" />
              gsngdavid@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
