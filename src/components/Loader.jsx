import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="min-h-screen flex justify-center items-center h-40">
      <Loader2 className="h-8 text-blue-600 w-8 animate-spin " />
    </div>
  );
}
