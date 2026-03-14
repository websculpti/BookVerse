import { LucideIcon } from "lucide-react";

interface PagePlaceholderProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function PagePlaceholder({
  icon: Icon,
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{description}</p>
        <p className="text-sm text-muted-foreground/70 bg-muted px-6 py-4 rounded-lg">
          More features coming soon! Continue exploring or provide feedback to
          help us prioritize what you want next.
        </p>
      </div>
    </div>
  );
}
