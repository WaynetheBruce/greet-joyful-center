// Declaração de tipos custom para quando o banco não está sincronizado
// Este arquivo resolve os erros de tipagem temporariamente

import { SupabaseClient } from "@supabase/supabase-js";

// Extensão do tipo para permitir qualquer tabela
declare module "@supabase/supabase-js" {
  interface SupabaseClient {
    from(table: string): any;
  }
}

export {};
