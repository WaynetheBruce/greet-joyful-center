import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export const PortfolioHeaderEditor = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("Projetos em Andamento");
  const [description, setDescription] = useState("Acompanhe nosso portfólio de projetos culturais");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const { data } = await (supabase
      .from("settings" as any)
      .select("value")
      .eq("key", "portfolio_header")
      .maybeSingle() as any);

    if (data?.value) {
      const settings = data.value as { title?: string; description?: string };
      if (settings.title) setTitle(settings.title);
      if (settings.description) setDescription(settings.description);
    }
    setLoading(false);
  };

  const handleSave = async () => {
    setSaving(true);

    const settingsValue = { title, description };

    const { data: existing } = await (supabase
      .from("settings" as any)
      .select("id")
      .eq("key", "portfolio_header")
      .maybeSingle() as any);

    let error;
    if (existing) {
      const result = await (supabase
        .from("settings" as any)
        .update({ value: settingsValue })
        .eq("key", "portfolio_header") as any);
      error = result.error;
    } else {
      const result = await (supabase
        .from("settings" as any)
        .insert({ key: "portfolio_header", value: settingsValue }) as any);
      error = result.error;
    }

    if (error) {
      toast({
        title: "Erro",
        description: "Não foi possível salvar as configurações.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Salvo!",
        description: "Texto do cabeçalho atualizado com sucesso.",
      });
    }

    setSaving(false);
  };

  if (loading) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-4 space-y-3">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-9 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <Label htmlFor="portfolio-title" className="text-sm font-medium">Título da Página</Label>
          <Input
            id="portfolio-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Projetos em Andamento"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="portfolio-description" className="text-sm font-medium">Descrição da Página</Label>
          <Textarea
            id="portfolio-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição da página..."
            rows={3}
            className="resize-none"
          />
        </div>

        <Button onClick={handleSave} disabled={saving} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          {saving ? "Salvando..." : "Salvar Alterações"}
        </Button>
      </CardContent>
    </Card>
  );
};
