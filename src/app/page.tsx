import Image from "next/image";
import Header from "./components/Header";
import Button from "./components/Button";

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
    </main>
  );
}
