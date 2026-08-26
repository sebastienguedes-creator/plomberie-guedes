import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Sécurité : n'accepter que les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { user_name, user_phone, user_email, project_type, project_description } = req.body;

  // Configuration du transporteur Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Template HTML aux couleurs de votre charte graphique
  const htmlContent = `
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
  `;

  try {
    await transporter.sendMail({
      from: `"Site Web GUEDES" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Vous vous envoyez l'e-mail à vous-même
      replyTo: user_email, // Permet de répondre directement au client en cliquant sur "Répondre"
      subject: `Nouveau contact site web : ${project_type}`,
      html: htmlContent,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi' });
  }
}