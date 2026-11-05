export interface Client {
  id: string;
  name: string;
  other_names_used_in_the_data: string[];
  emails: string[];
  phones: string[];
  leadSource?: string;
  totalBookings: number;
  totalRevenue: number;
  outstandingBalance: number;
  riskStatus: 'critical' | 'warning' | 'healthy';
  isPayerOnly?: boolean;
  paysFor?: string[];
}

export interface Booking {
  booking_id: string;
  date: string;
  client_name: string;
  email: string;
  service: string;
  status: 'completed' | 'upcoming' | 'cancelled';
  price: number;
}

export interface Invoice {
  invoice_no: string;
  bill_to: string;
  email: string;
  issued: string;
  due: string;
  amount: number;
  status: 'paid' | 'unpaid' | 'partial' | 'void';
  memo: string;
  daysLate?: number;
}

export interface Payment {
  payment_id: string;
  date: string;
  payer: string;
  payer_email: string;
  amount: number;
  method: string;
  reference: string;
}

export interface VideoItem {
  video_id: string;
  client: string;
  title: string;
  editor: string;
  stage: 'Delivered' | 'In revision' | 'In review' | 'In edit';
  notes_on_board: string;
  revisions: number;
  editor_hours: number;
  client_approved_on?: string;
  shoot_booking?: string;
  isStuck?: boolean;
}

export interface Lead {
  lead_id: string;
  created: string;
  name: string;
  business: string;
  email: string;
  phone: string;
  source: string;
  first_reply?: string;
  status: 'Won' | 'Lost' | 'New' | 'Talking';
}

export interface MessageLog {
  timestamp: string;
  channel: 'email' | 'whatsapp' | 'voice note' | 'instagram' | 'website form';
  sender: string;
  content: string;
  isFrustrated?: boolean;
  isLostRequest?: boolean;
}

export interface ActionSuggestion {
  id: string;
  title: string;
  category: 'urgent_churn' | 'overdue_invoice' | 'lost_revision' | 'unbilled_work';
  severity: 'high' | 'medium' | 'low';
  client: string;
  description: string;
  recommendedAction: string;
  draftText: string;
  contactMethod: 'phone' | 'email' | 'whatsapp';
  contactTarget: string;
}
