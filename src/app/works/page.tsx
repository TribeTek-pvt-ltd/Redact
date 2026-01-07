"use client";

import { Suspense } from "react";
import Footer from "@/components/footer";
import Work from "@/components/works";
import FooterNav from "@/components/footerNav";
import WorksGalleryClient from "@/components/WorksGalleryClient";

export default function Home() {
  return (
    <div className="">
      <Work />

      <Suspense fallback={<div>Loading...</div>}>
        <WorksGalleryClient />
      </Suspense>

      <Footer />
      <FooterNav />
    </div>
  );
}
