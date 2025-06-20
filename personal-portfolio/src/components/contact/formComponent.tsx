'use client'
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

export default function FormComponent() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Aqui você pode integrar com um serviço de envio (EmailJS, API, etc.)
    alert("Mensagem enviada com sucesso!");

    // Limpa o formulário
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section className="py-16 px-6 rounded-2xl shadow-lg">
      <h2 className="text-3xl text-purple-700 font-bold text-center mb-6">📬 Entre em Contato</h2>
      <p className="text-center text-white mb-10">
        Tem um projeto ou dúvida? Envie uma mensagem e retornarei em breve.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 space-y-6 ">
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
          required
          className="max-w-6xl border border-gray-300 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={handleChange}
          required
          className="max-w-6xl border border-gray-300 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="mensagem"
          placeholder="Deixe sua menssagem aqui"
          rows={5}
          value={form.mensagem}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="w-full text-white py-3 rounded-lg font-semibold cursor-pointer bg-gradient-to-r from-purple-600 to-purple-950 hover:bg-gradient-to-l"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  )
};