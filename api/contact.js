import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { user_name, user_phone, user_email, project_type, project_description } = req.body;

  try {
    const data = await resend.emails.send({
      // Par défaut, Resend fournit un domaine de test 'onboarding@resend.dev' si vous n'avez pas encore validé votre propre nom de domaine
      from: 'Site Web <onboarding@resend.dev>',
      to: [process.env.GMAIL_USER], // Votre adresse e-mail pour recevoir les demandes
      replyTo: user_email,
      subject: `Nouveau contact site web : ${project_type}`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, sans-serif; background-color: #020617; padding: 40px 20px; color: #f1f5f9;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden;">
            <div style="background-color: #3b82f6; padding: 24px; text-align: center;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 1px; text-transform: uppercase;">Nouvelle demande de devis</h2>
            </div>
            <div style="padding: 32px;">
              <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase;">Client</p>
              <p style="margin: 0 0 24px 0; font-size: 18px; font-weight: bold;">${user_name}</p>

              <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase;">Contact</p>
              <p style="margin: 0 0 4px 0;"><strong style="color: #3b82f6;">Tél :</strong> ${user_phone}</p>
              <p style="margin: 0 0 24px 0;"><strong style="color: #3b82f6;">Email :</strong> <a href="mailto:${user_email}" style="color: #f1f5f9;">${user_email}</a></p>

              <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase;">Type de projet</p>
              <div style="background-color: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); padding: 8px 16px; border-radius: 99px; display: inline-block; margin-bottom: 24px; color: #60a5fa; font-weight: bold;">
                ${project_type}
              </div>

              <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase;">Description</p>
              <div style="background-color: #020617; border: 1px solid #1e293b; padding: 16px; border-radius: 12px; line-height: 1.6;">
                ${project_description}
              </div>
            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Erreur Resend :", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}