'use client'

export default function EnvTestPage() {
  // 👇 Agora as variáveis estão dentro da função, no lado client
  const id_Service = process.env.NEXT_PUBLIC_ID_Service;
  const id_template = process.env.NEXT_PUBLIC_ID_Template;
  const public_key = process.env.NEXT_PUBLIC_Public_key;

  console.log("🔍 Verificando variáveis:", {
    id_Service,
    id_template,
    public_key
  });
  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>Variáveis de ambiente</h1>
      <p><strong>Service:</strong> {id_Service} Teste</p>
      <p><strong>Template:</strong> {id_template} Teste</p>
      <p><strong>Public Key:</strong> {public_key} Teste</p>
    </div>
  );
}
