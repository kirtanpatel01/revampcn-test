"use client";

import { useState, useEffect } from "react";
import { codeToHtml } from "shiki";
import { ImageGenerationLoader } from "@/components/ui/image-generation-loader";
import loaderCode from "@/components/ui/image-generation-loader.tsx?raw";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const PRESETS = [
  { src: "https://assets.aceternity.com/components/vertical-sliding-loader-demo.webp", text: "UI DESIGN" },
  { src: "https://assets.aceternity.com/components/vertical-sliding-loader-demo-dark.webp", text: "DARK MODE" },
  { src: "https://images.unsplash.com/photo-1620694563886-c3a80ec55f41?q=80&w=800&auto=format&fit=crop", text: "YELLOW BIRD" },
  { src: "https://images.unsplash.com/photo-1526344966-89049886b28d?q=80&w=800&auto=format&fit=crop", text: "BLOSSOMS" },
  { src: "https://images.unsplash.com/photo-1762564046286-733d88d62800?q=80&w=800&auto=format&fit=crop", text: "MOUNTAINS" },
  { src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=800&auto=format&fit=crop", text: "FOREST" },
  { src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop", text: "LAKE CABIN" },
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", text: "EARTH" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", text: "WORKSPACE" }
];

export default function ImageGenerationLoaderPage() {
  const [imageUrl, setImageUrl] = useState(PRESETS[2].src);
  const [inputUrl, setInputUrl] = useState(imageUrl);
  
  const [loaderText, setLoaderText] = useState(PRESETS[2].text);
  const [inputText, setInputText] = useState(loaderText);

  const [viewMode, setViewMode] = useState<"preview" | "code">("preview");
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    async function highlight() {
      try {
        const html = await codeToHtml(loaderCode, {
          lang: "tsx",
          theme: "tokyo-night",
        });
        setHighlightedCode(html);
      } catch (e) {
        console.error("Shiki highlighting failed:", e);
      }
    }
    highlight();
  }, []);

  const applyChanges = () => {
    setImageUrl(inputUrl);
    setLoaderText(inputText);
  };

  return (
    <div className="flex w-full gap-6 h-[calc(100vh-10rem)] min-h-[750px]">
      {/* Preview Panel */}
      <div className="flex-1 flex flex-col bg-card rounded-2xl border shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b bg-muted/20 flex items-center justify-between">
          <h2 className="font-semibold tracking-tight">Preview</h2>
          <div className="flex bg-muted p-1 rounded-md">
            <button
              onClick={() => setViewMode("preview")}
              className={`px-4 py-1.5 text-xs font-medium rounded-sm transition-colors ${
                viewMode === "preview" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setViewMode("code")}
              className={`px-4 py-1.5 text-xs font-medium rounded-sm transition-colors ${
                viewMode === "code" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Code
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden relative">
          {viewMode === "preview" ? (
            <ScrollArea className="h-full w-full bg-muted/5">
              <div className="p-8 flex items-center justify-center min-h-full">
                <div className="relative w-fit border rounded-lg overflow-hidden shadow-xl bg-background">
                  <img 
                    src={imageUrl} 
                    alt="Preview" 
                    className="block w-full max-w-2xl max-h-[700px] object-cover" 
                    crossOrigin="anonymous"
                  />
                  {/* The key forces React to unmount the old loader and mount a new one, resetting both colors and text immediately! */}
                  <ImageGenerationLoader key={`${imageUrl}-${loaderText}`} text={loaderText} effect="scale-wave" />
                </div>
              </div>
            </ScrollArea>
          ) : (
            <div className="w-full h-full p-6 bg-muted/5">
              <ScrollArea className="w-full h-full bg-[#1a1b26] rounded-xl border shadow-inner text-left [&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-6">
                {highlightedCode ? (
                  <div 
                    className="text-[13px] leading-relaxed font-mono w-fit min-w-full"
                    dangerouslySetInnerHTML={{ __html: highlightedCode }} 
                  />
                ) : (
                  <pre className="text-[13px] leading-relaxed font-mono text-zinc-300 whitespace-pre p-6">
                    <code>{loaderCode}</code>
                  </pre>
                )}
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          )}
        </div>
      </div>

      {/* Settings Panel */}
      <div className="w-80 flex-shrink-0 flex flex-col bg-card rounded-2xl border shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b bg-muted/20 z-10 bg-card">
          <h2 className="font-semibold tracking-tight">Customization</h2>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-6 flex flex-col gap-6">
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Loader Text</label>
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
              placeholder="e.g. GENERATING"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Image URL</label>
            <textarea 
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              rows={8}
              className="w-full px-3 py-2 border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none break-all"
              placeholder="Paste image URL..."
            />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Ensure the image allows CORS sharing or the color extraction might fall back to the default palette.
            </p>
          </div>
          <button 
            onClick={applyChanges}
            className="w-full px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors shadow-sm"
          >
            Apply Changes
          </button>
          
          <div className="pt-4 border-t border-border/50">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Try these examples</h3>
            <div className="grid grid-cols-3 gap-2">
              {PRESETS.map((preset, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInputUrl(preset.src);
                    setImageUrl(preset.src);
                    setInputText(preset.text);
                    setLoaderText(preset.text);
                  }}
                  className="relative aspect-square rounded-md overflow-hidden border border-border/50 hover:border-primary/50 hover:shadow-sm transition-all group focus:outline-none focus:ring-2 focus:ring-primary/20"
                  title={`Load example ${i + 1}: ${preset.text}`}
                >
                  <img src={preset.src} alt={`Preset ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" crossOrigin="anonymous" />
                </button>
              ))}
            </div>
          </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
