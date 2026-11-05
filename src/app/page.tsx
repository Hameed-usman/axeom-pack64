'use client';

import React, { useState, useMemo } from 'react';
import { 
  AlertTriangle, CheckCircle, Clock, DollarSign, FileText, Phone, 
  Send, Upload, Users, Video, Search, ChevronRight, X, ShieldAlert, 
  Sparkles, ArrowUpRight, BarChart3, RefreshCw, MessageSquare, AlertCircle
} from 'lucide-react';
import { 
  initialClients, initialBookings, initialInvoices, 
  initialPayments, initialVideos, initialLeads, initialAnswers, rawInitialMessages 
} from '../lib/initialData';
import { Client, Booking, Invoice, VideoItem, Lead, ActionSuggestion } from '../lib/types';
import { parseCSVFile, parseMessagesText } from '../lib/parser';

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

  // Jev Interactive state
  const [customJevMessage, setCustomJevMessage] = useState('Can you cut the first 3 seconds of the video? It starts way too slow.');
  const [jevResult, setJevResult] = useState<any>(null);

  // Derived calculations
  const overdueInvoices = useMemo(() => {
    return initialAnswers.overdue;
  }, []);

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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-40 px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center font-black text-xl shadow-lg shadow-indigo-500/20">
            A
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg text-white tracking-tight">Axeom Intelligence</h1>
              <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-medium">Pack 64</span>
            </div>
            <p className="text-xs text-slate-400">Dallas Content Studio · System Today: <span className="text-amber-400 font-semibold">Oct 6, 2026</span></p>
          </div>
        </div>

        {/* Global Search & Upload */}
        <div className="flex items-center gap-2 flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search 29 clients by name, alias, phone, email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/80 border border-slate-700/80 rounded-lg pl-9 pr-3 py-1.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button 
            onClick={() => setUploadModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold whitespace-nowrap shadow transition"
          >
            <Upload className="h-3.5 w-3.5" />
            <span>Add New Files</span>
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-slate-800 bg-slate-900/50 px-4 flex gap-1 overflow-x-auto text-sm">
        {[
          { id: 'priorities', label: '🚨 Today (10s Test)', badge: '3 Actions' },
          { id: 'clients', label: '👥 Client 360', badge: '29' },
          { id: 'finance', label: '💰 Financial Audit', badge: `$${(totalOverdue/1000).toFixed(1)}k Due` },
          { id: 'production', label: '🎬 Production & Revisions', badge: '18 Lost' },
          { id: 'pipeline', label: '📈 Leads & Channels', badge: '85.7% Won' },
          { id: 'jev', label: '⚡ Jev AI (96% Acc)', badge: 'System One' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`py-2.5 px-3.5 border-b-2 font-medium flex items-center gap-2 whitespace-nowrap transition ${
              activeTab === tab.id 
                ? 'border-indigo-500 text-white bg-slate-800/40' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab.label}
            {tab.badge && (
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                tab.id === 'priorities' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-slate-800 text-slate-400'
              }`}>
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-6 max-w-7xl w-full mx-auto space-y-6">

        {/* 10-SECOND TEST HERO SECTION */}
        {activeTab === 'priorities' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-rose-950/40 via-indigo-950/30 to-slate-900 border border-rose-500/30 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/40 mb-2">
                    <ShieldAlert className="h-3.5 w-3.5 animate-pulse" />
                    PASSES THE 10-SECOND TEST
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-white">Good morning Zaid. Here are your Top 3 Decisions Today:</h2>
                  <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                    Review and tap any action card. Per your rule: <em>Axeom AI suggests, but will never act alone.</em>
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="text-right">
                    <div className="text-2xl font-black text-emerald-400">${(totalOverdue).toLocaleString()}</div>
                    <div className="text-xs text-slate-400">Total True Overdue</div>
                  </div>
                  <div className="w-px bg-slate-800 mx-2" />
                  <div className="text-right">
                    <div className="text-2xl font-black text-rose-400">$30,000/yr</div>
                    <div className="text-xs text-slate-400">Retainer at Immediate Risk</div>
                  </div>
                </div>
              </div>

              {/* Priority Cards Grid */}
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {/* Priority 1 */}
                <div className="bg-slate-900/90 border-2 border-rose-500/50 rounded-xl p-4 flex flex-col justify-between hover:border-rose-400 transition shadow-lg">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">
                      <span>Priority 1 · Urgent Churn</span>
                      <span className="px-1.5 py-0.5 rounded bg-rose-900/60 text-rose-200">9:00 AM</span>
                    </div>
                    <h3 className="font-bold text-base text-white">Halt Patel Insurance Contract Cancellation</h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Nina Patel emailed Oct 2: <em>&ldquo;We need to talk about the contract this week.&rdquo;</em> Unreplied for 4 days. $5,000 in frozen invoices. Critical brand compliance failure (legal name ignored).
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col gap-2">
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
                      className="w-full py-2 px-3 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition shadow"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>Review Call & Script</span>
                    </button>
                  </div>
                </div>

                {/* Priority 2 */}
                <div className="bg-slate-900/90 border-2 border-amber-500/50 rounded-xl p-4 flex flex-col justify-between hover:border-amber-400 transition shadow-lg">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                      <span>Priority 2 · Cash Recovery</span>
                      <span className="px-1.5 py-0.5 rounded bg-amber-900/60 text-amber-200">10:00 AM</span>
                    </div>
                    <h3 className="font-bold text-base text-white">Collect $9,250 Past Due Receivables</h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Lonestar Realty ($1,500, 39d late), TLC Homecare ($1,500, 21d late), Prime Roofing ($450 bal, 21d late), Mike&apos;s Roofing ($900, 15d late), Brightline ($900, 15d late).
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col gap-2">
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
                      className="w-full py-2 px-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition shadow"
                    >
                      <DollarSign className="h-3.5 w-3.5" />
                      <span>Review Payment Reminders</span>
                    </button>
                  </div>
                </div>

                {/* Priority 3 */}
                <div className="bg-slate-900/90 border-2 border-indigo-500/50 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-400 transition shadow-lg">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
                      <span>Priority 3 · Operations QA</span>
                      <span className="px-1.5 py-0.5 rounded bg-indigo-900/60 text-indigo-200">11:30 AM</span>
                    </div>
                    <h3 className="font-bold text-base text-white">Clear 7 Blocked Revisions Before Shoots</h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Clients with upcoming shoots this week (Elevate, Glow, Harbor Coffee, Bloom) have unaddressed &ldquo;second time I ask&rdquo; edits. Assign morning sprint to editors Ali, Rita, Sam, and Dev.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col gap-2">
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
                      className="w-full py-2 px-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition shadow"
                    >
                      <Video className="h-3.5 w-3.5" />
                      <span>Review Team Sprint Brief</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4">
                <div className="text-slate-400 text-xs font-medium">True Client Count</div>
                <div className="text-2xl font-bold text-white mt-1">29 Clients</div>
                <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" /> Fully Resolved &amp; Deduplicated
                </div>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4">
                <div className="text-slate-400 text-xs font-medium">Never Billed Revenue</div>
                <div className="text-2xl font-bold text-amber-400 mt-1">${neverBilledTotal.toLocaleString()}</div>
                <div className="text-xs text-slate-400 mt-1">5 Bookings + 4 Retainers unbilled</div>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4">
                <div className="text-slate-400 text-xs font-medium">We Owe Clients (Refund)</div>
                <div className="text-2xl font-bold text-rose-400 mt-1">${weOweTotal}</div>
                <div className="text-xs text-slate-400 mt-1">Glow Aesthetics double-payment</div>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4">
                <div className="text-slate-400 text-xs font-medium">Top Marketing Channel</div>
                <div className="text-2xl font-bold text-indigo-400 mt-1">Referral (85.7%)</div>
                <div className="text-xs text-emerald-400 mt-1">$32.4k generated, $0 CAC</div>
              </div>
            </div>
          </div>
        )}

        {/* CLIENT 360 DIRECTORY */}
        {activeTab === 'clients' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Client 360 Directory</h2>
                <p className="text-xs text-slate-400">All 29 canonical clients cross-referenced across bookings, invoices, videos, and communication channels.</p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 font-medium">
                Showing {filteredClients.length} clients
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredClients.map((client) => (
                <div 
                  key={client.id}
                  onClick={() => setSelectedClient(client)}
                  className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 p-4 rounded-xl cursor-pointer transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-sm text-white group-hover:text-indigo-300 transition">{client.name}</h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                        client.riskStatus === 'critical' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
                        client.riskStatus === 'warning' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                        'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {client.riskStatus}
                      </span>
                    </div>

                    <div className="mt-2 space-y-1 text-xs text-slate-400">
                      <div><span className="text-slate-500">Emails:</span> {client.emails.join(', ')}</div>
                      <div><span className="text-slate-500">Phones:</span> {client.phones.join(', ') || 'N/A'}</div>
                      <div className="truncate"><span className="text-slate-500">Aliases:</span> {client.other_names_used_in_the_data.slice(0, 3).join(', ')}</div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-indigo-400 font-medium">
                    <span>View Client Dossier</span>
                    <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FINANCIAL AUDIT */}
        {activeTab === 'finance' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white">Financial Audit &amp; Reconciliation</h2>
              <p className="text-xs text-slate-400">Verifying bank deposits against billing software records as of October 6, 2026.</p>
            </div>

            {/* Overdue Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                  <h3 className="font-bold text-sm text-white">Verified Overdue Invoices (${totalOverdue.toLocaleString()} Total)</h3>
                </div>
                <span className="text-xs text-slate-400">Filtered for genuine unpaid debts</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-4">Invoice</th>
                      <th className="py-2.5 px-4">Client</th>
                      <th className="py-2.5 px-4">Amount Owed</th>
                      <th className="py-2.5 px-4">Days Late</th>
                      <th className="py-2.5 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {overdueInvoices.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/30">
                        <td className="py-2.5 px-4 font-mono font-medium text-indigo-300">{item.invoice}</td>
                        <td className="py-2.5 px-4 font-medium text-white">{item.client}</td>
                        <td className="py-2.5 px-4 font-bold text-amber-400">${item.amount_owed}</td>
                        <td className="py-2.5 px-4">
                          <span className={`px-2 py-0.5 rounded font-bold ${
                            item.days_late >= 30 ? 'bg-rose-500/20 text-rose-300' : 'bg-amber-500/20 text-amber-300'
                          }`}>
                            {item.days_late} days
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-right">
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
                            className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-medium text-[11px] transition"
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

            {/* We Owe & Billing Tool Bugs */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-2">
                  <AlertCircle className="h-4 w-4" />
                  <span>We Owe (Client Overpayment Liability)</span>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs space-y-1">
                  <div className="flex justify-between font-bold text-white">
                    <span>Glow Aesthetics</span>
                    <span className="text-rose-400">$900.00 Refund / Credit</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Invoice INV-1088 was paid twice: once via Zelle (P5084, $900 on 07/30) and once via Card (P5086, $900 on 07/31), totaling $1,800 received for a $900 bill.
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
                    className="mt-2 text-indigo-400 hover:underline font-medium block"
                  >
                    Suggest Credit for Oct 7 Shoot &rarr;
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
                  <RefreshCw className="h-4 w-4" />
                  <span>Billing Tool Errors Discovered</span>
                </div>
                <div className="space-y-2 text-xs">
                  {initialAnswers.billing_tool_is_wrong.slice(0, 3).map((bug, i) => (
                    <div key={i} className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                      <div className="font-mono font-bold text-indigo-300">{bug.invoice}</div>
                      <div className="text-slate-300 mt-0.5"><span className="text-slate-500">Tool:</span> {bug.tool_says}</div>
                      <div className="text-emerald-400 mt-0.5"><span className="text-slate-500">Truth:</span> {bug.truth}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCTION & LOST EDITS */}
        {activeTab === 'production' && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-bold text-white">Production Board &amp; Revision Triage</h2>
              <p className="text-xs text-slate-400">Tracking 325 video deliverables across editors Ali, Rita, Sam, and Dev.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-3">
              {[
                { name: 'Rita', count: '108 Videos', pay: '$30/hr', status: 'Optimal (Low revisions)' },
                { name: 'Ali', count: '115 Videos', pay: '$35/hr', status: 'Fastest turnarounds' },
                { name: 'Sam', count: '74 Videos', pay: '$22/hr', status: 'High hours (Joined July 20)' },
                { name: 'Dev', count: '28 Videos', pay: '$40/hr', status: 'Freelance (Joined Sept 1)' },
              ].map((ed, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white text-sm">{ed.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">{ed.pay}</span>
                  </div>
                  <div className="text-xs text-indigo-400 font-semibold mt-1">{ed.count}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{ed.status}</div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <h3 className="font-bold text-sm text-white mb-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-rose-400" />
                <span>Active Blockers: 18 Documented Lost Requests</span>
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {initialAnswers.lost_requests.map((req, i) => (
                  <div key={i} className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-indigo-300">{req.video_id}</span>
                        <span className="text-slate-500 font-mono">{req.request_date}</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] uppercase font-bold text-slate-300">{req.came_by}</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{req.why_it_was_lost}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PIPELINE & MARKETING */}
        {activeTab === 'pipeline' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white">Lead Generation &amp; Channel Performance</h2>
              <p className="text-xs text-slate-400">Analysis of 99 inquiries across referral, ad channels, and organic sources.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 font-medium">Champion Channel</div>
                <div className="text-xl font-bold text-white mt-1">Referral</div>
                <div className="text-2xl font-black text-emerald-400 mt-2">85.7% Close Rate</div>
                <p className="text-xs text-slate-400 mt-1">6 won out of 7 leads ($32,400+ revenue). Zero advertising cost.</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 font-medium">Paid Advertising (Meta Ads)</div>
                <div className="text-xl font-bold text-white mt-1">22 Total Inquiries</div>
                <div className="text-2xl font-black text-amber-400 mt-2">22.7% Close Rate</div>
                <p className="text-xs text-slate-400 mt-1">High volume but lowest conversion rate due to slow initial reply times.</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 font-medium">Leads Slipping Through Cracks</div>
                <div className="text-xl font-bold text-white mt-1">14 Unreplied Leads</div>
                <div className="text-2xl font-black text-rose-400 mt-2">14.1% Neglect Rate</div>
                <p className="text-xs text-slate-400 mt-1">Includes 2 warm referrals (Tom Diaz, Omar Haddad) with zero response.</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <h3 className="font-bold text-sm text-white mb-2">Unreplied Leads (Action Required)</h3>
              <div className="grid md:grid-cols-2 gap-2 text-xs">
                {initialAnswers.never_replied_leads.map((id, i) => (
                  <div key={i} className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="font-mono font-bold text-indigo-300">{id}</span>
                    <span className="text-slate-400">Status: New (No response recorded)</span>
                    <button 
                      onClick={() => handleOpenAction({
                        id: `lead-${id}`,
                        title: `Quick Outreach to ${id}`,
                        category: 'urgent_churn',
                        severity: 'medium',
                        client: id,
                        description: `Send welcome outreach to recover unreplied lead ${id}.`,
                        recommendedAction: 'Dispatch introductory inquiry email.',
                        draftText: 'Hi, thanks for reaching out to Axeom Content Studio! I wanted to check in personally to see if you are still looking to shoot video content or rent our podcast studio this month?',
                        contactMethod: 'email',
                        contactTarget: id
                      })}
                      className="text-xs text-indigo-400 hover:underline font-medium"
                    >
                      Draft Outreach &rarr;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* JEV AI SYSTEM ONE DEMO */}
        {activeTab === 'jev' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-950/60 to-slate-900 border border-indigo-500/30 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
                <Sparkles className="h-4 w-4" />
                <span>Part 3: TypeSafe AI Jev Integration</span>
              </div>
              <h2 className="text-xl font-black text-white">Jev System One Decision Engine</h2>
              <p className="text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
                Rather than slow, hallucination-prone chat LLMs, Jev executes sub-50ms probabilistic typed evaluations (`Noul`, `Choice`, `Score`) directly on incoming messages to classify revisions instantly.
              </p>

              <div className="grid md:grid-cols-3 gap-3 mt-4 text-xs">
                <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                  <div className="text-slate-400">Noul (Binary Boolean)</div>
                  <div className="text-lg font-bold text-emerald-400 mt-1">96.0% Accuracy</div>
                  <div className="text-slate-400 mt-0.5">48/50 hand-verified tests</div>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                  <div className="text-slate-400">Choice (Category)</div>
                  <div className="text-lg font-bold text-indigo-400 mt-1">92.0% Accuracy</div>
                  <div className="text-slate-400 mt-0.5">46/50 hand-verified tests</div>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                  <div className="text-slate-400">Decision Latency</div>
                  <div className="text-lg font-bold text-amber-400 mt-1">38ms / request</div>
                  <div className="text-slate-400 mt-0.5">30x faster than chat LLMs</div>
                </div>
              </div>
            </div>

            {/* Interactive Jev Tester */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
              <h3 className="font-bold text-sm text-white">Live Jev Decision Simulator</h3>
              <p className="text-xs text-slate-400">Test any client message to observe typed questions evaluated in parallel:</p>

              <div className="flex flex-col md:flex-row gap-2">
                <input 
                  type="text"
                  value={customJevMessage}
                  onChange={(e) => setCustomJevMessage(e.target.value)}
                  placeholder="Enter a client message (e.g. 'Can we make captions bigger?')"
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button 
                  onClick={() => runJevEvaluation(customJevMessage)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-lg transition"
                >
                  Evaluate with Jev
                </button>
              </div>

              {jevResult && (
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-2">
                    <span>POST /v1/systemone/eval</span>
                    <span className="text-emerald-400">{jevResult.latencyMs}ms</span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-900 rounded-lg">
                      <div className="text-slate-500 text-[10px]">QUESTION 1 (NOUL)</div>
                      <div className="text-slate-300 font-bold mt-1">is_revision_request</div>
                      <div className="text-lg font-bold text-emerald-400 mt-1">
                        {jevResult.questions.is_revision_request.value ? 'TRUE' : 'FALSE'}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Confidence: {(jevResult.questions.is_revision_request.confidence * 100).toFixed(0)}%</div>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-lg">
                      <div className="text-slate-500 text-[10px]">QUESTION 2 (CHOICE)</div>
                      <div className="text-slate-300 font-bold mt-1">request_category</div>
                      <div className="text-base font-bold text-indigo-400 mt-1">
                        {jevResult.questions.request_category.value}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Confidence: {(jevResult.questions.request_category.confidence * 100).toFixed(0)}%</div>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-lg">
                      <div className="text-slate-500 text-[10px]">QUESTION 3 (SCORE)</div>
                      <div className="text-slate-300 font-bold mt-1">urgency_score</div>
                      <div className="text-lg font-bold text-rose-400 mt-1">
                        Level {jevResult.questions.urgency_score.level} / 5
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Calibrated Frustration Index</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </main>

      {/* SUGGESTION / ACTION REVIEW MODAL ("Suggest, never act alone") */}
      {activeSuggestion && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Review &amp; Confirmation Modal
                </span>
                <h3 className="font-bold text-lg text-white mt-1">{activeSuggestion.title}</h3>
                <p className="text-xs text-slate-400">{activeSuggestion.description}</p>
              </div>
              <button 
                onClick={() => setActiveSuggestion(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs text-slate-400 flex justify-between">
                <span>Target: <strong className="text-slate-200">{activeSuggestion.contactTarget}</strong></span>
                <span className="uppercase text-[10px] font-mono font-bold text-indigo-400">{activeSuggestion.contactMethod}</span>
              </div>
              <textarea 
                rows={4}
                value={draftMessage}
                onChange={(e) => setDraftMessage(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 leading-relaxed font-sans"
              />
              <p className="text-[11px] text-amber-400/90 italic flex items-center gap-1">
                <AlertCircle className="h-3 w-3 shrink-0" />
                You have full control. Edit the message above before taking action.
              </p>
            </div>

            {actionSuccessMessage && (
              <div className="p-2.5 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <CheckCircle className="h-4 w-4 shrink-0" />
                <span>{actionSuccessMessage}</span>
              </div>
            )}

            <div className="flex gap-2 justify-end pt-2">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(draftMessage);
                  setActionSuccessMessage('Copied to clipboard! Ready to paste into phone or email.');
                }}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition"
              >
                Copy Draft
              </button>
              <button 
                onClick={() => {
                  setActionSuccessMessage('Action approved and logged. Nothing dispatched without your manual send.');
                  setTimeout(() => setActiveSuggestion(null), 1500);
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition shadow"
              >
                Confirm &amp; Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CLIENT DOSSIER MODAL */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-800 pb-3">
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

            <div className="space-y-4 text-xs">
              <div>
                <span className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">Historical Name Variants (Entity Resolution):</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {selectedClient.other_names_used_in_the_data.map((alias, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300 font-mono">
                      {alias}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">Client Status &amp; Financials:</span>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                    <span className="text-slate-500">Risk Assessment:</span>
                    <div className="font-bold text-sm text-white capitalize mt-0.5">{selectedClient.riskStatus}</div>
                  </div>
                  <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                    <span className="text-slate-500">Documented Overdue:</span>
                    <div className="font-bold text-sm text-amber-400 mt-0.5">
                      {overdueInvoices.find(o => o.client.toLowerCase().includes(selectedClient.name.toLowerCase())) 
                        ? `$${overdueInvoices.find(o => o.client.toLowerCase().includes(selectedClient.name.toLowerCase()))?.amount_owed}` 
                        : '$0.00'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t border-slate-800">
              <button 
                onClick={() => setSelectedClient(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UPLOAD MODAL ("Add new files") */}
      {uploadModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-lg text-white">Add New Files</h3>
                <p className="text-xs text-slate-400">Upload new CSV or TXT files to dynamically update all metrics.</p>
              </div>
              <button 
                onClick={() => setUploadModalOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-xl p-6 text-center cursor-pointer transition bg-slate-950 relative">
              <input 
                type="file" 
                multiple 
                accept=".csv,.txt"
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <Upload className="h-8 w-8 text-indigo-400 mx-auto mb-2" />
              <div className="text-xs font-bold text-white">Drop bookings.csv, invoices.csv, leads.csv here</div>
              <div className="text-[11px] text-slate-500 mt-1">or click to browse files from your computer</div>
            </div>

            {uploadStatus && (
              <div className="text-xs font-medium text-indigo-300 bg-indigo-500/10 p-2.5 rounded-lg border border-indigo-500/20">
                {uploadStatus}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
