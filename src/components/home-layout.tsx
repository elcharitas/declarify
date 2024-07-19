import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";

export function HomeLayout() {
  return (
    <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto py-12 px-4">
      <div className="bg-background rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4">Image Classification</h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Label htmlFor="classify-image">Upload Image</Label>
              <div className="flex items-center justify-center bg-muted rounded-md p-8 cursor-pointer hover:bg-muted/80 transition-colors">
                <input type="file" id="classify-image" className="hidden" />
                <div className="text-center">
                  <UploadIcon className="w-8 h-8 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">
                    Drag and drop or click to upload
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Button className="w-full">Classify Image</Button>
            </div>
            <div className="bg-card rounded-md p-4">
              <h3 className="text-lg font-bold mb-2">Prediction</h3>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-6 h-6 text-green-500" />
                <p className="text-card-foreground">Dog</p>
              </div>
              <p className="text-muted-foreground text-sm">Confidence: 95%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function UploadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
