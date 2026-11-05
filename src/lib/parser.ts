import Papa from 'papaparse';
import { Booking, Invoice, Payment, VideoItem, Lead, Client, MessageLog } from './types';

export interface ParsedDataset {
  bookings: Booking[];
  invoices: Invoice[];
  payments: Payment[];
  videos: VideoItem[];
  leads: Lead[];
  messages: MessageLog[];
  clients: Client[];
}

export function parseCSVFile<T>(csvText: string): Promise<T[]> {
  return new Promise((resolve, reject) => {
    Papa.parse<T>(csvText, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: (results) => resolve(results.data as T[]),
      error: (err: any) => reject(err),
    });
  });
}

export function parseMessagesText(rawText: string): MessageLog[] {
  const lines = rawText.split(/\r?\n/).filter(l => l.trim().length > 0);
  const result: MessageLog[] = [];

  for (const line of lines) {
    const match = line.match(/^\[(.*?)\]\s+(EMAIL|WHATSAPP|VOICE NOTE|INSTAGRAM DM|WEBSITE FORM)\s+(from|to)\s+([^:]+):\s*(.*)$/i);
    if (match) {
      const timestamp = match[1].trim();
      const channel = match[2].toLowerCase() as any;
      const sender = match[4].trim();
      const content = match[5].trim();

      const isFrustrated = /frustrated|not happy|second time|already told you|still wrong|sigue igual|pause after this/i.test(content);
      const isLostRequest = /second time|did anyone see|not fixed|still has the same problem/i.test(content);

      result.push({
        timestamp,
        channel,
        sender,
        content,
        isFrustrated,
        isLostRequest
      });
    }
  }

  return result;
}

export function reconcileEntityStats(
  clients: Client[],
  bookings: Booking[],
  invoices: Invoice[],
  payments: Payment[]
): Client[] {
  return clients.map(client => {
    const matchedBookings = bookings.filter(b => 
      client.emails.some(e => e.toLowerCase() === (b.email || '').toLowerCase()) ||
      client.other_names_used_in_the_data.some(n => n.toLowerCase() === (b.client_name || '').toLowerCase()) ||
      b.client_name.toLowerCase().includes(client.name.toLowerCase())
    );

    const matchedInvoices = invoices.filter(inv =>
      client.emails.some(e => e.toLowerCase() === (inv.email || '').toLowerCase()) ||
      client.other_names_used_in_the_data.some(n => n.toLowerCase() === (inv.bill_to || '').toLowerCase()) ||
      inv.bill_to.toLowerCase().includes(client.name.toLowerCase())
    );

    const totalRevenue = matchedBookings.reduce((sum, b) => sum + (b.price || 0), 0);
    const overdueInvoices = matchedInvoices.filter(inv => inv.status === 'unpaid' && inv.due < '2026-10-06');
    const outstandingBalance = overdueInvoices.reduce((sum, inv) => sum + (inv.amount || 0), 0);

    return {
      ...client,
      totalBookings: matchedBookings.length,
      totalRevenue,
      outstandingBalance
    };
  });
}
