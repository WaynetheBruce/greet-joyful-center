export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      contrapartidas: {
        Row: {
          ativo: boolean | null
          beneficios: string[] | null
          created_at: string | null
          id: string
          indice: string | null
          ordem: number | null
          project_id: string | null
          titulo: string
          updated_at: string | null
          valor: string | null
        }
        Insert: {
          ativo?: boolean | null
          beneficios?: string[] | null
          created_at?: string | null
          id?: string
          indice?: string | null
          ordem?: number | null
          project_id?: string | null
          titulo: string
          updated_at?: string | null
          valor?: string | null
        }
        Update: {
          ativo?: boolean | null
          beneficios?: string[] | null
          created_at?: string | null
          id?: string
          indice?: string | null
          ordem?: number | null
          project_id?: string | null
          titulo?: string
          updated_at?: string | null
          valor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contrapartidas_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      project_members: {
        Row: {
          created_at: string | null
          detalhes: string | null
          funcao: string | null
          id: string
          nome: string
          order_index: number | null
          photo_url: string | null
          project_id: string | null
          social_links: Json | null
        }
        Insert: {
          created_at?: string | null
          detalhes?: string | null
          funcao?: string | null
          id?: string
          nome: string
          order_index?: number | null
          photo_url?: string | null
          project_id?: string | null
          social_links?: Json | null
        }
        Update: {
          created_at?: string | null
          detalhes?: string | null
          funcao?: string | null
          id?: string
          nome?: string
          order_index?: number | null
          photo_url?: string | null
          project_id?: string | null
          social_links?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "project_members_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          awards: string[] | null
          card_image_url: string | null
          categorias_tags: string[] | null
          created_at: string | null
          description: string | null
          diferenciais: string | null
          featured_on_homepage: boolean | null
          festivals_exhibitions: Json | null
          has_incentive_law: boolean | null
          hero_image_url: string | null
          id: string
          image_url: string | null
          impacto_cultural: string | null
          impacto_social: string | null
          incentive_law_details: string | null
          is_hidden: boolean | null
          link_video: string | null
          location: string | null
          news: Json | null
          order_index: number | null
          presentation_document_url: string | null
          project_type: string | null
          publico_alvo: string | null
          responsavel_email: string | null
          responsavel_nome: string | null
          responsavel_telefone: string | null
          show_on_captacao: boolean | null
          show_on_portfolio: boolean | null
          stage: string | null
          stages: string[] | null
          status: string | null
          synopsis: string | null
          title: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          awards?: string[] | null
          card_image_url?: string | null
          categorias_tags?: string[] | null
          created_at?: string | null
          description?: string | null
          diferenciais?: string | null
          featured_on_homepage?: boolean | null
          festivals_exhibitions?: Json | null
          has_incentive_law?: boolean | null
          hero_image_url?: string | null
          id?: string
          image_url?: string | null
          impacto_cultural?: string | null
          impacto_social?: string | null
          incentive_law_details?: string | null
          is_hidden?: boolean | null
          link_video?: string | null
          location?: string | null
          news?: Json | null
          order_index?: number | null
          presentation_document_url?: string | null
          project_type?: string | null
          publico_alvo?: string | null
          responsavel_email?: string | null
          responsavel_nome?: string | null
          responsavel_telefone?: string | null
          show_on_captacao?: boolean | null
          show_on_portfolio?: boolean | null
          stage?: string | null
          stages?: string[] | null
          status?: string | null
          synopsis?: string | null
          title: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          awards?: string[] | null
          card_image_url?: string | null
          categorias_tags?: string[] | null
          created_at?: string | null
          description?: string | null
          diferenciais?: string | null
          featured_on_homepage?: boolean | null
          festivals_exhibitions?: Json | null
          has_incentive_law?: boolean | null
          hero_image_url?: string | null
          id?: string
          image_url?: string | null
          impacto_cultural?: string | null
          impacto_social?: string | null
          incentive_law_details?: string | null
          is_hidden?: boolean | null
          link_video?: string | null
          location?: string | null
          news?: Json | null
          order_index?: number | null
          presentation_document_url?: string | null
          project_type?: string | null
          publico_alvo?: string | null
          responsavel_email?: string | null
          responsavel_nome?: string | null
          responsavel_telefone?: string | null
          show_on_captacao?: boolean | null
          show_on_portfolio?: boolean | null
          stage?: string | null
          stages?: string[] | null
          status?: string | null
          synopsis?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      settings: {
        Row: {
          created_at: string | null
          id: string
          key: string
          updated_at: string | null
          value: Json | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          key: string
          updated_at?: string | null
          value?: Json | null
        }
        Update: {
          created_at?: string | null
          id?: string
          key?: string
          updated_at?: string | null
          value?: Json | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: string
          user_id: string | null
        }
        Insert: {
          id?: string
          role?: string
          user_id?: string | null
        }
        Update: {
          id?: string
          role?: string
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
