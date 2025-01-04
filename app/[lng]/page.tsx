import Footer from "@/components/layout/footer/Footer";
import NavBar from "@/components/layout/navbar/NavBar";
import MainPage from "@/pages/MainPage";

interface IProps {
  params: Promise<{
    lng: string;
  }>;
}

export default async function Home({ params }: IProps) {
  const lng = (await params).lng;
  return (
    <div className="flex min-h-screen flex-col items-center gap-8 pb-20 font-sans sm:gap-16">
      <NavBar />
      <MainPage lng={lng} />
      <Footer />
    </div>
  );
}
