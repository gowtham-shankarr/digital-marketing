"use client";

import { useRef, useState } from "react";
import { Download, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { exportProgressJSON, importProgressJSON } from "@/lib/progress";

export function ProgressManager() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  function handleExport() {
    const json = exportProgressJSON();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `marketlearn-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMessage("Progress exported.");
  }

  function handleImport(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const result = importProgressJSON(String(reader.result ?? ""));
      setMessage(result.ok ? "Progress imported successfully." : result.error);
    };
    reader.readAsText(file);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="outline" size="sm" onClick={handleExport}>
        <Download className="mr-2 h-4 w-4" />
        Export
      </Button>
      <Button variant="outline" size="sm" onClick={() => inputRef.current?.click()}>
        <Upload className="mr-2 h-4 w-4" />
        Import
      </Button>
      <input
        ref={inputRef}
        type="file"
        accept="application/json,.json"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleImport(file);
          e.target.value = "";
        }}
      />
      {message && <p className="text-sm text-muted-foreground">{message}</p>}
    </div>
  );
}
