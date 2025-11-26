
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/pages/LandingPage';
import { CourseDetail } from './components/CourseDetail';
import { PractitionerAccreditation } from './components/pages/PractitionerAccreditation';
import { ProgramAccreditation } from './components/pages/ProgramAccreditation';
import { RenewalCPD } from './components/pages/RenewalCPD';
import { AccreditedNetwork } from './components/pages/AccreditedNetwork';
import { AccreditedPrograms } from './components/pages/AccreditedPrograms';
import { FindPractitioner } from './components/pages/FindPractitioner';
import { PractitionerProfile } from './components/pages/PractitionerProfile';
import { LearningEvents } from './components/pages/LearningEvents';
import { IaipCourses } from './components/pages/IaipCourses';
import { DesignSystemShowcase } from './components/DesignSystemShowcase';
import { AiSearch } from './components/pages/AiSearch';
import { VisualRevamp } from './components/pages/VisualRevamp';
import { RefinedComponents } from './components/pages/RefinedComponents';
import { Footer } from './components/Footer';
import { Layers, Layout, BookOpen, Award, Building2, RefreshCw, Globe, GraduationCap, Search, UserCircle, Sparkles, Palette, Calendar, Library, PenTool } from 'lucide-react';

type Page = 'landing' | 'course-detail' | 'practitioner-accreditation' | 'program-accreditation' | 'renewal-cpd' | 'accredited-network' | 'accredited-programs' | 'find-practitioner' | 'practitioner-profile' | 'learning-events' | 'iaip-courses' | 'design-system' | 'ai-search' | 'visual-revamp' | 'refined-components';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary-light selection:text-primary-dark">
      <Navbar />
      
      <main>
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'course-detail' && <CourseDetail />}
        {currentPage === 'practitioner-accreditation' && <PractitionerAccreditation />}
        {currentPage === 'program-accreditation' && <ProgramAccreditation />}
        {currentPage === 'renewal-cpd' && <RenewalCPD />}
        {currentPage === 'accredited-network' && <AccreditedNetwork />}
        {currentPage === 'accredited-programs' && <AccreditedPrograms />}
        {currentPage === 'find-practitioner' && <FindPractitioner />}
        {currentPage === 'practitioner-profile' && <PractitionerProfile />}
        {currentPage === 'learning-events' && <LearningEvents />}
        {currentPage === 'iaip-courses' && <IaipCourses />}
        {currentPage === 'ai-search' && <AiSearch />}
        {currentPage === 'visual-revamp' && <VisualRevamp />}
        {currentPage === 'refined-components' && <RefinedComponents />}
        {currentPage === 'design-system' && <DesignSystemShowcase />}
      </main>

      <Footer />

      {/* Floating Page Switcher */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 p-2 bg-white/90 backdrop-blur-md border border-slate-200 shadow-2xl rounded-2xl max-h-[80vh] overflow-y-auto">
        <button
          onClick={() => setCurrentPage('refined-components')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'refined-components' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="Refined Components (New!)"
        >
          <PenTool size={20} />
          {currentPage === 'refined-components' && <span className="text-sm font-bold pr-2">Refined UI</span>}
        </button>
        <button
          onClick={() => setCurrentPage('visual-revamp')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'visual-revamp' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="Visual Revamp"
        >
          <Palette size={20} />
          {currentPage === 'visual-revamp' && <span className="text-sm font-bold pr-2">Visual Revamp</span>}
        </button>
        <button
          onClick={() => setCurrentPage('iaip-courses')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'iaip-courses' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="IAIP Courses"
        >
          <Library size={20} />
          {currentPage === 'iaip-courses' && <span className="text-sm font-bold pr-2">IAIP Courses</span>}
        </button>
        <button
          onClick={() => setCurrentPage('learning-events')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'learning-events' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="Learning & Events"
        >
          <Calendar size={20} />
          {currentPage === 'learning-events' && <span className="text-sm font-bold pr-2">Learning & Events</span>}
        </button>
        <button
          onClick={() => setCurrentPage('landing')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'landing' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="Landing Page Wireframe"
        >
          <Layout size={20} />
          {currentPage === 'landing' && <span className="text-sm font-bold pr-2">Landing Page</span>}
        </button>
        <button
          onClick={() => setCurrentPage('ai-search')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'ai-search' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="AI Knowledge Search"
        >
          <Sparkles size={20} />
          {currentPage === 'ai-search' && <span className="text-sm font-bold pr-2">AI Search</span>}
        </button>
        <button
          onClick={() => setCurrentPage('course-detail')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'course-detail' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="Course Detail Page"
        >
          <BookOpen size={20} />
          {currentPage === 'course-detail' && <span className="text-sm font-bold pr-2">Course Detail</span>}
        </button>
        <button
          onClick={() => setCurrentPage('practitioner-accreditation')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'practitioner-accreditation' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="Practitioner Accreditation"
        >
          <Award size={20} />
          {currentPage === 'practitioner-accreditation' && <span className="text-sm font-bold pr-2">Practitioner Acc.</span>}
        </button>
        <button
          onClick={() => setCurrentPage('program-accreditation')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'program-accreditation' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="Program Accreditation"
        >
          <Building2 size={20} />
          {currentPage === 'program-accreditation' && <span className="text-sm font-bold pr-2">Program Acc.</span>}
        </button>
        <button
          onClick={() => setCurrentPage('renewal-cpd')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'renewal-cpd' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="Renewal & CPD"
        >
          <RefreshCw size={20} />
          {currentPage === 'renewal-cpd' && <span className="text-sm font-bold pr-2">Renewal & CPD</span>}
        </button>
         <button
          onClick={() => setCurrentPage('accredited-network')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'accredited-network' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="Accredited Network"
        >
          <Globe size={20} />
          {currentPage === 'accredited-network' && <span className="text-sm font-bold pr-2">Network</span>}
        </button>
         <button
          onClick={() => setCurrentPage('find-practitioner')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'find-practitioner' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="Find Practitioner"
        >
          <Search size={20} />
          {currentPage === 'find-practitioner' && <span className="text-sm font-bold pr-2">Find Practitioner</span>}
        </button>
        <button
          onClick={() => setCurrentPage('practitioner-profile')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'practitioner-profile' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="Practitioner Profile"
        >
          <UserCircle size={20} />
          {currentPage === 'practitioner-profile' && <span className="text-sm font-bold pr-2">Profile</span>}
        </button>
        <button
          onClick={() => setCurrentPage('accredited-programs')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'accredited-programs' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="Accredited Programs"
        >
          <GraduationCap size={20} />
          {currentPage === 'accredited-programs' && <span className="text-sm font-bold pr-2">Programs</span>}
        </button>
        <button
          onClick={() => setCurrentPage('design-system')}
          className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentPage === 'design-system' ? 'bg-primary-dark text-white shadow-lg' : 'hover:bg-slate-100 text-slate-500'}`}
          title="Design System"
        >
          <Layers size={20} />
          {currentPage === 'design-system' && <span className="text-sm font-bold pr-2">Design System</span>}
        </button>
      </div>
    </div>
  );
}

export default App;