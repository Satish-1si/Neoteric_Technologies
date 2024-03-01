import ServicesSection from "./ServicesSection";
import CoreServices from "./coreServices";
import GradientSection from "./gradientSection";

const Services = ({ Mode }) => {
  return (
    <div>
      <ServicesSection />
      <GradientSection />
      <CoreServices />
    </div>
  );
};

export default Services;
