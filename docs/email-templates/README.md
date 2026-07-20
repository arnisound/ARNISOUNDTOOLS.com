# Templates d'emails Arnisound Tools (Supabase Auth)

Emails d'authentification à la marque, envoyés via Brevo (SMTP) depuis
`contact@arnisoundtools.com`.

## Comment les appliquer

Dans **Supabase → Authentication → Email Templates**, pour chaque onglet :

1. Renseigne le **Subject** (indiqué en commentaire en haut de chaque fichier)
2. Colle le contenu HTML du fichier dans le champ **Message (Source / HTML)**
3. **Save**

| Onglet Supabase | Fichier | Subject |
|---|---|---|
| Confirm signup | `confirm-signup.html` | Confirme ton adresse — Arnisound Tools |
| Reset Password | `reset-password.html` | Réinitialise ton mot de passe — Arnisound Tools |
| Change Email Address | `change-email.html` | Confirme ta nouvelle adresse — Arnisound Tools |

## Important

- Garde les balises `{{ .ConfirmationURL }}` et `{{ .NewEmail }}` **intactes** :
  Supabase les remplace automatiquement par le vrai lien / la nouvelle adresse.
- Les onglets **Magic Link**, **Invite user** et **Reauthentication** ne sont pas
  utilisés par le flux actuel (connexion email + mot de passe) → laisse-les par défaut.
- Couleurs de marque : fond `#f4f0e8`, texte `#171310`, accent doré `#cb8a27`.
