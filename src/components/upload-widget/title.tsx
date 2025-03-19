import { CloudUpload } from "lucide-react";

export function Title() {
  return (
    <div className="flex items-center gap-1.5 text-sm font-medium">
      <CloudUpload strokeWidth={1.5} className="size-4 text-zinc-400" />
      <span>Upload files</span>
    </div>
  );
}
