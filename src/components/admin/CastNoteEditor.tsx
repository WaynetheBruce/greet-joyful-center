import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface CastNoteEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const CastNoteEditor = ({ value, onChange }: CastNoteEditorProps) => {
  return (
    <div className="space-y-2 pt-4 border-t">
      <Label className="text-sm font-medium">
        Texto adicional sobre o elenco
        <span className="text-muted-foreground text-xs ml-2">(exibido após os cards de elenco)</span>
      </Label>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Adicione informações complementares sobre o elenco do projeto..."
        rows={4}
        className="resize-none"
      />
    </div>
  );
};
