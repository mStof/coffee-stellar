import "@/style/menu/header.scss";
import bgPattern from "@/../public/svg/bg-pattern.svg";
import Image from "next/image";

export default function Header({ children }) {
  return (
    <header className="header_menu">
      <Image
        src={bgPattern}
        alt="Fundo de padrão de estrelas"
        sizes="100vw"
        style={{
          objectFit: "cover",
          mixBlendMode: "overlay",
          position: "absolute",
        }}
        priority
      />
      <h1>{children}</h1>
    </header>
  );
}
