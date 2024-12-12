import { Link } from "react-router-dom";

type Props = {
  title: string;
  question:string
  url:string
  link:string
};

export const AuthTitle = ({ title, question, url, link }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-graydark font-bold text-4xl">{title}</h1>
      <p className="text-lg text-boxgray">{question} <Link to={url} className="text-primary font-medium underline">{link}</Link></p>
    </div>
  );
};
