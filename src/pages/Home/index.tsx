import ExploreSection from "./ExploreSection";
import ProductSection from "./ProductSection";

export function Home() {
  return (
    <div className="flex justify-center w-screen">
      <div>
        <ExploreSection />
        <ProductSection />
        <ProductSection />
      </div>
    </div>
  );
}
