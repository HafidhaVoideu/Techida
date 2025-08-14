import Footer from "@/scenes/general/Footer";
import Header from "@/scenes/general/Header";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header></Header>

      {children}

      <Footer />
    </>
  );
}
