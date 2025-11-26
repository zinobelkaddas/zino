
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/pages/LandingPage';
import { CourseDetail } from './components/CourseDetail';
import { PractitionerAccreditation } from './components/pages/PractitionerAccreditation';
import { PractitionerAccreditationExpanded } from './components/pages/PractitionerAccreditationExpanded';
import { ProgramAccreditation } from './components/pages/ProgramAccreditation';
import { RenewalCPD } from './components/pages/RenewalCPD';
import { AccreditedNetwork } from './components/pages/AccreditedNetwork';
import { AccreditedPrograms } from './components/pages/AccreditedPrograms';
import { FindPractitioner } from './components/pages/FindPractitioner';
import { PractitionerProfile } from './components/pages/PractitionerProfile';
import { LearningEvents } from './components/pages/LearningEvents';
import { IaipCourses } from './components/pages/IaipCourses';
import { PublicationsBooks } from './components/pages/PublicationsBooks';
import { PublicationsArticles } from './components/pages/PublicationsArticles';
import { DesignSystemShowcase } from './components/DesignSystemShowcase';
import { AiSearch } from './components/pages/AiSearch';
import { VisualRevamp } from './components/pages/VisualRevamp';
import { RefinedComponents } from './components/pages/RefinedComponents';
import { Footer } from './components/Footer';
import { 
  Layers, Layout, BookOpen, Award, Building2, RefreshCw, Globe, 
  GraduationCap, Search, UserCircle, Sparkles, Palette, Calendar, 
  Library, PenTool, ListChecks, Menu, X, Check, LayoutGrid, Book, FileText
} from 'lucide-react';

type Page = 'landing' | 'course-detail' | 'practitioner-accreditation' | 'practitioner-accreditation-expanded' | 'program-accreditation' | 'renewal-cpd' | 'accredited-network' | 'accredited-programs' | 'find-practitioner' | 'practitioner-profile' | 'learning-events' | 'iaip-courses' | 'publications-books' | 'publications-articles' | 'design-system' | 'ai-search' | 'visual-revamp' | 'refined-components';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('publications-articles');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pageGroups = [
    {
      title: "Core & Design",
      items: [
        { id: 'landing', label: 'Landing Page', icon: Layout },
        { id: 'design-system', label: 'Design System', icon: Layers },
        { id: 'visual-revamp', label: 'Visual Revamp', icon: Palette },
        { id: 'refined-components', label: 'Refined UI', icon: PenTool },
      ]
    },
    {
      title: "Accreditation",
      items: [
        { id: 'practitioner-accreditation', label: 'Practitioner Acc.', icon: Award },
        { id: 'practitioner-accreditation-expanded', label: 'Practitioner (Full)', icon: ListChecks },
        { id: 'program-accreditation', label: 'Program Acc.', icon: Building2 },
        { id: 'renewal-cpd', label: 'Renewal & CPD', icon: RefreshCw },
      ]
    },
    {
      title: "Network",
      items: [
        { id: 'accredited-network', label: 'Accredited Network', icon: Globe },
        { id: 'find-practitioner', label: 'Find Practitioner', icon: Search },
        { id: 'practitioner-profile', label: 'Profile View', icon: UserCircle },
      ]
    },
    {
      title: "Learning",
      items: [
        { id: 'course-detail', label: 'Course Detail', icon: BookOpen },
        { id: 'accredited-programs', label: 'Accredited Programs', icon: GraduationCap },
        { id: 'learning-events', label: 'Events', icon: Calendar },
        { id: 'iaip-courses', label: 'IAIP Courses', icon: Library },
        { id: 'publications-books', label: 'Pubs: Books', icon: Book },
        { id: 'publications-articles', label: 'Pubs: Articles', icon: FileText },
        { id: 'ai-search', label: 'AI Search', icon: Sparkles },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary-light selection:text-primary-dark">
      <Navbar />
      
      <main>
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'course-detail' && <CourseDetail />}
        {currentPage === 'practitioner-accreditation' && <PractitionerAccreditation />}
        {currentPage === 'practitioner-accreditation-expanded' && <PractitionerAccreditationExpanded />}
        {currentPage === 'program-accreditation' && <ProgramAccreditation />}
        {currentPage === 'renewal-cpd' && <RenewalCPD />}
        {currentPage === 'accredited-network' && <AccreditedNetwork />}
        {currentPage === 'accredited-programs' && <AccreditedPrograms />}
        {currentPage === 'find-practitioner' && <FindPractitioner />}
        {currentPage === 'practitioner-profile' && <PractitionerProfile />}
        {currentPage === 'learning-events' && <LearningEvents />}
        {currentPage === 'iaip-courses' && <IaipCourses />}
        {currentPage === 'publications-books' && <PublicationsBooks />}
        {currentPage === 'publications-articles' && <PublicationsArticles />}
        {currentPage === 'ai-search' && <AiSearch />}
        {currentPage === 'visual-revamp' && <VisualRevamp />}
        {currentPage === 'refined-components' && <RefinedComponents />}
        {currentPage === 'design-system' && <DesignSystemShowcase />}
      </main>

      <Footer />

      {/* Floating Navigation Command Center */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        
        {/* Menu Panel */}
        {isNavOpen && (
          <div className="mb-4 bg-white/90 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-[2rem] p-6 w-[320px] sm:w-[380px] max-h-[80vh] overflow-y-auto animate-in slide-in-from-bottom-10 fade-in duration-200 origin-bottom-right">
            <div className="flex items-center justify-between mb-6 px-2">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <LayoutGrid size={18} className="text-primary-dark" /> 
                Site Navigation
              </h3>
              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                {pageGroups.reduce((acc, group) => acc + group.items.length, 0)} Pages
              </span>
            </div>

            <div className="space-y-6">
              {pageGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-2 border-b border-slate-100 pb-2">
                    {group.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {group.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setCurrentPage(item.id as Page);
                          setIsNavOpen(false);
                        }}
                        className={`
                          flex flex-col items-center justify-center p-3 rounded-xl text-center transition-all duration-200 border group
                          ${currentPage === item.id 
                            ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                            : 'bg-white text-slate-600 border-slate-100 hover:border-primary-dark/20 hover:bg-slate-50 hover:text-primary-dark hover:shadow-md'
                          }
                        `}
                      >
                        <item.icon size={20} className={`mb-2 transition-colors ${currentPage === item.id ? 'text-primary-light' : 'text-slate-400 group-hover:text-primary-dark'}`} />
                        <span className="text-xs font-bold leading-tight">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`
            h-16 w-16 rounded-full shadow-2xl shadow-primary-dark/20 flex items-center justify-center transition-all duration-300 z-50 border-4 border-white
            ${isNavOpen 
              ? 'bg-slate-900 text-white rotate-90 hover:bg-slate-800' 
              : 'bg-primary-dark text-white hover:scale-110 hover:bg-primary-light'
            }
          `}
        >
          {isNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>
  );
}

export default App;
