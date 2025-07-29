import React, { useState } from 'react';
import UltraHero from './UltraHero';
import WhatIs from './WhatIs';
import Benefits from './Benefits';
import VisualProof from './VisualProof';
import WhatYouGet from './WhatYouGet';
import StrategicBonuses from './StrategicBonuses';
import PremiumComparison from './PremiumComparison';
import ImprovedTestimonials from './ImprovedTestimonials';
import UltraFAQ from './UltraFAQ';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import ExitIntentPopup from './ExitIntentPopup';
import LeadCapturePopup from './LeadCapturePopup';
import TimedNotificationPopup from './TimedNotificationPopup';

const LandingPage: React.FC = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showLeadPopup, setShowLeadPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <UltraHero onCTAClick={() => setShowLeadPopup(true)} />
      <WhatIs />
      <Benefits />
      <VisualProof />
      <StrategicBonuses />
      <WhatYouGet />
      <PremiumComparison onCTAClick={() => setShowLeadPopup(true)} />
      <ImprovedTestimonials />
      <UltraFAQ onCTAClick={() => setShowLeadPopup(true)} />
      <FinalCTA />
      <Footer />
      <ExitIntentPopup
        isOpen={showExitPopup}
        onClose={() => setShowExitPopup(false)}
      />
      <LeadCapturePopup
        isOpen={showLeadPopup}
        onClose={() => setShowLeadPopup(false)}
      />
      <TimedNotificationPopup
        onCTAClick={() => setShowLeadPopup(true)}
      />
    </div>
  );
};

export default LandingPage;
