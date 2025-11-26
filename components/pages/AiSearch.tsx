
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Search, Globe, ArrowRight, Loader2, BookOpen, Sparkles } from 'lucide-react';

export const AiSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [sources, setSources] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);
    setSources([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: query,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      setResult(response.text);
      
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      // Extract web sources from chunks
      const webSources = chunks
        .filter((chunk: any) => chunk.web)
        .map((chunk: any) => chunk.web);
      
      setSources(webSources);

    } catch (err) {
      console.error(err);
      setError("An error occurred while fetching the answer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-slate-900">
        {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span className="hover:text-primary-dark cursor-pointer transition-colors">Home</span> 
          <span className="mx-2 text-slate-300">/</span> 
          <span className="text-primary-dark">AI Knowledge Search</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
                <Badge variant="primary" className="px-3 py-1">Beta Feature</Badge>
                <Badge variant="accent" className="px-3 py-1 bg-amber-100 text-amber-800 flex items-center gap-1">
                    <Sparkles size={12} /> Powered by Gemini
                </Badge>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Ask IAIP Intelligence
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Search our knowledge base and the web for the latest research, news, and insights in Islamic Psychology.
            </p>
        </div>

        {/* Search Input */}
        <div className="bg-white p-2 rounded-2xl shadow-xl shadow-primary-light/10 border border-slate-200 flex flex-col md:flex-row gap-2 mb-12 transform focus-within:ring-2 focus-within:ring-primary-light/50 transition-all duration-300">
            <div className="flex-grow relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <Search className="w-5 h-5" />
                </div>
                <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="Ask a question (e.g., 'Latest research on mindfulness in IP')" 
                    className="w-full h-14 pl-12 pr-4 bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 focus:ring-0 text-lg"
                />
            </div>
            <Button 
                onClick={handleSearch} 
                disabled={loading || !query.trim()}
                className="h-14 rounded-xl px-8 shadow-lg min-w-[120px] text-base"
            >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Search'}
            </Button>
        </div>

        {/* Error State */}
        {error && (
            <div className="bg-rose-50 border border-rose-100 text-rose-600 p-4 rounded-xl mb-8 text-center font-medium animate-in fade-in">
                {error}
            </div>
        )}

        {/* Results */}
        {result && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-soft mb-8">
                    <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                        <div className="w-10 h-10 rounded-full bg-primary-bg text-primary-dark flex items-center justify-center">
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Answer</h3>
                    </div>
                    <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap">
                        {result}
                    </div>
                </div>

                {sources.length > 0 && (
                    <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-slate-400" />
                            Sources & References
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {sources.map((source, idx) => (
                                <a 
                                    key={idx} 
                                    href={source.uri} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex flex-col bg-white hover:bg-white border border-slate-200 hover:border-primary-light p-4 rounded-xl transition-all duration-200 group hover:shadow-md h-full"
                                >
                                    <h4 className="font-bold text-slate-800 text-sm mb-2 line-clamp-2 group-hover:text-primary-dark transition-colors">
                                        {source.title}
                                    </h4>
                                    <div className="mt-auto flex items-center text-xs text-slate-400 gap-1 pt-2 border-t border-slate-50">
                                        <span className="truncate flex-1 font-medium">{new URL(source.uri).hostname}</span>
                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-primary-dark" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )}

        {/* Empty State / Suggestions */}
        {!result && !loading && !error && (
            <div className="text-center py-8">
                 <p className="text-slate-400 font-bold text-sm uppercase tracking-wide mb-4">Try asking about</p>
                 <div className="flex flex-wrap justify-center gap-3">
                    {[
                        'History of Islamic Psychology', 
                        'Al-Ghazali view on the soul', 
                        'Recent IP conferences 2024', 
                        'Mindfulness vs Muraqabah',
                        'Who is Dr. Malik Badri?'
                    ].map((suggestion, i) => (
                        <button 
                            key={i}
                            onClick={() => { setQuery(suggestion); }} 
                            className="bg-white hover:bg-slate-50 text-slate-600 hover:text-primary-dark px-5 py-3 rounded-full text-sm font-bold border border-slate-200 hover:border-primary-light transition-all shadow-sm hover:shadow-md"
                        >
                            {suggestion}
                        </button>
                    ))}
                 </div>
            </div>
        )}
      </div>
    </div>
  );
};
