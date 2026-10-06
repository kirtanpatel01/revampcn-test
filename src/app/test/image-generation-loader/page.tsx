import { ImageGenerationLoader } from "@/components/ui/image-generation-loader";

export default function ImageGenerationLoaderPage() {
  return (
    <div className="relative w-fit border rounded-lg overflow-hidden bg-background">
      <img 
        src="https://plus.unsplash.com/premium_photo-1670512181061-e24282f7ee78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Yellow Taxi in New York" 
        className="block w-full max-w-2xl object-cover" 
        crossOrigin="anonymous"
      />
      <ImageGenerationLoader text="GENERATING" effect="scale-wave" />
    </div>
  )
}
