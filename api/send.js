export default async function handler(req, res) {
  const ORIGIN = req.headers.origin || "";
  const ALLOWED = [/^https?:\/\/localhost(:\\d+)?$/, /.vercel.app$/];
  const allow = ALLOWED.some((r) => r.test(ORIGIN)) ? ORIGIN : "*";
  res.setHeader("Access-Control-Allow-Origin", allow);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Vary", "Origin");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const payload = {
      timestamp: new Date().toISOString(),
      nom: body.nom || "",
      email: body.email || "",
      telephone: body.telephone || "",
      codePostal: body.codePostal || "",
      surface: body.surface || "",
      chauffage: body.chauffage || "",
      consent: !!body.consent
    };

    // (on ajoutera GOOGLE_SCRIPT_URL plus tard)
    return res.status(200).json({ ok: true, message: "Simulation envoyée (mock) ✅", data: payload });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message || "Erreur inconnue" });
  }
}