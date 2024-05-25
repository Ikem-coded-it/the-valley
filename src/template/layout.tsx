import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import PagesContainer from "@/components/pages-container";
import { ReactNode, useState } from "react";
import Overlay from "@/components/overlay";
import CreateCommunity from "@/organisms/Communities/create-community";

export default function DashboardRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [show, setShow] = useState(false);

  return (
    <main className="w-full pt-[80px] relative max-w-[100vw]">
      <Header />

      <Sidebar className="hidden lg:block fixed top-[80px]" setShow={setShow} />

      <PagesContainer>{children}</PagesContainer>

      {show && (
        <Overlay>
          <CreateCommunity setShow={setShow} />
        </Overlay>
      )}
    </main>
  );
}
