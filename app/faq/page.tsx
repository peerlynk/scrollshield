'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FAQ_DATA, FAQItem } from '@/data/faq';
import { Search, ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>('what-is-scrollshield');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'privacy', label: 'Privacy & Safety' },
    { id: 'technical', label: 'Technical' },
    { id: 'installation', label: 'APK Installation' },
  ];

  const filteredFaqs = FAQ_DATA.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 md:py-20 bg-bg-primary min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <SectionHeader
          eyebrow="Help & Knowledge Base"
          title="Frequently Asked Questions"
          description="Find answers to common questions about ScrollShield, gesture detection, privacy guarantees, and APK installation."
        />

        {/* Search & Category Filter Controls */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-surface-primary border border-surface-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-sage text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-sage text-bg-primary font-semibold shadow-md'
                    : 'bg-surface-primary text-text-secondary hover:text-text-primary border border-surface-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-surface-primary rounded-2xl border border-surface-border text-text-muted text-sm">
              No matching questions found for "{searchQuery}". Try a different search term.
            </div>
          ) : (
            filteredFaqs.map(item => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-surface-primary rounded-2xl border border-surface-border overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full text-left p-5 font-medium text-text-primary flex items-center justify-between gap-4 hover:text-sage transition-colors"
                  >
                    <span className="text-base font-semibold">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-text-muted transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-sage' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-text-secondary leading-relaxed border-t border-surface-border/40 pt-3 animate-in fade-in duration-150">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}
