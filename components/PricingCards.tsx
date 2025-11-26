import React from 'react';
import { Check, TicketPercent } from 'lucide-react';
import { Button } from './ui/Button';

const MembershipCard: React.FC<{
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}> = ({ title, price, description, features, recommended }) => (
  <div className={`
    bg-white rounded-3xl p-8 flex flex-col h-full border
    ${recommended 
      ? 'border-primary-dark/30 shadow-xl shadow-primary-light/10 relative overflow-hidden' 
      : 'border-slate-100 shadow-soft'}
  `}>
    {recommended && (
      <div className="absolute top-0 right-0 bg-primary-dark text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
        POPULAR
      </div>
    )}
    
    <div className="mb-6">
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-4xl font-bold text-secondary-dark">${price}</span>
        <span className="text-sm text-slate-500 font-bold uppercase">/month</span>
      </div>
      <h3 className="text-2xl font-bold text-secondary-dark mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>

    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
          <div className="min-w-[1.25rem] min-h-[1.25rem] rounded-full bg-secondary-bg flex items-center justify-center mt-0.5">
            <Check className="w-3 h-3 text-secondary" strokeWidth={3} />
          </div>
          {feature}
        </li>
      ))}
    </ul>

    <Button variant="primary" fullWidth className="bg-primary-bg text-primary-dark hover:bg-primary-dark hover:text-white shadow-none hover:shadow-lg">
      Become a {title.split(' ')[0]} Member
    </Button>
  </div>
);

export const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Membership Cards</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose the path that fits your journey in Islamic Psychology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <MembershipCard 
            title="Learner Membership"
            price="199"
            description="Suitable for students, early learners, and anyone preparing for certification."
            features={[
              "Access to member webinars & learning sessions",
              "Discounts on events, workshops, and conference tickets",
              "Early access to selected resources",
              "Supportive community"
            ]}
          />
          <MembershipCard 
            title="Practitioner Membership"
            price="299"
            description="For licensed professionals seeking to integrate IP into their clinical practice."
            features={[
              "Access to member webinars & learning sessions",
              "Discounts on events, workshops, and conference tickets",
              "Early access to selected resources",
              "Supportive community",
              "Listing in global practitioner directory",
              "Peer supervision circles"
            ]}
            recommended
          />
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center text-primary-dark hover:text-primary-dark/80 font-bold underline decoration-2 underline-offset-4">
            <TicketPercent className="w-5 h-5 mr-2" />
            Discounted Price for Students
          </a>
        </div>
      </div>
    </section>
  );
};