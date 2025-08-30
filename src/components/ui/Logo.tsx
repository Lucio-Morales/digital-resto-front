interface LogoItemProps {
  src: string;
  alt?: string;
  firstWord: string;
  secondWord: string;
}

const LogoItem = ({ src, alt = 'Logo', firstWord, secondWord }: LogoItemProps) => {
  return (
    <li className="flex items-center justify-center gap-2 my-2">
      <img src={src} alt={alt} className="w-6 h-6 mb-2" />
      <h1 className="text-xl italic font-bold text-center tracking-tighter">
        <span className="text-orange-500">{firstWord}</span> <span className="text-orange-300">{secondWord}</span>
      </h1>
    </li>
  );
};

export default LogoItem;
