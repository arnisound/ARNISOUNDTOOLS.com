import { createClient } from '@supabase/supabase-js';

// Valeurs PUBLIQUES : destinées au navigateur, protégées côté Supabase par les
// Row Level Security policies. Sans danger dans le code client / un dépôt public.
// (La clé secrète `service_role` n'est JAMAIS ici — elle restera un secret Cloudflare.)
const SUPABASE_URL = 'https://knudezgfliycmakdpdmg.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtudWRlemdmbGl5Y21ha2RwZG1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0MDYxMzksImV4cCI6MjA5OTk4MjEzOX0.MWdVW0p2uLnSmhc3q2woJjQ4y9CTbHxyQhOPXaUh3yY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
