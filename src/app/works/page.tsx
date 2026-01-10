"use client";

import { Suspense } from "react";
import Work from "@/components/works";
import WorksGalleryClient from "@/components/WorksGalleryClient";

export default function Home() {
  return (
    <div className="">
      <Work />

      <Suspense fallback={<div>Loading...</div>}>
        <WorksGalleryClient />
      </Suspense>
    </div>
  );
}
