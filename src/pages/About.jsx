import AboutCosmetich from "../components/about/AboutCosmetich.jsx";
import EducationalFocus from "../components/about/EducationalFocus.jsx";
import FindUs from "../components/about/FindUs.jsx";
import ImportantNote from "../components/about/ImportantNote.jsx";
import WhatWeDo  from "../components/about/WhatWeDo.jsx";
import WhyFixdermaFCL from "../components/about/WhyFixdermaFCL.jsx";

const AboutPage = () => {
  return (
    <div>
        <AboutCosmetich />
        <WhatWeDo  />
        <WhyFixdermaFCL />
        <EducationalFocus />
        <FindUs />
        <ImportantNote />
    </div>
  );
};

export default AboutPage;