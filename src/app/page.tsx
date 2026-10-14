import { Contato } from "@/components/Contato";
import { Ferramentas } from "@/components/Ferramentas";
import { Footer } from "@/components/Footer";
import { Formacao } from "@/components/Formacao";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HeroDraw } from "@/components/HeroDraw";
import { Icones } from "@/components/Icones";
import { Notas } from "@/components/Notas";
import { Projetos } from "@/components/Projetos";
import { Sistema } from "@/components/Sistema";
import { Trajetoria } from "@/components/Trajetoria";

export default function Home() {
  return (
    <>
      <Icones />
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="malha" aria-hidden="true">
        <div className="wrap malha__cols">
          {Array.from({ length: 12 }, (_, i) => (
            <i key={i} />
          ))}
        </div>
      </div>
      <Header />
      <main id="conteudo">
        <Hero />
        <Trajetoria />
        <Formacao />
        <Projetos />
        <Ferramentas />
        <Sistema />
        <Contato />        
      </main>
      <Footer />
      <HeroDraw />
      <Notas />
    </>
  );
}
