export default function CurriculoSection() {
  return (
    <section className="py-6 px-3 text-center rounded-xl shadow-md mx-auto">
      <h4 className="text-2xl font-semibold mb-4 text-purple-500">📄 Baixe meu Currículo</h4>
      <p className="mb-6">
        Quer saber mais sobre minha trajetória, experiências e habilidades técnicas?
        Clique no botão abaixo para acessar meu currículo completo em PDF.
      </p>
      <a
        href="/curriculo.pdf"
        download
        className="inline-block text-white px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-950 hover:bg-gradient-to-l hover:shadow-[0_0_10px_2px_rgba(152,132,152)] transition-colors"
      >
        Baixar Currículo
      </a>
    </section>
  );
}
