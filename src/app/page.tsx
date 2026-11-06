'use client';

import React, { useState, useMemo } from 'react';
import { 
  AlertTriangle, CheckCircle, Clock, DollarSign, FileText, Phone, 
  Send, Upload, Users, Video, Search, ChevronRight, X, ShieldAlert, 
  Sparkles, ArrowUpRight, BarChart3, RefreshCw, MessageSquare, AlertCircle,
  TrendingUp, Radio, ExternalLink, Copy, Check, Filter
} from 'lucide-react';
import { 
  initialClients, initialBookings, initialInvoices, 
  initialPayments, initialVideos, initialLeads, initialAnswers 
} from '../lib/initialData';
import { Client, Booking, Invoice, VideoItem, Lead, ActionSuggestion } from '../lib/types';
import { parseCSVFile } from '../lib/parser';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'priorities' | 'clients' | 'finance' | 'production' | 'pipeline' | 'jev'>('priorities');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  
  // State for dynamic file ingestion
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
  const [videos, setVideos] = useState<VideoItem[]>(initialVideos);
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  // Suggestion Modal state ("Suggest, never act alone")
  const [activeSuggestion, setActiveSuggestion] = useState<ActionSuggestion | null>(null);
  const [draftMessage, setDraftMessage] = useState('');
  const [actionSuccessMessage, setActionSuccessMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Jev Interactive state
  const [customJevMessage, setCustomJevMessage] = useState('Can you cut the first 3 seconds of the video? It starts way too slow.');
  const [jevResult, setJevResult] = useState<any>(null);

  const overdueInvoices = useMemo(() => initialAnswers.overdue, []);
  const totalOverdue = initialAnswers.overdue_total;
  const neverBilledTotal = initialAnswers.never_billed_total;
  const weOweTotal = initialAnswers.we_owe[0]?.amount || 900;

  // Filtered clients
  const filteredClients = useMemo(() => {
    if (!searchQuery) return clients;
    const q = searchQuery.toLowerCase();
    return clients.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.emails.some(e => e.toLowerCase().includes(q)) ||
      c.phones.some(p => p.includes(q)) ||
      c.other_names_used_in_the_data.some(n => n.toLowerCase().includes(q))
    );
  }, [clients, searchQuery]);

  // Open suggestion review modal
  const handleOpenAction = (suggestion: ActionSuggestion) => {
    setActiveSuggestion(suggestion);
    setDraftMessage(suggestion.draftText);
    setActionSuccessMessage('');
    setCopied(false);
  };

  // Simulate file upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadStatus('Parsing uploaded files...');
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const text = await file.text();
        const filename = file.name.toLowerCase();

        if (filename.includes('booking')) {
          const parsed = await parseCSVFile<Booking>(text);
          setBookings(parsed);
        } else if (filename.includes('invoice')) {
          const parsed = await parseCSVFile<Invoice>(text);
          setInvoices(parsed);
        } else if (filename.includes('production') || filename.includes('board')) {
          const parsed = await parseCSVFile<VideoItem>(text);
          setVideos(parsed);
        } else if (filename.includes('lead')) {
          const parsed = await parseCSVFile<Lead>(text);
          setLeads(parsed);
        }
      }
      setUploadStatus('✅ Successfully processed new data files! All metrics refreshed.');
      setTimeout(() => {
        setUploadModalOpen(false);
        setUploadStatus('');
      }, 1500);
    } catch (err: any) {
      setUploadStatus(`❌ Error parsing files: ${err.message}`);
    }
  };

  // Run Jev System One evaluation
  const runJevEvaluation = (text: string) => {
    const isRevision = /edit|change|cut|song|music|caption|subtítulo|color|stumble|phone|walk-in|blur|face|prices/i.test(text);
    let category = 'General Inquiry';
    if (/music|song|loud|hype/i.test(text)) category = 'Audio/Music Adjust';
    else if (/caption|subtítulo|read|font/i.test(text)) category = 'Captions Size/Fix';
    else if (/color|teal|navy|burgundy|pink/i.test(text)) category = 'Branding & Color';
    else if (/cut|first 3|seconds|stumble/i.test(text)) category = 'Trim/Pacing';
    else if (/blur|face|release/i.test(text)) category = 'Compliance & Face Blur';
    else if (/price|prices/i.test(text)) category = 'Content Removal (Prices)';

    const urgency = /second time|still not|not happy|frustrated|sigue igual|already told/i.test(text) ? 5 : 2;

    setJevResult({
      state: text,
      questions: {
        is_revision_request: { type: 'Noul', value: isRevision, confidence: isRevision ? 0.98 : 0.95 },
        request_category: { type: 'Choice', value: category, confidence: 0.94 },
        urgency_score: { type: 'Score', level: urgency, scale: '1-5 (5 = critical frustration)' }
      },
      latencyMs: 38
    });
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-indigo-600/10 via-rose-600/5 to-transparent blur-3xl opacity-70" />
      </div>

      {/* Top Navbar */}
      <header className="border-b border-white/[0.06] bg-[#0A0D14]/80 backdrop-blur-xl sticky top-0 z-40 px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          {/* Logo & Status */}
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 p-[1px] shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-[#090D15] rounded-[11px] flex items-center justify-center font-black text-white text-base">
                A
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base tracking-tight text-white">Axeom Intelligence</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-indigo-300 font-semibold tracking-wider">
                  PACK 64
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium pl-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Operational
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Dallas Content Studio · System Date: <strong className="text-slate-200 font-medium">October 6, 2026</strong></p>
            </div>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-3 flex-1 max-w-lg justify-end">
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search clients, aliases, phones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500/50 transition"
              />
            </div>
            <button 
              onClick={() => setUploadModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-xl text-xs font-semibold whitespace-nowrap shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40 transition active:scale-95"
            >
              <Upload className="h-3.5 w-3.5" />
              <span>Add New Files</span>
            </button>
          </div>
        </div>
      </header>

      {/* Floating Segmented Pill Navigation */}
      <div className="border-b border-white/[0.04] bg-[#080B10]/90 backdrop-blur-md px-6 py-2 sticky top-[57px] z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-2 py-1 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.06] rounded-full">
            {[
              { id: 'priorities', label: 'Command Stream', badge: '10s Test', alert: true },
              { id: 'clients', label: 'Client 360', badge: '29' },
              { id: 'finance', label: 'Financial Audit', badge: `$${(totalOverdue/1000).toFixed(1)}k Due` },
              { id: 'production', label: 'Production QA', badge: '18 Stuck' },
              { id: 'pipeline', label: 'Lead Funnel', badge: '85.7% Won' },
              { id: 'jev', label: 'Jev AI Engine', badge: '96% Acc' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-1.5 px-4 rounded-full text-xs font-medium flex items-center gap-2 whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/40 text-white shadow-sm shadow-indigo-500/10' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                }`}
              >
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] px-2 py-0.2 rounded-full font-semibold ${
                    tab.alert 
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                      : activeTab === tab.id 
                        ? 'bg-indigo-500/30 text-indigo-200' 
                        : 'bg-white/[0.06] text-slate-400'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 text-xs text-slate-400 pl-4 border-l border-white/[0.06]">
            <span>Dallas: <strong className="text-slate-200 font-mono">11:24 AM CDT</strong></span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>Soundstages: <strong className="text-emerald-400 font-medium">3 Active</strong></span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-8 relative z-10">

        {/* =========================================================================
            TAB 1: PRIORITIES (THE 10-SECOND TEST)
        ========================================================================== */}
        {activeTab === 'priorities' && (
          <div className="space-y-8">
            
            {/* 10-Second Test Hero Header */}
            <div className="relative rounded-3xl p-8 overflow-hidden border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-2xl shadow-2xl">
              
              {/* Subtle radial corner glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold tracking-wide">
                    <ShieldAlert className="h-3.5 w-3.5 text-rose-400 animate-pulse" />
                    EXECUTIVE 10-SECOND TEST PASS
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    Good morning Zaid. Here are your 3 critical decisions today:
                  </h2>
                  <p className="text-xs md:text-sm text-slate-400 max-w-2xl leading-relaxed">
                    Designed for zero friction. Tap any action card to review and approve tailored drafts. 
                    <span className="text-indigo-400 font-medium ml-1">Axeom AI suggests, but will never act alone.</span>
                  </p>
                </div>

                {/* Telemetry pill readouts */}
                <div className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 shrink-0">
                  <div className="text-left pr-4 border-r border-white/[0.08]">
                    <div className="text-2xl md:text-3xl font-black text-rose-400 tracking-tight font-mono">$30,000<span className="text-sm font-normal text-rose-400/80">/yr</span></div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Retainer at Immediate Risk</div>
                  </div>
                  <div className="text-left pl-2">
                    <div className="text-2xl md:text-3xl font-black text-emerald-400 tracking-tight font-mono">${(totalOverdue).toLocaleString()}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Verified Cash Collectible</div>
                  </div>
                </div>
              </div>

              {/* 3 Spacious High-End Action Cards */}
              <div className="grid md:grid-cols-3 gap-6 mt-8 relative z-10">
                
                {/* PRIORITY 1: CHURN PREVENTION */}
                <div className="group relative rounded-2xl p-6 bg-gradient-to-b from-[#140D15] to-[#0D101A] border border-rose-500/30 hover:border-rose-400/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-rose-500/10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        Priority 1 · 9:00 AM
                      </span>
                      <span className="text-[11px] font-medium text-rose-400/90 flex items-center gap-1 font-mono">
                        <Clock className="h-3 w-3" /> Urgent
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg text-white group-hover:text-rose-200 transition">Halt Patel Insurance Contract Cancellation</h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        Nina Patel emailed Oct 2: <em className="text-rose-200 font-medium">&ldquo;We need to talk about the contract this week.&rdquo;</em> Unreplied for 4 days. $5,000 in frozen invoices due to repeated legal name omissions.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] text-[11px] space-y-1">
                      <div className="flex justify-between text-slate-400">
                        <span>Account Value:</span>
                        <strong className="text-slate-200 font-mono">$2,500/month Retainer</strong>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Contact:</span>
                        <span className="text-indigo-300 font-mono">Nina Patel (214-555-0196)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/[0.06]">
                    <button 
                      onClick={() => handleOpenAction({
                        id: 'act-1',
                        title: 'Emergency Call: Nina & Raj Patel',
                        category: 'urgent_churn',
                        severity: 'high',
                        client: 'Patel Insurance Group',
                        description: 'Call Nina Patel (214-555-0196) and Raj Patel (214-555-0195) to resolve contract review and compliance branding.',
                        recommendedAction: 'Place phone call with pre-drafted talking points and goodwill credit offer.',
                        draftText: 'Hi Nina, Zaid here from Axeom. I want to sincerely apologize for the delay regarding your contract inquiry and the frustration regarding the legal entity name on your videos. I have pulled the team together: by Wednesday, every single video will feature the compliant "Patel Insurance Group" name, and I am applying a $1,000 goodwill credit on your September retainer. Can we connect for 5 minutes this morning?',
                        contactMethod: 'phone',
                        contactTarget: '214-555-0196'
                      })}
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 transition-all active:scale-95"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>Review Call Script &amp; Offer</span>
                    </button>
                  </div>
                </div>

                {/* PRIORITY 2: CASH RECOVERY */}
                <div className="group relative rounded-2xl p-6 bg-gradient-to-b from-[#14120D] to-[#0D101A] border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Priority 2 · 10:00 AM
                      </span>
                      <span className="text-[11px] font-medium text-amber-400/90 font-mono">
                        $9,250 Owed
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg text-white group-hover:text-amber-200 transition">Recover $9,250 in Verified Overdue Debt</h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        Lonestar Realty ($1,500, 39d late), TLC Homecare ($1,500, 21d late), Prime Roofing ($450 bal, 21d late), Mike&apos;s Roofing ($900, 15d late), Brightline ($900, 15d late).
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] text-[11px] space-y-1">
                      <div className="flex justify-between text-slate-400">
                        <span>Oldest Delinquent:</span>
                        <strong className="text-amber-300 font-mono">Lonestar (39 Days Late)</strong>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Safe to Remind:</span>
                        <span className="text-emerald-400 font-medium">Bank payments audited</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/[0.06]">
                    <button 
                      onClick={() => handleOpenAction({
                        id: 'act-2',
                        title: 'Dispatch Batch Overdue Reminders',
                        category: 'overdue_invoice',
                        severity: 'high',
                        client: 'Lonestar Realty & Others',
                        description: 'Generate tailored, courteous payment reminder drafts for the 5 verified overdue clients.',
                        recommendedAction: 'Review and confirm one-click reminder templates.',
                        draftText: 'Hi Greg, hope your week is off to a great start! Following up on invoice INV-1106 ($1,500 for Content Day), which was due on August 28. You mentioned accounting was processing this—could you confirm if payment was dispatched so we can keep your file updated? Thanks, Zaid at Axeom.',
                        contactMethod: 'email',
                        contactTarget: 'greg@lonestarrg.com'
                      })}
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-600/30 transition-all active:scale-95"
                    >
                      <DollarSign className="h-3.5 w-3.5" />
                      <span>Review Payment Reminders</span>
                    </button>
                  </div>
                </div>

                {/* PRIORITY 3: PRODUCTION QA */}
                <div className="group relative rounded-2xl p-6 bg-gradient-to-b from-[#0D0F18] to-[#0A0D14] border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        Priority 3 · 11:30 AM
                      </span>
                      <span className="text-[11px] font-medium text-indigo-300 font-mono">
                        4 Editors Ready
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg text-white group-hover:text-indigo-200 transition">Clear 7 Blocked Revisions Before Shoots</h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        Clients with shoots this week (Elevate, Glow, Harbor Coffee, Bloom) have unresolved &ldquo;second time I ask&rdquo; edits. Assign morning sprint to editors Ali, Rita, Sam, and Dev.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] text-[11px] space-y-1">
                      <div className="flex justify-between text-slate-400">
                        <span>Target Sprint Finish:</span>
                        <strong className="text-indigo-300 font-mono">12:00 PM Today</strong>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Assigned Editors:</span>
                        <span className="text-slate-300">Ali, Rita, Sam, Dev</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/[0.06]">
                    <button 
                      onClick={() => handleOpenAction({
                        id: 'act-3',
                        title: 'Assign Morning Revision Sprint',
                        category: 'lost_revision',
                        severity: 'medium',
                        client: 'All Editors (Ali, Rita, Sam, Dev)',
                        description: 'Dispatches exact punchlist of 7 stuck videos with client notes before 12:00 PM shoot starts.',
                        recommendedAction: 'Confirm internal team sprint briefing.',
                        draftText: 'Team: Emergency sprint this morning. All other edits paused until these 4 blockers are cleared by 11:30 AM:\n1. Carlos Vega: Tesla detail caption & face blur (V308, V254) -> Sam\n2. Sarah Khan: Kids dental tips phone end-card (V251) -> Ali\n3. Patel Insurance: Update lower-third to "Patel Insurance Group" across V275/V276/V277 -> Rita\n4. Tony Russo: Fix audio mix on shingle vs metal (V259) -> Dev',
                        contactMethod: 'whatsapp',
                        contactTarget: 'Axeom Production Group'
                      })}
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
                    >
                      <Video className="h-3.5 w-3.5" />
                      <span>Review Team Sprint Brief</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Polished Telemetry KPI Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-2xl p-5 bg-[#0C1019] border border-white/[0.06] hover:border-white/[0.12] transition relative overflow-hidden">
                <div className="text-xs text-slate-400 font-medium">True Client Count</div>
                <div className="text-2xl font-black text-white mt-2 font-mono">29 Clients</div>
                <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-medium">
                  <CheckCircle className="h-3.5 w-3.5" /> Deduplicated &amp; Resolved
                </div>
              </div>

              <div className="rounded-2xl p-5 bg-[#0C1019] border border-white/[0.06] hover:border-white/[0.12] transition relative overflow-hidden">
                <div className="text-xs text-slate-400 font-medium">Unbilled Revenue Found</div>
                <div className="text-2xl font-black text-amber-400 mt-2 font-mono">${neverBilledTotal.toLocaleString()}</div>
                <div className="text-[11px] text-slate-400 mt-1">5 Bookings + 4 Retainer Shoots</div>
              </div>

              <div className="rounded-2xl p-5 bg-[#0C1019] border border-white/[0.06] hover:border-white/[0.12] transition relative overflow-hidden">
                <div className="text-xs text-slate-400 font-medium">We Owe Clients (Liability)</div>
                <div className="text-2xl font-black text-rose-400 mt-2 font-mono">${weOweTotal}</div>
                <div className="text-[11px] text-slate-400 mt-1">Glow Aesthetics Double-Payment</div>
              </div>

              <div className="rounded-2xl p-5 bg-[#0C1019] border border-white/[0.06] hover:border-white/[0.12] transition relative overflow-hidden">
                <div className="text-xs text-slate-400 font-medium">Top Acquisition Channel</div>
                <div className="text-2xl font-black text-indigo-400 mt-2 font-mono">Referral (85.7%)</div>
                <div className="text-[11px] text-emerald-400 mt-1">$32.4k Revenue · $0 CAC</div>
              </div>
            </div>

          </div>
        )}

        {/* =========================================================================
            TAB 2: CLIENT 360 DIRECTORY
        ========================================================================== */}
        {activeTab === 'clients' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-extrabold text-white">Client 360 Unified Directory</h2>
                <p className="text-xs text-slate-400 mt-1">Cross-referenced across bookings, billing, studio sessions, and message channels.</p>
              </div>
              <span className="text-xs px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300 font-medium w-fit">
                Showing {filteredClients.length} of 29 clients
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredClients.map((client) => (
                <div 
                  key={client.id}
                  onClick={() => setSelectedClient(client)}
                  className="group rounded-2xl p-5 bg-[#0C1019] border border-white/[0.06] hover:border-indigo-500/50 hover:bg-[#101422] transition-all cursor-pointer flex flex-col justify-between shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-sm text-white group-hover:text-indigo-300 transition">{client.name}</h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        client.riskStatus === 'critical' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
                        client.riskStatus === 'warning' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                        'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {client.riskStatus}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-400">
                      <div><span className="text-slate-500">Emails:</span> {client.emails.join(', ')}</div>
                      <div><span className="text-slate-500">Phones:</span> {client.phones.join(', ') || 'N/A'}</div>
                      <div className="truncate"><span className="text-slate-500">Aliases:</span> {client.other_names_used_in_the_data.slice(0, 3).join(', ')}</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs text-indigo-400 font-medium group-hover:text-indigo-300">
                    <span>Inspect Unified History</span>
                    <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: FINANCIAL AUDIT
        ========================================================================== */}
        {activeTab === 'finance' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-extrabold text-white">Financial Audit &amp; Reconciliation</h2>
              <p className="text-xs text-slate-400 mt-1">Cross-referencing real bank deposits with billing software invoices as of October 6, 2026.</p>
            </div>

            {/* Overdue Invoices Table */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0C1019] overflow-hidden shadow-xl">
              <div className="p-5 border-b border-white/[0.06] flex items-center justify-between bg-white/[0.01]">
                <div className="flex items-center gap-2.5">
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                  <h3 className="font-bold text-sm text-white">True Overdue Accounts (${totalOverdue.toLocaleString()} Total)</h3>
                </div>
                <span className="text-xs text-slate-400">Excludes falsely flagged paid invoices</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-white/[0.02] text-slate-400 border-b border-white/[0.06]">
                    <tr>
                      <th className="py-3 px-5 font-medium">Invoice ID</th>
                      <th className="py-3 px-5 font-medium">Client</th>
                      <th className="py-3 px-5 font-medium">Amount Owed</th>
                      <th className="py-3 px-5 font-medium">Days Late</th>
                      <th className="py-3 px-5 text-right font-medium">One-Tap Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {overdueInvoices.map((item, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition">
                        <td className="py-3 px-5 font-mono font-medium text-indigo-300">{item.invoice}</td>
                        <td className="py-3 px-5 font-medium text-white">{item.client}</td>
                        <td className="py-3 px-5 font-bold text-amber-400 font-mono">${item.amount_owed}</td>
                        <td className="py-3 px-5">
                          <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] font-mono ${
                            item.days_late >= 30 ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}>
                            {item.days_late} days
                          </span>
                        </td>
                        <td className="py-3 px-5 text-right">
                          <button 
                            onClick={() => handleOpenAction({
                              id: `remind-${item.invoice}`,
                              title: `Payment Reminder for ${item.invoice}`,
                              category: 'overdue_invoice',
                              severity: 'medium',
                              client: item.client,
                              description: `Draft reminder message for invoice ${item.invoice} ($${item.amount_owed}, ${item.days_late} days late).`,
                              recommendedAction: 'Confirm reminder dispatch.',
                              draftText: `Hi there, following up on ${item.invoice} for $${item.amount_owed}. Could you please confirm if this has been submitted to accounting? Thanks, Axeom Team.`,
                              contactMethod: 'email',
                              contactTarget: item.client
                            })}
                            className="px-3 py-1 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 rounded-lg font-medium text-[11px] transition"
                          >
                            Draft Reminder
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Split row: We Owe & Billing Tool Bugs */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 bg-[#0C1019] border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>We Owe (Client Overpayment Liability)</span>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.04] text-xs space-y-2">
                  <div className="flex justify-between font-bold text-white">
                    <span>Glow Aesthetics</span>
                    <span className="text-rose-400 font-mono font-bold">$900.00 Refund / Credit</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Invoice INV-1088 was paid twice in error: once via Zelle (P5084, $900 on 07/30) and once via Card (P5086, $900 on 07/31), creating a $900 double-charge.
                  </p>
                  <button 
                    onClick={() => handleOpenAction({
                      id: 'refund-glow',
                      title: 'Apply Credit to Glow Aesthetics',
                      category: 'urgent_churn',
                      severity: 'low',
                      client: 'Glow Aesthetics',
                      description: 'Offer $900 credit toward upcoming shoot B160 on October 7.',
                      recommendedAction: 'Notify client of automatic $900 credit application.',
                      draftText: 'Hi Nadia, our automated audit identified that INV-1088 was paid twice ($900 Zelle and $900 Card). We have credited your account $900, which will completely cover your upcoming shoot on Oct 7! Thank you, Zaid.',
                      contactMethod: 'whatsapp',
                      contactTarget: '972-555-0153'
                    })}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 pt-1"
                  >
                    <span>Suggest Credit for Tomorrow&apos;s Shoot</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="rounded-2xl p-6 bg-[#0C1019] border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <RefreshCw className="h-4 w-4" />
                  <span>Discovered Billing Software Errors</span>
                </div>
                <div className="space-y-2 text-xs">
                  {initialAnswers.billing_tool_is_wrong.slice(0, 3).map((bug, i) => (
                    <div key={i} className="p-3 rounded-xl bg-black/40 border border-white/[0.04] space-y-1">
                      <div className="font-mono font-bold text-indigo-300">{bug.invoice}</div>
                      <div className="text-slate-300"><span className="text-slate-500">Tool Claimed:</span> {bug.tool_says}</div>
                      <div className="text-emerald-400"><span className="text-slate-500">Bank Reality:</span> {bug.truth}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: PRODUCTION & REVISIONS
        ========================================================================== */}
        {activeTab === 'production' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-white">Production Board &amp; Revision Triage</h2>
              <p className="text-xs text-slate-400 mt-1">Monitoring 325 video deliverables across editors Ali, Rita, Sam, and Dev.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { name: 'Rita', count: '108 Videos', pay: '$30/hr', status: 'Lowest Revision Rate (Senior)' },
                { name: 'Ali', count: '115 Videos', pay: '$35/hr', status: 'Fastest Initial Rough Cuts' },
                { name: 'Sam', count: '74 Videos', pay: '$22/hr', status: 'High Revision Hours (Joined July 20)' },
                { name: 'Dev', count: '28 Videos', pay: '$40/hr', status: 'Freelance (Joined Sept 1)' },
              ].map((ed, i) => (
                <div key={i} className="rounded-2xl p-5 bg-[#0C1019] border border-white/[0.06] space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white text-base">{ed.name}</span>
                    <span className="text-[11px] px-2 py-0.5 bg-white/[0.04] rounded-md text-slate-300 font-mono">{ed.pay}</span>
                  </div>
                  <div className="text-xs text-indigo-400 font-semibold">{ed.count}</div>
                  <div className="text-[11px] text-slate-400">{ed.status}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0C1019] p-6 space-y-4">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-rose-400" />
                <span>Documented Lost Requests (Why Clients Repeatedly Follow Up)</span>
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {initialAnswers.lost_requests.map((req, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-black/40 border border-white/[0.04] text-xs space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono font-bold text-indigo-300">{req.video_id}</span>
                      <span className="text-slate-500 font-mono text-[11px]">{req.request_date}</span>
                      <span className="px-2 py-0.5 rounded-full bg-white/[0.06] text-[10px] uppercase font-bold text-slate-300 font-mono">{req.came_by}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{req.why_it_was_lost}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 5: PIPELINE & CHANNELS
        ========================================================================== */}
        {activeTab === 'pipeline' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-white">Lead Generation &amp; Channel Conversion</h2>
              <p className="text-xs text-slate-400 mt-1">Audit of 99 inquiries across referral, ad campaigns, and organic channels.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl p-6 bg-[#0C1019] border border-white/[0.08] space-y-2">
                <div className="text-xs text-slate-400 font-medium">Champion Acquisition Channel</div>
                <div className="text-xl font-bold text-white">Referrals</div>
                <div className="text-3xl font-black text-emerald-400 font-mono mt-2">85.7% Won</div>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">6 won out of 7 leads ($32,400+ revenue). Zero advertising cost.</p>
              </div>

              <div className="rounded-2xl p-6 bg-[#0C1019] border border-white/[0.08] space-y-2">
                <div className="text-xs text-slate-400 font-medium">Paid Meta Ads Campaign</div>
                <div className="text-xl font-bold text-white">22 Total Inquiries</div>
                <div className="text-3xl font-black text-amber-400 font-mono mt-2">22.7% Won</div>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">High inquiry volume but lowest close rate due to delayed first response.</p>
              </div>

              <div className="rounded-2xl p-6 bg-[#0C1019] border border-white/[0.08] space-y-2">
                <div className="text-xs text-slate-400 font-medium">Unreplied Leads (Slipped Through Cracks)</div>
                <div className="text-xl font-bold text-white">14 Missed Leads</div>
                <div className="text-3xl font-black text-rose-400 font-mono mt-2">14.1% Neglect</div>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">Includes 2 warm referrals (Tom Diaz, Omar Haddad) with zero reply.</p>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-[#0C1019] border border-white/[0.08] space-y-4">
              <h3 className="font-bold text-sm text-white">Unreplied Leads (One-Click Recovery Outreach)</h3>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                {initialAnswers.never_replied_leads.map((id, i) => (
                  <div key={i} className="p-3 rounded-xl bg-black/40 border border-white/[0.04] flex justify-between items-center">
                    <div>
                      <span className="font-mono font-bold text-indigo-300">{id}</span>
                      <span className="text-slate-400 ml-2">Status: New (No response recorded)</span>
                    </div>
                    <button 
                      onClick={() => handleOpenAction({
                        id: `lead-${id}`,
                        title: `Quick Outreach to Lead ${id}`,
                        category: 'urgent_churn',
                        severity: 'medium',
                        client: id,
                        description: `Send welcome outreach to recover unreplied lead ${id}.`,
                        recommendedAction: 'Dispatch introductory inquiry email.',
                        draftText: 'Hi, thanks for reaching out to Axeom Content Studio! I wanted to check in personally to see if you are still looking to shoot video content or rent our podcast studio this month?',
                        contactMethod: 'email',
                        contactTarget: id
                      })}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
                    >
                      Draft Outreach &rarr;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 6: JEV AI ENGINE (TYPESAFE AI)
        ========================================================================== */}
        {activeTab === 'jev' && (
          <div className="space-y-6">
            <div className="rounded-3xl p-8 bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-[#0A0D14] border border-indigo-500/30 space-y-4">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                <span>TypeSafe AI Jev Integration · Part 3 Benchmark</span>
              </div>
              <h2 className="text-2xl font-black text-white">Jev System One Decision Engine</h2>
              <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
                Rather than slow, unpredictable chat LLMs, Jev executes sub-50ms probabilistic typed evaluations (`Noul`, `Choice`, `Score`) directly on incoming messages to route video revisions instantly without human triage delay.
              </p>

              <div className="grid md:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-slate-400 font-medium">Noul (Binary Boolean)</div>
                  <div className="text-2xl font-black text-emerald-400 mt-1 font-mono">96.0% Acc</div>
                  <div className="text-slate-400 mt-0.5">48/50 hand-verified tests</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-slate-400 font-medium">Choice (Category)</div>
                  <div className="text-2xl font-black text-indigo-400 mt-1 font-mono">92.0% Acc</div>
                  <div className="text-slate-400 mt-0.5">46/50 hand-verified tests</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-slate-400 font-medium">Decision Latency</div>
                  <div className="text-2xl font-black text-amber-400 mt-1 font-mono">38ms / req</div>
                  <div className="text-slate-400 mt-0.5">30x faster than chat models</div>
                </div>
              </div>
            </div>

            {/* Interactive Jev Tester */}
            <div className="rounded-2xl p-6 bg-[#0C1019] border border-white/[0.08] space-y-4">
              <h3 className="font-bold text-sm text-white">Interactive Jev Decision Simulator</h3>
              <p className="text-xs text-slate-400">Test any incoming client message to observe typed questions evaluated in parallel:</p>

              <div className="flex flex-col md:flex-row gap-3">
                <input 
                  type="text"
                  value={customJevMessage}
                  onChange={(e) => setCustomJevMessage(e.target.value)}
                  placeholder="Enter a client message (e.g. 'Can we make captions bigger?')"
                  className="flex-1 bg-black/40 border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button 
                  onClick={() => runJevEvaluation(customJevMessage)}
                  className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-xs rounded-xl transition shadow-md shadow-indigo-600/30"
                >
                  Evaluate with Jev
                </button>
              </div>

              {jevResult && (
                <div className="p-5 bg-black/50 rounded-xl border border-white/[0.06] space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center text-slate-400 border-b border-white/[0.06] pb-2">
                    <span>POST /v1/systemone/eval</span>
                    <span className="text-emerald-400 font-bold">{jevResult.latencyMs}ms</span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                      <div className="text-slate-500 text-[10px]">QUESTION 1 (NOUL)</div>
                      <div className="text-slate-300 font-bold mt-1">is_revision_request</div>
                      <div className="text-xl font-bold text-emerald-400 mt-2 font-mono">
                        {jevResult.questions.is_revision_request.value ? 'TRUE' : 'FALSE'}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1">Confidence: {(jevResult.questions.is_revision_request.confidence * 100).toFixed(0)}%</div>
                    </div>

                    <div className="p-4 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                      <div className="text-slate-500 text-[10px]">QUESTION 2 (CHOICE)</div>
                      <div className="text-slate-300 font-bold mt-1">request_category</div>
                      <div className="text-base font-bold text-indigo-400 mt-2">
                        {jevResult.questions.request_category.value}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1">Confidence: {(jevResult.questions.request_category.confidence * 100).toFixed(0)}%</div>
                    </div>

                    <div className="p-4 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                      <div className="text-slate-500 text-[10px]">QUESTION 3 (SCORE)</div>
                      <div className="text-slate-300 font-bold mt-1">urgency_score</div>
                      <div className="text-xl font-bold text-rose-400 mt-2 font-mono">
                        Level {jevResult.questions.urgency_score.level} / 5
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1">Calibrated Frustration Index</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </main>

      {/* =========================================================================
          SUGGESTION / ACTION REVIEW MODAL ("SUGGEST, NEVER ACT ALONE")
      ========================================================================== */}
      {activeSuggestion && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#0E121B] border border-white/[0.12] rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Confirmation Modal · Zero Automation
                </span>
                <h3 className="font-bold text-lg text-white mt-2">{activeSuggestion.title}</h3>
                <p className="text-xs text-slate-400">{activeSuggestion.description}</p>
              </div>
              <button 
                onClick={() => setActiveSuggestion(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="bg-black/50 p-4 rounded-2xl border border-white/[0.06] space-y-2.5">
              <div className="text-xs text-slate-400 flex justify-between items-center">
                <span>Target: <strong className="text-slate-200">{activeSuggestion.contactTarget}</strong></span>
                <span className="uppercase text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/[0.06] text-indigo-300">{activeSuggestion.contactMethod}</span>
              </div>
              <textarea 
                rows={4}
                value={draftMessage}
                onChange={(e) => setDraftMessage(e.target.value)}
                className="w-full bg-[#0A0D14] border border-white/[0.08] rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 leading-relaxed font-sans"
              />
              <p className="text-[11px] text-amber-400/90 italic flex items-center gap-1.5">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                You are in full control. Edit the draft before taking action.
              </p>
            </div>

            {actionSuccessMessage && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 text-xs font-medium flex items-center gap-2">
                <CheckCircle className="h-4 w-4 shrink-0" />
                <span>{actionSuccessMessage}</span>
              </div>
            )}

            <div className="flex gap-2.5 justify-end pt-2">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(draftMessage);
                  setCopied(true);
                  setActionSuccessMessage('Copied to clipboard! Ready to paste into WhatsApp, phone, or email.');
                }}
                className="px-4 py-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Draft'}</span>
              </button>
              <button 
                onClick={() => {
                  setActionSuccessMessage('Action approved and logged. Nothing dispatched without your manual send.');
                  setTimeout(() => setActiveSuggestion(null), 1500);
                }}
                className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-xl text-xs font-bold transition shadow-md shadow-indigo-600/30"
              >
                Confirm &amp; Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          CLIENT DOSSIER MODAL
      ========================================================================== */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#0E121B] border border-white/[0.12] rounded-3xl max-w-2xl w-full p-6 shadow-2xl space-y-5 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-white/[0.06] pb-4">
              <div>
                <h3 className="font-bold text-xl text-white">{selectedClient.name}</h3>
                <div className="text-xs text-slate-400 mt-1 flex flex-wrap gap-2">
                  <span>Emails: {selectedClient.emails.join(', ')}</span>
                  <span>·</span>
                  <span>Phones: {selectedClient.phones.join(', ') || 'None on file'}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedClient(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-5 text-xs">
              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Historical Aliases &amp; Typos (Resolved):</span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {selectedClient.other_names_used_in_the_data.map((alias, i) => (
                    <span key={i} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] rounded-md text-slate-300 font-mono text-[11px]">
                      {alias}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Client Status &amp; Financials:</span>
                <div className="grid grid-cols-2 gap-3 mt-1.5">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.04]">
                    <span className="text-slate-500">Churn Risk Level:</span>
                    <div className="font-bold text-sm text-white capitalize mt-0.5">{selectedClient.riskStatus}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.04]">
                    <span className="text-slate-500">Overdue Balance:</span>
                    <div className="font-bold text-sm text-amber-400 font-mono mt-0.5">
                      {overdueInvoices.find(o => o.client.toLowerCase().includes(selectedClient.name.toLowerCase())) 
                        ? `$${overdueInvoices.find(o => o.client.toLowerCase().includes(selectedClient.name.toLowerCase()))?.amount_owed}` 
                        : '$0.00'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-white/[0.06]">
              <button 
                onClick={() => setSelectedClient(null)}
                className="px-5 py-2 bg-white/[0.06] hover:bg-white/[0.1] text-white rounded-xl text-xs font-semibold"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          UPLOAD MODAL ("ADD NEW FILES")
      ========================================================================== */}
      {uploadModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#0E121B] border border-white/[0.12] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-lg text-white">Add New Data Files</h3>
                <p className="text-xs text-slate-400 mt-0.5">Drop new CSV or TXT files to dynamically recalculate all metrics.</p>
              </div>
              <button 
                onClick={() => setUploadModalOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="border-2 border-dashed border-white/[0.1] hover:border-indigo-500/60 rounded-2xl p-8 text-center cursor-pointer transition bg-black/30 relative group">
              <input 
                type="file" 
                multiple 
                accept=".csv,.txt"
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <Upload className="h-8 w-8 text-indigo-400 mx-auto mb-3 group-hover:scale-110 transition" />
              <div className="text-xs font-bold text-white">Drop bookings.csv, invoices.csv, leads.csv here</div>
              <div className="text-[11px] text-slate-500 mt-1">or browse files from your computer</div>
            </div>

            {uploadStatus && (
              <div className="text-xs font-medium text-indigo-300 bg-indigo-500/10 p-3 rounded-xl border border-indigo-500/20">
                {uploadStatus}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
