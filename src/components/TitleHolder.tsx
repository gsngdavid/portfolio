import LinesLeaningIcon from "../assets/Icons/LinesLeaning";

interface Props {
  title: string;
  subtitle: string;
}

export default function TitleHolder({ title, subtitle }: Props) {
  return (
    <>
      <div className="flex gap-1 items-center">
        <LinesLeaningIcon fill="peru" className="w-6 h-6" />
        <h1 className="text-2xl">{title}</h1>
      </div>
      <p className="text-sm">{subtitle}</p>
    </>
  );
}
