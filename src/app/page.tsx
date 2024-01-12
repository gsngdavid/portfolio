import Image from "next/image";
import Header from "./components/Header";
import Button from "./components/Button";
import Link from "next/link";
import BigProject from "./components/BigProject";

export default function Home() {
  return (
    <main className="p-10">
      <div className="container">
        <Header />

        <div>
          <div className="flex justify-between items-center py-16">
            <div className="max-w-96 space-y-5">
              <h1 className="text-xl font-semibold">
                David is a <span className="text-primary">web designer</span>{" "}
                and <span className="text-primary">front-end developer</span>
              </h1>
              <p className="text-gray text-sm">
                He crafts responsive websites where technologies meet creativity
              </p>
              <Button>
                <span className="text-sm">Contact me !!</span>
              </Button>
            </div>
            <div>
              <Image
                src="/images/david-img.png"
                alt="David"
                width={350}
                height={350}
              />
              <div className="flex items-center gap-1 border border-gray text-gray text-sm p-1">
                <div className="w-3 h-3 bg-primary inline-block"></div>
                Currently working on{" "}
                <span className="text-white">Portfolio</span>
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
      </div>

      <div className="container my-20">
        <div className="relative flex justify-between py-8">
          <h1 className="text-2xl after:content-['']  after:absolute after:top-1/2 after:translate-x-2 after:inline-block after:w-1/2 after:h-0.5 after:bg-primary">
            <span className="text-primary">#</span> projects
          </h1>
          <Link href="#">View all ~~&gt;</Link>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
          {[1, 2, 3].map(index => <BigProject key={index} />)}
        </div>
      </div>
    </main>
  );
}
