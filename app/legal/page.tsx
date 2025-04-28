import { Suspense } from "react";
import Legal from "@/components/legal";

export default function LegalPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Legal />
    </Suspense>
  );
}
