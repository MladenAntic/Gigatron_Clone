import { AirConditionInstallBanner } from "./components/AirConditionInstallBanner";
import { Blog } from "./components/Blog";
import { Brands } from "./components/Brands";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { FeaturesBanner } from "./components/FeaturesBanner";
import { Grid } from "./components/grid/Grid";
import { Header } from "./components/header/Header";
import { PaymentBanner } from "./components/PaymentBanner";
import { Banner } from "./components/shared/Banner";
import { TopCategories } from "./components/TopCategories";
import eRecycle from "./assets/e-recycle.avif";
import recycle from "./assets/recycle.avif";
import { FeaturedBrands } from "./components/FeaturedBrands";
import houseMaster from "./assets/house-master.avif";
import technician2 from "./assets/technician2.avif";
import { Consoles } from "./components/Consoles";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="h-full">
      <Header />
      <PaymentBanner />
      <Grid />
      <FeaturesBanner />
      <TopCategories />
      <Brands />
      <FeaturedProducts />
      <AirConditionInstallBanner />
      <Blog />
      <Banner
        background="bg-banner-purple"
        textTop="RECIKLAZA STAROG UREDJAJA"
        textTopColor="text-green-500"
        textBottom="vam donosi vaucer za kupovinu novog"
        textBottomColor="text-black"
        imageFirst={eRecycle}
        imageSecond={recycle}
      />
      <FeaturedBrands />
      <Banner
        background="bg-banner-blue"
        textTop="USLUZNA MONTAZA"
        textTopColor="text-gigatron-yellow"
        textBottom="televizora i samostojece bele tehnike"
        textBottomColor="text-white"
        imageFirst={houseMaster}
        imageSecond={technician2}
      />
      <Consoles />
      <Footer />
    </main>
  );
}
