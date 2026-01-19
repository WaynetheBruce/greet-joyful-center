import { supabase } from "@/integrations/supabase/client";

/**
 * Helper para fazer queries ao Supabase ignorando tipagem estrita.
 * Útil quando as tabelas ainda não estão no schema ou quando
 * o projeto será sincronizado com outro banco.
 * 
 * IMPORTANTE: Este é um workaround temporário enquanto o banco
 * não está sincronizado com as tipagens.
 */

// Cliente Supabase sem tipagem estrita
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const db = supabase as any;

// Alias para compatibilidade com código existente
export { db as supabase };
