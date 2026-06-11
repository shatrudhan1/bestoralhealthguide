import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Context & Auth
import { AdminAuthProvider } from '@/context/AdminAuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

// Admin & Monitoring Pages
import SEOMonitoringDashboard from '@/pages/admin/SEOMonitoringDashboard';
import BlogPerformanceTracker from '@/pages/admin/BlogPerformanceTracker';
import AlertSettings from '@/pages/admin/AlertSettings';
import WeeklyReportGenerator from '@/pages/admin/WeeklyReportGenerator';
import KeywordRankingTracker from '@/pages/admin/KeywordRankingTracker';
import MonitoringGuide from '@/pages/MonitoringGuide';

// Core Pages
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ResourcesPage from '@/pages/ResourcesPage';
import BlogIndexPage from '@/pages/BlogIndexPage';
import ContactPage from '@/pages/ContactPage';
import FAQPage from '@/pages/FAQPage';
import SEOAuditReport from '@/pages/SEOAuditReport';
import BestOralHealthGuide from '@/pages/BestOralHealthGuide';
import GumStrength from '@/pages/GumStrength';
import SymptomsHubPage from '@/pages/SymptomsHubPage';

// Hub Landing Pages (Programmatic SEO Phase 2)
import BadBreathHubPage from '@/pages/BadBreathHubPage';
import BadBreathCausesPage from '@/pages/BadBreathCausesPage';
import BadBreathSymptomsHubPage from '@/pages/BadBreathSymptomsHubPage';
import BadBreathBacterialCausesPage from '@/pages/BadBreathBacterialCausesPage';
import BadBreathDietaryCausesPage from '@/pages/BadBreathDietaryCausesPage';
import BadBreathHealthConditionCausesPage from '@/pages/BadBreathHealthConditionCausesPage';
import BadBreathLifestyleCausesPage from '@/pages/BadBreathLifestyleCausesPage';
import BadBreathDryMouthCausesPage from '@/pages/BadBreathDryMouthCausesPage';
import BadBreathTongueCoatingCausesPage from '@/pages/BadBreathTongueCoatingCausesPage';

import GumHealthHubPage from '@/pages/GumHealthHubPage';
import ToothSensitivityHubPage from '@/pages/ToothSensitivityHubPage';
import OralCareRoutineHubPage from '@/pages/OralCareRoutineHubPage';
import FAQHubPage from '@/pages/FAQHubPage';
import ComparisonsHubPage from '@/pages/ComparisonsHubPage';
import BestProductsHubPage from '@/pages/BestProductsHubPage';

// Tools
import ToolsPage from '@/pages/ToolsPage.jsx';
import BadBreathCheckerToolPage from '@/pages/tools/BadBreathCheckerToolPage';
import GumDiseaseRiskCalculatorPage from '@/pages/tools/GumDiseaseRiskCalculatorPage.jsx';
import ToothSensitivityTest from '@/pages/tools/ToothSensitivityTest.jsx';
import PlaqueAndTartarRiskCalculator from '@/pages/tools/PlaqueAndTartarRiskCalculator.jsx';
import OralHealthScoreAnalyzerPage from '@/pages/tools/OralHealthScoreAnalyzerPage.jsx';

// Review Pages
import ProDentimReview from '@/pages/reviews/ProDentimReview';
import ProvaDentReview from '@/pages/reviews/ProvaDentReview';
import DentaSmileProReview from '@/pages/reviews/DentaSmileProReview';

// New Pillar Pages
import GumDiseaseCompleteGuide from '@/pages/blog/GumDiseaseCompleteGuide';
import BadBreathCompleteGuide from '@/pages/blog/BadBreathCompleteGuide';
import OralProbioticsCompleteGuide from '@/pages/blog/OralProbioticsCompleteGuide';
import OralHygieneCompleteGuide from '@/pages/blog/OralHygieneCompleteGuide';
import DentalCareBasicsGuide from '@/pages/blog/DentalCareBasicsGuide';

// Guides (Pillar Pages - Legacy)
import GumDiseaseGuide from '@/pages/guides/GumDiseaseGuide';
import DryMouthBadBreathPillar from '@/pages/guides/DryMouthBadBreathPillar';
import OralMicrobiomePillar from '@/pages/guides/OralMicrobiomePillar';
import OralCareProductsPillar from '@/pages/guides/OralCareProductsPillar';

// Blog Pages
import HowToRemovePlaqueFromTeethNaturally from '@/pages/blog/HowToRemovePlaqueFromTeethNaturally';
import DoIHavePlaqueOnMyTeeth from '@/pages/blog/DoIHavePlaqueOnMyTeeth';
import WhatHappensIfYouDontRemovePlaque from '@/pages/blog/WhatHappensIfYouDontRemovePlaque';
import DoIHaveBadBreath from '@/pages/blog/DoIHaveBadBreath';
import BadBreathTestAtHome from '@/pages/blog/BadBreathTestAtHome';
import BestOralProbiotics from '@/pages/blog/BestOralProbiotics';
import ImproveGumHealth from '@/pages/blog/ImproveGumHealth';
import PreventGumDiseaseNaturally from '@/pages/blog/PreventGumDiseaseNaturally';
import DentalSupplementsGuide from '@/pages/blog/DentalSupplementsGuide';
import OralHealthTips from '@/pages/blog/OralHealthTips';
import BestOralProbioticsForBadBreath from '@/pages/blog/BestOralProbioticsForBadBreath';
import OralProbioticsVsMouthwash from '@/pages/blog/OralProbioticsVsMouthwash';
import OralProbioticsTimeline from '@/pages/blog/OralProbioticsTimeline';
import SignsOralMicrobiomeUnhealthy from '@/pages/blog/SignsOralMicrobiomeUnhealthy';
import WhyMouthwashHarmingMicrobiome from '@/pages/blog/WhyMouthwashHarmingMicrobiome';
import CanOralProbioticsImproveGumHealth from '@/pages/blog/CanOralProbioticsImproveGumHealth';
import AreOralProbioticsSafe from '@/pages/blog/AreOralProbioticsSafe';
import MorningBreathCausesSolutions from '@/pages/blog/MorningBreathCausesSolutions';
import WhatKillsBadBreathInstantly from '@/pages/blog/WhatKillsBadBreathInstantly';
import WhyIsMyMorningBreathSoBad from '@/pages/blog/WhyIsMyMorningBreathSoBad';
import WhyDoMyGumsBleedWhenIBrush from '@/pages/blog/WhyDoMyGumsBleedWhenIBrush';
import DryMouthXerostomia from '@/pages/blog/DryMouthXerostomia';
import BestSupplementsOralProbioticsDryMouth from '@/pages/blog/BestSupplementsOralProbioticsDryMouth';
import BurningMouthSyndrome from '@/pages/blog/BurningMouthSyndrome';
import BestMouthwashGumDisease from '@/pages/blog/BestMouthwashGumDisease';
import BestMouthwashForSwollenGums from '@/pages/blog/BestMouthwashForSwollenGums';
import BestToothpasteForGumDisease from '@/pages/blog/BestToothpasteForGumDisease';
import BleedingGumsCausesTreatment from '@/pages/blog/BleedingGumsCausesTreatment';
import GingivitisVsPeriodontitis from '@/pages/blog/GingivitisVsPeriodontitis';
import EarlySignsGumDiseaseIgnore from '@/pages/blog/EarlySignsGumDiseaseIgnore';
import GumPainWithoutBleeding from '@/pages/blog/GumPainWithoutBleeding';
import GumsHurtWhenEating from '@/pages/blog/GumsHurtWhenEating';
import IsGingivitisReversible from '@/pages/blog/IsGingivitisReversible';
import StagesOfGumDiseaseExplained from '@/pages/blog/StagesOfGumDiseaseExplained';
import BleedingGumsWhileBrushing from '@/pages/blog/BleedingGumsWhileBrushing';
import BleedingGumsWhenFlossing from '@/pages/blog/BleedingGumsWhenFlossing';
import BleedingGumsInTheMorning from '@/pages/blog/BleedingGumsInTheMorning';
import EarlyRecedingGums from '@/pages/blog/EarlyRecedingGums';
import PlaqueVsTartar from '@/pages/blog/PlaqueVsTartar';
import CanTartarBeRemovedAtHome from '@/pages/blog/CanTartarBeRemovedAtHome';
import HowOftenDentalCleaning from '@/pages/blog/HowOftenDentalCleaning';
import AfterDentalScaling from '@/pages/blog/AfterDentalScaling';
import ScalingVsDeepCleaning from '@/pages/blog/ScalingVsDeepCleaning';
import AfterDeepCleaning from '@/pages/blog/AfterDeepCleaning';
import CanGumDiseaseBeHealed from '@/pages/blog/CanGumDiseaseBeHealed';
import BestBrushingRoutineHealthyGums from '@/pages/blog/BestBrushingRoutineHealthyGums';
import ProperFlossingHealthyGums from '@/pages/blog/ProperFlossingHealthyGums';
import ProDentimReview2026 from '@/pages/blog/ProDentimReview2026';
import ProDentimVsMouthwash from '@/pages/blog/ProDentimVsMouthwash';
import IsProDentimScamLegit from '@/pages/blog/IsProDentimScamLegit';
import ProDentimVsProvaDentVsDentaSmilePro from '@/pages/blog/ProDentimVsProvaDentVsDentaSmilePro';
import ProDentimSideEffectsSafety from '@/pages/blog/ProDentimSideEffectsSafety';
import WhereToBuyProDentim from '@/pages/blog/WhereToBuyProDentim';
import ProDentimTimelineArticle from '@/pages/blog/ProDentimTimelineArticle';
import ProDentimBadBreathArticle from '@/pages/blog/ProDentimBadBreathArticle';
import TonsilStonesBadBreath from '@/pages/blog/TonsilStonesBadBreath';
import BestSupplementForBleedingGums from '@/pages/blog/BestSupplementForBleedingGums';
import ProvaDentVsProDentim from '@/pages/blog/ProvaDentVsProDentim';
import BestProductsForGumHealth from '@/pages/blog/BestProductsForGumHealth';
import HowToReverseGingivitisNaturally from '@/pages/blog/HowToReverseGingivitisNaturally';
import WhatCausesBadBreath from '@/pages/blog/WhatCausesBadBreath';
import GumDiseaseRiskCheck from '@/pages/blog/GumDiseaseRiskCheck';
import BlogPost2 from '@/pages/blog/BlogPost2';
import WarningSignsGumDisease from '@/pages/blog/WarningSignsGumDisease';
import TeethSensitiveAllOfASudden from '@/pages/blog/TeethSensitiveAllOfASudden';
import StopToothSensitivityPainImmediately from '@/pages/blog/StopToothSensitivityPainImmediately';
import BestToothpasteForSensitiveTeeth from '@/pages/blog/BestToothpasteForSensitiveTeeth';

// Legal Pages
import PrivacyPolicy from '@/pages/legal/PrivacyPolicy';
import Disclaimer from '@/pages/legal/Disclaimer';
import AffiliateDisclosure from '@/pages/legal/AffiliateDisclosure';
import TermsConditions from '@/pages/legal/TermsConditions';

function App() {
  return (
    <Router>
      <AdminAuthProvider>
        <div className="min-h-screen flex flex-col bg-white">
          <Helmet defaultTitle="Best Oral Health Guide | Dental Care & Gum Disease Prevention" titleTemplate="%s | Best Oral Health Guide">
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Evidence-based oral health guides, expert dental care tips, and natural solutions for gum disease and bad breath." />
            <meta property="og:site_name" content="Best Oral Health Guide" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="robots" content="index, follow" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="apple-touch-icon" href="/favicon.svg" sizes="180x180" />
            <meta name="theme-color" content="#4A90E2" />
          </Helmet>
          {/* Note: The Supabase integration is currently INCOMPLETE. User authentication and backend features rely on third-party integration that must be configured by the user. */}
          <Header />
          <main className="flex-grow">
         <Routes>
          
             {/* Programmatic SEO Hub Routes */}
              <Route path="/bad-breath/" element={<BadBreathHubPage />} />
              <Route path="/bad-breath/symptoms/" element={<BadBreathSymptomsHubPage />} />
              <Route path="/bad-breath/causes/" element={<BadBreathCausesPage />} />
              <Route path="/bad-breath/causes/bacterial-causes/" element={<BadBreathBacterialCausesPage />} />
              <Route path="/bad-breath/causes/dietary-causes/" element={<BadBreathDietaryCausesPage />} />
              <Route path="/bad-breath/causes/health-condition-causes/" element={<BadBreathHealthConditionCausesPage />} />
              <Route path="/bad-breath/causes/lifestyle-causes/" element={<BadBreathLifestyleCausesPage />} />
              <Route path="/bad-breath/causes/dry-mouth-causes/" element={<BadBreathDryMouthCausesPage />} />
              <Route path="/bad-breath/causes/tongue-coating-causes/" element={<BadBreathTongueCoatingCausesPage />} />

              <Route path="/gum-health" element={<GumHealthHubPage />} />
              <Route path="/tooth-sensitivity" element={<ToothSensitivityHubPage />} />
              <Route path="/oral-care-routine" element={<OralCareRoutineHubPage />} />
              <Route path="/faq" element={<FAQHubPage />} />
              <Route path="/comparisons" element={<ComparisonsHubPage />} />
              <Route path="/best-products" element={<BestProductsHubPage />} />

              {/* Admin Protected Routes */}
              <Route path="/seo-dashboard" element={<ProtectedRoute><SEOMonitoringDashboard /></ProtectedRoute>} />
              <Route path="/blog-performance" element={<ProtectedRoute><BlogPerformanceTracker /></ProtectedRoute>} />
              <Route path="/alert-settings" element={<ProtectedRoute><AlertSettings /></ProtectedRoute>} />
              <Route path="/weekly-report" element={<ProtectedRoute><WeeklyReportGenerator /></ProtectedRoute>} />
              <Route path="/keyword-rankings" element={<ProtectedRoute><KeywordRankingTracker /></ProtectedRoute>} />

              {/* Public Process Guide */}
              <Route path="/monitoring-guide" element={<MonitoringGuide />} />

              {/* SEO 301 Redirects for Merged Blogs */}
              <Route path="/blog/bad-breath-guide" element={<Navigate to="/blog/bad-breath-complete-guide" replace={true} />} />
              <Route path="/blog/oral-probiotics-for-gum-health" element={<Navigate to="/blog/best-oral-probiotics" replace={true} />} />
              <Route path="/blog/benefits-of-oral-probiotics" element={<Navigate to="/blog/best-oral-probiotics" replace={true} />} />
              <Route path="/blog/natural-gum-care" element={<Navigate to="/blog/improve-gum-health" replace={true} />} />
              <Route path="/blog/natural-oral-care" element={<Navigate to="/blog/improve-gum-health" replace={true} />} />
              <Route path="/blog/how-to-improve-gum-health" element={<Navigate to="/blog/improve-gum-health" replace={true} />} />
              <Route path="/blog/improve-gum-health-naturally" element={<Navigate to="/blog/improve-gum-health" replace={true} />} />
              <Route path="/blog/burning-mouth-syndrome-vs-dry-mouth" element={<Navigate to="/blog/burning-mouth-syndrome" replace={true} />} />
              <Route path="/blog/bleeding-gums-causes-treatment-remedies" element={<Navigate to="/blog/bleeding-gums-causes-treatment" replace={true} />} />
              <Route path="/blog/blogpost5-bleeding-gums" element={<Navigate to="/blog/bleeding-gums-causes-treatment" replace={true} />} />
              <Route path="/blog-post5" element={<Navigate to="/blog/bleeding-gums-causes-treatment" replace={true} />} />

              <Route path="/" element={<HomePage />} />
              <Route path="/symptoms" element={<SymptomsHubPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/blog" element={<BlogIndexPage />} />
              
              <Route path="/seo-audit-report" element={<SEOAuditReport />} />
              <Route path="/best-oral-health-guide" element={<BestOralHealthGuide />} />
              <Route path="/gum-strength" element={<GumStrength />} />
              <Route path="/blog-post2" element={<BlogPost2 />} />
              
              {/* Tools */}
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/tools/bad-breath-cause-checker" element={<BadBreathCheckerToolPage />} />
              <Route path="/tools/gum-disease-risk-calculator" element={<GumDiseaseRiskCalculatorPage />} />
              <Route path="/tools/tooth-sensitivity-test" element={<ToothSensitivityTest />} />
              <Route path="/tools/plaque-tartar-risk-calculator" element={<PlaqueAndTartarRiskCalculator />} />
              <Route path="/tools/oral-health-score-analyzer" element={<OralHealthScoreAnalyzerPage />} />

              {/* Reviews */}
              <Route path="/reviews/prodentim" element={<ProDentimReview />} />
              <Route path="/reviews/dentasmile-pro" element={<DentaSmileProReview />} />
              <Route path="/reviews/provadent" element={<ProvaDentReview />} />
              
              {/* New Pillar Pages */}
              <Route path="/blog/gum-disease-complete-guide" element={<GumDiseaseCompleteGuide />} />
              <Route path="/blog/bad-breath-complete-guide" element={<BadBreathCompleteGuide />} />
              <Route path="/blog/oral-probiotics-complete-guide" element={<OralProbioticsCompleteGuide />} />
              <Route path="/blog/oral-hygiene-complete-guide" element={<OralHygieneCompleteGuide />} />
              <Route path="/blog/dental-care-basics-guide" element={<DentalCareBasicsGuide />} />

              {/* Guides (Pillar Pages - Legacy) */}
              <Route path="/guides/gum-disease-complete-guide" element={<GumDiseaseGuide />} />
              <Route path="/guides/dry-mouth-bad-breath-pillar" element={<DryMouthBadBreathPillar />} />
              <Route path="/guides/oral-microbiome-pillar" element={<OralMicrobiomePillar />} />
              <Route path="/guides/oral-care-products-pillar" element={<OralCareProductsPillar />} />
              
              {/* Blog Posts */}
              <Route path="/blog/how-to-remove-plaque-from-teeth-naturally" element={<HowToRemovePlaqueFromTeethNaturally />} />
              <Route path="/blog/what-happens-if-you-dont-remove-plaque" element={<WhatHappensIfYouDontRemovePlaque />} />
              <Route path="/blog/do-i-have-plaque-on-my-teeth" element={<DoIHavePlaqueOnMyTeeth />} />
              <Route path="/blog/7-warning-signs-gum-disease" element={<WarningSignsGumDisease />} />
              <Route path="/blog/prevent-gum-disease-naturally" element={<PreventGumDiseaseNaturally />} />
              <Route path="/blog/do-i-have-bad-breath" element={<DoIHaveBadBreath />} />
              <Route path="/blog/bad-breath-test-at-home" element={<BadBreathTestAtHome />} />
              <Route path="/blog/what-causes-bad-breath" element={<WhatCausesBadBreath />} />
              <Route path="/blog/best-oral-probiotics" element={<BestOralProbiotics />} />
              <Route path="/blog/improve-gum-health" element={<ImproveGumHealth />} />
              <Route path="/blog/dental-supplements-guide" element={<DentalSupplementsGuide />} />
              <Route path="/blog/oral-health-tips-for-beginners" element={<OralHealthTips />} />
              <Route path="/blog/best-oral-probiotics-for-bad-breath" element={<BestOralProbioticsForBadBreath />} />
              <Route path="/blog/oral-probiotics-vs-mouthwash" element={<OralProbioticsVsMouthwash />} />
              <Route path="/blog/how-long-do-oral-probiotics-take-to-work" element={<OralProbioticsTimeline />} />
              <Route path="/blog/signs-oral-microbiome-unhealthy" element={<SignsOralMicrobiomeUnhealthy />} />
              <Route path="/blog/why-mouthwash-harming-microbiome" element={<WhyMouthwashHarmingMicrobiome />} />
              <Route path="/blog/can-oral-probiotics-improve-gum-health" element={<CanOralProbioticsImproveGumHealth />} />
              <Route path="/blog/are-oral-probiotics-safe-daily-use" element={<AreOralProbioticsSafe />} />
              <Route path="/blog/morning-breath-causes-solutions" element={<MorningBreathCausesSolutions />} />
              <Route path="/blog/what-kills-bad-breath-instantly" element={<WhatKillsBadBreathInstantly />} />
              <Route path="/blog/why-is-my-morning-breath-so-bad" element={<WhyIsMyMorningBreathSoBad />} />
              <Route path="/blog/why-do-my-gums-bleed-when-i-brush" element={<WhyDoMyGumsBleedWhenIBrush />} />
              <Route path="/blog/dry-mouth-xerostomia-causes-solutions" element={<DryMouthXerostomia />} />
              <Route path="/blog/best-supplements-oral-probiotics-dry-mouth" element={<BestSupplementsOralProbioticsDryMouth />} />
              <Route path="/blog/burning-mouth-syndrome" element={<BurningMouthSyndrome />} />
              <Route path="/blog/best-mouthwash-for-gum-disease" element={<BestMouthwashGumDisease />} />
              <Route path="/blog/best-mouthwash-for-swollen-gums" element={<BestMouthwashForSwollenGums />} />
              <Route path="/blog/best-toothpaste-for-gum-disease" element={<BestToothpasteForGumDisease />} />
              <Route path="/blog/bleeding-gums-causes-treatment" element={<BleedingGumsCausesTreatment />} />
              <Route path="/blog/gingivitis-vs-periodontitis" element={<GingivitisVsPeriodontitis />} />
              <Route path="/blog/early-signs-gum-disease-ignore" element={<EarlySignsGumDiseaseIgnore />} />
              <Route path="/blog/gum-pain-without-bleeding" element={<GumPainWithoutBleeding />} />
              <Route path="/blog/gums-hurt-when-eating" element={<GumsHurtWhenEating />} />
              <Route path="/blog/is-gingivitis-reversible" element={<IsGingivitisReversible />} />
              <Route path="/blog/stages-of-gum-disease" element={<StagesOfGumDiseaseExplained />} />
              <Route path="/blog/bleeding-gums-while-brushing" element={<BleedingGumsWhileBrushing />} />
              <Route path="/blog/bleeding-gums-when-flossing" element={<BleedingGumsWhenFlossing />} />
              <Route path="/blog/bleeding-gums-in-the-morning" element={<BleedingGumsInTheMorning />} />
              <Route path="/blog/early-receding-gums" element={<EarlyRecedingGums />} />
              <Route path="/blog/plaque-vs-tartar" element={<PlaqueVsTartar />} />
              <Route path="/blog/can-tartar-be-removed-at-home" element={<CanTartarBeRemovedAtHome />} />
              <Route path="/blog/how-often-dental-cleaning" element={<HowOftenDentalCleaning />} />
              <Route path="/blog/after-dental-scaling" element={<AfterDentalScaling />} />
              <Route path="/blog/scaling-vs-deep-cleaning" element={<ScalingVsDeepCleaning />} />
              <Route path="/blog/after-deep-cleaning" element={<AfterDeepCleaning />} />
              <Route path="/blog/can-gum-disease-be-cured" element={<CanGumDiseaseBeHealed />} />
              <Route path="/blog/best-brushing-routine-healthy-gums" element={<BestBrushingRoutineHealthyGums />} />
              <Route path="/blog/proper-flossing-healthy-gums" element={<ProperFlossingHealthyGums />} />
              <Route path="/blog/prodentim-review-2026" element={<ProDentimReview2026 />} />
              <Route path="/blog/prodentim-vs-mouthwash" element={<ProDentimVsMouthwash />} />
              <Route path="/blog/is-prodentim-scam-legit" element={<IsProDentimScamLegit />} />
              <Route path="/blog/prodentim-vs-provadent-vs-dentasmile-pro" element={<ProDentimVsProvaDentVsDentaSmilePro />} />
              <Route path="/blog/prodentim-side-effects-safety" element={<ProDentimSideEffectsSafety />} />
              <Route path="/blog/where-to-buy-prodentim" element={<WhereToBuyProDentim />} />
              <Route path="/blog/how-long-does-prodentim-take-to-work" element={<ProDentimTimelineArticle />} />
              <Route path="/blog/prodentim-for-bad-breath" element={<ProDentimBadBreathArticle />} />
              <Route path="/blog/tonsil-stones-bad-breath" element={<TonsilStonesBadBreath />} />
              <Route path="/blog/best-supplement-for-bleeding-gums" element={<BestSupplementForBleedingGums />} />
              <Route path="/blog/provadent-vs-prodentim" element={<ProvaDentVsProDentim />} />
              <Route path="/blog/best-products-for-gum-health" element={<BestProductsForGumHealth />} />
              <Route path="/blog/how-to-reverse-gingivitis-naturally" element={<HowToReverseGingivitisNaturally />} />
              <Route path="/blog/what-causes-bad-breath" element={<WhatCausesBadBreath />} />
              <Route path="/blog/gum-disease-risk-check" element={<GumDiseaseRiskCheck />} />
              <Route path="/blog/blog-post2" element={<BlogPost2 />} />
              <Route path="/blog/7-warning-signs-gum-disease" element={<WarningSignsGumDisease />} />
              <Route path="/blog/teeth-sensitive-all-of-a-sudden" element={<TeethSensitiveAllOfASudden />} />
              <Route path="/blog/stop-tooth-sensitivity-pain-immediately" element={<StopToothSensitivityPainImmediately />} />
              <Route path="/blog/best-toothpaste-for-sensitive-teeth" element={<BestToothpasteForSensitiveTeeth />} />
              
              {/* Legal Routes */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
          
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </AdminAuthProvider>
    </Router>
  );
}

export default App;
