import { Client, Booking, Invoice, Payment, VideoItem, Lead } from "./types";

export const initialClients: Client[] = [
  {
    "id": "C-001",
    "name": "NorthPoint Church",
    "other_names_used_in_the_data": [
      "NorthPoint Media Team",
      "NorthPoint DFW",
      "Northpoint Church",
      "NORTHPOINT CHURCH",
      "PASTOR DAVID KIM"
    ],
    "emails": [
      "media@northpointdfw.org"
    ],
    "phones": [
      "972-555-0112"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-002",
    "name": "Khan Dental PLLC",
    "other_names_used_in_the_data": [
      "Dr. Sarah Khan",
      "Sarah Khan DDS",
      "Dr Khan",
      "Khan Dental",
      "Sarah Khan",
      "DR. SARAH KHAN",
      "KHAN DENTAL"
    ],
    "emails": [
      "sarah@khandental.com",
      "sarah@khandental.con"
    ],
    "phones": [
      "214-555-0141",
      "214-555-0177"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-003",
    "name": "Hustle & Heart",
    "other_names_used_in_the_data": [
      "H&H Podcast",
      "Hustle & Heart Podcast",
      "Hustle and Heart",
      "Tasha Green",
      "TASHA GREEN"
    ],
    "emails": [
      "tasha@hustleandheart.fm",
      "tasha.green.mail@gmail.com"
    ],
    "phones": [
      "469-555-0157"
    ],
    "riskStatus": "warning",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-004",
    "name": "DFW Founders Podcast",
    "other_names_used_in_the_data": [
      "DFW Founders",
      "Ethan Cole",
      "DFW FOUNDERS",
      "ETHAN COLE"
    ],
    "emails": [
      "ethan@dfwfounders.fm"
    ],
    "phones": [
      "214-555-0118"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-005",
    "name": "Cedar & Stone",
    "other_names_used_in_the_data": [
      "Cedar and Stone"
    ],
    "emails": [
      "will@cedarstone.build"
    ],
    "phones": [
      "817-555-0122"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-006",
    "name": "Bloom Med Spa",
    "other_names_used_in_the_data": [
      "Bloom Med Spa - Plano",
      "Bloom Med Spa - Frisco",
      "Bloom Medspa",
      "Bloom",
      "BLOOM MEDSPA",
      "BLOOM MED SPA",
      "BLOOM MED SPA - PLANO",
      "PRIYA SHAH",
      "Bloom Med Spa Frisco"
    ],
    "emails": [
      "priya@bloommedspa.com",
      "frisco@bloommedspa.com"
    ],
    "phones": [
      "972-555-0110"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-007",
    "name": "Mike's Roofing",
    "other_names_used_in_the_data": [
      "Mikes Roofing",
      "Mike Delgado",
      "Mike's Roofing LLC",
      "MIKE DELGADO",
      "MIKE'S ROOFING LLC"
    ],
    "emails": [
      "mike@mikesroofingtx.com"
    ],
    "phones": [
      "469-555-0172"
    ],
    "riskStatus": "warning",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-008",
    "name": "Luna Bridal Boutique",
    "other_names_used_in_the_data": [
      "Luna Bridal",
      "Sofia Ramirez"
    ],
    "emails": [
      "sofia@lunabridal.com"
    ],
    "phones": [
      "214-555-0135"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-009",
    "name": "Meridian Wealth Partners",
    "other_names_used_in_the_data": [
      "Meridian Wealth",
      "Meridian WP",
      "PAUL GRANT",
      "Paul Grant"
    ],
    "emails": [
      "pgrant@meridianwp.com"
    ],
    "phones": [
      "214-555-0182"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-010",
    "name": "Elevate Athletics",
    "other_names_used_in_the_data": [
      "Elevate Fitness",
      "Elevate Fit",
      "Elevate",
      "JORDAN REED",
      "J REED",
      "Jordan Reed"
    ],
    "emails": [
      "jordan@elevatefit.co",
      "jordan@elevateathletics.com"
    ],
    "phones": [
      "469-555-0133"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-011",
    "name": "Apex Physical Therapy",
    "other_names_used_in_the_data": [
      "Apex PT Dallas",
      "Apex PT",
      "DR. KIM LEE",
      "APEX PT",
      "APEX PHYSICAL THERAPY"
    ],
    "emails": [
      "klee@apexptdallas.com"
    ],
    "phones": [
      "972-555-0144"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-012",
    "name": "Torres Law Firm PLLC",
    "other_names_used_in_the_data": [
      "Torres Law",
      "Torres",
      "Torres Law Firm",
      "TORRES LAW FIRM PLLC",
      "MIKE TORRES"
    ],
    "emails": [
      "mtorres@torreslaw.com"
    ],
    "phones": [
      "214-555-0188"
    ],
    "riskStatus": "warning",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-013",
    "name": "Glow Aesthetics",
    "other_names_used_in_the_data": [
      "Glow Aesthetic",
      "Glow Med",
      "GLOW AESTHETICS",
      "NADIA HASSAN",
      "Nadia Hassan"
    ],
    "emails": [
      "nadia@glowaesthetics.co"
    ],
    "phones": [
      "972-555-0153"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-014",
    "name": "Crown Barbershop",
    "other_names_used_in_the_data": [
      "Crown Barbers",
      "Andre Jackson",
      "ANDRE JACKSON"
    ],
    "emails": [
      "andre@crownbarbers.com"
    ],
    "phones": [
      "214-555-0103"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-015",
    "name": "Patel Insurance Group",
    "other_names_used_in_the_data": [
      "Patel Insurance",
      "Patel Ins",
      "Raj Patel",
      "PATEL INSURANCE GROUP",
      "Nina Patel"
    ],
    "emails": [
      "raj@patelinsures.com",
      "nina@patelinsures.com"
    ],
    "phones": [
      "214-555-0195",
      "214-555-0196"
    ],
    "riskStatus": "critical",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-016",
    "name": "Lone Star Realty LLC",
    "other_names_used_in_the_data": [
      "Lone Star Realty",
      "Dana Brooks",
      "DANA BROOKS"
    ],
    "emails": [
      "dana@lonestarrealty.com"
    ],
    "phones": [
      "214-555-0164"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-017",
    "name": "Oak Lane Dental",
    "other_names_used_in_the_data": [
      "Oaklane Dental",
      "Hannah Brooks DDS",
      "DR. HANNAH BROOKS",
      "HANNAH BROOKS DDS"
    ],
    "emails": [
      "hbrooks@oaklanedental.com"
    ],
    "phones": [
      "469-555-0108"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-018",
    "name": "Khan Family Law",
    "other_names_used_in_the_data": [
      "Khan Law",
      "Aisha Khan"
    ],
    "emails": [
      "info@khanfamilylaw.com"
    ],
    "phones": [
      "214-555-0150"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-019",
    "name": "The Brew Lab",
    "other_names_used_in_the_data": [
      "Brew Lab",
      "Brewlab Coffee",
      "LENA ORTIZ"
    ],
    "emails": [
      "lena@thebrewlab.coffee"
    ],
    "phones": [
      "469-555-0116"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-020",
    "name": "Greenway Pediatrics",
    "other_names_used_in_the_data": [
      "Greenway Peds",
      "Brightline - Greenway"
    ],
    "emails": [
      "acho@greenwaypeds.com"
    ],
    "phones": [
      "972-555-0129"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-021",
    "name": "Summit Chiropractic",
    "other_names_used_in_the_data": [
      "Summit Chiro",
      "Brightline - Summit"
    ],
    "emails": [
      "drhale@summitchiro.com"
    ],
    "phones": [
      "972-555-0148"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-022",
    "name": "Ironclad Gym",
    "other_names_used_in_the_data": [
      "Ironclad Fitness",
      "Marcus Webb",
      "IRONCLAD GYM"
    ],
    "emails": [
      "marcus@ironcladgym.com"
    ],
    "phones": [
      "469-555-0126"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-023",
    "name": "Sage Family Therapy",
    "other_names_used_in_the_data": [
      "Sage Therapy",
      "Dr. Maria Lopez"
    ],
    "emails": [
      "mlopez@sagefamilytherapy.com"
    ],
    "phones": [
      "972-555-0171"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-024",
    "name": "Harbor Coffee Roasters",
    "other_names_used_in_the_data": [
      "Harbor Coffee",
      "Harbor Roasters"
    ],
    "emails": [
      "jen@harborcoffee.com"
    ],
    "phones": [
      "469-555-0149"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-025",
    "name": "Khan's Auto Spa",
    "other_names_used_in_the_data": [
      "Khans Auto",
      "Imran Khan",
      "IMRAN KHAN"
    ],
    "emails": [
      "imran@khansautospa.com"
    ],
    "phones": [
      "972-555-0161"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-026",
    "name": "Lonestar Realty Group",
    "other_names_used_in_the_data": [
      "Lonestar Realty"
    ],
    "emails": [
      "greg@lonestarrg.com"
    ],
    "phones": [
      "817-555-0119"
    ],
    "riskStatus": "warning",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-027",
    "name": "Prime Roofing Co",
    "other_names_used_in_the_data": [
      "Prime Roofing",
      "Tony Russo",
      "TONY RUSSO"
    ],
    "emails": [
      "tony@primeroofingco.com"
    ],
    "phones": [
      "817-555-0131"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-028",
    "name": "TLC Homecare",
    "other_names_used_in_the_data": [
      "TLC Home Care",
      "Angela Price"
    ],
    "emails": [
      "angela@tlchomecare.com"
    ],
    "phones": [
      "214-555-0187"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  },
  {
    "id": "C-029",
    "name": "Vega Auto Detailing",
    "other_names_used_in_the_data": [
      "Vega Auto",
      "Carlos Vega",
      "Vega Detailing",
      "CARLOS VEGA"
    ],
    "emails": [
      "carlos.vega.detail@gmail.com"
    ],
    "phones": [
      "469-555-0190"
    ],
    "riskStatus": "healthy",
    "totalBookings": 0,
    "totalRevenue": 0,
    "outstandingBalance": 0
  }
];

export const initialAgencyPayers = [
  {
    "name": "Brightline Marketing",
    "pays_for": [
      "Greenway Pediatrics",
      "Summit Chiropractic"
    ]
  }
];

export const initialBookings: Booking[] = [
  {
    "booking_id": "B001",
    "date": "04/03/2026",
    "client_name": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B002",
    "date": "04/06/2026",
    "client_name": "H&H Podcast",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B003",
    "date": "04/08/2026",
    "client_name": "Khan Dental PLLC",
    "email": "sarah@khandental.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B004",
    "date": "04/10/2026",
    "client_name": "DFW Founders Podcast",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "completed",
    "price": 550.0
  },
  {
    "booking_id": "B005",
    "date": "04/13/2026",
    "client_name": "Cedar & Stone",
    "email": "will@cedarstone.build",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B006",
    "date": "04/13/2026",
    "client_name": "H&H Podcast",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B007",
    "date": "04/13/2026",
    "client_name": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B008",
    "date": "04/15/2026",
    "client_name": "Mike's Roofing",
    "email": "mike@mikesroofingtx.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B009",
    "date": "04/20/2026",
    "client_name": "Bloom Med Spa - Plano",
    "email": "priya@bloommedspa.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B010",
    "date": "04/20/2026",
    "client_name": "Hustle & Heart",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B011",
    "date": "04/20/2026",
    "client_name": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B012",
    "date": "04/27/2026",
    "client_name": "Ethan Cole",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "completed",
    "price": 550.0
  },
  {
    "booking_id": "B013",
    "date": "04/27/2026",
    "client_name": "Luna Bridal Boutique",
    "email": "sofia@lunabridal.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B014",
    "date": "04/27/2026",
    "client_name": "Meridian Wealth Partners",
    "email": "pgrant@meridianwp.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B015",
    "date": "04/28/2026",
    "client_name": "Hustle and Heart",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B016",
    "date": "04/28/2026",
    "client_name": "NorthPoint DFW",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B017",
    "date": "05/06/2026",
    "client_name": "Tasha Green",
    "email": "tasha.green.mail@gmail.com",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B018",
    "date": "05/06/2026",
    "client_name": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B019",
    "date": "05/07/2026",
    "client_name": "Meridian WP",
    "email": "pgrant@meridianwp.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B020",
    "date": "05/08/2026",
    "client_name": "Torres Law Firm PLLC",
    "email": "mtorres@torreslaw.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B021",
    "date": "05/11/2026",
    "client_name": "Ethan Cole",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "completed",
    "price": 550.0
  },
  {
    "booking_id": "B022",
    "date": "05/11/2026",
    "client_name": "Elevate Fitness",
    "email": "jordan@elevatefit.co",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B023",
    "date": "05/12/2026",
    "client_name": "Apex PT Dallas",
    "email": "klee@apexptdallas.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B024",
    "date": "05/12/2026",
    "client_name": "Sarah Khan DDS",
    "email": "sarah@khandental.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B025",
    "date": "05/13/2026",
    "client_name": "H&H Podcast",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B026",
    "date": "05/13/2026",
    "client_name": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B027",
    "date": "05/14/2026",
    "client_name": "Glow Aesthetics",
    "email": "nadia@glowaesthetics.co",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B028",
    "date": "05/14/2026",
    "client_name": "Mike Delgado",
    "email": "mike@mikesroofingtx.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B029",
    "date": "05/18/2026",
    "client_name": "Bloom Med Spa - Plano",
    "email": "priya@bloommedspa.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B030",
    "date": "05/18/2026",
    "client_name": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B031",
    "date": "05/21/2026",
    "client_name": "Hustle and Heart",
    "email": "tasha.green.mail@gmail.com",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B032",
    "date": "05/22/2026",
    "client_name": "Andre Jackson",
    "email": "andre@crownbarbers.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B033",
    "date": "05/25/2026",
    "client_name": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B034",
    "date": "05/26/2026",
    "client_name": "DFW Founders",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "completed",
    "price": 550.0
  },
  {
    "booking_id": "B035",
    "date": "05/27/2026",
    "client_name": "Luna Bridal Boutique",
    "email": "sofia@lunabridal.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B036",
    "date": "05/27/2026",
    "client_name": "Patel Ins",
    "email": "raj@patelinsures.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B037",
    "date": "05/29/2026",
    "client_name": "H&H Podcast",
    "email": "tasha.green.mail@gmail.com",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B038",
    "date": "06/01/2026",
    "client_name": "Elevate Fitness",
    "email": "jordan@elevatefit.co",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B039",
    "date": "06/01/2026",
    "client_name": "Lone Star Realty LLC",
    "email": "dana@lonestarrealty.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B040",
    "date": "06/03/2026",
    "client_name": "NorthPoint Church",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B041",
    "date": "06/03/2026",
    "client_name": "Oak Lane Dental",
    "email": "hbrooks@oaklanedental.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B042",
    "date": "06/05/2026",
    "client_name": "Hustle & Heart Podcast",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B043",
    "date": "06/05/2026",
    "client_name": "Meridian Wealth",
    "email": "pgrant@meridianwp.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B044",
    "date": "06/08/2026",
    "client_name": "Cedar & Stone",
    "email": "will@cedarstone.build",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B045",
    "date": "06/09/2026",
    "client_name": "Patel Insurance",
    "email": "raj@patelinsures.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B046",
    "date": "06/10/2026",
    "client_name": "Apex Physical Therapy",
    "email": "klee@apexptdallas.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B047",
    "date": "06/10/2026",
    "client_name": "Greenway Pediatrics",
    "email": "acho@greenwaypeds.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B048",
    "date": "06/10/2026",
    "client_name": "NorthPoint DFW",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B049",
    "date": "06/10/2026",
    "client_name": "Torres",
    "email": "mtorres@torreslaw.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B050",
    "date": "06/11/2026",
    "client_name": "Ethan Cole",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "completed",
    "price": 550.0
  },
  {
    "booking_id": "B051",
    "date": "06/12/2026",
    "client_name": "Mike's Roofing",
    "email": "mike@mikesroofingtx.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B052",
    "date": "06/15/2026",
    "client_name": "Hustle & Heart",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B053",
    "date": "06/15/2026",
    "client_name": "Aisha Khan",
    "email": "info@khanfamilylaw.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B054",
    "date": "06/16/2026",
    "client_name": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B055",
    "date": "06/17/2026",
    "client_name": "Bloom Medspa",
    "email": "priya@bloommedspa.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B056",
    "date": "06/17/2026",
    "client_name": "Dr. Sarah Khan",
    "email": "sarah@khandental.con",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B057",
    "date": "06/22/2026",
    "client_name": "Brew Lab",
    "email": "lena@thebrewlab.coffee",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B058",
    "date": "06/22/2026",
    "client_name": "Elevate Fit",
    "email": "jordan@elevatefit.co",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B059",
    "date": "06/22/2026",
    "client_name": "Glow Aesthetics",
    "email": "nadia@glowaesthetics.co",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B060",
    "date": "06/22/2026",
    "client_name": "Hustle & Heart Podcast",
    "email": "tasha.green.mail@gmail.com",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B061",
    "date": "06/22/2026",
    "client_name": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B062",
    "date": "06/24/2026",
    "client_name": "Luna Bridal",
    "email": "sofia@lunabridal.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B063",
    "date": "06/25/2026",
    "client_name": "DFW Founders",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "completed",
    "price": 550.0
  },
  {
    "booking_id": "B064",
    "date": "06/29/2026",
    "client_name": "Hustle & Heart Podcast",
    "email": "tasha.green.mail@gmail.com",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B065",
    "date": "06/29/2026",
    "client_name": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B066",
    "date": "07/01/2026",
    "client_name": "Brightline - Summit",
    "email": "kelsey@brightlinemktg.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B067",
    "date": "07/06/2026",
    "client_name": "Crown Barbershop",
    "email": "andre@crownbarbers.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B068",
    "date": "07/06/2026",
    "client_name": "Raj Patel",
    "email": "raj@patelinsures.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B069",
    "date": "07/07/2026",
    "client_name": "DFW Founders Podcast",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "completed",
    "price": 550.0
  },
  {
    "booking_id": "B070",
    "date": "07/07/2026",
    "client_name": "Tasha Green",
    "email": "tasha.green.mail@gmail.com",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B071",
    "date": "07/07/2026",
    "client_name": "NorthPoint DFW",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B072",
    "date": "07/07/2026",
    "client_name": "Torres Law",
    "email": "mtorres@torreslaw.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B073",
    "date": "07/08/2026",
    "client_name": "Marcus Webb",
    "email": "marcus@ironcladgym.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B074",
    "date": "07/10/2026",
    "client_name": "Apex Physical Therapy",
    "email": "klee@apexptdallas.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B075",
    "date": "07/13/2026",
    "client_name": "Brightline - Greenway",
    "email": "kelsey@brightlinemktg.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B076",
    "date": "07/13/2026",
    "client_name": "Tasha Green",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B077",
    "date": "07/13/2026",
    "client_name": "Meridian Wealth Partners",
    "email": "pgrant@meridianwp.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B078",
    "date": "07/13/2026",
    "client_name": "Mike Delgado",
    "email": "mike@mikesroofingtx.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B079",
    "date": "07/14/2026",
    "client_name": "Elevate Fitness",
    "email": "jordan@elevatefit.co",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B080",
    "date": "07/14/2026",
    "client_name": "Sage Family Therapy",
    "email": "mlopez@sagefamilytherapy.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B081",
    "date": "07/15/2026",
    "client_name": "Harbor Coffee Roasters",
    "email": "jen@harborcoffee.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B082",
    "date": "07/15/2026",
    "client_name": "Lone Star Realty LLC",
    "email": "dana@lonestarrealty.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B083",
    "date": "07/16/2026",
    "client_name": "Bloom Med Spa - Frisco",
    "email": "frisco@bloommedspa.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B084",
    "date": "07/16/2026",
    "client_name": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B085",
    "date": "07/17/2026",
    "client_name": "Oaklane Dental",
    "email": "hbrooks@oaklanedental.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B086",
    "date": "07/20/2026",
    "client_name": "Hustle and Heart",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B087",
    "date": "07/20/2026",
    "client_name": "Khan's Auto Spa",
    "email": "imran@khansautospa.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B088",
    "date": "07/21/2026",
    "client_name": "Luna Bridal",
    "email": "sofia@lunabridal.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B089",
    "date": "07/22/2026",
    "client_name": "DFW Founders Podcast",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "completed",
    "price": 550.0
  },
  {
    "booking_id": "B090",
    "date": "07/23/2026",
    "client_name": "Dr Khan",
    "email": "sarah@khandental.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B091",
    "date": "07/24/2026",
    "client_name": "NorthPoint Church",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B092",
    "date": "07/27/2026",
    "client_name": "Glow Aesthetic",
    "email": "nadia@glowaesthetics.co",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B093",
    "date": "07/27/2026",
    "client_name": "Khan Law",
    "email": "info@khanfamilylaw.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B094",
    "date": "07/29/2026",
    "client_name": "Tasha Green",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B095",
    "date": "08/03/2026",
    "client_name": "The Brew Lab",
    "email": "lena@thebrewlab.coffee",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B096",
    "date": "08/03/2026",
    "client_name": "NorthPoint DFW",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B097",
    "date": "08/04/2026",
    "client_name": "DFW Founders Podcast",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "completed",
    "price": 550.0
  },
  {
    "booking_id": "B098",
    "date": "08/04/2026",
    "client_name": "Ironclad Gym",
    "email": "marcus@ironcladgym.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B099",
    "date": "08/04/2026",
    "client_name": "Summit Chiro",
    "email": "drhale@summitchiro.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B100",
    "date": "08/05/2026",
    "client_name": "Elevate Athletics",
    "email": "jordan@elevateathletics.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B101",
    "date": "08/05/2026",
    "client_name": "Prime Roofing Co",
    "email": "tony@primeroofingco.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B102",
    "date": "08/06/2026",
    "client_name": "Hustle & Heart Podcast",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B103",
    "date": "08/10/2026",
    "client_name": "Mike Delgado",
    "email": "mike@mikesroofingtx.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B104",
    "date": "08/10/2026",
    "client_name": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B105",
    "date": "08/11/2026",
    "client_name": "Apex PT Dallas",
    "email": "klee@apexptdallas.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B106",
    "date": "08/11/2026",
    "client_name": "Tasha Green",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B107",
    "date": "08/12/2026",
    "client_name": "Bloom Med Spa",
    "email": "priya@bloommedspa.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B108",
    "date": "08/12/2026",
    "client_name": "Lonestar Realty",
    "email": "greg@lonestarrg.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B109",
    "date": "08/13/2026",
    "client_name": "Raj Patel",
    "email": "raj@patelinsures.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B110",
    "date": "08/13/2026",
    "client_name": "Torres",
    "email": "mtorres@torreslaw.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B111",
    "date": "08/17/2026",
    "client_name": "Ethan Cole",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "completed",
    "price": 550.0
  },
  {
    "booking_id": "B112",
    "date": "08/17/2026",
    "client_name": "Brightline - Greenway",
    "email": "kelsey@brightlinemktg.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B113",
    "date": "08/17/2026",
    "client_name": "Hustle & Heart",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B114",
    "date": "08/17/2026",
    "client_name": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B115",
    "date": "08/19/2026",
    "client_name": "Luna Bridal",
    "email": "sofia@lunabridal.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B116",
    "date": "08/24/2026",
    "client_name": "NorthPoint DFW",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B117",
    "date": "08/25/2026",
    "client_name": "Elevate",
    "email": "jordan@elevateathletics.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B118",
    "date": "08/25/2026",
    "client_name": "H&H Podcast",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B119",
    "date": "08/27/2026",
    "client_name": "Harbor Coffee Roasters",
    "email": "jen@harborcoffee.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B120",
    "date": "08/28/2026",
    "client_name": "Lone Star Realty",
    "email": "dana@lonestarrealty.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B121",
    "date": "08/28/2026",
    "client_name": "Oaklane Dental",
    "email": "hbrooks@oaklanedental.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B122",
    "date": "08/31/2026",
    "client_name": "Dr. Sarah Khan",
    "email": "sarah@khandental.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B123",
    "date": "08/31/2026",
    "client_name": "NorthPoint Church",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B124",
    "date": "08/31/2026",
    "client_name": "Vega Auto",
    "email": "carlos.vega.detail@gmail.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B125",
    "date": "09/01/2026",
    "client_name": "Glow Aesthetic",
    "email": "nadia@glowaesthetics.co",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B126",
    "date": "09/01/2026",
    "client_name": "Hustle & Heart Podcast",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B127",
    "date": "09/01/2026",
    "client_name": "Tony Russo",
    "email": "tony@primeroofingco.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B128",
    "date": "09/01/2026",
    "client_name": "TLC Homecare",
    "email": "angela@tlchomecare.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B129",
    "date": "09/02/2026",
    "client_name": "DFW Founders Podcast",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "completed",
    "price": 550.0
  },
  {
    "booking_id": "B130",
    "date": "09/03/2026",
    "client_name": "Marcus Webb",
    "email": "marcus@ironcladgym.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B131",
    "date": "09/07/2026",
    "client_name": "Khan Law",
    "email": "info@khanfamilylaw.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B132",
    "date": "09/07/2026",
    "client_name": "Mike's Roofing LLC",
    "email": "mike@mikesroofingtx.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B133",
    "date": "09/07/2026",
    "client_name": "NorthPoint DFW",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B134",
    "date": "09/07/2026",
    "client_name": "Patel Insurance Group",
    "email": "raj@patelinsures.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B135",
    "date": "09/07/2026",
    "client_name": "Summit Chiropractic",
    "email": "drhale@summitchiro.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B136",
    "date": "09/08/2026",
    "client_name": "Hustle and Heart",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B137",
    "date": "09/10/2026",
    "client_name": "Apex PT Dallas",
    "email": "klee@apexptdallas.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B138",
    "date": "09/10/2026",
    "client_name": "Bloom Med Spa - Frisco",
    "email": "frisco@bloommedspa.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B139",
    "date": "09/11/2026",
    "client_name": "Torres",
    "email": "mtorres@torreslaw.com",
    "service": "Retainer Shoot",
    "status": "completed",
    "price": 0.0
  },
  {
    "booking_id": "B140",
    "date": "09/14/2026",
    "client_name": "Brew Lab",
    "email": "lena@thebrewlab.coffee",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B141",
    "date": "09/15/2026",
    "client_name": "Luna Bridal Boutique",
    "email": "sofia@lunabridal.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B142",
    "date": "09/16/2026",
    "client_name": "Elevate",
    "email": "jordan@elevateathletics.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B143",
    "date": "09/16/2026",
    "client_name": "Hustle & Heart Podcast",
    "email": "tasha.green.mail@gmail.com",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B144",
    "date": "09/16/2026",
    "client_name": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B145",
    "date": "09/17/2026",
    "client_name": "Ethan Cole",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "completed",
    "price": 550.0
  },
  {
    "booking_id": "B146",
    "date": "09/18/2026",
    "client_name": "Carlos Vega",
    "email": "carlos.vega.detail@gmail.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B147",
    "date": "09/21/2026",
    "client_name": "Vega Auto Detailing",
    "email": "carlos.vega.detail@gmail.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B148",
    "date": "09/23/2026",
    "client_name": "Brightline - Greenway",
    "email": "kelsey@brightlinemktg.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B149",
    "date": "09/23/2026",
    "client_name": "H&H Podcast",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B150",
    "date": "09/23/2026",
    "client_name": "NorthPoint DFW",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B151",
    "date": "09/24/2026",
    "client_name": "Lone Star Realty LLC",
    "email": "dana@lonestarrealty.com",
    "service": "Content Day",
    "status": "cancelled",
    "price": 1500.0
  },
  {
    "booking_id": "B152",
    "date": "09/28/2026",
    "client_name": "Prime Roofing Co",
    "email": "tony@primeroofingco.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B153",
    "date": "09/29/2026",
    "client_name": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 240.0
  },
  {
    "booking_id": "B154",
    "date": "10/01/2026",
    "client_name": "DFW Founders",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "completed",
    "price": 550.0
  },
  {
    "booking_id": "B155",
    "date": "10/01/2026",
    "client_name": "H&H Podcast",
    "email": "tasha.green.mail@gmail.com",
    "service": "Podcast Studio 2hr",
    "status": "completed",
    "price": 300.0
  },
  {
    "booking_id": "B156",
    "date": "10/02/2026",
    "client_name": "Ironclad Gym",
    "email": "marcus@ironcladgym.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B157",
    "date": "10/05/2026",
    "client_name": "Khan Dental PLLC",
    "email": "sarah@khandental.com",
    "service": "Content Day",
    "status": "completed",
    "price": 1500.0
  },
  {
    "booking_id": "B158",
    "date": "10/05/2026",
    "client_name": "Mikes Roofing",
    "email": "mike@mikesroofingtx.com",
    "service": "Reels Pack",
    "status": "completed",
    "price": 900.0
  },
  {
    "booking_id": "B159",
    "date": "10/06/2026",
    "client_name": "Elevate",
    "email": "jordan@elevateathletics.com",
    "service": "Reels Pack",
    "status": "upcoming",
    "price": 900.0
  },
  {
    "booking_id": "B160",
    "date": "10/07/2026",
    "client_name": "Glow Aesthetic",
    "email": "nadia@glowaesthetics.co",
    "service": "Reels Pack",
    "status": "upcoming",
    "price": 900.0
  },
  {
    "booking_id": "B161",
    "date": "10/08/2026",
    "client_name": "Harbor Coffee",
    "email": "jen@harborcoffee.com",
    "service": "Reels Pack",
    "status": "upcoming",
    "price": 900.0
  },
  {
    "booking_id": "B162",
    "date": "10/08/2026",
    "client_name": "Hustle & Heart Podcast",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "upcoming",
    "price": 300.0
  },
  {
    "booking_id": "B163",
    "date": "10/08/2026",
    "client_name": "NorthPoint DFW",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "upcoming",
    "price": 240.0
  },
  {
    "booking_id": "B164",
    "date": "10/09/2026",
    "client_name": "Bloom Med Spa - Plano",
    "email": "priya@bloommedspa.com",
    "service": "Content Day",
    "status": "upcoming",
    "price": 1500.0
  },
  {
    "booking_id": "B165",
    "date": "10/09/2026",
    "client_name": "Lone Star Realty",
    "email": "dana@lonestarrealty.com",
    "service": "Content Day",
    "status": "upcoming",
    "price": 1500.0
  },
  {
    "booking_id": "B166",
    "date": "10/09/2026",
    "client_name": "Oak Lane Dental",
    "email": "hbrooks@oaklanedental.com",
    "service": "Content Day",
    "status": "upcoming",
    "price": 1500.0
  },
  {
    "booking_id": "B167",
    "date": "10/12/2026",
    "client_name": "Apex PT",
    "email": "klee@apexptdallas.com",
    "service": "Retainer Shoot",
    "status": "upcoming",
    "price": 0.0
  },
  {
    "booking_id": "B168",
    "date": "10/12/2026",
    "client_name": "Patel Insurance Group",
    "email": "raj@patelinsures.com",
    "service": "Retainer Shoot",
    "status": "upcoming",
    "price": 0.0
  },
  {
    "booking_id": "B169",
    "date": "10/13/2026",
    "client_name": "DFW Founders",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "upcoming",
    "price": 550.0
  },
  {
    "booking_id": "B170",
    "date": "10/13/2026",
    "client_name": "Hustle and Heart",
    "email": "tasha@hustleandheart.fm",
    "service": "Podcast Studio 2hr",
    "status": "upcoming",
    "price": 300.0
  },
  {
    "booking_id": "B171",
    "date": "10/13/2026",
    "client_name": "Brightline - Summit",
    "email": "kelsey@brightlinemktg.com",
    "service": "Reels Pack",
    "status": "upcoming",
    "price": 900.0
  },
  {
    "booking_id": "B172",
    "date": "10/13/2026",
    "client_name": "Torres Law",
    "email": "mtorres@torreslaw.com",
    "service": "Retainer Shoot",
    "status": "upcoming",
    "price": 0.0
  },
  {
    "booking_id": "B173",
    "date": "10/13/2026",
    "client_name": "Carlos Vega",
    "email": "carlos.vega.detail@gmail.com",
    "service": "Reels Pack",
    "status": "upcoming",
    "price": 900.0
  },
  {
    "booking_id": "B174",
    "date": "10/14/2026",
    "client_name": "DFW Founders",
    "email": "ethan@dfwfounders.fm",
    "service": "Podcast Studio 4hr",
    "status": "upcoming",
    "price": 550.0
  },
  {
    "booking_id": "B175",
    "date": "10/14/2026",
    "client_name": "Sofia Ramirez",
    "email": "sofia@lunabridal.com",
    "service": "Reels Pack",
    "status": "upcoming",
    "price": 900.0
  },
  {
    "booking_id": "B176",
    "date": "10/16/2026",
    "client_name": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "service": "Podcast Studio 2hr",
    "status": "upcoming",
    "price": 240.0
  },
  {
    "booking_id": "B177",
    "date": "10/19/2026",
    "client_name": "Khan Law",
    "email": "info@khanfamilylaw.com",
    "service": "Reels Pack",
    "status": "upcoming",
    "price": 900.0
  }
];

export const initialInvoices: Invoice[] = [
  {
    "invoice_no": "INV-1001",
    "bill_to": "NorthPoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-04-05",
    "due": "2026-04-19",
    "amount": 300.0,
    "status": "paid",
    "memo": "Podcast Studio 2hr 4/3"
  },
  {
    "invoice_no": "INV-1002",
    "bill_to": "Hustle and Heart",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-04-07",
    "due": "2026-04-21",
    "amount": 300.0,
    "status": "paid",
    "memo": "B002 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1003",
    "bill_to": "Dr. Sarah Khan",
    "email": "sarah@khandental.com",
    "issued": "2026-04-08",
    "due": "2026-04-22",
    "amount": 1500.0,
    "status": "paid",
    "memo": "B003 Content Day"
  },
  {
    "invoice_no": "INV-1004",
    "bill_to": "DFW Founders Podcast",
    "email": "ethan@dfwfounders.fm",
    "issued": "2026-04-11",
    "due": "2026-04-25",
    "amount": 550.0,
    "status": "paid",
    "memo": "B004 Podcast Studio 4hr"
  },
  {
    "invoice_no": "INV-1005",
    "bill_to": "Hustle & Heart Podcast",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-04-13",
    "due": "2026-04-27",
    "amount": 300.0,
    "status": "paid",
    "memo": "B006 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1006",
    "bill_to": "Cedar and Stone",
    "email": "will@cedarstone.build",
    "issued": "2026-04-14",
    "due": "2026-04-28",
    "amount": 1500.0,
    "status": "paid",
    "memo": "Content Day 4/13"
  },
  {
    "invoice_no": "INV-1007",
    "bill_to": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-04-14",
    "due": "2026-04-28",
    "amount": 300.0,
    "status": "paid",
    "memo": "B007 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1008",
    "bill_to": "Mike's Roofing",
    "email": "mike@mikesroofingtx.com",
    "issued": "2026-04-16",
    "due": "2026-04-30",
    "amount": 900.0,
    "status": "paid",
    "memo": "B008 Reels Pack"
  },
  {
    "invoice_no": "INV-1009",
    "bill_to": "Bloom Medspa",
    "email": "priya@bloommedspa.com",
    "issued": "2026-04-20",
    "due": "2026-05-04",
    "amount": 1500.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1010",
    "bill_to": "Hustle & Heart Podcast",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-04-20",
    "due": "2026-05-04",
    "amount": 300.0,
    "status": "paid",
    "memo": "B010 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1011",
    "bill_to": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-04-22",
    "due": "2026-05-06",
    "amount": 300.0,
    "status": "paid",
    "memo": "B011 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1012",
    "bill_to": "DFW Founders",
    "email": "ethan@dfwfounders.fm",
    "issued": "2026-04-27",
    "due": "2026-05-11",
    "amount": 550.0,
    "status": "paid",
    "memo": "Podcast Studio 4hr 4/27"
  },
  {
    "invoice_no": "INV-1013",
    "bill_to": "Luna Bridal Boutique",
    "email": "sofia@lunabridal.com",
    "issued": "2026-04-27",
    "due": "2026-05-11",
    "amount": 900.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1014",
    "bill_to": "Tasha Green",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-04-28",
    "due": "2026-05-12",
    "amount": 300.0,
    "status": "paid",
    "memo": "Podcast Studio 2hr 4/28"
  },
  {
    "invoice_no": "INV-1015",
    "bill_to": "NorthPoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-04-30",
    "due": "2026-05-14",
    "amount": 300.0,
    "status": "paid",
    "memo": "Podcast Studio 2hr 4/28"
  },
  {
    "invoice_no": "INV-1016",
    "bill_to": "Meridian Wealth Partners",
    "email": "pgrant@meridianwp.com",
    "issued": "2026-05-01",
    "due": "2026-05-15",
    "amount": 2500.0,
    "status": "paid",
    "memo": "Monthly retainer May"
  },
  {
    "invoice_no": "INV-1017",
    "bill_to": "Hustle & Heart Podcast",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-05-07",
    "due": "2026-05-21",
    "amount": 300.0,
    "status": "paid",
    "memo": "B017 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1018",
    "bill_to": "NorthPoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-05-07",
    "due": "2026-05-21",
    "amount": 240.0,
    "status": "paid",
    "memo": "Podcast Studio 2hr 5/6"
  },
  {
    "invoice_no": "INV-1019",
    "bill_to": "DFW Founders Podcast",
    "email": "ethan@dfwfounders.fm",
    "issued": "2026-05-13",
    "due": "2026-05-27",
    "amount": 550.0,
    "status": "paid",
    "memo": "Podcast Studio 4hr 5/11"
  },
  {
    "invoice_no": "INV-1020",
    "bill_to": "Elevate Fitness",
    "email": "jordan@elevatefit.co",
    "issued": "2026-05-13",
    "due": "2026-05-27",
    "amount": 900.0,
    "status": "paid",
    "memo": "Reels Pack 5/11"
  },
  {
    "invoice_no": "INV-1021",
    "bill_to": "Khan Dental",
    "email": "sarah@khandental.com",
    "issued": "2026-05-13",
    "due": "2026-05-27",
    "amount": 1500.0,
    "status": "paid",
    "memo": "B024 Content Day"
  },
  {
    "invoice_no": "INV-1022",
    "bill_to": "Glow Med",
    "email": "nadia@glowaesthetics.co",
    "issued": "2026-05-14",
    "due": "2026-05-28",
    "amount": 900.0,
    "status": "paid",
    "memo": "B027 Reels Pack"
  },
  {
    "invoice_no": "INV-1023",
    "bill_to": "Tasha Green",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-05-15",
    "due": "2026-05-29",
    "amount": 300.0,
    "status": "paid",
    "memo": "B025 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1024",
    "bill_to": "NorthPoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-05-15",
    "due": "2026-05-29",
    "amount": 240.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1025",
    "bill_to": "Mike's Roofing",
    "email": "mike@mikesroofingtx.com",
    "issued": "2026-05-15",
    "due": "2026-05-29",
    "amount": 900.0,
    "status": "paid",
    "memo": "B028 Reels Pack"
  },
  {
    "invoice_no": "INV-1026",
    "bill_to": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-05-19",
    "due": "2026-06-02",
    "amount": 240.0,
    "status": "paid",
    "memo": "Podcast Studio 2hr 5/18"
  },
  {
    "invoice_no": "INV-1027",
    "bill_to": "Bloom Med Spa",
    "email": "priya@bloommedspa.com",
    "issued": "2026-05-20",
    "due": "2026-06-03",
    "amount": 1500.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1028",
    "bill_to": "Hustle and Heart",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-05-21",
    "due": "2026-06-04",
    "amount": 300.0,
    "status": "paid",
    "memo": "Podcast Studio 2hr 5/21"
  },
  {
    "invoice_no": "INV-1029",
    "bill_to": "Andre Jackson",
    "email": "andre@crownbarbers.com",
    "issued": "2026-05-22",
    "due": "2026-06-05",
    "amount": 900.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1030",
    "bill_to": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-05-26",
    "due": "2026-06-09",
    "amount": 240.0,
    "status": "paid",
    "memo": "B033 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1031",
    "bill_to": "Ethan Cole",
    "email": "ethan@dfwfounders.fm",
    "issued": "2026-05-26",
    "due": "2026-06-09",
    "amount": 550.0,
    "status": "paid",
    "memo": "B034 Podcast Studio 4hr"
  },
  {
    "invoice_no": "INV-1032",
    "bill_to": "Lone Star Realty LLC",
    "email": "dana@lonestarrealty.com",
    "issued": "2026-05-27",
    "due": "2026-06-10",
    "amount": 1500.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1033",
    "bill_to": "Sofia Ramirez",
    "email": "sofia@lunabridal.com",
    "issued": "2026-05-28",
    "due": "2026-06-11",
    "amount": 900.0,
    "status": "paid",
    "memo": "B035 Reels Pack"
  },
  {
    "invoice_no": "INV-1034",
    "bill_to": "Tasha Green",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-05-29",
    "due": "2026-06-12",
    "amount": 300.0,
    "status": "paid",
    "memo": "Podcast Studio 2hr 5/29"
  },
  {
    "invoice_no": "INV-1035",
    "bill_to": "Torres Law Firm PLLC",
    "email": "mtorres@torreslaw.com",
    "issued": "2026-06-01",
    "due": "2026-06-15",
    "amount": 2500.0,
    "status": "paid",
    "memo": "Monthly retainer June"
  },
  {
    "invoice_no": "INV-1036",
    "bill_to": "Patel Insurance",
    "email": "raj@patelinsures.com",
    "issued": "2026-06-01",
    "due": "2026-06-15",
    "amount": 2500.0,
    "status": "paid",
    "memo": "Monthly retainer June"
  },
  {
    "invoice_no": "INV-1037",
    "bill_to": "Apex PT",
    "email": "klee@apexptdallas.com",
    "issued": "2026-06-01",
    "due": "2026-06-15",
    "amount": 2500.0,
    "status": "paid",
    "memo": "Monthly retainer June"
  },
  {
    "invoice_no": "INV-1038",
    "bill_to": "Meridian Wealth",
    "email": "pgrant@meridianwp.com",
    "issued": "2026-06-01",
    "due": "2026-06-15",
    "amount": 2500.0,
    "status": "paid",
    "memo": "Monthly retainer June"
  },
  {
    "invoice_no": "INV-1039",
    "bill_to": "Elevate Fit",
    "email": "jordan@elevatefit.co",
    "issued": "2026-06-03",
    "due": "2026-06-17",
    "amount": 900.0,
    "status": "paid",
    "memo": "B038 Reels Pack"
  },
  {
    "invoice_no": "INV-1040",
    "bill_to": "NorthPoint DFW",
    "email": "media@northpointdfw.org",
    "issued": "2026-06-03",
    "due": "2026-06-17",
    "amount": 240.0,
    "status": "paid",
    "memo": "B040 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1041",
    "bill_to": "Oaklane Dental",
    "email": "hbrooks@oaklanedental.com",
    "issued": "2026-06-04",
    "due": "2026-06-18",
    "amount": 1500.0,
    "status": "paid",
    "memo": "B041 Content Day"
  },
  {
    "invoice_no": "INV-1042",
    "bill_to": "Hustle and Heart",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-06-07",
    "due": "2026-06-21",
    "amount": 300.0,
    "status": "paid",
    "memo": "B042 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1043",
    "bill_to": "Cedar & Stone",
    "email": "will@cedarstone.build",
    "issued": "2026-06-08",
    "due": "2026-06-22",
    "amount": 1500.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1044",
    "bill_to": "Brightline Marketing",
    "email": "kelsey@brightlinemktg.com",
    "issued": "2026-06-10",
    "due": "2026-06-24",
    "amount": 900.0,
    "status": "paid",
    "memo": "Reels Pack 6/10"
  },
  {
    "invoice_no": "INV-1045",
    "bill_to": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-06-12",
    "due": "2026-06-26",
    "amount": 240.0,
    "status": "paid",
    "memo": "B048 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1046",
    "bill_to": "DFW Founders",
    "email": "ethan@dfwfounders.fm",
    "issued": "2026-06-12",
    "due": "2026-06-26",
    "amount": 550.0,
    "status": "paid",
    "memo": "Podcast Studio 4hr 6/11"
  },
  {
    "invoice_no": "INV-1047",
    "bill_to": "Mike's Roofing LLC",
    "email": "mike@mikesroofingtx.com",
    "issued": "2026-06-12",
    "due": "2026-06-26",
    "amount": 900.0,
    "status": "paid",
    "memo": "Reels Pack 6/12"
  },
  {
    "invoice_no": "INV-1048",
    "bill_to": "Hustle and Heart",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-06-17",
    "due": "2026-07-01",
    "amount": 300.0,
    "status": "paid",
    "memo": "B052 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1049",
    "bill_to": "Aisha Khan",
    "email": "info@khanfamilylaw.com",
    "issued": "2026-06-17",
    "due": "2026-07-01",
    "amount": 900.0,
    "status": "paid",
    "memo": "B053 Reels Pack"
  },
  {
    "invoice_no": "INV-1050",
    "bill_to": "Bloom Med Spa - Plano",
    "email": "priya@bloommedspa.com",
    "issued": "2026-06-17",
    "due": "2026-07-01",
    "amount": 1500.0,
    "status": "paid",
    "memo": "Content Day 6/17"
  },
  {
    "invoice_no": "INV-1051",
    "bill_to": "NorthPoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-06-18",
    "due": "2026-07-02",
    "amount": 240.0,
    "status": "paid",
    "memo": "B054 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1052",
    "bill_to": "Khan Dental",
    "email": "sarah@khandental.com",
    "issued": "2026-06-18",
    "due": "2026-07-02",
    "amount": 1500.0,
    "status": "paid",
    "memo": "B056 Content Day"
  },
  {
    "invoice_no": "INV-1053",
    "bill_to": "Brew Lab",
    "email": "lena@thebrewlab.coffee",
    "issued": "2026-06-22",
    "due": "2026-07-06",
    "amount": 900.0,
    "status": "paid",
    "memo": "B057 Reels Pack"
  },
  {
    "invoice_no": "INV-1054",
    "bill_to": "Elevate Fitness",
    "email": "jordan@elevatefit.co",
    "issued": "2026-06-22",
    "due": "2026-07-06",
    "amount": 900.0,
    "status": "paid",
    "memo": "B058 Reels Pack"
  },
  {
    "invoice_no": "INV-1055",
    "bill_to": "Hustle & Heart",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-06-22",
    "due": "2026-07-06",
    "amount": 300.0,
    "status": "paid",
    "memo": "B060 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1056",
    "bill_to": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "issued": "2026-06-22",
    "due": "2026-07-06",
    "amount": 240.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1057",
    "bill_to": "Glow Aesthetics",
    "email": "nadia@glowaesthetics.co",
    "issued": "2026-06-24",
    "due": "2026-07-08",
    "amount": 900.0,
    "status": "paid",
    "memo": "B059 Reels Pack"
  },
  {
    "invoice_no": "INV-1058",
    "bill_to": "Luna Bridal",
    "email": "sofia@lunabridal.com",
    "issued": "2026-06-25",
    "due": "2026-07-09",
    "amount": 900.0,
    "status": "paid",
    "memo": "B062 Reels Pack"
  },
  {
    "invoice_no": "INV-1059",
    "bill_to": "Ethan Cole",
    "email": "ethan@dfwfounders.fm",
    "issued": "2026-06-26",
    "due": "2026-07-10",
    "amount": 550.0,
    "status": "paid",
    "memo": "Podcast Studio 4hr 6/25"
  },
  {
    "invoice_no": "INV-1060",
    "bill_to": "NorthPoint DFW",
    "email": "media@northpointdfw.org",
    "issued": "2026-06-29",
    "due": "2026-07-13",
    "amount": 240.0,
    "status": "paid",
    "memo": "B065 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1061",
    "bill_to": "Tasha Green",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-07-01",
    "due": "2026-07-15",
    "amount": 300.0,
    "status": "paid",
    "memo": "B064 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1062",
    "bill_to": "Torres Law",
    "email": "mtorres@torreslaw.com",
    "issued": "2026-07-01",
    "due": "2026-07-15",
    "amount": 2500.0,
    "status": "paid",
    "memo": "Monthly retainer July"
  },
  {
    "invoice_no": "INV-1063",
    "bill_to": "Patel Insurance Group",
    "email": "raj@patelinsures.com",
    "issued": "2026-07-01",
    "due": "2026-07-15",
    "amount": 2500.0,
    "status": "paid",
    "memo": "Monthly retainer July"
  },
  {
    "invoice_no": "INV-1064",
    "bill_to": "Apex PT",
    "email": "klee@apexptdallas.com",
    "issued": "2026-07-01",
    "due": "2026-07-15",
    "amount": 2500.0,
    "status": "paid",
    "memo": "Monthly retainer July"
  },
  {
    "invoice_no": "INV-1065",
    "bill_to": "Meridian WP",
    "email": "pgrant@meridianwp.com",
    "issued": "2026-07-01",
    "due": "2026-07-15",
    "amount": 2500.0,
    "status": "paid",
    "memo": "Monthly retainer July"
  },
  {
    "invoice_no": "INV-1066",
    "bill_to": "Brightline Marketing",
    "email": "kelsey@brightlinemktg.com",
    "issued": "2026-07-03",
    "due": "2026-07-17",
    "amount": 900.0,
    "status": "paid",
    "memo": "B066 Reels Pack"
  },
  {
    "invoice_no": "INV-1067",
    "bill_to": "Crown Barbers",
    "email": "andre@crownbarbers.com",
    "issued": "2026-07-07",
    "due": "2026-07-21",
    "amount": 900.0,
    "status": "paid",
    "memo": "B067 Reels Pack"
  },
  {
    "invoice_no": "INV-1068",
    "bill_to": "Tasha Green",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-07-07",
    "due": "2026-07-21",
    "amount": 300.0,
    "status": "paid",
    "memo": "Podcast Studio 2hr 7/7"
  },
  {
    "invoice_no": "INV-1069",
    "bill_to": "Ethan Cole",
    "email": "ethan@dfwfounders.fm",
    "issued": "2026-07-09",
    "due": "2026-07-23",
    "amount": 550.0,
    "status": "paid",
    "memo": "Podcast Studio 4hr 7/7"
  },
  {
    "invoice_no": "INV-1070",
    "bill_to": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "issued": "2026-07-09",
    "due": "2026-07-23",
    "amount": 240.0,
    "status": "paid",
    "memo": "B071 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1071",
    "bill_to": "Marcus Webb",
    "email": "marcus@ironcladgym.com",
    "issued": "2026-07-10",
    "due": "2026-07-24",
    "amount": 900.0,
    "status": "paid",
    "memo": "Reels Pack 7/8"
  },
  {
    "invoice_no": "INV-1072",
    "bill_to": "Lone Star Realty LLC",
    "email": "dana@lonestarrealty.com",
    "issued": "2026-07-10",
    "due": "2026-07-24",
    "amount": 1500.0,
    "status": "paid",
    "memo": "B082 Content Day"
  },
  {
    "invoice_no": "INV-1073",
    "bill_to": "Mike Delgado",
    "email": "mike@mikesroofingtx.com",
    "issued": "2026-07-13",
    "due": "2026-07-27",
    "amount": 900.0,
    "status": "paid",
    "memo": "B078 Reels Pack"
  },
  {
    "invoice_no": "INV-1074",
    "bill_to": "Brightline Marketing",
    "email": "kelsey@brightlinemktg.com",
    "issued": "2026-07-14",
    "due": "2026-07-28",
    "amount": 900.0,
    "status": "paid",
    "memo": "Reels Pack 7/13"
  },
  {
    "invoice_no": "INV-1075",
    "bill_to": "Hustle and Heart",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-07-15",
    "due": "2026-07-29",
    "amount": 300.0,
    "status": "paid",
    "memo": "Podcast Studio 2hr 7/13"
  },
  {
    "invoice_no": "INV-1076",
    "bill_to": "Elevate Fitness",
    "email": "jordan@elevatefit.co",
    "issued": "2026-07-16",
    "due": "2026-07-30",
    "amount": 900.0,
    "status": "paid",
    "memo": "Reels Pack 7/14"
  },
  {
    "invoice_no": "INV-1077",
    "bill_to": "Dr. Maria Lopez",
    "email": "mlopez@sagefamilytherapy.com",
    "issued": "2026-07-16",
    "due": "2026-07-30",
    "amount": 1500.0,
    "status": "paid",
    "memo": "B080 Content Day"
  },
  {
    "invoice_no": "INV-1078",
    "bill_to": "Harbor Coffee Roasters",
    "email": "jen@harborcoffee.com",
    "issued": "2026-07-17",
    "due": "2026-07-31",
    "amount": 900.0,
    "status": "paid",
    "memo": "Reels Pack 7/15"
  },
  {
    "invoice_no": "INV-1079",
    "bill_to": "Bloom Med Spa",
    "email": "priya@bloommedspa.com",
    "issued": "2026-07-17",
    "due": "2026-07-31",
    "amount": 1500.0,
    "status": "paid",
    "memo": "B083 Content Day"
  },
  {
    "invoice_no": "INV-1080",
    "bill_to": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "issued": "2026-07-17",
    "due": "2026-07-31",
    "amount": 240.0,
    "status": "paid",
    "memo": "Podcast Studio 2hr 7/16"
  },
  {
    "invoice_no": "INV-1081",
    "bill_to": "Hannah Brooks DDS",
    "email": "hbrooks@oaklanedental.com",
    "issued": "2026-07-19",
    "due": "2026-08-02",
    "amount": 1500.0,
    "status": "paid",
    "memo": "B085 Content Day"
  },
  {
    "invoice_no": "INV-1082",
    "bill_to": "Khans Auto",
    "email": "imran@khansautospa.com",
    "issued": "2026-07-20",
    "due": "2026-08-03",
    "amount": 900.0,
    "status": "paid",
    "memo": "Reels Pack 7/20"
  },
  {
    "invoice_no": "INV-1083",
    "bill_to": "Hustle & Heart",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-07-22",
    "due": "2026-08-05",
    "amount": 300.0,
    "status": "paid",
    "memo": "Podcast Studio 2hr 7/20"
  },
  {
    "invoice_no": "INV-1084",
    "bill_to": "DFW Founders",
    "email": "ethan@dfwfounders.fm",
    "issued": "2026-07-22",
    "due": "2026-08-05",
    "amount": 550.0,
    "status": "paid",
    "memo": "Podcast Studio 4hr 7/22"
  },
  {
    "invoice_no": "INV-1085",
    "bill_to": "Luna Bridal Boutique",
    "email": "sofia@lunabridal.com",
    "issued": "2026-07-23",
    "due": "2026-08-06",
    "amount": 900.0,
    "status": "paid",
    "memo": "B088 Reels Pack"
  },
  {
    "invoice_no": "INV-1086",
    "bill_to": "Sarah Khan DDS",
    "email": "sarah@khandental.com",
    "issued": "2026-07-23",
    "due": "2026-08-06",
    "amount": 1500.0,
    "status": "paid",
    "memo": "B090 Content Day"
  },
  {
    "invoice_no": "INV-1087",
    "bill_to": "NorthPoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-07-25",
    "due": "2026-08-08",
    "amount": 240.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1088",
    "bill_to": "Glow Aesthetics",
    "email": "nadia@glowaesthetics.co",
    "issued": "2026-07-29",
    "due": "2026-08-12",
    "amount": 900.0,
    "status": "paid",
    "memo": "B092 Reels Pack"
  },
  {
    "invoice_no": "INV-1089",
    "bill_to": "Aisha Khan",
    "email": "info@khanfamilylaw.com",
    "issued": "2026-07-29",
    "due": "2026-08-12",
    "amount": 900.0,
    "status": "paid",
    "memo": "B093 Reels Pack"
  },
  {
    "invoice_no": "INV-1090",
    "bill_to": "Tasha Green",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-07-29",
    "due": "2026-08-12",
    "amount": 300.0,
    "status": "paid",
    "memo": "B094 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1091",
    "bill_to": "Torres Law Firm PLLC",
    "email": "mtorres@torreslaw.com",
    "issued": "2026-08-01",
    "due": "2026-08-15",
    "amount": 2500.0,
    "status": "paid",
    "memo": "Monthly retainer August"
  },
  {
    "invoice_no": "INV-1092",
    "bill_to": "Raj Patel",
    "email": "raj@patelinsures.com",
    "issued": "2026-08-01",
    "due": "2026-08-15",
    "amount": 2500.0,
    "status": "paid",
    "memo": "Monthly retainer August"
  },
  {
    "invoice_no": "INV-1093",
    "bill_to": "Apex PT",
    "email": "klee@apexptdallas.com",
    "issued": "2026-08-01",
    "due": "2026-08-15",
    "amount": 2000.0,
    "status": "paid",
    "memo": "Monthly retainer August"
  },
  {
    "invoice_no": "INV-1094",
    "bill_to": "Brewlab Coffee",
    "email": "lena@thebrewlab.coffee",
    "issued": "2026-08-03",
    "due": "2026-08-17",
    "amount": 900.0,
    "status": "paid",
    "memo": "B095 Reels Pack"
  },
  {
    "invoice_no": "INV-1095",
    "bill_to": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-08-04",
    "due": "2026-08-18",
    "amount": 240.0,
    "status": "paid",
    "memo": "B096 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1096",
    "bill_to": "Brightline Marketing",
    "email": "kelsey@brightlinemktg.com",
    "issued": "2026-08-04",
    "due": "2026-08-18",
    "amount": 900.0,
    "status": "paid",
    "memo": "B099 Reels Pack"
  },
  {
    "invoice_no": "INV-1097",
    "bill_to": "DFW Founders",
    "email": "ethan@dfwfounders.fm",
    "issued": "2026-08-06",
    "due": "2026-08-20",
    "amount": 550.0,
    "status": "paid",
    "memo": "Podcast Studio 4hr 8/4"
  },
  {
    "invoice_no": "INV-1098",
    "bill_to": "Ironclad Gym",
    "email": "marcus@ironcladgym.com",
    "issued": "2026-08-06",
    "due": "2026-08-20",
    "amount": 900.0,
    "status": "paid",
    "memo": "Reels Pack 8/4"
  },
  {
    "invoice_no": "INV-1099",
    "bill_to": "Elevate Athletics",
    "email": "jordan@elevateathletics.com",
    "issued": "2026-08-07",
    "due": "2026-08-21",
    "amount": 900.0,
    "status": "paid",
    "memo": "Reels Pack 8/5"
  },
  {
    "invoice_no": "INV-1100",
    "bill_to": "Prime Roofing",
    "email": "tony@primeroofingco.com",
    "issued": "2026-08-07",
    "due": "2026-08-21",
    "amount": 900.0,
    "status": "paid",
    "memo": "Reels Pack 8/5"
  },
  {
    "invoice_no": "INV-1101",
    "bill_to": "H&H Podcast",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-08-08",
    "due": "2026-08-22",
    "amount": 300.0,
    "status": "unpaid",
    "memo": "B102 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1102",
    "bill_to": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-08-10",
    "due": "2026-08-24",
    "amount": 240.0,
    "status": "paid",
    "memo": "B104 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1103",
    "bill_to": "Mike's Roofing",
    "email": "mike@mikesroofingtx.com",
    "issued": "2026-08-12",
    "due": "2026-08-26",
    "amount": 900.0,
    "status": "unpaid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1104",
    "bill_to": "Hustle & Heart",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-08-12",
    "due": "2026-08-26",
    "amount": 300.0,
    "status": "unpaid",
    "memo": "B106 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1105",
    "bill_to": "Bloom Med Spa",
    "email": "priya@bloommedspa.com",
    "issued": "2026-08-13",
    "due": "2026-08-27",
    "amount": 1500.0,
    "status": "paid",
    "memo": "B107 Content Day"
  },
  {
    "invoice_no": "INV-1106",
    "bill_to": "Lonestar Realty Group",
    "email": "greg@lonestarrg.com",
    "issued": "2026-08-14",
    "due": "2026-08-28",
    "amount": 1500.0,
    "status": "unpaid",
    "memo": "B108 Content Day"
  },
  {
    "invoice_no": "INV-1107",
    "bill_to": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "issued": "2026-08-17",
    "due": "2026-08-31",
    "amount": 240.0,
    "status": "paid",
    "memo": "B114 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1108",
    "bill_to": "Ethan Cole",
    "email": "ethan@dfwfounders.fm",
    "issued": "2026-08-19",
    "due": "2026-09-02",
    "amount": 550.0,
    "status": "paid",
    "memo": "B111 Podcast Studio 4hr"
  },
  {
    "invoice_no": "INV-1109",
    "bill_to": "Brightline Marketing",
    "email": "kelsey@brightlinemktg.com",
    "issued": "2026-08-19",
    "due": "2026-09-02",
    "amount": 900.0,
    "status": "paid",
    "memo": "B112 Reels Pack"
  },
  {
    "invoice_no": "INV-1110",
    "bill_to": "Hustle and Heart",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-08-19",
    "due": "2026-09-02",
    "amount": 300.0,
    "status": "unpaid",
    "memo": "B113 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1111",
    "bill_to": "Luna Bridal",
    "email": "sofia@lunabridal.com",
    "issued": "2026-08-20",
    "due": "2026-09-03",
    "amount": 900.0,
    "status": "paid",
    "memo": "B115 Reels Pack"
  },
  {
    "invoice_no": "INV-1112",
    "bill_to": "Lone Star Realty LLC",
    "email": "dana@lonestarrealty.com",
    "issued": "2026-08-23",
    "due": "2026-09-06",
    "amount": 1500.0,
    "status": "paid",
    "memo": "Content Day 8/28"
  },
  {
    "invoice_no": "INV-1113",
    "bill_to": "Hustle & Heart",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-08-25",
    "due": "2026-09-08",
    "amount": 300.0,
    "status": "unpaid",
    "memo": "Podcast Studio 2hr 8/25"
  },
  {
    "invoice_no": "INV-1114",
    "bill_to": "NorthPoint DFW",
    "email": "media@northpointdfw.org",
    "issued": "2026-08-26",
    "due": "2026-09-09",
    "amount": 240.0,
    "status": "paid",
    "memo": "B116 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1115",
    "bill_to": "Elevate",
    "email": "jordan@elevateathletics.com",
    "issued": "2026-08-27",
    "due": "2026-09-10",
    "amount": 900.0,
    "status": "paid",
    "memo": "B117 Reels Pack"
  },
  {
    "invoice_no": "INV-1116",
    "bill_to": "Harbor Roasters",
    "email": "jen@harborcoffee.com",
    "issued": "2026-08-27",
    "due": "2026-09-10",
    "amount": 900.0,
    "status": "unpaid",
    "memo": "B119 Reels Pack"
  },
  {
    "invoice_no": "INV-1117",
    "bill_to": "Hannah Brooks DDS",
    "email": "hbrooks@oaklanedental.com",
    "issued": "2026-08-30",
    "due": "2026-09-13",
    "amount": 1500.0,
    "status": "paid",
    "memo": "Content Day 8/28"
  },
  {
    "invoice_no": "INV-1118",
    "bill_to": "NorthPoint Media Team",
    "email": "media@northpointdfw.org",
    "issued": "2026-08-31",
    "due": "2026-09-14",
    "amount": 240.0,
    "status": "paid",
    "memo": "B123 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1119",
    "bill_to": "Vega Auto",
    "email": "carlos.vega.detail@gmail.com",
    "issued": "2026-08-31",
    "due": "2026-09-14",
    "amount": 900.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1120",
    "bill_to": "Sarah Khan DDS",
    "email": "sarah@khandental.com",
    "issued": "2026-09-01",
    "due": "2026-09-15",
    "amount": 1500.0,
    "status": "paid",
    "memo": "B122 Content Day"
  },
  {
    "invoice_no": "INV-1121",
    "bill_to": "Prime Roofing",
    "email": "tony@primeroofingco.com",
    "issued": "2026-09-01",
    "due": "2026-09-15",
    "amount": 900.0,
    "status": "partial",
    "memo": "B127 Reels Pack"
  },
  {
    "invoice_no": "INV-1122",
    "bill_to": "TLC Homecare",
    "email": "angela@tlchomecare.com",
    "issued": "2026-09-01",
    "due": "2026-09-15",
    "amount": 1500.0,
    "status": "unpaid",
    "memo": "B128 Content Day"
  },
  {
    "invoice_no": "INV-1123",
    "bill_to": "Torres Law",
    "email": "mtorres@torreslaw.com",
    "issued": "2026-09-01",
    "due": "2026-09-15",
    "amount": 2500.0,
    "status": "paid",
    "memo": "Monthly retainer September"
  },
  {
    "invoice_no": "INV-1124",
    "bill_to": "Patel Insurance",
    "email": "raj@patelinsures.com",
    "issued": "2026-09-01",
    "due": "2026-09-15",
    "amount": 2500.0,
    "status": "unpaid",
    "memo": "Monthly retainer September"
  },
  {
    "invoice_no": "INV-1125",
    "bill_to": "Glow Aesthetic",
    "email": "nadia@glowaesthetics.co",
    "issued": "2026-09-02",
    "due": "2026-09-16",
    "amount": 900.0,
    "status": "paid",
    "memo": "B125 Reels Pack"
  },
  {
    "invoice_no": "INV-1126",
    "bill_to": "DFW Founders Podcast",
    "email": "ethan@dfwfounders.fm",
    "issued": "2026-09-02",
    "due": "2026-09-16",
    "amount": 550.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1127",
    "bill_to": "Mike's Roofing LLC",
    "email": "mike@mikesroofingtx.com",
    "issued": "2026-09-07",
    "due": "2026-09-21",
    "amount": 900.0,
    "status": "unpaid",
    "memo": "Reels Pack 9/7"
  },
  {
    "invoice_no": "INV-1128",
    "bill_to": "Brightline Marketing",
    "email": "kelsey@brightlinemktg.com",
    "issued": "2026-09-07",
    "due": "2026-09-21",
    "amount": 900.0,
    "status": "unpaid",
    "memo": "B135 Reels Pack"
  },
  {
    "invoice_no": "INV-1129",
    "bill_to": "Khan Family Law",
    "email": "info@khanfamilylaw.com",
    "issued": "2026-09-08",
    "due": "2026-09-22",
    "amount": 900.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1130",
    "bill_to": "Tasha Green",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-09-08",
    "due": "2026-09-22",
    "amount": 300.0,
    "status": "unpaid",
    "memo": "B136 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1131",
    "bill_to": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-09-09",
    "due": "2026-09-23",
    "amount": 240.0,
    "status": "paid",
    "memo": "B133 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1132",
    "bill_to": "Bloom Med Spa",
    "email": "priya@bloommedspa.com",
    "issued": "2026-09-12",
    "due": "2026-09-26",
    "amount": 1500.0,
    "status": "paid",
    "memo": "B138 Content Day"
  },
  {
    "invoice_no": "INV-1133",
    "bill_to": "Brew Lab",
    "email": "lena@thebrewlab.coffee",
    "issued": "2026-09-15",
    "due": "2026-09-29",
    "amount": 900.0,
    "status": "paid",
    "memo": "B140 Reels Pack"
  },
  {
    "invoice_no": "INV-1134",
    "bill_to": "Sofia Ramirez",
    "email": "sofia@lunabridal.com",
    "issued": "2026-09-16",
    "due": "2026-09-30",
    "amount": 900.0,
    "status": "paid",
    "memo": "B141 Reels Pack"
  },
  {
    "invoice_no": "INV-1135",
    "bill_to": "NorthPoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-09-17",
    "due": "2026-10-01",
    "amount": 240.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1136",
    "bill_to": "Elevate",
    "email": "jordan@elevateathletics.com",
    "issued": "2026-09-18",
    "due": "2026-10-02",
    "amount": 900.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1137",
    "bill_to": "Dana Brooks",
    "email": "dana@lonestarrealty.com",
    "issued": "2026-09-19",
    "due": "2026-10-03",
    "amount": 1500.0,
    "status": "paid",
    "memo": "Content Day 9/24"
  },
  {
    "invoice_no": "INV-1138",
    "bill_to": "Vega Auto",
    "email": "carlos.vega.detail@gmail.com",
    "issued": "2026-09-22",
    "due": "2026-10-06",
    "amount": 900.0,
    "status": "paid",
    "memo": "Reels Pack 9/21"
  },
  {
    "invoice_no": "INV-1139",
    "bill_to": "Hustle and Heart",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-09-23",
    "due": "2026-10-07",
    "amount": 300.0,
    "status": "unpaid",
    "memo": "B149 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1140",
    "bill_to": "NorthPoint DFW",
    "email": "media@northpointdfw.org",
    "issued": "2026-09-23",
    "due": "2026-10-07",
    "amount": 240.0,
    "status": "paid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1141",
    "bill_to": "Brightline Marketing",
    "email": "kelsey@brightlinemktg.com",
    "issued": "2026-09-25",
    "due": "2026-10-09",
    "amount": 900.0,
    "status": "paid",
    "memo": "B148 Reels Pack"
  },
  {
    "invoice_no": "INV-1142",
    "bill_to": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "issued": "2026-09-29",
    "due": "2026-10-13",
    "amount": 240.0,
    "status": "paid",
    "memo": "B153 Podcast Studio 2hr"
  },
  {
    "invoice_no": "INV-1143",
    "bill_to": "Tony Russo",
    "email": "tony@primeroofingco.com",
    "issued": "2026-09-30",
    "due": "2026-10-14",
    "amount": 900.0,
    "status": "unpaid",
    "memo": "B152 Reels Pack"
  },
  {
    "invoice_no": "INV-1144",
    "bill_to": "Torres Law Firm PLLC",
    "email": "mtorres@torreslaw.com",
    "issued": "2026-10-01",
    "due": "2026-10-15",
    "amount": 2500.0,
    "status": "unpaid",
    "memo": "Monthly retainer October"
  },
  {
    "invoice_no": "INV-1145",
    "bill_to": "Patel Insurance",
    "email": "raj@patelinsures.com",
    "issued": "2026-10-01",
    "due": "2026-10-15",
    "amount": 2500.0,
    "status": "unpaid",
    "memo": "Monthly retainer October"
  },
  {
    "invoice_no": "INV-1146",
    "bill_to": "Apex Physical Therapy",
    "email": "klee@apexptdallas.com",
    "issued": "2026-10-01",
    "due": "2026-10-15",
    "amount": 2500.0,
    "status": "paid",
    "memo": "Monthly retainer October"
  },
  {
    "invoice_no": "INV-1147",
    "bill_to": "DFW Founders Podcast",
    "email": "ethan@dfwfounders.fm",
    "issued": "2026-10-03",
    "due": "2026-10-17",
    "amount": 550.0,
    "status": "unpaid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1148",
    "bill_to": "Hustle and Heart",
    "email": "tasha@hustleandheart.fm",
    "issued": "2026-10-03",
    "due": "2026-10-17",
    "amount": 300.0,
    "status": "unpaid",
    "memo": ""
  },
  {
    "invoice_no": "INV-1149",
    "bill_to": "Ironclad Fitness",
    "email": "marcus@ironcladgym.com",
    "issued": "2026-10-04",
    "due": "2026-10-18",
    "amount": 900.0,
    "status": "paid",
    "memo": "B156 Reels Pack"
  },
  {
    "invoice_no": "INV-1150",
    "bill_to": "Lone Star Realty",
    "email": "dana@lonestarrealty.com",
    "issued": "2026-10-04",
    "due": "2026-10-18",
    "amount": 1500.0,
    "status": "paid",
    "memo": "B165 Content Day"
  },
  {
    "invoice_no": "INV-1151",
    "bill_to": "Khan Dental PLLC",
    "email": "sarah@khandental.com",
    "issued": "2026-10-05",
    "due": "2026-10-19",
    "amount": 1500.0,
    "status": "unpaid",
    "memo": "B157 Content Day"
  },
  {
    "invoice_no": "INV-1152",
    "bill_to": "Mike's Roofing LLC",
    "email": "mike@mikesroofingtx.com",
    "issued": "2026-10-05",
    "due": "2026-10-19",
    "amount": 900.0,
    "status": "unpaid",
    "memo": "B158 Reels Pack"
  },
  {
    "invoice_no": "INV-1153",
    "bill_to": "Bloom Med Spa",
    "email": "priya@bloommedspa.com",
    "issued": "2026-08-13",
    "due": "2026-08-27",
    "amount": 1500.0,
    "status": "void",
    "memo": "B107 Content Day"
  }
];

export const initialPayments: Payment[] = [
  {
    "payment_id": "P5001",
    "date": "09/04/2026",
    "payer": "PASTOR DAVID KIM",
    "payer_email": "media@northpointdfw.org",
    "amount": 300.0,
    "method": "Zelle",
    "reference": "INV-1001"
  },
  {
    "payment_id": "P5002",
    "date": "10/04/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1002"
  },
  {
    "payment_id": "P5003",
    "date": "11/04/2026",
    "payer": "Dr. Sarah Khan",
    "payer_email": "sarah@khandental.com",
    "amount": 1500.0,
    "method": "card",
    "reference": "INV-1003"
  },
  {
    "payment_id": "P5004",
    "date": "16/04/2026",
    "payer": "Northpoint Church",
    "payer_email": "media@northpointdfw.org",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1007"
  },
  {
    "payment_id": "P5005",
    "date": "17/04/2026",
    "payer": "Cedar and Stone",
    "payer_email": "will@cedarstone.build",
    "amount": 1500.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5006",
    "date": "17/04/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1005"
  },
  {
    "payment_id": "P5007",
    "date": "20/04/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1010"
  },
  {
    "payment_id": "P5008",
    "date": "23/04/2026",
    "payer": "DFW Founders Podcast",
    "payer_email": "ethan@dfwfounders.fm",
    "amount": 550.0,
    "method": "card",
    "reference": "INV-1004"
  },
  {
    "payment_id": "P5009",
    "date": "24/04/2026",
    "payer": "NORTHPOINT CHURCH",
    "payer_email": "media@northpointdfw.org",
    "amount": 300.0,
    "method": "ACH",
    "reference": ""
  },
  {
    "payment_id": "P5010",
    "date": "25/04/2026",
    "payer": "BLOOM MEDSPA",
    "payer_email": "priya@bloommedspa.com",
    "amount": 1500.0,
    "method": "ACH",
    "reference": ""
  },
  {
    "payment_id": "P5011",
    "date": "30/04/2026",
    "payer": "DFW FOUNDERS",
    "payer_email": "ethan@dfwfounders.fm",
    "amount": 550.0,
    "method": "Zelle",
    "reference": ""
  },
  {
    "payment_id": "P5012",
    "date": "01/05/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1014"
  },
  {
    "payment_id": "P5013",
    "date": "02/05/2026",
    "payer": "NorthPoint Church",
    "payer_email": "media@northpointdfw.org",
    "amount": 300.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5014",
    "date": "06/05/2026",
    "payer": "Luna Bridal Boutique",
    "payer_email": "sofia@lunabridal.com",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1013"
  },
  {
    "payment_id": "P5015",
    "date": "07/05/2026",
    "payer": "Meridian Wealth Partners",
    "payer_email": "pgrant@meridianwp.com",
    "amount": 2500.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5016",
    "date": "07/05/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1017"
  },
  {
    "payment_id": "P5017",
    "date": "14/05/2026",
    "payer": "Elevate Fitness",
    "payer_email": "jordan@elevatefit.co",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1020"
  },
  {
    "payment_id": "P5018",
    "date": "16/05/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1023"
  },
  {
    "payment_id": "P5019",
    "date": "17/05/2026",
    "payer": "MIKE DELGADO",
    "payer_email": "mike@mikesroofingtx.com",
    "amount": 900.0,
    "method": "Zelle",
    "reference": "INV-1008"
  },
  {
    "payment_id": "P5020",
    "date": "17/05/2026",
    "payer": "DFW Founders Podcast",
    "payer_email": "ethan@dfwfounders.fm",
    "amount": 550.0,
    "method": "card",
    "reference": "INV-1019"
  },
  {
    "payment_id": "P5021",
    "date": "17/05/2026",
    "payer": "DR. SARAH KHAN",
    "payer_email": "sarah@khandental.com",
    "amount": 1500.0,
    "method": "ACH",
    "reference": "INV-1021"
  },
  {
    "payment_id": "P5022",
    "date": "17/05/2026",
    "payer": "PASTOR DAVID KIM",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "Zelle",
    "reference": ""
  },
  {
    "payment_id": "P5023",
    "date": "18/05/2026",
    "payer": "PASTOR DAVID KIM",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "ACH",
    "reference": "INV-1018"
  },
  {
    "payment_id": "P5024",
    "date": "21/05/2026",
    "payer": "NADIA HASSAN",
    "payer_email": "nadia@glowaesthetics.co",
    "amount": 900.0,
    "method": "ACH",
    "reference": "INV-1022"
  },
  {
    "payment_id": "P5025",
    "date": "22/05/2026",
    "payer": "Northpoint Church",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "card",
    "reference": "INV-1026"
  },
  {
    "payment_id": "P5026",
    "date": "25/05/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1028"
  },
  {
    "payment_id": "P5027",
    "date": "27/05/2026",
    "payer": "Ethan Cole",
    "payer_email": "ethan@dfwfounders.fm",
    "amount": 550.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5028",
    "date": "29/05/2026",
    "payer": "Sofia Ramirez",
    "payer_email": "sofia@lunabridal.com",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1033"
  },
  {
    "payment_id": "P5029",
    "date": "31/05/2026",
    "payer": "PRIYA SHAH",
    "payer_email": "priya@bloommedspa.com",
    "amount": 1500.0,
    "method": "ACH",
    "reference": "INV-1027"
  },
  {
    "payment_id": "P5030",
    "date": "31/05/2026",
    "payer": "ANDRE JACKSON",
    "payer_email": "andre@crownbarbers.com",
    "amount": 900.0,
    "method": "Zelle",
    "reference": "INV-1029"
  },
  {
    "payment_id": "P5031",
    "date": "31/05/2026",
    "payer": "Lone Star Realty LLC",
    "payer_email": "dana@lonestarrealty.com",
    "amount": 1500.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5032",
    "date": "01/06/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1034"
  },
  {
    "payment_id": "P5033",
    "date": "04/06/2026",
    "payer": "PATEL INSURANCE GROUP",
    "payer_email": "raj@patelinsures.com",
    "amount": 2500.0,
    "method": "ACH",
    "reference": "INV-1036"
  },
  {
    "payment_id": "P5034",
    "date": "05/06/2026",
    "payer": "PAUL GRANT",
    "payer_email": "pgrant@meridianwp.com",
    "amount": 2500.0,
    "method": "ACH",
    "reference": ""
  },
  {
    "payment_id": "P5035",
    "date": "06/06/2026",
    "payer": "PASTOR DAVID KIM",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "ACH",
    "reference": ""
  },
  {
    "payment_id": "P5036",
    "date": "06/06/2026",
    "payer": "DR. HANNAH BROOKS",
    "payer_email": "hbrooks@oaklanedental.com",
    "amount": 1500.0,
    "method": "ACH",
    "reference": ""
  },
  {
    "payment_id": "P5037",
    "date": "09/06/2026",
    "payer": "JORDAN REED",
    "payer_email": "jordan@elevatefit.co",
    "amount": 900.0,
    "method": "ACH",
    "reference": "INV-1039"
  },
  {
    "payment_id": "P5038",
    "date": "09/06/2026",
    "payer": "NorthPoint DFW",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "card",
    "reference": "INV-1040"
  },
  {
    "payment_id": "P5039",
    "date": "11/06/2026",
    "payer": "TORRES LAW FIRM PLLC",
    "payer_email": "mtorres@torreslaw.com",
    "amount": 2500.0,
    "method": "Zelle",
    "reference": "INV-1035"
  },
  {
    "payment_id": "P5040",
    "date": "11/06/2026",
    "payer": "APEX PT",
    "payer_email": "klee@apexptdallas.com",
    "amount": 2500.0,
    "method": "ACH",
    "reference": "INV-1037"
  },
  {
    "payment_id": "P5041",
    "date": "12/06/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1042"
  },
  {
    "payment_id": "P5042",
    "date": "13/06/2026",
    "payer": "ETHAN COLE",
    "payer_email": "ethan@dfwfounders.fm",
    "amount": 550.0,
    "method": "ACH",
    "reference": ""
  },
  {
    "payment_id": "P5043",
    "date": "16/06/2026",
    "payer": "Cedar & Stone",
    "payer_email": "will@cedarstone.build",
    "amount": 1500.0,
    "method": "card",
    "reference": "INV-1043"
  },
  {
    "payment_id": "P5044",
    "date": "18/06/2026",
    "payer": "Northpoint Church",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "card",
    "reference": "INV-1045"
  },
  {
    "payment_id": "P5045",
    "date": "19/06/2026",
    "payer": "MIKE DELGADO",
    "payer_email": "mike@mikesroofingtx.com",
    "amount": 900.0,
    "method": "ACH",
    "reference": ""
  },
  {
    "payment_id": "P5046",
    "date": "19/06/2026",
    "payer": "Aisha Khan",
    "payer_email": "info@khanfamilylaw.com",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1049"
  },
  {
    "payment_id": "P5047",
    "date": "19/06/2026",
    "payer": "KHAN DENTAL",
    "payer_email": "sarah@khandental.com",
    "amount": 1500.0,
    "method": "Zelle",
    "reference": "INV-1052"
  },
  {
    "payment_id": "P5048",
    "date": "19/06/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1048"
  },
  {
    "payment_id": "P5049",
    "date": "23/06/2026",
    "payer": "BLOOM MED SPA - PLANO",
    "payer_email": "priya@bloommedspa.com",
    "amount": 1500.0,
    "method": "Zelle",
    "reference": "INV-1050"
  },
  {
    "payment_id": "P5050",
    "date": "24/06/2026",
    "payer": "Elevate Fitness",
    "payer_email": "jordan@elevatefit.co",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1054"
  },
  {
    "payment_id": "P5051",
    "date": "27/06/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1055"
  },
  {
    "payment_id": "P5052",
    "date": "28/06/2026",
    "payer": "PASTOR DAVID KIM",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "Zelle",
    "reference": "INV-1051"
  },
  {
    "payment_id": "P5053",
    "date": "28/06/2026",
    "payer": "ETHAN COLE",
    "payer_email": "ethan@dfwfounders.fm",
    "amount": 550.0,
    "method": "ACH",
    "reference": "INV-1059"
  },
  {
    "payment_id": "P5054",
    "date": "29/06/2026",
    "payer": "PASTOR DAVID KIM",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "ACH",
    "reference": "INV-1056"
  },
  {
    "payment_id": "P5055",
    "date": "30/06/2026",
    "payer": "Brew Lab",
    "payer_email": "lena@thebrewlab.coffee",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1053"
  },
  {
    "payment_id": "P5056",
    "date": "30/06/2026",
    "payer": "PASTOR DAVID KIM",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "ACH",
    "reference": "INV-1060"
  },
  {
    "payment_id": "P5057",
    "date": "01/07/2026",
    "payer": "Luna Bridal",
    "payer_email": "sofia@lunabridal.com",
    "amount": 900.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5058",
    "date": "02/07/2026",
    "payer": "GLOW AESTHETICS",
    "payer_email": "nadia@glowaesthetics.co",
    "amount": 900.0,
    "method": "ACH",
    "reference": "INV-1057"
  },
  {
    "payment_id": "P5059",
    "date": "02/07/2026",
    "payer": "Meridian WP",
    "payer_email": "pgrant@meridianwp.com",
    "amount": 2500.0,
    "method": "card",
    "reference": "INV-1065"
  },
  {
    "payment_id": "P5060",
    "date": "03/07/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1061"
  },
  {
    "payment_id": "P5061",
    "date": "04/07/2026",
    "payer": "BRIGHTLINE MARKETING LLC",
    "payer_email": "kelsey@brightlinemktg.com",
    "amount": 900.0,
    "method": "ACH",
    "reference": "Brightline Jun invoices"
  },
  {
    "payment_id": "P5062",
    "date": "07/07/2026",
    "payer": "DR. KIM LEE",
    "payer_email": "klee@apexptdallas.com",
    "amount": 2500.0,
    "method": "Zelle",
    "reference": ""
  },
  {
    "payment_id": "P5063",
    "date": "07/07/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1068"
  },
  {
    "payment_id": "P5064",
    "date": "08/07/2026",
    "payer": "PATEL INSURANCE GROUP",
    "payer_email": "raj@patelinsures.com",
    "amount": 2500.0,
    "method": "ACH",
    "reference": ""
  },
  {
    "payment_id": "P5065",
    "date": "12/07/2026",
    "payer": "MIKE TORRES",
    "payer_email": "mtorres@torreslaw.com",
    "amount": 2500.0,
    "method": "Zelle",
    "reference": "INV-1062"
  },
  {
    "payment_id": "P5066",
    "date": "13/07/2026",
    "payer": "NorthPoint Media Team",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "card",
    "reference": "INV-1070"
  },
  {
    "payment_id": "P5067",
    "date": "16/07/2026",
    "payer": "ETHAN COLE",
    "payer_email": "ethan@dfwfounders.fm",
    "amount": 550.0,
    "method": "ACH",
    "reference": "INV-1069"
  },
  {
    "payment_id": "P5068",
    "date": "16/07/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1075"
  },
  {
    "payment_id": "P5070",
    "date": "18/07/2026",
    "payer": "Marcus Webb",
    "payer_email": "marcus@ironcladgym.com",
    "amount": 900.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5071",
    "date": "19/07/2026",
    "payer": "Dr. Maria Lopez",
    "payer_email": "mlopez@sagefamilytherapy.com",
    "amount": 1500.0,
    "method": "card",
    "reference": "INV-1077"
  },
  {
    "payment_id": "P5072",
    "date": "20/07/2026",
    "payer": "MIKE'S ROOFING LLC",
    "payer_email": "mike@mikesroofingtx.com",
    "amount": 900.0,
    "method": "Zelle",
    "reference": "INV-1047"
  },
  {
    "payment_id": "P5073",
    "date": "22/07/2026",
    "payer": "Lone Star Realty LLC",
    "payer_email": "dana@lonestarrealty.com",
    "amount": 1500.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5074",
    "date": "23/07/2026",
    "payer": "Harbor Coffee Roasters",
    "payer_email": "jen@harborcoffee.com",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1078"
  },
  {
    "payment_id": "P5075",
    "date": "24/07/2026",
    "payer": "BLOOM MED SPA",
    "payer_email": "priya@bloommedspa.com",
    "amount": 1500.0,
    "method": "ACH",
    "reference": "INV-1079"
  },
  {
    "payment_id": "P5076",
    "date": "24/07/2026",
    "payer": "DR. HANNAH BROOKS",
    "payer_email": "hbrooks@oaklanedental.com",
    "amount": 1500.0,
    "method": "Zelle",
    "reference": "INV-1081"
  },
  {
    "payment_id": "P5077",
    "date": "24/07/2026",
    "payer": "DFW Founders",
    "payer_email": "ethan@dfwfounders.fm",
    "amount": 550.0,
    "method": "card",
    "reference": "INV-1084"
  },
  {
    "payment_id": "P5078",
    "date": "25/07/2026",
    "payer": "IMRAN KHAN",
    "payer_email": "imran@khansautospa.com",
    "amount": 900.0,
    "method": "Zelle",
    "reference": "INV-1082"
  },
  {
    "payment_id": "P5079",
    "date": "25/07/2026",
    "payer": "Sarah Khan DDS",
    "payer_email": "sarah@khandental.com",
    "amount": 1500.0,
    "method": "card",
    "reference": "INV-1086"
  },
  {
    "payment_id": "P5080",
    "date": "26/07/2026",
    "payer": "Elevate Fitness",
    "payer_email": "jordan@elevatefit.co",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1076"
  },
  {
    "payment_id": "P5081",
    "date": "26/07/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1083"
  },
  {
    "payment_id": "P5082",
    "date": "27/07/2026",
    "payer": "NorthPoint Media Team",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5083",
    "date": "29/07/2026",
    "payer": "Luna Bridal Boutique",
    "payer_email": "sofia@lunabridal.com",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1085"
  },
  {
    "payment_id": "P5084",
    "date": "30/07/2026",
    "payer": "GLOW AESTHETICS",
    "payer_email": "nadia@glowaesthetics.co",
    "amount": 900.0,
    "method": "Zelle",
    "reference": "INV-1088"
  },
  {
    "payment_id": "P5085",
    "date": "31/07/2026",
    "payer": "Aisha Khan",
    "payer_email": "info@khanfamilylaw.com",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1089"
  },
  {
    "payment_id": "P5086",
    "date": "31/07/2026",
    "payer": "Nadia Hassan",
    "payer_email": "nadia@glowaesthetics.co",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1088"
  },
  {
    "payment_id": "P5087",
    "date": "02/08/2026",
    "payer": "Tasha Green",
    "payer_email": "tasha@hustleandheart.fm",
    "amount": 300.0,
    "method": "card",
    "reference": "INV-1090"
  },
  {
    "payment_id": "P5088",
    "date": "03/08/2026",
    "payer": "Apex PT",
    "payer_email": "klee@apexptdallas.com",
    "amount": 2000.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5089",
    "date": "04/08/2026",
    "payer": "NorthPoint Church",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "card",
    "reference": "INV-1087"
  },
  {
    "payment_id": "P5090",
    "date": "04/08/2026",
    "payer": "BRIGHTLINE MARKETING LLC",
    "payer_email": "kelsey@brightlinemktg.com",
    "amount": 1800.0,
    "method": "ACH",
    "reference": "Brightline Jul invoices"
  },
  {
    "payment_id": "P5091",
    "date": "07/08/2026",
    "payer": "PATEL INSURANCE GROUP",
    "payer_email": "raj@patelinsures.com",
    "amount": 2500.0,
    "method": "ACH",
    "reference": "INV-1092"
  },
  {
    "payment_id": "P5092",
    "date": "07/08/2026",
    "payer": "Brewlab Coffee",
    "payer_email": "lena@thebrewlab.coffee",
    "amount": 900.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5093",
    "date": "08/08/2026",
    "payer": "NORTHPOINT CHURCH",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "ACH",
    "reference": "INV-1095"
  },
  {
    "payment_id": "P5094",
    "date": "08/08/2026",
    "payer": "DFW Founders",
    "payer_email": "ethan@dfwfounders.fm",
    "amount": 550.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5095",
    "date": "09/08/2026",
    "payer": "Mike Delgado",
    "payer_email": "mike@mikesroofingtx.com",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1073"
  },
  {
    "payment_id": "P5096",
    "date": "09/08/2026",
    "payer": "Elevate Athletics",
    "payer_email": "jordan@elevateathletics.com",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1099"
  },
  {
    "payment_id": "P5097",
    "date": "12/08/2026",
    "payer": "PASTOR DAVID KIM",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "Zelle",
    "reference": "INV-1102"
  },
  {
    "payment_id": "P5098",
    "date": "13/08/2026",
    "payer": "TORRES LAW FIRM PLLC",
    "payer_email": "mtorres@torreslaw.com",
    "amount": 2500.0,
    "method": "ACH",
    "reference": "INV-1091"
  },
  {
    "payment_id": "P5099",
    "date": "13/08/2026",
    "payer": "TONY RUSSO",
    "payer_email": "",
    "amount": 900.0,
    "method": "Zelle",
    "reference": ""
  },
  {
    "payment_id": "P5100",
    "date": "14/08/2026",
    "payer": "IRONCLAD GYM",
    "payer_email": "marcus@ironcladgym.com",
    "amount": 900.0,
    "method": "Zelle",
    "reference": "INV-1098"
  },
  {
    "payment_id": "P5101",
    "date": "21/08/2026",
    "payer": "BLOOM MED SPA",
    "payer_email": "priya@bloommedspa.com",
    "amount": 1500.0,
    "method": "Zelle",
    "reference": "INV-1105"
  },
  {
    "payment_id": "P5102",
    "date": "25/08/2026",
    "payer": "Luna Bridal",
    "payer_email": "sofia@lunabridal.com",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1111"
  },
  {
    "payment_id": "P5103",
    "date": "27/08/2026",
    "payer": "NorthPoint Media Team",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "card",
    "reference": "INV-1107"
  },
  {
    "payment_id": "P5104",
    "date": "27/08/2026",
    "payer": "NORTHPOINT DFW",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "Zelle",
    "reference": "INV-1114"
  },
  {
    "payment_id": "P5105",
    "date": "28/08/2026",
    "payer": "Harbor Roasters",
    "payer_email": "jen@harborcoffee.com",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1116"
  },
  {
    "payment_id": "P5106",
    "date": "30/08/2026",
    "payer": "Ethan Cole",
    "payer_email": "ethan@dfwfounders.fm",
    "amount": 550.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5107",
    "date": "30/08/2026",
    "payer": "DANA BROOKS",
    "payer_email": "dana@lonestarrealty.com",
    "amount": 1500.0,
    "method": "Zelle",
    "reference": "INV-1112"
  },
  {
    "payment_id": "P5108",
    "date": "01/09/2026",
    "payer": "J REED",
    "payer_email": "",
    "amount": 900.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5109",
    "date": "01/09/2026",
    "payer": "Vega Auto",
    "payer_email": "carlos.vega.detail@gmail.com",
    "amount": 900.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5110",
    "date": "04/09/2026",
    "payer": "TASHA GREEN",
    "payer_email": "",
    "amount": 900.0,
    "method": "Zelle",
    "reference": "august sessions"
  },
  {
    "payment_id": "P5111",
    "date": "04/09/2026",
    "payer": "BRIGHTLINE MARKETING LLC",
    "payer_email": "kelsey@brightlinemktg.com",
    "amount": 1800.0,
    "method": "ACH",
    "reference": "Brightline Aug invoices"
  },
  {
    "payment_id": "P5112",
    "date": "07/09/2026",
    "payer": "MIKE TORRES",
    "payer_email": "mtorres@torreslaw.com",
    "amount": 2500.0,
    "method": "ACH",
    "reference": "INV-1123"
  },
  {
    "payment_id": "P5113",
    "date": "08/09/2026",
    "payer": "NorthPoint Media Team",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "card",
    "reference": "INV-1118"
  },
  {
    "payment_id": "P5114",
    "date": "08/09/2026",
    "payer": "ETHAN COLE",
    "payer_email": "ethan@dfwfounders.fm",
    "amount": 550.0,
    "method": "ACH",
    "reference": ""
  },
  {
    "payment_id": "P5115",
    "date": "10/09/2026",
    "payer": "HANNAH BROOKS DDS",
    "payer_email": "hbrooks@oaklanedental.com",
    "amount": 1500.0,
    "method": "Zelle",
    "reference": "INV-1117"
  },
  {
    "payment_id": "P5116",
    "date": "10/09/2026",
    "payer": "TONY RUSSO",
    "payer_email": "",
    "amount": 450.0,
    "method": "Zelle",
    "reference": "half now half later"
  },
  {
    "payment_id": "P5117",
    "date": "12/09/2026",
    "payer": "Sarah Khan DDS",
    "payer_email": "sarah@khandental.com",
    "amount": 1500.0,
    "method": "card",
    "reference": "INV-1120"
  },
  {
    "payment_id": "P5118",
    "date": "13/09/2026",
    "payer": "Mike's Roofing",
    "payer_email": "mike@mikesroofingtx.com",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1103"
  },
  {
    "payment_id": "P5119",
    "date": "13/09/2026",
    "payer": "Glow Aesthetic",
    "payer_email": "nadia@glowaesthetics.co",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1125"
  },
  {
    "payment_id": "P5120",
    "date": "14/09/2026",
    "payer": "PASTOR DAVID KIM",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "ACH",
    "reference": "INV-1131"
  },
  {
    "payment_id": "P5121",
    "date": "14/09/2026",
    "payer": "PRIYA SHAH",
    "payer_email": "priya@bloommedspa.com",
    "amount": 1500.0,
    "method": "Zelle",
    "reference": ""
  },
  {
    "payment_id": "P5122",
    "date": "16/09/2026",
    "payer": "Khan Family Law",
    "payer_email": "info@khanfamilylaw.com",
    "amount": 900.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5123",
    "date": "17/09/2026",
    "payer": "Sofia Ramirez",
    "payer_email": "sofia@lunabridal.com",
    "amount": 900.0,
    "method": "card",
    "reference": "INV-1134"
  },
  {
    "payment_id": "P5124",
    "date": "20/09/2026",
    "payer": "DANA BROOKS",
    "payer_email": "dana@lonestarrealty.com",
    "amount": 1500.0,
    "method": "Zelle",
    "reference": "INV-1137"
  },
  {
    "payment_id": "P5125",
    "date": "23/09/2026",
    "payer": "LENA ORTIZ",
    "payer_email": "lena@thebrewlab.coffee",
    "amount": 900.0,
    "method": "Zelle",
    "reference": "INV-1133"
  },
  {
    "payment_id": "P5126",
    "date": "24/09/2026",
    "payer": "CARLOS VEGA",
    "payer_email": "carlos.vega.detail@gmail.com",
    "amount": 900.0,
    "method": "ACH",
    "reference": "INV-1138"
  },
  {
    "payment_id": "P5127",
    "date": "29/09/2026",
    "payer": "NORTHPOINT CHURCH",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "ACH",
    "reference": "INV-1135"
  },
  {
    "payment_id": "P5128",
    "date": "29/09/2026",
    "payer": "JORDAN REED",
    "payer_email": "jordan@elevateathletics.com",
    "amount": 900.0,
    "method": "Zelle",
    "reference": ""
  },
  {
    "payment_id": "P5129",
    "date": "30/09/2026",
    "payer": "Northpoint Church",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "card",
    "reference": "INV-1142"
  },
  {
    "payment_id": "P5130",
    "date": "04/10/2026",
    "payer": "BRIGHTLINE MARKETING LLC",
    "payer_email": "kelsey@brightlinemktg.com",
    "amount": 900.0,
    "method": "ACH",
    "reference": "Brightline Sep invoices"
  },
  {
    "payment_id": "P5131",
    "date": "05/10/2026",
    "payer": "NorthPoint DFW",
    "payer_email": "media@northpointdfw.org",
    "amount": 240.0,
    "method": "card",
    "reference": "INV-1140"
  },
  {
    "payment_id": "P5132",
    "date": "05/10/2026",
    "payer": "APEX PHYSICAL THERAPY",
    "payer_email": "klee@apexptdallas.com",
    "amount": 2500.0,
    "method": "Zelle",
    "reference": ""
  },
  {
    "payment_id": "P5133",
    "date": "06/10/2026",
    "payer": "Ironclad Fitness",
    "payer_email": "marcus@ironcladgym.com",
    "amount": 900.0,
    "method": "card",
    "reference": ""
  },
  {
    "payment_id": "P5134",
    "date": "06/10/2026",
    "payer": "Lone Star Realty",
    "payer_email": "dana@lonestarrealty.com",
    "amount": 1500.0,
    "method": "card",
    "reference": ""
  }
];

export const initialVideos: VideoItem[] = [
  {
    "video_id": "V001",
    "client": "Dr. Sarah Khan",
    "title": "Whitening before and after",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Calmer music",
    "revisions": 0,
    "editor_hours": 3.1,
    "client_approved_on": "",
    "shoot_booking": "B003"
  },
  {
    "video_id": "V002",
    "client": "Sarah Khan DDS",
    "title": "Implants explained",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 3,
    "editor_hours": 6.3,
    "client_approved_on": "",
    "shoot_booking": "B003"
  },
  {
    "video_id": "V003",
    "client": "Dr Khan",
    "title": "Invisalign myths",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.5,
    "client_approved_on": "",
    "shoot_booking": "B003"
  },
  {
    "video_id": "V004",
    "client": "Khan Dental",
    "title": "Office tour",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.7,
    "client_approved_on": "",
    "shoot_booking": "B003"
  },
  {
    "video_id": "V005",
    "client": "Cedar and Stone",
    "title": "Owner story",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Add walk-ins welcome",
    "revisions": 1,
    "editor_hours": 3.5,
    "client_approved_on": "",
    "shoot_booking": "B005"
  },
  {
    "video_id": "V006",
    "client": "Cedar & Stone",
    "title": "Material choices",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.1,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V007",
    "client": "Cedar & Stone",
    "title": "Crew day",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Add walk-ins welcome",
    "revisions": 1,
    "editor_hours": 4.3,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V008",
    "client": "Cedar & Stone",
    "title": "Kitchen remodel reveal",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Remove prices part",
    "revisions": 1,
    "editor_hours": 4.1,
    "client_approved_on": "2026-04-23",
    "shoot_booking": "B005"
  },
  {
    "video_id": "V009",
    "client": "Mikes Roofing",
    "title": "Storm damage tips",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Add walk-ins welcome",
    "revisions": 0,
    "editor_hours": 3.2,
    "client_approved_on": "2026-04-26",
    "shoot_booking": ""
  },
  {
    "video_id": "V010",
    "client": "Mike Delgado",
    "title": "Roof inspection walkthrough",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Captions bigger",
    "revisions": 1,
    "editor_hours": 5.1,
    "client_approved_on": "2026-05-01",
    "shoot_booking": "B008"
  },
  {
    "video_id": "V011",
    "client": "Mike's Roofing",
    "title": "Hail claim help",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Add walk-ins welcome",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "",
    "shoot_booking": "B008"
  },
  {
    "video_id": "V012",
    "client": "Bloom Med Spa - Plano",
    "title": "Fall facial promo",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Brand color teal",
    "revisions": 0,
    "editor_hours": 2.9,
    "client_approved_on": "",
    "shoot_booking": "B009"
  },
  {
    "video_id": "V013",
    "client": "Bloom",
    "title": "Membership promo",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Music lower",
    "revisions": 1,
    "editor_hours": 4.8,
    "client_approved_on": "2026-05-05",
    "shoot_booking": "B009"
  },
  {
    "video_id": "V014",
    "client": "Bloom",
    "title": "Hydrafacial reveal",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.1,
    "client_approved_on": "2026-05-06",
    "shoot_booking": "B009"
  },
  {
    "video_id": "V015",
    "client": "Bloom Med Spa - Plano",
    "title": "Skin care routine",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.5,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V016",
    "client": "Sofia Ramirez",
    "title": "Styling tips",
    "editor": "Ali",
    "stage": "In revision",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 5.0,
    "client_approved_on": "2026-05-07",
    "shoot_booking": "B013"
  },
  {
    "video_id": "V017",
    "client": "Sofia Ramirez",
    "title": "Owner story",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Remove prices part",
    "revisions": 0,
    "editor_hours": 2.8,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V018",
    "client": "Luna Bridal Boutique",
    "title": "New arrivals",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "",
    "shoot_booking": "B013"
  },
  {
    "video_id": "V019",
    "client": "Meridian Wealth",
    "title": "Why fees matter",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 5.3,
    "client_approved_on": "2026-05-08",
    "shoot_booking": "B014"
  },
  {
    "video_id": "V020",
    "client": "Meridian WP",
    "title": "Estate planning basics",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 6.0,
    "client_approved_on": "",
    "shoot_booking": "B014"
  },
  {
    "video_id": "V021",
    "client": "Meridian WP",
    "title": "Market minute",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Music lower",
    "revisions": 0,
    "editor_hours": 3.8,
    "client_approved_on": "2026-05-13",
    "shoot_booking": ""
  },
  {
    "video_id": "V022",
    "client": "Meridian Wealth Partners",
    "title": "Retirement myths",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.4,
    "client_approved_on": "",
    "shoot_booking": "B014"
  },
  {
    "video_id": "V023",
    "client": "Meridian Wealth Partners",
    "title": "Client story",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 3.8,
    "client_approved_on": "2026-05-18",
    "shoot_booking": "B019"
  },
  {
    "video_id": "V024",
    "client": "Meridian Wealth",
    "title": "Why fees matter",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.1,
    "client_approved_on": "2026-05-21",
    "shoot_booking": "B019"
  },
  {
    "video_id": "V025",
    "client": "Meridian Wealth Partners",
    "title": "College savings",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 4.9,
    "client_approved_on": "2026-05-20",
    "shoot_booking": ""
  },
  {
    "video_id": "V026",
    "client": "Meridian Wealth",
    "title": "Estate planning basics",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V027",
    "client": "Torres Law Firm",
    "title": "Wills in 60 seconds",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.0,
    "client_approved_on": "2026-05-18",
    "shoot_booking": "B020"
  },
  {
    "video_id": "V028",
    "client": "Torres Law Firm",
    "title": "Meet the attorney",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.3,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V029",
    "client": "Torres Law",
    "title": "What a consult costs",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Phone number end card",
    "revisions": 0,
    "editor_hours": 3.4,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V030",
    "client": "Torres",
    "title": "Do I need a lawyer?",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.3,
    "client_approved_on": "",
    "shoot_booking": "B020"
  },
  {
    "video_id": "V031",
    "client": "Elevate Athletics",
    "title": "Member story",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Remove prices part",
    "revisions": 0,
    "editor_hours": 3.8,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V032",
    "client": "Elevate",
    "title": "Form check squat",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.6,
    "client_approved_on": "",
    "shoot_booking": "B022"
  },
  {
    "video_id": "V033",
    "client": "Elevate Athletics",
    "title": "Open house promo",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.1,
    "client_approved_on": "",
    "shoot_booking": "B022"
  },
  {
    "video_id": "V034",
    "client": "Apex PT Dallas",
    "title": "Patient story",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.8,
    "client_approved_on": "2026-05-24",
    "shoot_booking": "B023"
  },
  {
    "video_id": "V035",
    "client": "Apex PT",
    "title": "Back pain myths",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.2,
    "client_approved_on": "",
    "shoot_booking": "B023"
  },
  {
    "video_id": "V036",
    "client": "Apex PT Dallas",
    "title": "Desk posture fix",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.6,
    "client_approved_on": "2026-05-28",
    "shoot_booking": "B023"
  },
  {
    "video_id": "V037",
    "client": "Apex PT Dallas",
    "title": "Walk-ins welcome",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Phone number end card",
    "revisions": 0,
    "editor_hours": 2.9,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V038",
    "client": "Dr Khan",
    "title": "Office tour",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.8,
    "client_approved_on": "",
    "shoot_booking": "B024"
  },
  {
    "video_id": "V039",
    "client": "Dr. Sarah Khan",
    "title": "Why floss matters",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Brand color navy",
    "revisions": 0,
    "editor_hours": 3.0,
    "client_approved_on": "",
    "shoot_booking": "B024"
  },
  {
    "video_id": "V040",
    "client": "Khan Dental",
    "title": "Kids dental tips",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Captions bigger",
    "revisions": 0,
    "editor_hours": 2.6,
    "client_approved_on": "2026-05-28",
    "shoot_booking": ""
  },
  {
    "video_id": "V041",
    "client": "Dr. Sarah Khan",
    "title": "Invisalign myths",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 3.6,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V042",
    "client": "Glow Aesthetics",
    "title": "Lip filler myths",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.4,
    "client_approved_on": "2026-05-30",
    "shoot_booking": ""
  },
  {
    "video_id": "V043",
    "client": "Glow Aesthetics",
    "title": "Laser hair removal",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.1,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V044",
    "client": "Glow Aesthetic",
    "title": "Membership promo",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.1,
    "client_approved_on": "2026-05-23",
    "shoot_booking": "B027"
  },
  {
    "video_id": "V045",
    "client": "Mike's Roofing",
    "title": "Crew intro",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.3,
    "client_approved_on": "2026-05-23",
    "shoot_booking": "B028"
  },
  {
    "video_id": "V046",
    "client": "Mike's Roofing",
    "title": "Roof inspection walkthrough",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.7,
    "client_approved_on": "",
    "shoot_booking": "B028"
  },
  {
    "video_id": "V047",
    "client": "Mikes Roofing",
    "title": "Shingle vs metal",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.2,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V048",
    "client": "Bloom",
    "title": "Fall facial promo",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "2026-06-03",
    "shoot_booking": ""
  },
  {
    "video_id": "V049",
    "client": "Bloom Med Spa - Frisco",
    "title": "Meet the injector",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.4,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V050",
    "client": "Bloom Medspa",
    "title": "Botox before and after",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.4,
    "client_approved_on": "",
    "shoot_booking": "B029"
  },
  {
    "video_id": "V051",
    "client": "Bloom Med Spa",
    "title": "Membership promo",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Fix name spelling",
    "revisions": 1,
    "editor_hours": 5.4,
    "client_approved_on": "",
    "shoot_booking": "B029"
  },
  {
    "video_id": "V052",
    "client": "Andre Jackson",
    "title": "Store tour",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.7,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V053",
    "client": "Andre Jackson",
    "title": "Sale promo",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.5,
    "client_approved_on": "2026-06-03",
    "shoot_booking": ""
  },
  {
    "video_id": "V054",
    "client": "Crown Barbers",
    "title": "New arrivals",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Captions bigger",
    "revisions": 1,
    "editor_hours": 4.1,
    "client_approved_on": "",
    "shoot_booking": "B032"
  },
  {
    "video_id": "V055",
    "client": "Sofia Ramirez",
    "title": "Fresh fade transformation",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Captions bigger",
    "revisions": 1,
    "editor_hours": 4.7,
    "client_approved_on": "2026-06-11",
    "shoot_booking": "B035"
  },
  {
    "video_id": "V056",
    "client": "Luna Bridal",
    "title": "Sale promo",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.2,
    "client_approved_on": "",
    "shoot_booking": "B035"
  },
  {
    "video_id": "V057",
    "client": "Sofia Ramirez",
    "title": "Owner story",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Remove prices part",
    "revisions": 1,
    "editor_hours": 4.6,
    "client_approved_on": "2026-06-11",
    "shoot_booking": ""
  },
  {
    "video_id": "V058",
    "client": "Patel Insurance",
    "title": "Flood coverage",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.8,
    "client_approved_on": "",
    "shoot_booking": "B036"
  },
  {
    "video_id": "V059",
    "client": "Raj Patel",
    "title": "Meet the agent",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.4,
    "client_approved_on": "2026-06-10",
    "shoot_booking": "B036"
  },
  {
    "video_id": "V060",
    "client": "Patel Insurance Group",
    "title": "Rate review",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 5.4,
    "client_approved_on": "2026-06-12",
    "shoot_booking": "B036"
  },
  {
    "video_id": "V061",
    "client": "Patel Ins",
    "title": "Why bundle home and auto",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.2,
    "client_approved_on": "2026-06-10",
    "shoot_booking": ""
  },
  {
    "video_id": "V062",
    "client": "Elevate Athletics",
    "title": "Open house promo",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.4,
    "client_approved_on": "2026-06-14",
    "shoot_booking": "B038"
  },
  {
    "video_id": "V063",
    "client": "Elevate Athletics",
    "title": "Member story",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.3,
    "client_approved_on": "",
    "shoot_booking": "B038"
  },
  {
    "video_id": "V064",
    "client": "Elevate Athletics",
    "title": "Class schedule",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "2026-06-14",
    "shoot_booking": "B038"
  },
  {
    "video_id": "V065",
    "client": "Dana Brooks",
    "title": "Market update",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Blur client face",
    "revisions": 0,
    "editor_hours": 3.3,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V066",
    "client": "Dana Brooks",
    "title": "Neighborhood guide",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.7,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V067",
    "client": "Lone Star Realty",
    "title": "Staging tips",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Music lower",
    "revisions": 0,
    "editor_hours": 2.6,
    "client_approved_on": "",
    "shoot_booking": "B039"
  },
  {
    "video_id": "V068",
    "client": "Dana Brooks",
    "title": "Meet the agent",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Use outside shot",
    "revisions": 0,
    "editor_hours": 3.1,
    "client_approved_on": "2026-06-10",
    "shoot_booking": "B039"
  },
  {
    "video_id": "V069",
    "client": "Oak Lane Dental",
    "title": "Kids dental tips",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.6,
    "client_approved_on": "2026-06-19",
    "shoot_booking": ""
  },
  {
    "video_id": "V070",
    "client": "Oaklane Dental",
    "title": "Office tour",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.6,
    "client_approved_on": "",
    "shoot_booking": "B041"
  },
  {
    "video_id": "V071",
    "client": "Hannah Brooks DDS",
    "title": "Whitening before and after",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.6,
    "client_approved_on": "",
    "shoot_booking": "B041"
  },
  {
    "video_id": "V072",
    "client": "Oaklane Dental",
    "title": "Why floss matters",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.8,
    "client_approved_on": "",
    "shoot_booking": "B041"
  },
  {
    "video_id": "V073",
    "client": "Meridian Wealth Partners",
    "title": "Retirement myths",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 5.8,
    "client_approved_on": "2026-06-16",
    "shoot_booking": "B043"
  },
  {
    "video_id": "V074",
    "client": "Meridian WP",
    "title": "Tax season tips",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.3,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V075",
    "client": "Meridian Wealth",
    "title": "Market minute",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.0,
    "client_approved_on": "2026-06-18",
    "shoot_booking": "B043"
  },
  {
    "video_id": "V076",
    "client": "Meridian Wealth",
    "title": "Meet the advisor",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "",
    "shoot_booking": "B043"
  },
  {
    "video_id": "V077",
    "client": "Cedar and Stone",
    "title": "Permit tips",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 3.7,
    "client_approved_on": "2026-06-19",
    "shoot_booking": "B044"
  },
  {
    "video_id": "V078",
    "client": "Cedar and Stone",
    "title": "Project timeline",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "2026-06-18",
    "shoot_booking": "B044"
  },
  {
    "video_id": "V079",
    "client": "Cedar and Stone",
    "title": "Client walkthrough",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.3,
    "client_approved_on": "",
    "shoot_booking": "B044"
  },
  {
    "video_id": "V080",
    "client": "Cedar & Stone",
    "title": "Material choices",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.3,
    "client_approved_on": "",
    "shoot_booking": "B044"
  },
  {
    "video_id": "V081",
    "client": "Patel Insurance",
    "title": "Meet the agent",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Phone number end card",
    "revisions": 0,
    "editor_hours": 3.5,
    "client_approved_on": "",
    "shoot_booking": "B045"
  },
  {
    "video_id": "V082",
    "client": "Patel Ins",
    "title": "Why bundle home and auto",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 3,
    "editor_hours": 6.2,
    "client_approved_on": "",
    "shoot_booking": "B045"
  },
  {
    "video_id": "V083",
    "client": "Patel Insurance Group",
    "title": "Client story",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Cut first 3 sec",
    "revisions": 0,
    "editor_hours": 3.3,
    "client_approved_on": "2026-06-22",
    "shoot_booking": "B045"
  },
  {
    "video_id": "V084",
    "client": "Patel Ins",
    "title": "Life insurance basics",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.6,
    "client_approved_on": "2026-06-20",
    "shoot_booking": "B045"
  },
  {
    "video_id": "V085",
    "client": "Apex Physical Therapy",
    "title": "What to expect visit one",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Captions bigger",
    "revisions": 0,
    "editor_hours": 3.5,
    "client_approved_on": "",
    "shoot_booking": "B046"
  },
  {
    "video_id": "V086",
    "client": "Apex Physical Therapy",
    "title": "Desk posture fix",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.8,
    "client_approved_on": "",
    "shoot_booking": "B046"
  },
  {
    "video_id": "V087",
    "client": "Apex Physical Therapy",
    "title": "Meet the team",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "",
    "shoot_booking": "B046"
  },
  {
    "video_id": "V088",
    "client": "Apex Physical Therapy",
    "title": "Patient story",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Music lower",
    "revisions": 1,
    "editor_hours": 4.2,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V089",
    "client": "Greenway Pediatrics",
    "title": "Back pain myths",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.3,
    "client_approved_on": "2026-06-20",
    "shoot_booking": "B047"
  },
  {
    "video_id": "V090",
    "client": "Greenway Peds",
    "title": "Flu shot season",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.2,
    "client_approved_on": "2026-06-22",
    "shoot_booking": "B047"
  },
  {
    "video_id": "V091",
    "client": "Brightline - Greenway",
    "title": "Meet the team",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.0,
    "client_approved_on": "2026-06-25",
    "shoot_booking": ""
  },
  {
    "video_id": "V092",
    "client": "Torres Law Firm",
    "title": "Custody myths",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.4,
    "client_approved_on": "",
    "shoot_booking": "B049"
  },
  {
    "video_id": "V093",
    "client": "Torres",
    "title": "Car accident: first 3 steps",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Phone number end card",
    "revisions": 0,
    "editor_hours": 3.0,
    "client_approved_on": "",
    "shoot_booking": "B049"
  },
  {
    "video_id": "V094",
    "client": "Torres Law Firm",
    "title": "Slip and fall rights",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.3,
    "client_approved_on": "2026-06-21",
    "shoot_booking": "B049"
  },
  {
    "video_id": "V095",
    "client": "Torres Law Firm",
    "title": "Do I need a lawyer?",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.6,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V096",
    "client": "Mike Delgado",
    "title": "Hail claim help",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Phone number end card",
    "revisions": 1,
    "editor_hours": 4.1,
    "client_approved_on": "2026-06-26",
    "shoot_booking": ""
  },
  {
    "video_id": "V097",
    "client": "Mikes Roofing",
    "title": "Gutter guards",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.8,
    "client_approved_on": "2026-06-21",
    "shoot_booking": ""
  },
  {
    "video_id": "V098",
    "client": "Mikes Roofing",
    "title": "Leak warning signs",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Captions bigger",
    "revisions": 0,
    "editor_hours": 3.8,
    "client_approved_on": "",
    "shoot_booking": "B051"
  },
  {
    "video_id": "V099",
    "client": "Khan Law",
    "title": "Meet the attorney",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "",
    "shoot_booking": "B053"
  },
  {
    "video_id": "V100",
    "client": "Khan Family Law",
    "title": "Car accident: first 3 steps",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 3.9,
    "client_approved_on": "2026-06-25",
    "shoot_booking": "B053"
  },
  {
    "video_id": "V101",
    "client": "Khan Family Law",
    "title": "What a consult costs",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.1,
    "client_approved_on": "2026-06-26",
    "shoot_booking": "B053"
  },
  {
    "video_id": "V102",
    "client": "Bloom Med Spa - Plano",
    "title": "Botox before and after",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Blur client face",
    "revisions": 1,
    "editor_hours": 4.9,
    "client_approved_on": "2026-06-30",
    "shoot_booking": "B055"
  },
  {
    "video_id": "V103",
    "client": "Bloom Med Spa - Plano",
    "title": "Membership promo",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.3,
    "client_approved_on": "",
    "shoot_booking": "B055"
  },
  {
    "video_id": "V104",
    "client": "Bloom Med Spa",
    "title": "Fall facial promo",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.4,
    "client_approved_on": "2026-06-28",
    "shoot_booking": "B055"
  },
  {
    "video_id": "V105",
    "client": "Bloom Med Spa",
    "title": "Laser hair removal",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.1,
    "client_approved_on": "",
    "shoot_booking": "B055"
  },
  {
    "video_id": "V106",
    "client": "Khan Dental",
    "title": "Why floss matters",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.2,
    "client_approved_on": "2026-07-01",
    "shoot_booking": "B056"
  },
  {
    "video_id": "V107",
    "client": "Sarah Khan DDS",
    "title": "Meet the doctor",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 3.9,
    "client_approved_on": "2026-06-26",
    "shoot_booking": "B056"
  },
  {
    "video_id": "V108",
    "client": "Khan Dental",
    "title": "First visit tour",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Blur client face",
    "revisions": 1,
    "editor_hours": 3.8,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V109",
    "client": "Dr Khan",
    "title": "Kids dental tips",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Add walk-ins welcome",
    "revisions": 0,
    "editor_hours": 3.2,
    "client_approved_on": "",
    "shoot_booking": "B056"
  },
  {
    "video_id": "V110",
    "client": "Brew Lab",
    "title": "Latte art",
    "editor": "Ali",
    "stage": "In revision",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 5.8,
    "client_approved_on": "2026-07-02",
    "shoot_booking": "B057"
  },
  {
    "video_id": "V111",
    "client": "Brewlab Coffee",
    "title": "Roast day",
    "editor": "Rita",
    "stage": "In revision",
    "notes_on_board": "",
    "revisions": 3,
    "editor_hours": 7.5,
    "client_approved_on": "2026-07-02",
    "shoot_booking": ""
  },
  {
    "video_id": "V112",
    "client": "Brew Lab",
    "title": "Pastry case",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.3,
    "client_approved_on": "2026-07-07",
    "shoot_booking": "B057"
  },
  {
    "video_id": "V113",
    "client": "Elevate",
    "title": "Member story",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.1,
    "client_approved_on": "2026-07-05",
    "shoot_booking": ""
  },
  {
    "video_id": "V114",
    "client": "Elevate",
    "title": "Open house promo",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Calmer music",
    "revisions": 0,
    "editor_hours": 3.4,
    "client_approved_on": "2026-07-06",
    "shoot_booking": "B058"
  },
  {
    "video_id": "V115",
    "client": "Elevate Athletics",
    "title": "Class schedule",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.1,
    "client_approved_on": "",
    "shoot_booking": "B058"
  },
  {
    "video_id": "V116",
    "client": "Glow Aesthetics",
    "title": "Laser hair removal",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.0,
    "client_approved_on": "",
    "shoot_booking": "B059"
  },
  {
    "video_id": "V117",
    "client": "Glow Aesthetics",
    "title": "Meet the injector",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 3,
    "editor_hours": 7.1,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V118",
    "client": "Glow Med",
    "title": "Fall facial promo",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.1,
    "client_approved_on": "",
    "shoot_booking": "B059"
  },
  {
    "video_id": "V119",
    "client": "Luna Bridal",
    "title": "New arrivals",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.0,
    "client_approved_on": "2026-07-10",
    "shoot_booking": ""
  },
  {
    "video_id": "V120",
    "client": "Luna Bridal",
    "title": "Store tour",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.0,
    "client_approved_on": "",
    "shoot_booking": "B062"
  },
  {
    "video_id": "V121",
    "client": "Sofia Ramirez",
    "title": "Try-on day",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.4,
    "client_approved_on": "2026-07-10",
    "shoot_booking": "B062"
  },
  {
    "video_id": "V122",
    "client": "Summit Chiropractic",
    "title": "Back pain myths",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.0,
    "client_approved_on": "2026-07-14",
    "shoot_booking": ""
  },
  {
    "video_id": "V123",
    "client": "Summit Chiro",
    "title": "Flu shot season",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.5,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V124",
    "client": "Brightline - Summit",
    "title": "Meet the team",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.5,
    "client_approved_on": "2026-07-16",
    "shoot_booking": "B066"
  },
  {
    "video_id": "V125",
    "client": "Crown Barbershop",
    "title": "New arrivals",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Brand color navy",
    "revisions": 0,
    "editor_hours": 2.5,
    "client_approved_on": "",
    "shoot_booking": "B067"
  },
  {
    "video_id": "V126",
    "client": "Crown Barbers",
    "title": "Try-on day",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.0,
    "client_approved_on": "",
    "shoot_booking": "B067"
  },
  {
    "video_id": "V127",
    "client": "Crown Barbershop",
    "title": "Owner story",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Use outside shot",
    "revisions": 0,
    "editor_hours": 3.4,
    "client_approved_on": "",
    "shoot_booking": "B067"
  },
  {
    "video_id": "V128",
    "client": "Patel Ins",
    "title": "Why bundle home and auto",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.8,
    "client_approved_on": "",
    "shoot_booking": "B068"
  },
  {
    "video_id": "V129",
    "client": "Patel Insurance",
    "title": "Rate review",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.2,
    "client_approved_on": "2026-07-18",
    "shoot_booking": "B068"
  },
  {
    "video_id": "V130",
    "client": "Patel Insurance",
    "title": "Life insurance basics",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.3,
    "client_approved_on": "",
    "shoot_booking": "B068"
  },
  {
    "video_id": "V131",
    "client": "Patel Ins",
    "title": "Teen driver tips",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.1,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V132",
    "client": "Torres Law",
    "title": "Custody myths",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 3.6,
    "client_approved_on": "",
    "shoot_booking": "B072"
  },
  {
    "video_id": "V133",
    "client": "Torres",
    "title": "Divorce timeline",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 3.9,
    "client_approved_on": "2026-07-17",
    "shoot_booking": ""
  },
  {
    "video_id": "V134",
    "client": "Torres Law",
    "title": "Meet the attorney",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.9,
    "client_approved_on": "2026-07-23",
    "shoot_booking": ""
  },
  {
    "video_id": "V135",
    "client": "Torres Law",
    "title": "Wills in 60 seconds",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.3,
    "client_approved_on": "",
    "shoot_booking": "B072"
  },
  {
    "video_id": "V136",
    "client": "Marcus Webb",
    "title": "Open house promo",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.0,
    "client_approved_on": "2026-07-24",
    "shoot_booking": ""
  },
  {
    "video_id": "V137",
    "client": "Ironclad Gym",
    "title": "Gym tour",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.3,
    "client_approved_on": "2026-07-22",
    "shoot_booking": "B073"
  },
  {
    "video_id": "V138",
    "client": "Ironclad Gym",
    "title": "Member story",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Captions bigger",
    "revisions": 1,
    "editor_hours": 4.5,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V139",
    "client": "Apex Physical Therapy",
    "title": "Insurance we take",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.5,
    "client_approved_on": "2026-07-20",
    "shoot_booking": "B074"
  },
  {
    "video_id": "V140",
    "client": "Apex PT",
    "title": "Walk-ins welcome",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.2,
    "client_approved_on": "",
    "shoot_booking": "B074"
  },
  {
    "video_id": "V141",
    "client": "Apex PT Dallas",
    "title": "Back pain myths",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.2,
    "client_approved_on": "2026-07-20",
    "shoot_booking": "B074"
  },
  {
    "video_id": "V142",
    "client": "Apex PT Dallas",
    "title": "Flu shot season",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.2,
    "client_approved_on": "",
    "shoot_booking": "B074"
  },
  {
    "video_id": "V143",
    "client": "Greenway Peds",
    "title": "Desk posture fix",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.7,
    "client_approved_on": "",
    "shoot_booking": "B075"
  },
  {
    "video_id": "V144",
    "client": "Greenway Pediatrics",
    "title": "Meet the team",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.0,
    "client_approved_on": "",
    "shoot_booking": "B075"
  },
  {
    "video_id": "V145",
    "client": "Brightline - Greenway",
    "title": "Walk-ins welcome",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Remove prices part",
    "revisions": 0,
    "editor_hours": 4.2,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V146",
    "client": "Meridian Wealth Partners",
    "title": "Retirement myths",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.1,
    "client_approved_on": "",
    "shoot_booking": "B077"
  },
  {
    "video_id": "V147",
    "client": "Meridian Wealth Partners",
    "title": "Estate planning basics",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.4,
    "client_approved_on": "2026-07-28",
    "shoot_booking": "B077"
  },
  {
    "video_id": "V148",
    "client": "Meridian WP",
    "title": "Market minute",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.5,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V149",
    "client": "Meridian Wealth Partners",
    "title": "Client story",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 5.2,
    "client_approved_on": "2026-07-27",
    "shoot_booking": ""
  },
  {
    "video_id": "V150",
    "client": "Mike's Roofing",
    "title": "Hail claim help",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.2,
    "client_approved_on": "2026-07-25",
    "shoot_booking": "B078"
  },
  {
    "video_id": "V151",
    "client": "Mike Delgado",
    "title": "Roof inspection walkthrough",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Use outside shot",
    "revisions": 0,
    "editor_hours": 3.4,
    "client_approved_on": "2026-07-23",
    "shoot_booking": "B078"
  },
  {
    "video_id": "V152",
    "client": "Mike's Roofing",
    "title": "Shingle vs metal",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.9,
    "client_approved_on": "",
    "shoot_booking": "B078"
  },
  {
    "video_id": "V153",
    "client": "Elevate",
    "title": "Nutrition tip",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.8,
    "client_approved_on": "2026-07-30",
    "shoot_booking": "B079"
  },
  {
    "video_id": "V154",
    "client": "Elevate",
    "title": "Gym tour",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.2,
    "client_approved_on": "",
    "shoot_booking": "B079"
  },
  {
    "video_id": "V155",
    "client": "Elevate Athletics",
    "title": "Class schedule",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Calmer music",
    "revisions": 0,
    "editor_hours": 3.9,
    "client_approved_on": "2026-07-27",
    "shoot_booking": "B079"
  },
  {
    "video_id": "V156",
    "client": "Sage Therapy",
    "title": "Teen anxiety signs",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Blur client face",
    "revisions": 0,
    "editor_hours": 3.3,
    "client_approved_on": "",
    "shoot_booking": "B080"
  },
  {
    "video_id": "V157",
    "client": "Sage Therapy",
    "title": "Therapy myths",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Phone number end card",
    "revisions": 0,
    "editor_hours": 3.2,
    "client_approved_on": "2026-07-28",
    "shoot_booking": "B080"
  },
  {
    "video_id": "V158",
    "client": "Dr. Maria Lopez",
    "title": "Office tour",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "2026-07-26",
    "shoot_booking": "B080"
  },
  {
    "video_id": "V159",
    "client": "Sage Family Therapy",
    "title": "Couples tips",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "",
    "shoot_booking": "B080"
  },
  {
    "video_id": "V160",
    "client": "Harbor Roasters",
    "title": "Happy hour promo",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.1,
    "client_approved_on": "2026-07-31",
    "shoot_booking": "B081"
  },
  {
    "video_id": "V161",
    "client": "Harbor Coffee",
    "title": "Behind the bar",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.4,
    "client_approved_on": "",
    "shoot_booking": "B081"
  },
  {
    "video_id": "V162",
    "client": "Harbor Coffee",
    "title": "Latte art",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.5,
    "client_approved_on": "",
    "shoot_booking": "B081"
  },
  {
    "video_id": "V163",
    "client": "Dana Brooks",
    "title": "Sold story",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Calmer music",
    "revisions": 1,
    "editor_hours": 3.9,
    "client_approved_on": "2026-07-27",
    "shoot_booking": ""
  },
  {
    "video_id": "V164",
    "client": "Lone Star Realty",
    "title": "First time buyer tips",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.1,
    "client_approved_on": "2026-07-29",
    "shoot_booking": ""
  },
  {
    "video_id": "V165",
    "client": "Lone Star Realty",
    "title": "Listing tour: Oak St",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.4,
    "client_approved_on": "",
    "shoot_booking": "B082"
  },
  {
    "video_id": "V166",
    "client": "Lone Star Realty",
    "title": "Meet the agent",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "2026-07-31",
    "shoot_booking": "B082"
  },
  {
    "video_id": "V167",
    "client": "Bloom Med Spa",
    "title": "Membership promo",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.7,
    "client_approved_on": "2026-07-30",
    "shoot_booking": ""
  },
  {
    "video_id": "V168",
    "client": "Bloom Med Spa - Frisco",
    "title": "Meet the injector",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.9,
    "client_approved_on": "2026-08-01",
    "shoot_booking": "B083"
  },
  {
    "video_id": "V169",
    "client": "Bloom Medspa",
    "title": "Fall facial promo",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.5,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V170",
    "client": "Bloom Med Spa - Plano",
    "title": "Skin care routine",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.7,
    "client_approved_on": "2026-07-29",
    "shoot_booking": "B083"
  },
  {
    "video_id": "V171",
    "client": "Hannah Brooks DDS",
    "title": "Meet the doctor",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Calmer music",
    "revisions": 1,
    "editor_hours": 4.1,
    "client_approved_on": "",
    "shoot_booking": "B085"
  },
  {
    "video_id": "V172",
    "client": "Oaklane Dental",
    "title": "Kids dental tips",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.0,
    "client_approved_on": "",
    "shoot_booking": "B085"
  },
  {
    "video_id": "V173",
    "client": "Oak Lane Dental",
    "title": "Office tour",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Fix name spelling",
    "revisions": 0,
    "editor_hours": 3.8,
    "client_approved_on": "2026-07-27",
    "shoot_booking": ""
  },
  {
    "video_id": "V174",
    "client": "Oak Lane Dental",
    "title": "Whitening before and after",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Phone number end card",
    "revisions": 0,
    "editor_hours": 3.5,
    "client_approved_on": "2026-07-31",
    "shoot_booking": "B085"
  },
  {
    "video_id": "V175",
    "client": "Imran Khan",
    "title": "Ceramic coating reveal",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 6.2,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V176",
    "client": "Imran Khan",
    "title": "Price menu",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.1,
    "client_approved_on": "2026-08-04",
    "shoot_booking": "B087"
  },
  {
    "video_id": "V177",
    "client": "Khans Auto",
    "title": "Headlight restore",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.9,
    "client_approved_on": "",
    "shoot_booking": "B087"
  },
  {
    "video_id": "V178",
    "client": "Luna Bridal",
    "title": "Sale promo",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.1,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V179",
    "client": "Sofia Ramirez",
    "title": "Store tour",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.7,
    "client_approved_on": "",
    "shoot_booking": "B088"
  },
  {
    "video_id": "V180",
    "client": "Luna Bridal",
    "title": "Try-on day",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.3,
    "client_approved_on": "2026-07-30",
    "shoot_booking": "B088"
  },
  {
    "video_id": "V181",
    "client": "Khan Dental",
    "title": "Whitening before and after",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 7.5,
    "client_approved_on": "2026-08-01",
    "shoot_booking": ""
  },
  {
    "video_id": "V182",
    "client": "Khan Dental",
    "title": "Meet the doctor",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.7,
    "client_approved_on": "",
    "shoot_booking": "B090"
  },
  {
    "video_id": "V183",
    "client": "Dr. Sarah Khan",
    "title": "Implants explained",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Use outside shot",
    "revisions": 0,
    "editor_hours": 3.5,
    "client_approved_on": "",
    "shoot_booking": "B090"
  },
  {
    "video_id": "V184",
    "client": "Dr Khan",
    "title": "Kids dental tips",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Cut first 3 sec",
    "revisions": 0,
    "editor_hours": 3.9,
    "client_approved_on": "",
    "shoot_booking": "B090"
  },
  {
    "video_id": "V185",
    "client": "Glow Aesthetic",
    "title": "Botox before and after",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.5,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V186",
    "client": "Glow Aesthetics",
    "title": "Lip filler myths",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 6.6,
    "client_approved_on": "2026-08-08",
    "shoot_booking": ""
  },
  {
    "video_id": "V187",
    "client": "Glow Med",
    "title": "Laser hair removal",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.5,
    "client_approved_on": "2026-08-08",
    "shoot_booking": "B092"
  },
  {
    "video_id": "V188",
    "client": "Khan Law",
    "title": "Meet the attorney",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.6,
    "client_approved_on": "2026-08-10",
    "shoot_booking": ""
  },
  {
    "video_id": "V189",
    "client": "Aisha Khan",
    "title": "Divorce timeline",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 7.3,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V190",
    "client": "Khan Law",
    "title": "Custody myths",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.7,
    "client_approved_on": "",
    "shoot_booking": "B093"
  },
  {
    "video_id": "V191",
    "client": "The Brew Lab",
    "title": "Meet the barista",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 3.7,
    "client_approved_on": "2026-08-19",
    "shoot_booking": "B095"
  },
  {
    "video_id": "V192",
    "client": "Brewlab Coffee",
    "title": "Latte art",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.5,
    "client_approved_on": "2026-08-18",
    "shoot_booking": "B095"
  },
  {
    "video_id": "V193",
    "client": "Brewlab Coffee",
    "title": "Bean origin story",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 7.0,
    "client_approved_on": "2026-08-19",
    "shoot_booking": "B095"
  },
  {
    "video_id": "V194",
    "client": "Ironclad Gym",
    "title": "Member story",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 6.2,
    "client_approved_on": "2026-08-16",
    "shoot_booking": "B098"
  },
  {
    "video_id": "V195",
    "client": "Ironclad Gym",
    "title": "Nutrition tip",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.1,
    "client_approved_on": "",
    "shoot_booking": "B098"
  },
  {
    "video_id": "V196",
    "client": "Marcus Webb",
    "title": "30-day challenge",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.6,
    "client_approved_on": "2026-08-14",
    "shoot_booking": ""
  },
  {
    "video_id": "V197",
    "client": "Summit Chiro",
    "title": "Back pain myths",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Calmer music",
    "revisions": 0,
    "editor_hours": 4.4,
    "client_approved_on": "",
    "shoot_booking": "B099"
  },
  {
    "video_id": "V198",
    "client": "Summit Chiro",
    "title": "Flu shot season",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 3,
    "editor_hours": 8.1,
    "client_approved_on": "2026-08-17",
    "shoot_booking": "B099"
  },
  {
    "video_id": "V199",
    "client": "Summit Chiro",
    "title": "Walk-ins welcome",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Cut first 3 sec",
    "revisions": 1,
    "editor_hours": 4.8,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V200",
    "client": "Elevate",
    "title": "Trainer intro",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.4,
    "client_approved_on": "",
    "shoot_booking": "B100"
  },
  {
    "video_id": "V201",
    "client": "Elevate Athletics",
    "title": "30-day challenge",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Remove prices part",
    "revisions": 0,
    "editor_hours": 4.0,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V202",
    "client": "Elevate",
    "title": "Form check squat",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.0,
    "client_approved_on": "",
    "shoot_booking": "B100"
  },
  {
    "video_id": "V203",
    "client": "Prime Roofing Co",
    "title": "Crew intro",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Cut first 3 sec",
    "revisions": 0,
    "editor_hours": 2.9,
    "client_approved_on": "2026-08-16",
    "shoot_booking": "B101"
  },
  {
    "video_id": "V204",
    "client": "Prime Roofing Co",
    "title": "Hail claim help",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.3,
    "client_approved_on": "2026-08-14",
    "shoot_booking": "B101"
  },
  {
    "video_id": "V205",
    "client": "Tony Russo",
    "title": "Gutter guards",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.9,
    "client_approved_on": "2026-08-19",
    "shoot_booking": ""
  },
  {
    "video_id": "V206",
    "client": "Mikes Roofing",
    "title": "Hail claim help",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.7,
    "client_approved_on": "",
    "shoot_booking": "B103"
  },
  {
    "video_id": "V207",
    "client": "Mike's Roofing",
    "title": "Shingle vs metal",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 7.2,
    "client_approved_on": "2026-08-19",
    "shoot_booking": ""
  },
  {
    "video_id": "V208",
    "client": "Mikes Roofing",
    "title": "Gutter guards",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.5,
    "client_approved_on": "",
    "shoot_booking": "B103"
  },
  {
    "video_id": "V209",
    "client": "Apex PT",
    "title": "Insurance we take",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.8,
    "client_approved_on": "2026-08-26",
    "shoot_booking": ""
  },
  {
    "video_id": "V210",
    "client": "Apex PT Dallas",
    "title": "Meet the team",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.8,
    "client_approved_on": "2026-08-22",
    "shoot_booking": "B105"
  },
  {
    "video_id": "V211",
    "client": "Apex PT",
    "title": "Walk-ins welcome",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Cut first 3 sec",
    "revisions": 1,
    "editor_hours": 4.5,
    "client_approved_on": "2026-08-25",
    "shoot_booking": ""
  },
  {
    "video_id": "V212",
    "client": "Apex Physical Therapy",
    "title": "Back pain myths",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 7.0,
    "client_approved_on": "2026-08-26",
    "shoot_booking": "B105"
  },
  {
    "video_id": "V213",
    "client": "Bloom Medspa",
    "title": "Fall facial promo",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.9,
    "client_approved_on": "2026-08-27",
    "shoot_booking": ""
  },
  {
    "video_id": "V214",
    "client": "Bloom",
    "title": "Botox before and after",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.8,
    "client_approved_on": "2026-08-28",
    "shoot_booking": "B107"
  },
  {
    "video_id": "V215",
    "client": "Bloom Med Spa - Plano",
    "title": "Meet the injector",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.5,
    "client_approved_on": "2026-08-22",
    "shoot_booking": "B107"
  },
  {
    "video_id": "V216",
    "client": "Bloom Med Spa",
    "title": "Membership promo",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.5,
    "client_approved_on": "",
    "shoot_booking": "B107"
  },
  {
    "video_id": "V217",
    "client": "Lonestar Realty",
    "title": "Neighborhood guide",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 3.9,
    "client_approved_on": "2026-08-26",
    "shoot_booking": "B108"
  },
  {
    "video_id": "V218",
    "client": "Lonestar Realty",
    "title": "Staging tips",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.8,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V219",
    "client": "Lonestar Realty Group",
    "title": "Listing tour: Oak St",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.3,
    "client_approved_on": "",
    "shoot_booking": "B108"
  },
  {
    "video_id": "V220",
    "client": "Lonestar Realty",
    "title": "Market update",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Phone number end card",
    "revisions": 1,
    "editor_hours": 4.3,
    "client_approved_on": "",
    "shoot_booking": "B108"
  },
  {
    "video_id": "V221",
    "client": "Patel Insurance",
    "title": "Rate review",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.7,
    "client_approved_on": "2026-08-29",
    "shoot_booking": "B109"
  },
  {
    "video_id": "V222",
    "client": "Patel Insurance",
    "title": "Claims made easy",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 6.2,
    "client_approved_on": "2026-08-24",
    "shoot_booking": ""
  },
  {
    "video_id": "V223",
    "client": "Patel Insurance",
    "title": "Flood coverage",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.0,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V224",
    "client": "Patel Ins",
    "title": "Client story",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Blur client face",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "2026-08-28",
    "shoot_booking": ""
  },
  {
    "video_id": "V225",
    "client": "Torres Law Firm",
    "title": "Divorce timeline",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 7.1,
    "client_approved_on": "",
    "shoot_booking": "B110"
  },
  {
    "video_id": "V226",
    "client": "Torres Law",
    "title": "Car accident: first 3 steps",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 7.7,
    "client_approved_on": "",
    "shoot_booking": "B110"
  },
  {
    "video_id": "V227",
    "client": "Torres Law",
    "title": "Meet the attorney",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 6.2,
    "client_approved_on": "",
    "shoot_booking": "B110"
  },
  {
    "video_id": "V228",
    "client": "Torres",
    "title": "Custody myths",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.3,
    "client_approved_on": "",
    "shoot_booking": "B110"
  },
  {
    "video_id": "V229",
    "client": "Brightline - Greenway",
    "title": "Back pain myths",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "",
    "shoot_booking": "B112"
  },
  {
    "video_id": "V230",
    "client": "Brightline - Greenway",
    "title": "Walk-ins welcome",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.9,
    "client_approved_on": "2026-08-31",
    "shoot_booking": ""
  },
  {
    "video_id": "V231",
    "client": "Greenway Peds",
    "title": "Patient story",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 6.0,
    "client_approved_on": "2026-08-26",
    "shoot_booking": ""
  },
  {
    "video_id": "V232",
    "client": "Luna Bridal",
    "title": "Try-on day",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.6,
    "client_approved_on": "",
    "shoot_booking": "B115"
  },
  {
    "video_id": "V233",
    "client": "Luna Bridal Boutique",
    "title": "Owner story",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 7.7,
    "client_approved_on": "",
    "shoot_booking": "B115"
  },
  {
    "video_id": "V234",
    "client": "Luna Bridal",
    "title": "Store tour",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Phone number end card",
    "revisions": 1,
    "editor_hours": 4.8,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V235",
    "client": "Elevate",
    "title": "Form check squat",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.6,
    "client_approved_on": "2026-09-06",
    "shoot_booking": "B117"
  },
  {
    "video_id": "V236",
    "client": "Elevate Athletics",
    "title": "Class schedule",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 6.8,
    "client_approved_on": "2026-09-08",
    "shoot_booking": "B117"
  },
  {
    "video_id": "V237",
    "client": "Elevate Athletics",
    "title": "Open house promo",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.6,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V238",
    "client": "Harbor Roasters",
    "title": "Pastry case",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 3,
    "editor_hours": 8.9,
    "client_approved_on": "",
    "shoot_booking": "B119"
  },
  {
    "video_id": "V239",
    "client": "Harbor Coffee",
    "title": "Latte art",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Remove prices part",
    "revisions": 0,
    "editor_hours": 4.4,
    "client_approved_on": "2026-09-08",
    "shoot_booking": "B119"
  },
  {
    "video_id": "V240",
    "client": "Harbor Roasters",
    "title": "Meet the barista",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.1,
    "client_approved_on": "2026-09-09",
    "shoot_booking": ""
  },
  {
    "video_id": "V241",
    "client": "Lone Star Realty",
    "title": "Sold story",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.5,
    "client_approved_on": "2026-09-12",
    "shoot_booking": "B120"
  },
  {
    "video_id": "V242",
    "client": "Dana Brooks",
    "title": "Staging tips",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.9,
    "client_approved_on": "2026-09-08",
    "shoot_booking": "B120"
  },
  {
    "video_id": "V243",
    "client": "Lone Star Realty",
    "title": "Market update",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Cut stumble",
    "revisions": 1,
    "editor_hours": 4.1,
    "client_approved_on": "2026-09-09",
    "shoot_booking": ""
  },
  {
    "video_id": "V244",
    "client": "Dana Brooks",
    "title": "Listing tour: Oak St",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.0,
    "client_approved_on": "",
    "shoot_booking": "B120"
  },
  {
    "video_id": "V245",
    "client": "Hannah Brooks DDS",
    "title": "Whitening before and after",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 3,
    "editor_hours": 8.7,
    "client_approved_on": "2026-09-08",
    "shoot_booking": "B121"
  },
  {
    "video_id": "V246",
    "client": "Oaklane Dental",
    "title": "Meet the doctor",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.9,
    "client_approved_on": "2026-09-07",
    "shoot_booking": ""
  },
  {
    "video_id": "V247",
    "client": "Oak Lane Dental",
    "title": "Office tour",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.0,
    "client_approved_on": "2026-09-09",
    "shoot_booking": "B121"
  },
  {
    "video_id": "V248",
    "client": "Oak Lane Dental",
    "title": "Invisalign myths",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Cut first 3 sec",
    "revisions": 1,
    "editor_hours": 5.0,
    "client_approved_on": "",
    "shoot_booking": "B121"
  },
  {
    "video_id": "V249",
    "client": "Khan Dental",
    "title": "Implants explained",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.7,
    "client_approved_on": "",
    "shoot_booking": "B122"
  },
  {
    "video_id": "V250",
    "client": "Khan Dental",
    "title": "Meet the doctor",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "",
    "shoot_booking": "B122"
  },
  {
    "video_id": "V251",
    "client": "Khan Dental",
    "title": "Kids dental tips",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 3,
    "editor_hours": 6.6,
    "client_approved_on": "",
    "shoot_booking": "B122"
  },
  {
    "video_id": "V252",
    "client": "Sarah Khan DDS",
    "title": "First visit tour",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.6,
    "client_approved_on": "",
    "shoot_booking": "B122"
  },
  {
    "video_id": "V253",
    "client": "Vega Auto",
    "title": "Ceramic coating reveal",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.6,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V254",
    "client": "Vega Auto Detailing",
    "title": "Paint correction",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 7.7,
    "client_approved_on": "",
    "shoot_booking": "B124"
  },
  {
    "video_id": "V255",
    "client": "Carlos Vega",
    "title": "Interior deep clean",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.2,
    "client_approved_on": "",
    "shoot_booking": "B124"
  },
  {
    "video_id": "V256",
    "client": "Glow Aesthetics",
    "title": "Laser hair removal",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 3,
    "editor_hours": 6.0,
    "client_approved_on": "2026-09-16",
    "shoot_booking": "B125"
  },
  {
    "video_id": "V257",
    "client": "Glow Med",
    "title": "Skin care routine",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.7,
    "client_approved_on": "2026-09-13",
    "shoot_booking": "B125"
  },
  {
    "video_id": "V258",
    "client": "Glow Med",
    "title": "Meet the injector",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.1,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V259",
    "client": "Prime Roofing Co",
    "title": "Shingle vs metal",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 3,
    "editor_hours": 6.6,
    "client_approved_on": "2026-09-14",
    "shoot_booking": ""
  },
  {
    "video_id": "V260",
    "client": "Tony Russo",
    "title": "Hail claim help",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 3,
    "editor_hours": 8.1,
    "client_approved_on": "",
    "shoot_booking": "B127"
  },
  {
    "video_id": "V261",
    "client": "Prime Roofing",
    "title": "Leak warning signs",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.5,
    "client_approved_on": "",
    "shoot_booking": "B127"
  },
  {
    "video_id": "V262",
    "client": "TLC Homecare",
    "title": "Desk posture fix",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.8,
    "client_approved_on": "2026-09-10",
    "shoot_booking": ""
  },
  {
    "video_id": "V263",
    "client": "TLC Home Care",
    "title": "Back pain myths",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Cut first 3 sec",
    "revisions": 0,
    "editor_hours": 2.9,
    "client_approved_on": "",
    "shoot_booking": "B128"
  },
  {
    "video_id": "V264",
    "client": "Angela Price",
    "title": "Flu shot season",
    "editor": "Dev",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.0,
    "client_approved_on": "",
    "shoot_booking": "B128"
  },
  {
    "video_id": "V265",
    "client": "Angela Price",
    "title": "Meet the team",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.0,
    "client_approved_on": "2026-09-10",
    "shoot_booking": ""
  },
  {
    "video_id": "V266",
    "client": "Marcus Webb",
    "title": "Trainer intro",
    "editor": "Dev",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 4.3,
    "client_approved_on": "",
    "shoot_booking": "B130"
  },
  {
    "video_id": "V267",
    "client": "Ironclad Gym",
    "title": "Member story",
    "editor": "Dev",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.3,
    "client_approved_on": "2026-09-14",
    "shoot_booking": "B130"
  },
  {
    "video_id": "V268",
    "client": "Marcus Webb",
    "title": "30-day challenge",
    "editor": "Dev",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.3,
    "client_approved_on": "2026-09-15",
    "shoot_booking": "B130"
  },
  {
    "video_id": "V269",
    "client": "Khan Law",
    "title": "Car accident: first 3 steps",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.0,
    "client_approved_on": "",
    "shoot_booking": "B131"
  },
  {
    "video_id": "V270",
    "client": "Khan Family Law",
    "title": "Divorce timeline",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.3,
    "client_approved_on": "2026-09-21",
    "shoot_booking": "B131"
  },
  {
    "video_id": "V271",
    "client": "Khan Law",
    "title": "Slip and fall rights",
    "editor": "Dev",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.9,
    "client_approved_on": "2026-09-17",
    "shoot_booking": "B131"
  },
  {
    "video_id": "V272",
    "client": "Mike's Roofing",
    "title": "Leak warning signs",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.3,
    "client_approved_on": "",
    "shoot_booking": "B132"
  },
  {
    "video_id": "V273",
    "client": "Mike's Roofing",
    "title": "Storm damage tips",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.7,
    "client_approved_on": "2026-09-19",
    "shoot_booking": "B132"
  },
  {
    "video_id": "V274",
    "client": "Mike Delgado",
    "title": "Roof inspection walkthrough",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Blur client face",
    "revisions": 0,
    "editor_hours": 3.3,
    "client_approved_on": "2026-09-21",
    "shoot_booking": "B132"
  },
  {
    "video_id": "V275",
    "client": "Patel Insurance",
    "title": "Teen driver tips",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 3,
    "editor_hours": 6.7,
    "client_approved_on": "2026-09-23",
    "shoot_booking": "B134"
  },
  {
    "video_id": "V276",
    "client": "Patel Insurance",
    "title": "Meet the agent",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.2,
    "client_approved_on": "2026-09-22",
    "shoot_booking": "B134"
  },
  {
    "video_id": "V277",
    "client": "Patel Insurance",
    "title": "Life insurance basics",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 7.8,
    "client_approved_on": "2026-09-23",
    "shoot_booking": ""
  },
  {
    "video_id": "V278",
    "client": "Raj Patel",
    "title": "Rate review",
    "editor": "Dev",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 3.4,
    "client_approved_on": "2026-09-20",
    "shoot_booking": ""
  },
  {
    "video_id": "V279",
    "client": "Summit Chiro",
    "title": "Patient story",
    "editor": "Dev",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.4,
    "client_approved_on": "2026-09-18",
    "shoot_booking": ""
  },
  {
    "video_id": "V280",
    "client": "Brightline - Summit",
    "title": "Insurance we take",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.9,
    "client_approved_on": "2026-09-17",
    "shoot_booking": "B135"
  },
  {
    "video_id": "V281",
    "client": "Brightline - Summit",
    "title": "Desk posture fix",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.8,
    "client_approved_on": "",
    "shoot_booking": "B135"
  },
  {
    "video_id": "V282",
    "client": "Apex PT Dallas",
    "title": "Insurance we take",
    "editor": "Dev",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.0,
    "client_approved_on": "",
    "shoot_booking": "B137"
  },
  {
    "video_id": "V283",
    "client": "Apex PT Dallas",
    "title": "Desk posture fix",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 7.2,
    "client_approved_on": "2026-09-25",
    "shoot_booking": "B137"
  },
  {
    "video_id": "V284",
    "client": "Apex PT",
    "title": "Patient story",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.9,
    "client_approved_on": "2026-09-24",
    "shoot_booking": "B137"
  },
  {
    "video_id": "V285",
    "client": "Apex PT",
    "title": "Walk-ins welcome",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.7,
    "client_approved_on": "2026-09-24",
    "shoot_booking": ""
  },
  {
    "video_id": "V286",
    "client": "Bloom Med Spa - Plano",
    "title": "Hydrafacial reveal",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Blur client face",
    "revisions": 1,
    "editor_hours": 5.1,
    "client_approved_on": "2026-09-25",
    "shoot_booking": "B138"
  },
  {
    "video_id": "V287",
    "client": "Bloom Med Spa - Frisco",
    "title": "Membership promo",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 6.2,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V288",
    "client": "Bloom",
    "title": "Lip filler myths",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 4.9,
    "client_approved_on": "2026-09-24",
    "shoot_booking": "B138"
  },
  {
    "video_id": "V289",
    "client": "Bloom Med Spa - Frisco",
    "title": "Laser hair removal",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 4.7,
    "client_approved_on": "2026-09-26",
    "shoot_booking": "B138"
  },
  {
    "video_id": "V290",
    "client": "Torres Law",
    "title": "Custody myths",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 6.0,
    "client_approved_on": "2026-09-24",
    "shoot_booking": "B139"
  },
  {
    "video_id": "V291",
    "client": "Torres Law Firm",
    "title": "Meet the attorney",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 3,
    "editor_hours": 8.0,
    "client_approved_on": "2026-09-22",
    "shoot_booking": "B139"
  },
  {
    "video_id": "V292",
    "client": "Torres Law",
    "title": "Wills in 60 seconds",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 6.9,
    "client_approved_on": "2026-09-24",
    "shoot_booking": "B139"
  },
  {
    "video_id": "V293",
    "client": "Torres Law",
    "title": "Divorce timeline",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 7.3,
    "client_approved_on": "2026-09-26",
    "shoot_booking": ""
  },
  {
    "video_id": "V294",
    "client": "Brew Lab",
    "title": "Pastry case",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 4.0,
    "client_approved_on": "2026-09-25",
    "shoot_booking": "B140"
  },
  {
    "video_id": "V295",
    "client": "Brew Lab",
    "title": "New fall menu",
    "editor": "Dev",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.1,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V296",
    "client": "The Brew Lab",
    "title": "Happy hour promo",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Captions bigger",
    "revisions": 0,
    "editor_hours": 4.3,
    "client_approved_on": "",
    "shoot_booking": "B140"
  },
  {
    "video_id": "V297",
    "client": "Sofia Ramirez",
    "title": "Sale promo",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.7,
    "client_approved_on": "2026-09-27",
    "shoot_booking": "B141"
  },
  {
    "video_id": "V298",
    "client": "Luna Bridal",
    "title": "Fresh fade transformation",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 6.8,
    "client_approved_on": "2026-09-28",
    "shoot_booking": "B141"
  },
  {
    "video_id": "V299",
    "client": "Luna Bridal Boutique",
    "title": "Try-on day",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.6,
    "client_approved_on": "",
    "shoot_booking": "B141"
  },
  {
    "video_id": "V300",
    "client": "Elevate",
    "title": "Form check squat",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 6.6,
    "client_approved_on": "2026-09-27",
    "shoot_booking": "B142"
  },
  {
    "video_id": "V301",
    "client": "Elevate",
    "title": "Gym tour",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 6.7,
    "client_approved_on": "",
    "shoot_booking": "B142"
  },
  {
    "video_id": "V302",
    "client": "Elevate",
    "title": "Class schedule",
    "editor": "Dev",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 3.1,
    "client_approved_on": "2026-09-27",
    "shoot_booking": ""
  },
  {
    "video_id": "V303",
    "client": "Vega Auto",
    "title": "Interior deep clean",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.5,
    "client_approved_on": "2026-10-02",
    "shoot_booking": "B146"
  },
  {
    "video_id": "V304",
    "client": "Carlos Vega",
    "title": "Before and after wash",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.0,
    "client_approved_on": "",
    "shoot_booking": "B146"
  },
  {
    "video_id": "V305",
    "client": "Vega Auto",
    "title": "Engine bay clean",
    "editor": "Ali",
    "stage": "Delivered",
    "notes_on_board": "Remove prices part",
    "revisions": 0,
    "editor_hours": 2.7,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V306",
    "client": "Vega Auto",
    "title": "Ceramic coating reveal",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "Captions bigger",
    "revisions": 0,
    "editor_hours": 3.9,
    "client_approved_on": "2026-09-27",
    "shoot_booking": ""
  },
  {
    "video_id": "V307",
    "client": "Vega Auto",
    "title": "Ceramic coating reveal",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 6.8,
    "client_approved_on": "2026-09-30",
    "shoot_booking": "B147"
  },
  {
    "video_id": "V308",
    "client": "Carlos Vega",
    "title": "Tesla detail",
    "editor": "Sam",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 2,
    "editor_hours": 7.3,
    "client_approved_on": "",
    "shoot_booking": "B147"
  },
  {
    "video_id": "V309",
    "client": "Vega Detailing",
    "title": "Paint correction",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.4,
    "client_approved_on": "2026-09-30",
    "shoot_booking": "B147"
  },
  {
    "video_id": "V310",
    "client": "Greenway Pediatrics",
    "title": "Patient story",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.1,
    "client_approved_on": "2026-10-04",
    "shoot_booking": "B148"
  },
  {
    "video_id": "V311",
    "client": "Greenway Peds",
    "title": "Desk posture fix",
    "editor": "Rita",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.4,
    "client_approved_on": "",
    "shoot_booking": "B148"
  },
  {
    "video_id": "V312",
    "client": "Greenway Peds",
    "title": "Back pain myths",
    "editor": "Dev",
    "stage": "Delivered",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.2,
    "client_approved_on": "",
    "shoot_booking": "B148"
  },
  {
    "video_id": "V313",
    "client": "Prime Roofing Co",
    "title": "Crew intro",
    "editor": "Sam",
    "stage": "In review",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.2,
    "client_approved_on": "",
    "shoot_booking": "B152"
  },
  {
    "video_id": "V314",
    "client": "Prime Roofing",
    "title": "Storm damage tips",
    "editor": "Sam",
    "stage": "In review",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.3,
    "client_approved_on": "",
    "shoot_booking": "B152"
  },
  {
    "video_id": "V315",
    "client": "Prime Roofing Co",
    "title": "Shingle vs metal",
    "editor": "Sam",
    "stage": "In review",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 6.0,
    "client_approved_on": "",
    "shoot_booking": ""
  },
  {
    "video_id": "V316",
    "client": "Ironclad Gym",
    "title": "Open house promo",
    "editor": "Dev",
    "stage": "In edit",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 4.5,
    "client_approved_on": "",
    "shoot_booking": "B156"
  },
  {
    "video_id": "V317",
    "client": "Marcus Webb",
    "title": "Trainer intro",
    "editor": "Sam",
    "stage": "In edit",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.1,
    "client_approved_on": "",
    "shoot_booking": "B156"
  },
  {
    "video_id": "V318",
    "client": "Ironclad Fitness",
    "title": "Nutrition tip",
    "editor": "Rita",
    "stage": "In edit",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.1,
    "client_approved_on": "",
    "shoot_booking": "B156"
  },
  {
    "video_id": "V319",
    "client": "Dr Khan",
    "title": "Invisalign myths",
    "editor": "Sam",
    "stage": "In edit",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.9,
    "client_approved_on": "",
    "shoot_booking": "B157"
  },
  {
    "video_id": "V320",
    "client": "Khan Dental",
    "title": "Implants explained",
    "editor": "Dev",
    "stage": "In edit",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 2.9,
    "client_approved_on": "",
    "shoot_booking": "B157"
  },
  {
    "video_id": "V321",
    "client": "Dr. Sarah Khan",
    "title": "Meet the doctor",
    "editor": "Ali",
    "stage": "In edit",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.8,
    "client_approved_on": "",
    "shoot_booking": "B157"
  },
  {
    "video_id": "V322",
    "client": "Khan Dental",
    "title": "Kids dental tips",
    "editor": "Ali",
    "stage": "In edit",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.2,
    "client_approved_on": "",
    "shoot_booking": "B157"
  },
  {
    "video_id": "V323",
    "client": "Mike Delgado",
    "title": "Hail claim help",
    "editor": "Sam",
    "stage": "In edit",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 5.7,
    "client_approved_on": "",
    "shoot_booking": "B158"
  },
  {
    "video_id": "V324",
    "client": "Mike's Roofing",
    "title": "Storm damage tips",
    "editor": "Ali",
    "stage": "In edit",
    "notes_on_board": "",
    "revisions": 0,
    "editor_hours": 3.7,
    "client_approved_on": "",
    "shoot_booking": "B158"
  },
  {
    "video_id": "V325",
    "client": "Mike's Roofing",
    "title": "Shingle vs metal",
    "editor": "Sam",
    "stage": "In edit",
    "notes_on_board": "",
    "revisions": 1,
    "editor_hours": 5.8,
    "client_approved_on": "",
    "shoot_booking": "B158"
  }
];

export const initialLeads: Lead[] = [
  {
    "lead_id": "L001",
    "created": "2026-03-25 15:33",
    "name": "David Kim",
    "business": "Northpoint Church",
    "email": "media@northpointdfw.org",
    "phone": "972-555-0112",
    "source": "Website form",
    "first_reply": "2026-03-25",
    "status": "Won"
  },
  {
    "lead_id": "L002",
    "created": "2026-03-27 17:42",
    "name": "Sarah Khan",
    "business": "Khan Dental",
    "email": "sarah@khandental.com",
    "phone": "214-555-0141",
    "source": "Referral",
    "first_reply": "2026-03-27",
    "status": "Won"
  },
  {
    "lead_id": "L003",
    "created": "2026-03-30 16:23",
    "name": "Tasha Green",
    "business": "Hustle and Heart",
    "email": "tasha@hustleandheart.fm",
    "phone": "469-555-0157",
    "source": "Instagram",
    "first_reply": "2026-03-30",
    "status": "Won"
  },
  {
    "lead_id": "L004",
    "created": "2026-04-02 18:19",
    "name": "Ethan Cole",
    "business": "DFW Founders",
    "email": "ethan@dfwfounders.fm",
    "phone": "214-555-0118",
    "source": "Google",
    "first_reply": "2026-04-02",
    "status": "Won"
  },
  {
    "lead_id": "L005",
    "created": "2026-04-03 20:55",
    "name": "Kara Brooks",
    "business": "Brooks Med Spa",
    "email": "kara@brooksmedspa.com",
    "phone": "469-555-0135",
    "source": "Meta ad",
    "first_reply": "2026-04-04",
    "status": "Lost"
  },
  {
    "lead_id": "L006",
    "created": "2026-04-04 10:16",
    "name": "Kara Brooks",
    "business": "Brooks Tax Services",
    "email": "kara@brookstaxservices.com",
    "phone": "469-555-0145",
    "source": "Google",
    "first_reply": "2026-04-09",
    "status": "Lost"
  },
  {
    "lead_id": "L007",
    "created": "2026-04-04 15:06",
    "name": "Amanda Nguyen",
    "business": "Nguyen Bakery",
    "email": "amanda@nguyenbakery.com",
    "phone": "214-555-0129",
    "source": "Meta ad",
    "first_reply": "2026-04-04",
    "status": "Lost"
  },
  {
    "lead_id": "L008",
    "created": "2026-04-05 13:45",
    "name": "Kevin Owens",
    "business": "Owens Plumbing",
    "email": "kevin@owensplumbing.com",
    "phone": "817-555-0192",
    "source": "Instagram",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L009",
    "created": "2026-04-08 11:50",
    "name": "Will Carter",
    "business": "Cedar and Stone",
    "email": "will@cedarstone.build",
    "phone": "817-555-0122",
    "source": "Google",
    "first_reply": "2026-04-10",
    "status": "Won"
  },
  {
    "lead_id": "L010",
    "created": "2026-04-09 20:40",
    "name": "Paul Grant",
    "business": "Meridian Wealth",
    "email": "pgrant@meridianwp.com",
    "phone": "214-555-0182",
    "source": "LinkedIn",
    "first_reply": "2026-04-09",
    "status": "Won"
  },
  {
    "lead_id": "L011",
    "created": "2026-04-09 09:55",
    "name": "Zoe Owens",
    "business": "",
    "email": "zoeowens92@gmail.com",
    "phone": "214-555-0191",
    "source": "Meta ad",
    "first_reply": "2026-04-14",
    "status": "Lost"
  },
  {
    "lead_id": "L012",
    "created": "2026-04-11 21:57",
    "name": "Priya Shah",
    "business": "Bloom Med Spa",
    "email": "priya@bloommedspa.com",
    "phone": "972-555-0110",
    "source": "Instagram",
    "first_reply": "2026-04-11",
    "status": "Won"
  },
  {
    "lead_id": "L013",
    "created": "2026-04-12 21:33",
    "name": "Mike Delgado",
    "business": "Mikes Roofing",
    "email": "mike@mikesroofingtx.com",
    "phone": "469-555-0172",
    "source": "Meta ad",
    "first_reply": "2026-04-12",
    "status": "Won"
  },
  {
    "lead_id": "L014",
    "created": "2026-04-12 15:11",
    "name": "Rosa Kim",
    "business": "Kim Bakery",
    "email": "rosa@kimbakery.com",
    "phone": "817-555-0161",
    "source": "Meta ad",
    "first_reply": "2026-04-14",
    "status": "Lost"
  },
  {
    "lead_id": "L015",
    "created": "2026-04-18 18:00",
    "name": "Sofia Ramirez",
    "business": "Luna Bridal",
    "email": "sofia@lunabridal.com",
    "phone": "214-555-0135",
    "source": "Instagram",
    "first_reply": "2026-04-18",
    "status": "Won"
  },
  {
    "lead_id": "L016",
    "created": "2026-04-18 14:40",
    "name": "Owen Brooks",
    "business": "Brooks Law Office",
    "email": "owen@brookslawoffice.com",
    "phone": "817-555-0163",
    "source": "Website form",
    "first_reply": "2026-04-21",
    "status": "Lost"
  },
  {
    "lead_id": "L017",
    "created": "2026-04-19 16:53",
    "name": "Leah Kim",
    "business": "Kim Auto Group",
    "email": "leah@kimautogroup.com",
    "phone": "469-555-0178",
    "source": "Website form",
    "first_reply": "2026-04-21",
    "status": "Lost"
  },
  {
    "lead_id": "L018",
    "created": "2026-04-24 11:52",
    "name": "Kim Lee",
    "business": "Apex Physical Therapy",
    "email": "klee@apexptdallas.com",
    "phone": "972-555-0144",
    "source": "Website form",
    "first_reply": "2026-04-26",
    "status": "Won"
  },
  {
    "lead_id": "L019",
    "created": "2026-04-25 16:37",
    "name": "Kevin Cruz",
    "business": "",
    "email": "kevincruz19@gmail.com",
    "phone": "972-555-0105",
    "source": "LinkedIn",
    "first_reply": "2026-04-25",
    "status": "Lost"
  },
  {
    "lead_id": "L020",
    "created": "2026-04-26 11:26",
    "name": "Brian Brooks",
    "business": "Brooks Yoga Studio",
    "email": "brian@brooksyogastudio.com",
    "phone": "214-555-0157",
    "source": "Meta ad",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L021",
    "created": "2026-04-27 08:58",
    "name": "Brian Haddad",
    "business": "Haddad Insurance",
    "email": "brian@haddadinsurance.com",
    "phone": "972-555-0157",
    "source": "Google",
    "first_reply": "2026-04-29",
    "status": "Lost"
  },
  {
    "lead_id": "L022",
    "created": "2026-04-28 15:13",
    "name": "Mike Torres",
    "business": "Torres Law",
    "email": "mtorres@torreslaw.com",
    "phone": "214-555-0188",
    "source": "Google",
    "first_reply": "2026-04-29",
    "status": "Won"
  },
  {
    "lead_id": "L023",
    "created": "2026-04-30 20:03",
    "name": "Marcus Lee",
    "business": "Lee Insurance",
    "email": "marcus@leeinsurance.com",
    "phone": "469-555-0198",
    "source": "Google",
    "first_reply": "2026-05-03",
    "status": "Lost"
  },
  {
    "lead_id": "L024",
    "created": "2026-05-01 16:05",
    "name": "SEO Services",
    "business": "",
    "email": "seo@rank1seo.biz",
    "phone": "",
    "source": "Website form",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L025",
    "created": "2026-05-03 11:23",
    "name": "Omar Owens",
    "business": "",
    "email": "omarowens75@gmail.com",
    "phone": "817-555-0158",
    "source": "Google",
    "first_reply": "2026-05-03",
    "status": "Lost"
  },
  {
    "lead_id": "L026",
    "created": "2026-05-06 10:06",
    "name": "Jordan Reed",
    "business": "Elevate",
    "email": "jordan@elevatefit.co",
    "phone": "469-555-0133",
    "source": "Meta ad",
    "first_reply": "2026-05-08",
    "status": "Won"
  },
  {
    "lead_id": "L027",
    "created": "2026-05-07 13:34",
    "name": "Wes Park",
    "business": "",
    "email": "wespark32@gmail.com",
    "phone": "817-555-0195",
    "source": "Referral",
    "first_reply": "2026-05-08",
    "status": "Lost"
  },
  {
    "lead_id": "L028",
    "created": "2026-05-08 10:23",
    "name": "Nora Becker",
    "business": "Becker Med Spa",
    "email": "nora@beckermedspa.com",
    "phone": "817-555-0166",
    "source": "Meta ad",
    "first_reply": "2026-05-10",
    "status": "Lost"
  },
  {
    "lead_id": "L029",
    "created": "2026-05-12 21:05",
    "name": "Nadia Hassan",
    "business": "Glow Aesthetic",
    "email": "nadia@glowaesthetics.co",
    "phone": "972-555-0153",
    "source": "Instagram",
    "first_reply": "2026-05-14",
    "status": "Won"
  },
  {
    "lead_id": "L030",
    "created": "2026-05-12 15:54",
    "name": "Brian Nguyen",
    "business": "",
    "email": "briannguyen26@gmail.com",
    "phone": "214-555-0123",
    "source": "Instagram",
    "first_reply": "2026-05-17",
    "status": "Lost"
  },
  {
    "lead_id": "L031",
    "created": "2026-05-13 21:03",
    "name": "Tom Nguyen",
    "business": "Nguyen Chiropractic",
    "email": "tom@nguyenchiropractic.com",
    "phone": "469-555-0140",
    "source": "Meta ad",
    "first_reply": "2026-05-14",
    "status": "Lost"
  },
  {
    "lead_id": "L032",
    "created": "2026-05-15 13:12",
    "name": "Kevin Reyes",
    "business": "Reyes Pediatrics",
    "email": "kevin@reyespediatrics.com",
    "phone": "817-555-0101",
    "source": "Meta ad",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L033",
    "created": "2026-05-16 11:36",
    "name": "Andre Jackson",
    "business": "Crown Barbershop",
    "email": "andre@crownbarbers.com",
    "phone": "214-555-0103",
    "source": "Instagram",
    "first_reply": "2026-05-16",
    "status": "Won"
  },
  {
    "lead_id": "L034",
    "created": "2026-05-16 12:51",
    "name": "Kara Cruz",
    "business": "Cruz Roofing",
    "email": "kara@cruzroofing.com",
    "phone": "972-555-0165",
    "source": "LinkedIn",
    "first_reply": "2026-05-21",
    "status": "Lost"
  },
  {
    "lead_id": "L035",
    "created": "2026-05-18 16:15",
    "name": "Raj Patel",
    "business": "Patel Insurance",
    "email": "raj@patelinsures.com",
    "phone": "214-555-0195",
    "source": "Meta ad",
    "first_reply": "2026-05-19",
    "status": "Won"
  },
  {
    "lead_id": "L036",
    "created": "2026-05-20 18:03",
    "name": "Victor Brooks",
    "business": "",
    "email": "victorbrooks58@gmail.com",
    "phone": "972-555-0182",
    "source": "Instagram",
    "first_reply": "2026-05-25",
    "status": "Lost"
  },
  {
    "lead_id": "L037",
    "created": "2026-05-21 16:44",
    "name": "Ivy Diaz",
    "business": "",
    "email": "ivydiaz39@gmail.com",
    "phone": "469-555-0117",
    "source": "Instagram",
    "first_reply": "2026-05-22",
    "status": "Lost"
  },
  {
    "lead_id": "L038",
    "created": "2026-05-26 11:31",
    "name": "Dana Brooks",
    "business": "Lone Star Realty",
    "email": "dana@lonestarrealty.com",
    "phone": "214-555-0164",
    "source": "Referral",
    "first_reply": "2026-05-27",
    "status": "Won"
  },
  {
    "lead_id": "L039",
    "created": "2026-05-28 09:30",
    "name": "Kelsey Moore",
    "business": "Brightline Marketing",
    "email": "kelsey@brightlinemktg.com",
    "phone": "214-555-0170",
    "source": "Referral",
    "first_reply": "2026-05-28",
    "status": "Won"
  },
  {
    "lead_id": "L040",
    "created": "2026-05-28 14:31",
    "name": "Eli Haddad",
    "business": "Haddad Law Office",
    "email": "eli@haddadlawoffice.com",
    "phone": "817-555-0102",
    "source": "Google",
    "first_reply": "2026-05-30",
    "status": "Lost"
  },
  {
    "lead_id": "L041",
    "created": "2026-05-30 16:31",
    "name": "Hannah Brooks",
    "business": "Oaklane Dental",
    "email": "hbrooks@oaklanedental.com",
    "phone": "469-555-0108",
    "source": "Referral",
    "first_reply": "2026-05-30",
    "status": "Won"
  },
  {
    "lead_id": "L042",
    "created": "2026-06-01 13:04",
    "name": "Sarah Khan",
    "business": "Khan Dental",
    "email": "sarah@khandental.com",
    "phone": "214-555-0141",
    "source": "Website form",
    "first_reply": "2026-06-01",
    "status": "Won"
  },
  {
    "lead_id": "L043",
    "created": "2026-06-07 20:49",
    "name": "test test",
    "business": "",
    "email": "test@test.com",
    "phone": "",
    "source": "Website form",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L044",
    "created": "2026-06-08 15:16",
    "name": "Aisha Khan",
    "business": "Khan Law",
    "email": "info@khanfamilylaw.com",
    "phone": "214-555-0150",
    "source": "Google",
    "first_reply": "2026-06-08",
    "status": "Won"
  },
  {
    "lead_id": "L045",
    "created": "2026-06-11 08:37",
    "name": "Tom Diaz",
    "business": "Diaz Auto Group",
    "email": "tom@diazautogroup.com",
    "phone": "469-555-0173",
    "source": "Referral",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L046",
    "created": "2026-06-12 15:59",
    "name": "Lena Ortiz",
    "business": "The Brew Lab",
    "email": "lena@thebrewlab.coffee",
    "phone": "469-555-0116",
    "source": "Website form",
    "first_reply": "2026-06-14",
    "status": "Won"
  },
  {
    "lead_id": "L047",
    "created": "2026-06-16 09:53",
    "name": "Derek Morales",
    "business": "Morales Coffee",
    "email": "derek@moralescoffee.com",
    "phone": "972-555-0122",
    "source": "Website form",
    "first_reply": "2026-06-17",
    "status": "Lost"
  },
  {
    "lead_id": "L048",
    "created": "2026-06-16 16:56",
    "name": "Marcus Morales",
    "business": "Morales Yoga Studio",
    "email": "marcus@moralesyogastudio.com",
    "phone": "817-555-0162",
    "source": "Instagram",
    "first_reply": "2026-06-17",
    "status": "Lost"
  },
  {
    "lead_id": "L049",
    "created": "2026-06-21 08:45",
    "name": "Nora Ford",
    "business": "Ford Plumbing",
    "email": "nora@fordplumbing.com",
    "phone": "214-555-0196",
    "source": "Meta ad",
    "first_reply": "2026-06-21",
    "status": "Lost"
  },
  {
    "lead_id": "L050",
    "created": "2026-06-21 08:32",
    "name": "Omar Bell",
    "business": "Bell Plumbing",
    "email": "omar@bellplumbing.com",
    "phone": "817-555-0183",
    "source": "Instagram",
    "first_reply": "2026-06-29",
    "status": "Lost"
  },
  {
    "lead_id": "L051",
    "created": "2026-07-02 14:00",
    "name": "Marcus Webb",
    "business": "Ironclad Fitness",
    "email": "marcus@ironcladgym.com",
    "phone": "469-555-0126",
    "source": "Meta ad",
    "first_reply": "2026-07-02",
    "status": "Won"
  },
  {
    "lead_id": "L052",
    "created": "2026-07-04 12:27",
    "name": "Tara Diaz",
    "business": "Diaz Bakery",
    "email": "tara@diazbakery.com",
    "phone": "817-555-0176",
    "source": "Google",
    "first_reply": "2026-07-04",
    "status": "Lost"
  },
  {
    "lead_id": "L053",
    "created": "2026-07-09 19:43",
    "name": "Maria Lopez",
    "business": "Sage Family Therapy",
    "email": "mlopez@sagefamilytherapy.com",
    "phone": "972-555-0171",
    "source": "Website form",
    "first_reply": "2026-07-11",
    "status": "Won"
  },
  {
    "lead_id": "L054",
    "created": "2026-07-12 21:23",
    "name": "Jen Walsh",
    "business": "Harbor Coffee Roasters",
    "email": "jen@harborcoffee.com",
    "phone": "469-555-0149",
    "source": "Referral",
    "first_reply": "2026-07-12",
    "status": "Won"
  },
  {
    "lead_id": "L055",
    "created": "2026-07-12 14:23",
    "name": "Samir Hill",
    "business": "Hill Plumbing",
    "email": "samir@hillplumbing.com",
    "phone": "469-555-0133",
    "source": "LinkedIn",
    "first_reply": "2026-07-14",
    "status": "Lost"
  },
  {
    "lead_id": "L056",
    "created": "2026-07-14 09:07",
    "name": "Samir Morales",
    "business": "Morales Coffee",
    "email": "samir@moralescoffee.com",
    "phone": "972-555-0140",
    "source": "Meta ad",
    "first_reply": "2026-07-19",
    "status": "Lost"
  },
  {
    "lead_id": "L057",
    "created": "2026-07-14 11:14",
    "name": "Amanda Brooks",
    "business": "",
    "email": "amandabrooks95@gmail.com",
    "phone": "972-555-0192",
    "source": "Instagram",
    "first_reply": "2026-07-22",
    "status": "Lost"
  },
  {
    "lead_id": "L058",
    "created": "2026-07-14 17:50",
    "name": "asdf",
    "business": "",
    "email": "a@a.co",
    "phone": "",
    "source": "Website form",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L059",
    "created": "2026-07-18 13:15",
    "name": "Imran Khan",
    "business": "Khans Auto",
    "email": "imran@khansautospa.com",
    "phone": "972-555-0161",
    "source": "Instagram",
    "first_reply": "2026-07-18",
    "status": "Won"
  },
  {
    "lead_id": "L060",
    "created": "2026-07-23 11:30",
    "name": "Kara Reyes",
    "business": "Reyes Pet Grooming",
    "email": "kara@reyespetgrooming.com",
    "phone": "469-555-0153",
    "source": "Google",
    "first_reply": "2026-07-23",
    "status": "Lost"
  },
  {
    "lead_id": "L061",
    "created": "2026-07-24 17:57",
    "name": "Felix Haddad",
    "business": "Haddad Insurance",
    "email": "felix@haddadinsurance.com",
    "phone": "817-555-0159",
    "source": "LinkedIn",
    "first_reply": "2026-08-01",
    "status": "Lost"
  },
  {
    "lead_id": "L062",
    "created": "2026-07-25 21:07",
    "name": "Marcus Shaw",
    "business": "Shaw Salon",
    "email": "marcus@shawsalon.com",
    "phone": "817-555-0144",
    "source": "Instagram",
    "first_reply": "2026-07-26",
    "status": "Lost"
  },
  {
    "lead_id": "L063",
    "created": "2026-07-30 12:49",
    "name": "Priya Shah",
    "business": "Bloom Med Spa Frisco",
    "email": "frisco@bloommedspa.com",
    "phone": "972-555-0110",
    "source": "Website form",
    "first_reply": "2026-07-31",
    "status": "New"
  },
  {
    "lead_id": "L064",
    "created": "2026-07-31 21:26",
    "name": "Greg Whitfield",
    "business": "Lonestar Realty Group",
    "email": "greg@lonestarrg.com",
    "phone": "817-555-0119",
    "source": "Meta ad",
    "first_reply": "2026-08-01",
    "status": "Won"
  },
  {
    "lead_id": "L065",
    "created": "2026-08-03 20:43",
    "name": "Tony Russo",
    "business": "Prime Roofing Co",
    "email": "tony@primeroofingco.com",
    "phone": "817-555-0131",
    "source": "Meta ad",
    "first_reply": "2026-08-04",
    "status": "Won"
  },
  {
    "lead_id": "L066",
    "created": "2026-08-03 14:31",
    "name": "Jordan Reed",
    "business": "Elevate Athletics",
    "email": "jordan@elevateathletics.com",
    "phone": "469-555-0133",
    "source": "Website form",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L067",
    "created": "2026-08-03 13:37",
    "name": "Rachel Hill",
    "business": "Hill Family Dentistry",
    "email": "rachel@hillfamilydentistry.com",
    "phone": "972-555-0187",
    "source": "Referral",
    "first_reply": "2026-08-08",
    "status": "Lost"
  },
  {
    "lead_id": "L068",
    "created": "2026-08-04 17:58",
    "name": "Grace Morales",
    "business": "Morales Realty",
    "email": "grace@moralesrealty.com",
    "phone": "972-555-0195",
    "source": "Google",
    "first_reply": "2026-08-04",
    "status": "Lost"
  },
  {
    "lead_id": "L069",
    "created": "2026-08-05 08:49",
    "name": "Marcus Morales",
    "business": "Morales Family Dentistry",
    "email": "marcus@moralesfamilydentistry.com",
    "phone": "972-555-0144",
    "source": "Instagram",
    "first_reply": "2026-08-05",
    "status": "Lost"
  },
  {
    "lead_id": "L070",
    "created": "2026-08-06 10:25",
    "name": "Samir Bell",
    "business": "Bell Insurance",
    "email": "samir@bellinsurance.com",
    "phone": "972-555-0194",
    "source": "Website form",
    "first_reply": "2026-08-08",
    "status": "Lost"
  },
  {
    "lead_id": "L071",
    "created": "2026-08-08 14:16",
    "name": "Amanda Owens",
    "business": "",
    "email": "amandaowens30@gmail.com",
    "phone": "817-555-0181",
    "source": "LinkedIn",
    "first_reply": "2026-08-08",
    "status": "Lost"
  },
  {
    "lead_id": "L072",
    "created": "2026-08-12 17:19",
    "name": "Tara Bell",
    "business": "",
    "email": "tarabell34@gmail.com",
    "phone": "214-555-0177",
    "source": "Meta ad",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L073",
    "created": "2026-08-14 17:30",
    "name": "Tom Haddad",
    "business": "Haddad Law Office",
    "email": "tom@haddadlawoffice.com",
    "phone": "817-555-0120",
    "source": "Meta ad",
    "first_reply": "2026-08-17",
    "status": "Lost"
  },
  {
    "lead_id": "L074",
    "created": "2026-08-15 19:04",
    "name": "Zoe Haddad",
    "business": "Haddad Law Office",
    "email": "zoe@haddadlawoffice.com",
    "phone": "817-555-0143",
    "source": "Meta ad",
    "first_reply": "2026-08-16",
    "status": "Lost"
  },
  {
    "lead_id": "L075",
    "created": "2026-08-16 11:40",
    "name": "Eli Reyes",
    "business": "Reyes Family Dentistry",
    "email": "eli@reyesfamilydentistry.com",
    "phone": "214-555-0186",
    "source": "Meta ad",
    "first_reply": "2026-08-21",
    "status": "Lost"
  },
  {
    "lead_id": "L076",
    "created": "2026-08-20 17:50",
    "name": "Free followers",
    "business": "",
    "email": "promo@fastfollowers.io",
    "phone": "",
    "source": "Website form",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L077",
    "created": "2026-08-22 13:44",
    "name": "Rachel Morales",
    "business": "Morales Bakery",
    "email": "rachel@moralesbakery.com",
    "phone": "214-555-0113",
    "source": "Instagram",
    "first_reply": "2026-08-22",
    "status": "Lost"
  },
  {
    "lead_id": "L078",
    "created": "2026-08-22 20:56",
    "name": "Kevin Ford",
    "business": "",
    "email": "kevinford41@gmail.com",
    "phone": "817-555-0156",
    "source": "LinkedIn",
    "first_reply": "2026-08-24",
    "status": "Lost"
  },
  {
    "lead_id": "L079",
    "created": "2026-08-23 18:38",
    "name": "Zoe Haddad",
    "business": "Haddad Law Office",
    "email": "zoe@haddadlawoffice.com",
    "phone": "972-555-0122",
    "source": "Instagram",
    "first_reply": "2026-08-28",
    "status": "Lost"
  },
  {
    "lead_id": "L080",
    "created": "2026-08-24 16:23",
    "name": "Leah Hill",
    "business": "",
    "email": "leahhill74@gmail.com",
    "phone": "469-555-0117",
    "source": "Meta ad",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L081",
    "created": "2026-08-25 10:03",
    "name": "Olivia Owens",
    "business": "Owens Pediatrics",
    "email": "olivia@owenspediatrics.com",
    "phone": "817-555-0178",
    "source": "Meta ad",
    "first_reply": "2026-08-30",
    "status": "Lost"
  },
  {
    "lead_id": "L082",
    "created": "2026-08-26 09:47",
    "name": "Angela Price",
    "business": "TLC Home Care",
    "email": "angela@tlchomecare.com",
    "phone": "214-555-0187",
    "source": "Meta ad",
    "first_reply": "2026-08-26",
    "status": "Won"
  },
  {
    "lead_id": "L083",
    "created": "2026-08-26 21:33",
    "name": "Zoe Kim",
    "business": "Kim Pet Grooming",
    "email": "zoe@kimpetgrooming.com",
    "phone": "972-555-0127",
    "source": "Google",
    "first_reply": "2026-08-27",
    "status": "Lost"
  },
  {
    "lead_id": "L084",
    "created": "2026-08-26 13:49",
    "name": "Bella Cruz",
    "business": "Cruz HVAC",
    "email": "bella@cruzhvac.com",
    "phone": "817-555-0150",
    "source": "Instagram",
    "first_reply": "2026-08-31",
    "status": "Lost"
  },
  {
    "lead_id": "L085",
    "created": "2026-08-28 17:27",
    "name": "Tara Hill",
    "business": "Hill Yoga Studio",
    "email": "tara@hillyogastudio.com",
    "phone": "817-555-0120",
    "source": "Google",
    "first_reply": "2026-08-29",
    "status": "Talking"
  },
  {
    "lead_id": "L086",
    "created": "2026-08-29 20:56",
    "name": "Felix Diaz",
    "business": "Diaz Med Spa",
    "email": "felix@diazmedspa.com",
    "phone": "469-555-0145",
    "source": "Instagram",
    "first_reply": "2026-09-03",
    "status": "Lost"
  },
  {
    "lead_id": "L087",
    "created": "2026-08-31 13:38",
    "name": "Grace Hill",
    "business": "Hill Yoga Studio",
    "email": "grace@hillyogastudio.com",
    "phone": "817-555-0149",
    "source": "Google",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L088",
    "created": "2026-09-01 20:17",
    "name": "Rachel Kim",
    "business": "Kim Coffee",
    "email": "rachel@kimcoffee.com",
    "phone": "214-555-0145",
    "source": "Meta ad",
    "first_reply": "2026-09-04",
    "status": "Lost"
  },
  {
    "lead_id": "L089",
    "created": "2026-09-03 08:13",
    "name": "Tasha Green",
    "business": "",
    "email": "tasha.green.mail@gmail.com",
    "phone": "469-555-0157",
    "source": "Website form",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L090",
    "created": "2026-09-03 20:29",
    "name": "Samir Becker",
    "business": "Becker Family Dentistry",
    "email": "samir@beckerfamilydentistry.com",
    "phone": "469-555-0108",
    "source": "Website form",
    "first_reply": "2026-09-05",
    "status": "Talking"
  },
  {
    "lead_id": "L091",
    "created": "2026-09-05 10:12",
    "name": "Zoe Diaz",
    "business": "Diaz Fitness",
    "email": "zoe@diazfitness.com",
    "phone": "972-555-0100",
    "source": "Google",
    "first_reply": "2026-09-05",
    "status": "Lost"
  },
  {
    "lead_id": "L092",
    "created": "2026-09-12 10:37",
    "name": "Omar Haddad",
    "business": "Haddad Auto Group",
    "email": "omar@haddadauto.com",
    "phone": "214-555-0139",
    "source": "Referral",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L093",
    "created": "2026-09-16 13:23",
    "name": "Bella Bell",
    "business": "",
    "email": "bellabell64@gmail.com",
    "phone": "214-555-0122",
    "source": "Google",
    "first_reply": "2026-09-17",
    "status": "Talking"
  },
  {
    "lead_id": "L094",
    "created": "2026-09-18 14:45",
    "name": "Felix Reyes",
    "business": "Reyes Salon",
    "email": "felix@reyessalon.com",
    "phone": "817-555-0179",
    "source": "Meta ad",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L095",
    "created": "2026-09-20 12:17",
    "name": "Ray Becker",
    "business": "Becker Med Spa",
    "email": "ray@beckermedspa.com",
    "phone": "817-555-0179",
    "source": "Meta ad",
    "first_reply": "2026-09-21",
    "status": "Lost"
  },
  {
    "lead_id": "L096",
    "created": "2026-09-27 15:35",
    "name": "Kevin Kim",
    "business": "Kim Pet Grooming",
    "email": "kevin@kimpetgrooming.com",
    "phone": "214-555-0197",
    "source": "Google",
    "first_reply": "2026-09-28",
    "status": "Lost"
  },
  {
    "lead_id": "L097",
    "created": "2026-09-30 18:18",
    "name": "Nina Patel",
    "business": "Patel Insurance Group",
    "email": "nina@patelinsures.com",
    "phone": "214-555-0196",
    "source": "Website form",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L098",
    "created": "2026-10-04 15:31",
    "name": "Hector Shaw",
    "business": "Shaw Auto Group",
    "email": "hector@shawautogroup.com",
    "phone": "214-555-0198",
    "source": "Instagram",
    "first_reply": "",
    "status": "New"
  },
  {
    "lead_id": "L099",
    "created": "2026-10-05 13:08",
    "name": "Nate Kim",
    "business": "",
    "email": "natekim40@gmail.com",
    "phone": "972-555-0178",
    "source": "Google",
    "first_reply": "",
    "status": "New"
  }
];

export const initialAnswers = {
  "pack_id": 64,
  "your_name": "Usman Hameed",
  "your_email": "usman.hameed1145@gmail.com",
  "live_link": "https://axeom-pack64.vercel.app",
  "video_link": "",
  "code_or_files_link": "https://github.com/uhameed/axeom-pack64",
  "client_count": 29,
  "clients": [
    {
      "name": "NorthPoint Church",
      "other_names_used_in_the_data": [
        "NorthPoint Media Team",
        "NorthPoint DFW",
        "Northpoint Church",
        "NORTHPOINT CHURCH",
        "PASTOR DAVID KIM"
      ],
      "emails": [
        "media@northpointdfw.org"
      ],
      "phones": [
        "972-555-0112"
      ]
    },
    {
      "name": "Khan Dental PLLC",
      "other_names_used_in_the_data": [
        "Dr. Sarah Khan",
        "Sarah Khan DDS",
        "Dr Khan",
        "Khan Dental",
        "Sarah Khan",
        "DR. SARAH KHAN",
        "KHAN DENTAL"
      ],
      "emails": [
        "sarah@khandental.com",
        "sarah@khandental.con"
      ],
      "phones": [
        "214-555-0141",
        "214-555-0177"
      ]
    },
    {
      "name": "Hustle & Heart",
      "other_names_used_in_the_data": [
        "H&H Podcast",
        "Hustle & Heart Podcast",
        "Hustle and Heart",
        "Tasha Green",
        "TASHA GREEN"
      ],
      "emails": [
        "tasha@hustleandheart.fm",
        "tasha.green.mail@gmail.com"
      ],
      "phones": [
        "469-555-0157"
      ]
    },
    {
      "name": "DFW Founders Podcast",
      "other_names_used_in_the_data": [
        "DFW Founders",
        "Ethan Cole",
        "DFW FOUNDERS",
        "ETHAN COLE"
      ],
      "emails": [
        "ethan@dfwfounders.fm"
      ],
      "phones": [
        "214-555-0118"
      ]
    },
    {
      "name": "Cedar & Stone",
      "other_names_used_in_the_data": [
        "Cedar and Stone"
      ],
      "emails": [
        "will@cedarstone.build"
      ],
      "phones": [
        "817-555-0122"
      ]
    },
    {
      "name": "Bloom Med Spa",
      "other_names_used_in_the_data": [
        "Bloom Med Spa - Plano",
        "Bloom Med Spa - Frisco",
        "Bloom Medspa",
        "Bloom",
        "BLOOM MEDSPA",
        "BLOOM MED SPA",
        "BLOOM MED SPA - PLANO",
        "PRIYA SHAH",
        "Bloom Med Spa Frisco"
      ],
      "emails": [
        "priya@bloommedspa.com",
        "frisco@bloommedspa.com"
      ],
      "phones": [
        "972-555-0110"
      ]
    },
    {
      "name": "Mike's Roofing",
      "other_names_used_in_the_data": [
        "Mikes Roofing",
        "Mike Delgado",
        "Mike's Roofing LLC",
        "MIKE DELGADO",
        "MIKE'S ROOFING LLC"
      ],
      "emails": [
        "mike@mikesroofingtx.com"
      ],
      "phones": [
        "469-555-0172"
      ]
    },
    {
      "name": "Luna Bridal Boutique",
      "other_names_used_in_the_data": [
        "Luna Bridal",
        "Sofia Ramirez"
      ],
      "emails": [
        "sofia@lunabridal.com"
      ],
      "phones": [
        "214-555-0135"
      ]
    },
    {
      "name": "Meridian Wealth Partners",
      "other_names_used_in_the_data": [
        "Meridian Wealth",
        "Meridian WP",
        "PAUL GRANT",
        "Paul Grant"
      ],
      "emails": [
        "pgrant@meridianwp.com"
      ],
      "phones": [
        "214-555-0182"
      ]
    },
    {
      "name": "Elevate Athletics",
      "other_names_used_in_the_data": [
        "Elevate Fitness",
        "Elevate Fit",
        "Elevate",
        "JORDAN REED",
        "J REED",
        "Jordan Reed"
      ],
      "emails": [
        "jordan@elevatefit.co",
        "jordan@elevateathletics.com"
      ],
      "phones": [
        "469-555-0133"
      ]
    },
    {
      "name": "Apex Physical Therapy",
      "other_names_used_in_the_data": [
        "Apex PT Dallas",
        "Apex PT",
        "DR. KIM LEE",
        "APEX PT",
        "APEX PHYSICAL THERAPY"
      ],
      "emails": [
        "klee@apexptdallas.com"
      ],
      "phones": [
        "972-555-0144"
      ]
    },
    {
      "name": "Torres Law Firm PLLC",
      "other_names_used_in_the_data": [
        "Torres Law",
        "Torres",
        "Torres Law Firm",
        "TORRES LAW FIRM PLLC",
        "MIKE TORRES"
      ],
      "emails": [
        "mtorres@torreslaw.com"
      ],
      "phones": [
        "214-555-0188"
      ]
    },
    {
      "name": "Glow Aesthetics",
      "other_names_used_in_the_data": [
        "Glow Aesthetic",
        "Glow Med",
        "GLOW AESTHETICS",
        "NADIA HASSAN",
        "Nadia Hassan"
      ],
      "emails": [
        "nadia@glowaesthetics.co"
      ],
      "phones": [
        "972-555-0153"
      ]
    },
    {
      "name": "Crown Barbershop",
      "other_names_used_in_the_data": [
        "Crown Barbers",
        "Andre Jackson",
        "ANDRE JACKSON"
      ],
      "emails": [
        "andre@crownbarbers.com"
      ],
      "phones": [
        "214-555-0103"
      ]
    },
    {
      "name": "Patel Insurance Group",
      "other_names_used_in_the_data": [
        "Patel Insurance",
        "Patel Ins",
        "Raj Patel",
        "PATEL INSURANCE GROUP",
        "Nina Patel"
      ],
      "emails": [
        "raj@patelinsures.com",
        "nina@patelinsures.com"
      ],
      "phones": [
        "214-555-0195",
        "214-555-0196"
      ]
    },
    {
      "name": "Lone Star Realty LLC",
      "other_names_used_in_the_data": [
        "Lone Star Realty",
        "Dana Brooks",
        "DANA BROOKS"
      ],
      "emails": [
        "dana@lonestarrealty.com"
      ],
      "phones": [
        "214-555-0164"
      ]
    },
    {
      "name": "Oak Lane Dental",
      "other_names_used_in_the_data": [
        "Oaklane Dental",
        "Hannah Brooks DDS",
        "DR. HANNAH BROOKS",
        "HANNAH BROOKS DDS"
      ],
      "emails": [
        "hbrooks@oaklanedental.com"
      ],
      "phones": [
        "469-555-0108"
      ]
    },
    {
      "name": "Khan Family Law",
      "other_names_used_in_the_data": [
        "Khan Law",
        "Aisha Khan"
      ],
      "emails": [
        "info@khanfamilylaw.com"
      ],
      "phones": [
        "214-555-0150"
      ]
    },
    {
      "name": "The Brew Lab",
      "other_names_used_in_the_data": [
        "Brew Lab",
        "Brewlab Coffee",
        "LENA ORTIZ"
      ],
      "emails": [
        "lena@thebrewlab.coffee"
      ],
      "phones": [
        "469-555-0116"
      ]
    },
    {
      "name": "Greenway Pediatrics",
      "other_names_used_in_the_data": [
        "Greenway Peds",
        "Brightline - Greenway"
      ],
      "emails": [
        "acho@greenwaypeds.com"
      ],
      "phones": [
        "972-555-0129"
      ]
    },
    {
      "name": "Summit Chiropractic",
      "other_names_used_in_the_data": [
        "Summit Chiro",
        "Brightline - Summit"
      ],
      "emails": [
        "drhale@summitchiro.com"
      ],
      "phones": [
        "972-555-0148"
      ]
    },
    {
      "name": "Ironclad Gym",
      "other_names_used_in_the_data": [
        "Ironclad Fitness",
        "Marcus Webb",
        "IRONCLAD GYM"
      ],
      "emails": [
        "marcus@ironcladgym.com"
      ],
      "phones": [
        "469-555-0126"
      ]
    },
    {
      "name": "Sage Family Therapy",
      "other_names_used_in_the_data": [
        "Sage Therapy",
        "Dr. Maria Lopez"
      ],
      "emails": [
        "mlopez@sagefamilytherapy.com"
      ],
      "phones": [
        "972-555-0171"
      ]
    },
    {
      "name": "Harbor Coffee Roasters",
      "other_names_used_in_the_data": [
        "Harbor Coffee",
        "Harbor Roasters"
      ],
      "emails": [
        "jen@harborcoffee.com"
      ],
      "phones": [
        "469-555-0149"
      ]
    },
    {
      "name": "Khan's Auto Spa",
      "other_names_used_in_the_data": [
        "Khans Auto",
        "Imran Khan",
        "IMRAN KHAN"
      ],
      "emails": [
        "imran@khansautospa.com"
      ],
      "phones": [
        "972-555-0161"
      ]
    },
    {
      "name": "Lonestar Realty Group",
      "other_names_used_in_the_data": [
        "Lonestar Realty"
      ],
      "emails": [
        "greg@lonestarrg.com"
      ],
      "phones": [
        "817-555-0119"
      ]
    },
    {
      "name": "Prime Roofing Co",
      "other_names_used_in_the_data": [
        "Prime Roofing",
        "Tony Russo",
        "TONY RUSSO"
      ],
      "emails": [
        "tony@primeroofingco.com"
      ],
      "phones": [
        "817-555-0131"
      ]
    },
    {
      "name": "TLC Homecare",
      "other_names_used_in_the_data": [
        "TLC Home Care",
        "Angela Price"
      ],
      "emails": [
        "angela@tlchomecare.com"
      ],
      "phones": [
        "214-555-0187"
      ]
    },
    {
      "name": "Vega Auto Detailing",
      "other_names_used_in_the_data": [
        "Vega Auto",
        "Carlos Vega",
        "Vega Detailing",
        "CARLOS VEGA"
      ],
      "emails": [
        "carlos.vega.detail@gmail.com"
      ],
      "phones": [
        "469-555-0190"
      ]
    }
  ],
  "payers_who_are_not_clients": [
    {
      "name": "Brightline Marketing",
      "pays_for": [
        "Greenway Pediatrics",
        "Summit Chiropractic"
      ]
    }
  ],
  "overdue": [
    {
      "client": "Hustle & Heart",
      "invoice": "INV-1101",
      "amount_owed": 300,
      "days_late": 45
    },
    {
      "client": "Hustle & Heart",
      "invoice": "INV-1104",
      "amount_owed": 300,
      "days_late": 41
    },
    {
      "client": "Lonestar Realty Group",
      "invoice": "INV-1106",
      "amount_owed": 1500,
      "days_late": 39
    },
    {
      "client": "Hustle & Heart",
      "invoice": "INV-1110",
      "amount_owed": 300,
      "days_late": 34
    },
    {
      "client": "Hustle & Heart",
      "invoice": "INV-1113",
      "amount_owed": 300,
      "days_late": 28
    },
    {
      "client": "Prime Roofing Co",
      "invoice": "INV-1121",
      "amount_owed": 450,
      "days_late": 21
    },
    {
      "client": "TLC Homecare",
      "invoice": "INV-1122",
      "amount_owed": 1500,
      "days_late": 21
    },
    {
      "client": "Patel Insurance Group",
      "invoice": "INV-1124",
      "amount_owed": 2500,
      "days_late": 21
    },
    {
      "client": "Mike's Roofing",
      "invoice": "INV-1127",
      "amount_owed": 900,
      "days_late": 15
    },
    {
      "client": "Brightline Marketing",
      "invoice": "INV-1128",
      "amount_owed": 900,
      "days_late": 15
    },
    {
      "client": "Hustle & Heart",
      "invoice": "INV-1130",
      "amount_owed": 300,
      "days_late": 14
    }
  ],
  "overdue_total": 9250,
  "we_owe": [
    {
      "client": "Glow Aesthetics",
      "amount": 900,
      "why": "Invoice INV-1088 ($900.00) was paid twice in error: once via Zelle (P5084, $900 on 2026-07-30) and once via Card (P5086, $900 on 2026-07-31), totaling $1,800 received for a $900 bill."
    }
  ],
  "never_billed": [
    {
      "client": "Hustle & Heart",
      "booking_id_or_month": "B126",
      "amount": 300
    },
    {
      "client": "Ironclad Gym",
      "booking_id_or_month": "B130",
      "amount": 900
    },
    {
      "client": "Hustle & Heart",
      "booking_id_or_month": "B143",
      "amount": 300
    },
    {
      "client": "DFW Founders Podcast",
      "booking_id_or_month": "B145",
      "amount": 550
    },
    {
      "client": "Vega Auto Detailing",
      "booking_id_or_month": "B146",
      "amount": 1500
    },
    {
      "client": "Torres Law Firm PLLC",
      "booking_id_or_month": "May 2026 Retainer",
      "amount": 2500
    },
    {
      "client": "Patel Insurance Group",
      "booking_id_or_month": "May 2026 Retainer",
      "amount": 2500
    },
    {
      "client": "Apex Physical Therapy",
      "booking_id_or_month": "May 2026 Retainer",
      "amount": 2500
    },
    {
      "client": "Apex Physical Therapy",
      "booking_id_or_month": "September 2026 Retainer",
      "amount": 2500
    }
  ],
  "never_billed_total": 13550,
  "billing_tool_is_wrong": [
    {
      "invoice": "INV-1116",
      "tool_says": "Status is unpaid for $900.00",
      "truth": "Paid in full ($900.00)",
      "how_you_know": "Payment P5105 on 2026-08-28 was received from Harbor Roasters (jen@harborcoffee.com) for $900.00 explicitly referencing INV-1116."
    },
    {
      "invoice": "INV-1103",
      "tool_says": "Status is unpaid for $900.00",
      "truth": "Paid in full ($900.00)",
      "how_you_know": "Payment P5118 on 2026-09-13 was received from Mike's Roofing for $900.00 explicitly referencing INV-1103."
    },
    {
      "invoice": "INV-1093",
      "tool_says": "Amount billed: $2,000.00 for August Retainer",
      "truth": "Should be $2,500.00 (underbilled by $500.00)",
      "how_you_know": "Apex Physical Therapy retainer shoots (B023, B046, B074, B105, B137) are contracted at $2,500/month (INV-1037, INV-1064, and INV-1146 are all $2,500). No rate reduction or discount was authorized."
    },
    {
      "invoice": "INV-1072",
      "tool_says": "Issued 2026-07-10 for booking B082 Content Day",
      "truth": "Issued 5 days prior to the shoot date (07/15/2026)",
      "how_you_know": "Booking B082 was scheduled and completed on 2026-07-15, but invoice INV-1072 was generated prematurely on 2026-07-10."
    },
    {
      "invoice": "INV-1017",
      "tool_says": "Billed to Hustle & Heart Podcast (tasha@hustleandheart.fm)",
      "truth": "Booking B017 was a personal booking for Tasha Green (tasha.green.mail@gmail.com)",
      "how_you_know": "B017 was booked with Tasha's personal email, but the billing tool routed the invoice to the business account."
    }
  ],
  "lost_requests": [
    {
      "video_id": "V002",
      "request_date": "2026-04-10",
      "came_by": "voice note",
      "why_it_was_lost": "Voice note request to add phone number at end of video was never logged into the production board notes, leading client to follow up angrily on 04/15 ('second time I ask')."
    },
    {
      "video_id": "V019",
      "request_date": "2026-04-30",
      "came_by": "voice note",
      "why_it_was_lost": "Voice note from Paul Grant asking to add phone number was dropped; Paul followed up on 05/05 asking if anyone saw his message."
    },
    {
      "video_id": "V020",
      "request_date": "2026-05-04",
      "came_by": "voice note",
      "why_it_was_lost": "Voice note asking for 'walk-ins welcome' was not transcribed or added to the board; Paul followed up on 05/10 stating he was frustrated."
    },
    {
      "video_id": "V060",
      "request_date": "2026-05-31",
      "came_by": "voice note",
      "why_it_was_lost": "Voice note from Raj Patel requesting larger captions was missed in audio messages; Raj followed up on 06/08."
    },
    {
      "video_id": "V017",
      "request_date": "2026-05-02",
      "came_by": "email",
      "why_it_was_lost": "Client requested in Spanish to remove price discussion. Board note was logged as 'Remove prices part' with 0 revisions executed; client had to follow up repeatedly via WhatsApp on 06/03 and 09/02 ('owner story sigue igual')."
    },
    {
      "video_id": "V117",
      "request_date": "2026-06-25",
      "came_by": "instagram",
      "why_it_was_lost": "Revision request arrived via Instagram DM from @glowaestheticsdfw; social media DMs are not connected to production tracking, prompting Nadia to message on WhatsApp on 07/01."
    },
    {
      "video_id": "V175",
      "request_date": "2026-07-26",
      "came_by": "instagram",
      "why_it_was_lost": "Instagram DM from Imran Khan to remove stumble was lost in inbox silo; client emailed on 08/04 stating it was his second time asking."
    },
    {
      "video_id": "V181",
      "request_date": "2026-07-29",
      "came_by": "voice note",
      "why_it_was_lost": "Voice note from Sarah Khan to add 'walk-ins welcome' was dropped without logging; Sarah followed up on WhatsApp on 08/03."
    },
    {
      "video_id": "V193",
      "request_date": "2026-08-10",
      "came_by": "email",
      "why_it_was_lost": "Email complaint regarding loud music on bean origin story was missed during editor transition; Lena Ortiz followed up on 08/18 ('A little frustrated honestly')."
    },
    {
      "video_id": "V198",
      "request_date": "2026-08-13",
      "came_by": "voice note",
      "why_it_was_lost": "Voice note from Ben asking for 'walk-ins welcome' on flu shot video was never assigned; Dr. Hale emailed on 08/18 frustrated that it was not fixed."
    },
    {
      "video_id": "V152",
      "request_date": "2026-08-16",
      "came_by": "whatsapp",
      "why_it_was_lost": "WhatsApp request from Mike Delgado to trim the first 3 seconds was not transferred to the editor; Mike emailed on 08/24 noting it was not fixed."
    },
    {
      "video_id": "V236",
      "request_date": "2026-09-02",
      "came_by": "email",
      "why_it_was_lost": "Email branding instruction to use navy color on class schedule was overlooked; Jordan messaged on 09/08 noting the exact same issue persisted."
    },
    {
      "video_id": "V238",
      "request_date": "2026-09-02",
      "came_by": "email",
      "why_it_was_lost": "Client reported name misspelling in caption; fix was not prioritized and client followed up on WhatsApp on 09/11 ('second time I ask')."
    },
    {
      "video_id": "V254",
      "request_date": "2026-09-05",
      "came_by": "whatsapp",
      "why_it_was_lost": "WhatsApp compliance request to blur client face due to missing release form was ignored; Carlos emailed on 09/14 stating problem still existed."
    },
    {
      "video_id": "V275",
      "request_date": "2026-09-10",
      "came_by": "voice note",
      "why_it_was_lost": "Voice note to add 'walk-ins welcome' was dropped; Raj followed up on WhatsApp on 09/15 complaining it was still wrong."
    },
    {
      "video_id": "V259",
      "request_date": "2026-09-09",
      "came_by": "voice note",
      "why_it_was_lost": "Tony Russo voice note regarding loud audio was lost; Tony messaged on 09/15 ('second time I ask. shingle vs metal is still wrong')."
    },
    {
      "video_id": "V266",
      "request_date": "2026-09-21",
      "came_by": "whatsapp",
      "why_it_was_lost": "WhatsApp revision sent to newly onboarded freelance editor Dev was not completed properly, leading Marcus to complain on 09/21."
    },
    {
      "video_id": "V308",
      "request_date": "2026-10-01",
      "came_by": "email",
      "why_it_was_lost": "Prior revision request on Tesla detail video was lost between editor handoffs, prompting Carlos to follow up on 10/01 in Spanish."
    }
  ],
  "lost_requests_root_causes": [
    "Omnichannel fragmentation without unified triage: revision requests arrive across 5 separate channels (Voice Notes, WhatsApp, Email, Instagram DMs, Website Forms) with no central inbox or ticketing system.",
    "Voice notes and Instagram DMs are black holes: voice notes require manual transcription and listening, while Instagram DMs exist in a separate mobile app not monitored by editors.",
    "Non-English feedback neglected: Spanish messages from Sofia Ramirez and Carlos Vega were repeatedly overlooked or delayed.",
    "Editor scaling & handoff breakdowns: onboarding Sam in July ($22/hr) and freelance editor Dev in September ($40/hr) coincided with massive spike in missed revisions due to lack of a centralized revision QA pipeline."
  ],
  "lost_requests_started_getting_worse_in": "2026-08",
  "never_replied_leads": [
    "L008",
    "L020",
    "L032",
    "L045",
    "L066",
    "L072",
    "L080",
    "L087",
    "L089",
    "L092",
    "L094",
    "L097",
    "L098",
    "L099"
  ],
  "most_likely_to_leave": {
    "client": "Patel Insurance Group",
    "evidence": [
      "Crucial legal compliance request on 2026-09-02 (voice note from Raj asking to always use full legal entity name 'Patel Insurance Group') was completely ignored by editors, prompting Raj to email angrily on 09-08: 'The videos say Patel Insurance again. I asked for the full name. Not happy.'",
      "Multiple recurring lost revision requests across videos V060, V061, V275, and V277 over several months.",
      "Contract cancellation escalation: Nina Patel submitted a website form inquiry on 2026-09-30 stating 'We would like to talk about our contract and whether we continue' (L097), followed by an urgent email on 2026-10-02 ('Following up. We need to talk about the contract this week.') \u2014 both went completely unanswered.",
      "Payment freeze: both September retainer (INV-1124, $2,500) and October retainer (INV-1145, $2,500) remain unpaid, demonstrating direct churn intent."
    ],
    "what_to_do_this_week": "Owner must personally call Nina Patel (214-555-0196) and Raj Patel (214-555-0195) before 10:00 AM on Monday, October 6. Directly apologize for the missed communication and compliance failure regarding their legal name. Offer an immediate dedicated 48-hour revision sprint to fix all branding across their entire video library, assign senior editor Rita exclusively to their account, and offer a $1,000 goodwill credit on their outstanding September invoice to secure their annual contract renewal ($30,000/yr value)."
  },
  "best_marketing_channel": {
    "channel": "Referral",
    "why": "Referrals achieved an extraordinary 85.7% close rate (6 won out of 7 leads: Khan Dental, Lone Star Realty, Oak Lane Dental, Brightline Marketing, Harbor Coffee, and Hustle & Heart) generating over $32,400 in direct revenue with $0 customer acquisition cost (CAC). Referral clients also exhibit the highest lifetime value (LTV) and multi-booking retention (e.g., Sarah Khan booking 7 Content Days, Kelsey booking agency bundles)."
  },
  "what_this_data_cannot_tell_us": [
    "Customer Acquisition Cost (CAC) and marketing spend: The dataset tracks lead sources but contains zero marketing expense data for Google Ads, Meta Ads, or LinkedIn campaigns, making true ROI calculation impossible.",
    "Lead-to-booking sales cycle and touchpoints: Multi-touch attribution is absent; leads may have viewed Instagram content or Meta ads before submitting a website form or calling.",
    "Gross margins per service type: While editor hourly pay is recorded, equipment depreciation, studio utility overhead, and client acquisition time are missing to determine true net profitability per tier.",
    "Customer sentiment and NPS: Beyond qualitative frustration expressed in messages.txt, there is no standardized feedback mechanism to measure client satisfaction prior to churn."
  ],
  "monday_top_3": [
    "Call Nina & Raj Patel immediately (Patel Insurance Group, 214-555-0196) to halt impending contract cancellation of their $2,500/month retainer, apologize for unaddressed compliance requests, and commit to immediate fixes.",
    "Execute an Emergency Morning Revision Sweep with editors Ali, Rita, Sam, and Dev to resolve all 7 active 'second time I ask' client blockers (Patel compliance name, Carlos Vega Tesla detail, Torres Law consult edit, Sarah Khan kids tips) before noon.",
    "Implement an immediate single-inbox protocol: mandate all WhatsApp, voice note, and Instagram requests be funneled into a central production queue, and contact overdue accounts TLC Homecare ($1,500) and Lonestar Realty Group ($1,500) for payment collection."
  ]
};

export const rawInitialMessages = "[2026-04-10 21:30] VOICE NOTE from +1 214-555-0141 (Sarah), 0:11. Transcript: \"Add our phone number at the end of the implants explained video.\"\n[2026-04-15 09:18] EMAIL from sarah@khandental.com: This is the second time I ask. implants explained is still wrong.\n[2026-04-15 14:46] EMAIL from will@cedarstone.build: Please take out the part in the kitchen remodel reveal video where I talk about prices. Prices are changing.\n[2026-04-16 14:56] EMAIL from sarah@khandental.com: Can the one we shot last week have a calmer song? This one feels too hype for us.\n[2026-04-16 17:45] EMAIL from will@cedarstone.build: the one we shot last week: add the line 'walk-ins welcome' at the end please.\n[2026-04-19 08:49] EMAIL from mike@mikesroofingtx.com: the storm damage tips video: add the line 'walk-ins welcome' at the end please.\n[2026-04-21 11:39] WHATSAPP from +1 469-555-0172 (Mike): the one we shot last week: add the line 'walk-ins welcome' at the end please.\n[2026-04-21 19:56] EMAIL from will@cedarstone.build: crew day: add the line 'walk-ins welcome' at the end please.\n[2026-04-22 10:01] EMAIL from priya@bloommedspa.com: On the one we shot last week, use our brand color teal, not the one you used.\n[2026-04-24 16:38] WHATSAPP from +1 469-555-0172 (Mike): Please make the captions bigger on the one we shot last week, they're hard to read on my phone.\n[2026-04-28 14:37] EMAIL to media@northpointdfw.org: Happy to give NorthPoint 20% off studio sessions from May on. Thanks for what you do for the community.\n[2026-04-29 13:39] WHATSAPP from +1 972-555-0110 (Priya): The music on membership promo is too loud, I can't hear myself.\n[2026-04-30 13:54] VOICE NOTE from +1 214-555-0182 (Paul), 1:15. Transcript: \"Add our phone number at the end of the why fees matter video.\"\n[2026-05-02 15:55] EMAIL from sofia@lunabridal.com: En owner story quiten la parte donde hablo de precios por favor.\n[2026-05-03 10:18] INSTAGRAM DM from @insta.support.team: Hi! We help businesses rank #1 on Google. Reply YES for a free audit.\n[2026-05-04 13:44] VOICE NOTE from +1 214-555-0182 (Paul), 1:47. Transcript: \"estate planning basics: add the line 'walk-ins welcome' at the end please.\"\n[2026-05-04 18:08] EMAIL from pgrant@meridianwp.com: The music on market minute is too loud, I can't hear myself.\n[2026-05-05 14:48] EMAIL from pgrant@meridianwp.com: Did anyone see my message about why fees matter? It's not fixed.\n[2026-05-07 20:38] EMAIL from sofia@lunabridal.com: Styling tips looks great. Approved! Post it.\n[2026-05-08 10:21] WHATSAPP from +1 214-555-0118 (Ethan): Thanks team, great session.\n[2026-05-10 09:10] WHATSAPP from +1 214-555-0141 (Sarah): My friend Dr. Hannah Brooks at Oak Lane Dental wants videos too. I gave her your number!\n[2026-05-10 17:59] EMAIL from pgrant@meridianwp.com: Still not fixed on estate planning basics. A little frustrated honestly.\n[2026-05-11 16:55] EMAIL from sofia@lunabridal.com: Actually we changed our mind on styling tips. Can we get a different song and a new intro? Sorry!\n[2026-05-15 16:07] EMAIL from mtorres@torreslaw.com: Add our phone number at the end of the what a consult costs video.\n[2026-05-16 14:48] VOICE NOTE from +1 214-555-0182 (Paul), 1:11. Transcript: \"On the one we shot last week, use our brand color teal, not the one you used.\"\n[2026-05-16 15:01] EMAIL from klee@apexptdallas.com: Add our phone number at the end of walk-ins welcome.\n[2026-05-18 12:58] EMAIL from jordan@elevatefit.co: Please take out the part in the member story video where I talk about prices. Prices are changing.\n[2026-05-19 12:04] EMAIL from sarah@khandental.com: Please make the captions bigger on kids dental tips, they're hard to read on my phone.\n[2026-05-20 19:04] EMAIL from sarah@khandental.com: On why floss matters, use our brand color navy, not the one you used.\n[2026-05-21 19:30] WHATSAPP from +1 214-555-0182 (Paul): Did anyone see my message about college savings? It's not fixed.\n[2026-05-26 18:04] EMAIL from priya@bloommedspa.com: On membership promo our name is spelled wrong in the caption.\n[2026-05-30 20:55] WHATSAPP from +1 214-555-0135 (Sofia): \u00bfPueden hacer los subt\u00edtulos m\u00e1s grandes en the one we shot last week? No se leen bien.\n[2026-05-31 08:57] VOICE NOTE from +1 214-555-0195 (Raj), 1:53. Transcript: \"Please make the captions bigger on the rate review video, they're hard to read on my phone.\"\n[2026-05-31 20:34] WHATSAPP from +1 214-555-0103 (Andre): Please make the captions bigger on new arrivals, they're hard to read on my phone.\n[2026-06-01 15:25] WHATSAPP from +1 214-555-0135 (Sofia): Is parking in the back ok?\n[2026-06-02 13:55] WHATSAPP from +1 972-555-0110 (Priya): Running 10 min late!\n[2026-06-03 08:47] WHATSAPP from +1 214-555-0135 (Sofia): En the owner story video quiten la parte donde hablo de precios por favor.\n[2026-06-06 11:36] EMAIL from dana@lonestarrealty.com: For the meet the agent video use the other shot, the one outside, not inside.\n[2026-06-06 15:38] WHATSAPP from +1 214-555-0164 (Dana): Please blur the face of the client in the market update video, she didn't sign the release.\n[2026-06-08 16:17] EMAIL from kelsey@brightlinemktg.com: Hi, Kelsey from Brightline Marketing. Please bill us (Brightline) for Greenway Pediatrics and Summit Chiropractic. We pay monthly.\n[2026-06-08 20:03] EMAIL from raj@patelinsures.com: Did anyone see my message about rate review? It's not fixed.\n[2026-06-09 19:30] WHATSAPP from +1 214-555-0164 (Dana): The music on the one we shot last week is too loud, I can't hear myself.\n[2026-06-12 15:09] VOICE NOTE from +1 214-555-0182 (Paul), 1:45. Transcript: \"The music on the tax season tips video is too loud, I can't hear myself.\"\n[2026-06-12 17:24] VOICE NOTE from +1 214-555-0195 (Raj), 1:27. Transcript: \"Can you remove the bit where I stumble on my words in the one we shot last week?\"\n[2026-06-13 18:43] VOICE NOTE from +1 214-555-0182 (Paul), 0:16. Transcript: \"Can you remove the bit where I stumble on my words in the retirement myths video?\"\n[2026-06-15 14:28] EMAIL from klee@apexptdallas.com: The music on patient story is too loud, I can't hear myself.\n[2026-06-16 09:58] WHATSAPP from +1 214-555-0195 (Raj): Can you cut the first 3 seconds of the one we shot last week? It starts slow.\n[2026-06-17 13:29] EMAIL from mike@mikesroofingtx.com: Add our phone number at the end of the hail claim help video.\n[2026-06-17 13:45] EMAIL from mike@mikesroofingtx.com: Please make the captions bigger on leak warning signs, they're hard to read on my phone.\n[2026-06-17 16:50] EMAIL from billing@acct-dept.co: Your Instagram account will be suspended. Verify here: bit.ly/insta-verify-now\n[2026-06-17 21:14] EMAIL from raj@patelinsures.com: Add our phone number at the end of meet the agent.\n[2026-06-18 12:41] EMAIL from mtorres@torreslaw.com: Add our phone number at the end of the car accident: first 3 steps video.\n[2026-06-19 08:50] EMAIL from klee@apexptdallas.com: Please make the captions bigger on the one we shot last week, they're hard to read on my phone.\n[2026-06-19 11:53] EMAIL from raj@patelinsures.com: why bundle home and auto still has the same problem. I already told you about this.\n[2026-06-19 20:31] EMAIL from priya@bloommedspa.com: Please blur the face of the client in botox before and after, she didn't sign the release.\n[2026-06-20 12:01] EMAIL from sarah@khandental.com: Please blur the face of the client in the first visit tour video, she didn't sign the release.\n[2026-06-22 10:16] WHATSAPP from +1 972-555-0112 (David): Thanks team, great session.\n[2026-06-25 14:22] INSTAGRAM DM from @glowaestheticsdfw: Please take out the part in meet the injector where I talk about prices. Prices are changing.\n[2026-06-25 21:02] WHATSAPP from +1 972-555-0112 (David): Running 10 min late!\n[2026-06-26 12:05] WHATSAPP from +1 214-555-0135 (Sofia): Can we move to 2pm instead?\n[2026-06-26 18:13] EMAIL from sarah@khandental.com: the one we shot last week: add the line 'walk-ins welcome' at the end please.\n[2026-06-29 09:12] WHATSAPP from +1 469-555-0133 (Jordan): Can the open house promo video have a calmer song? This one feels too hype for us.\n[2026-06-30 10:09] EMAIL from lena@thebrewlab.coffee: Jen at Harbor Coffee loved our reels. She'll reach out.\n[2026-07-01 12:44] WHATSAPP from +1 972-555-0153 (Nadia): Still not fixed on meet the injector. A little frustrated honestly.\n[2026-07-02 19:18] EMAIL from lena@thebrewlab.coffee: Latte art looks great. Approved! Post it.\n[2026-07-02 20:20] EMAIL from lena@thebrewlab.coffee: Roast day looks great. Approved! Post it.\n[2026-07-04 13:03] VOICE NOTE from +1 972-555-0148 (Ben), 1:13. Transcript: \"Please make the captions bigger on meet the team, they're hard to read on my phone.\"\n[2026-07-06 16:16] EMAIL from lena@thebrewlab.coffee: Actually we changed our mind on roast day. Can we get a different song and a new intro? Sorry!\n[2026-07-06 19:00] EMAIL from lena@thebrewlab.coffee: Actually we changed our mind on latte art. Can we get a different song and a new intro? Sorry!\n[2026-07-12 11:52] WHATSAPP from +1 214-555-0103 (Andre): For owner story use the other shot, the one outside, not inside.\n[2026-07-13 09:12] EMAIL from andre@crownbarbers.com: On the one we shot last week, use our brand color navy, not the one you used.\n[2026-07-13 12:30] WHATSAPP from +1 469-555-0108 (Hannah): Patients keep telling me they saw us on Instagram. Love it.\n[2026-07-14 13:16] WHATSAPP from +1 214-555-0141 (Sarah): Best content team we've worked with. New patients mention the videos.\n[2026-07-15 20:10] WHATSAPP from +1 469-555-0172 (Mike): For roof inspection walkthrough use the other shot, the one outside, not inside.\n[2026-07-16 08:25] VOICE NOTE from +1 214-555-0182 (Paul), 0:50. Transcript: \"Can client story have a calmer song? This one feels too hype for us.\"\n[2026-07-17 13:27] EMAIL from mtorres@torreslaw.com: Three new cases came from your videos this month. Thank you.\n[2026-07-17 19:33] WHATSAPP from +1 469-555-0126 (Marcus): Please make the captions bigger on member story, they're hard to read on my phone.\n[2026-07-19 10:38] EMAIL from mlopez@sagefamilytherapy.com: Please blur the face of the client in the one we shot last week, she didn't sign the release.\n[2026-07-20 09:05] WHATSAPP from +1 469-555-0108 (Hannah): Add our phone number at the end of the whitening before and after video.\n[2026-07-20 11:52] EMAIL from pgrant@meridianwp.com: Paul here. We'll pause after this month. Too many rounds of fixes, and my notes keep getting missed. Nothing personal.\n[2026-07-20 21:41] WHATSAPP from +1 469-555-0133 (Jordan): Thanks team, great session.\n[2026-07-21 08:26] WHATSAPP from +1 469-555-0133 (Jordan): Can class schedule have a calmer song? This one feels too hype for us.\n[2026-07-21 14:31] EMAIL from acho@greenwaypeds.com: Please take out the part in the one we shot last week where I talk about prices. Prices are changing.\n[2026-07-21 21:41] EMAIL from hbrooks@oaklanedental.com: On office tour our name is spelled wrong in the caption.\n[2026-07-22 19:00] EMAIL from billing@acct-dept.co: Hey, crypto opportunity for content creators, 10x guaranteed.\n[2026-07-22 19:26] WHATSAPP from +1 469-555-0108 (Hannah): Can the meet the doctor video have a calmer song? This one feels too hype for us.\n[2026-07-23 13:36] EMAIL from mlopez@sagefamilytherapy.com: Add our phone number at the end of the therapy myths video.\n[2026-07-24 21:29] EMAIL from dana@lonestarrealty.com: Can sold story have a calmer song? This one feels too hype for us.\n[2026-07-25 11:31] WHATSAPP from +1 214-555-0141 (Sarah): Can you cut the first 3 seconds of kids dental tips? It starts slow.\n[2026-07-25 18:39] WHATSAPP from +1 214-555-0182 (Paul): client story still has the same problem. I already told you about this.\n[2026-07-26 10:18] INSTAGRAM DM from @khansautospa: Can you remove the bit where I stumble on my words in the ceramic coating reveal video?\n[2026-07-29 14:47] VOICE NOTE from +1 214-555-0141 (Sarah), 1:29. Transcript: \"the whitening before and after video: add the line 'walk-ins welcome' at the end please.\"\n[2026-07-29 21:00] EMAIL from mlopez@sagefamilytherapy.com: The videos turned out great. Can we do this every month? What would that cost?\n[2026-07-31 18:46] EMAIL from info@khanfamilylaw.com: Please take out the part in the divorce timeline video where I talk about prices. Prices are changing.\n[2026-08-01 15:57] WHATSAPP from +1 214-555-0141 (Sarah): For implants explained use the other shot, the one outside, not inside.\n[2026-08-01 18:20] EMAIL from jordan@elevatefit.co: Big news: Elevate Fitness is now Elevate Athletics! New email is jordan@elevateathletics.com.\n[2026-08-03 10:42] WHATSAPP from +1 214-555-0141 (Sarah): Did anyone see my message about whitening before and after? It's not fixed.\n[2026-08-04 19:52] EMAIL from imran@khansautospa.com: This is the second time I ask. ceramic coating reveal is still wrong.\n[2026-08-06 14:59] WHATSAPP from +1 469-555-0126 (Marcus): nutrition tip: add the line 'walk-ins welcome' at the end please.\n[2026-08-07 11:55] WHATSAPP from +1 972-555-0148 (Ben): Can the back pain myths video have a calmer song? This one feels too hype for us.\n[2026-08-07 15:05] WHATSAPP from +1 469-555-0126 (Marcus): the member story video: add the line 'walk-ins welcome' at the end please.\n[2026-08-07 16:44] EMAIL from info@khanfamilylaw.com: divorce timeline still has the same problem. I already told you about this.\n[2026-08-08 09:45] WHATSAPP from +1 972-555-0148 (Ben): Can you cut the first 3 seconds of the walk-ins welcome video? It starts slow.\n[2026-08-09 16:17] EMAIL from tony@primeroofingco.com: Can you cut the first 3 seconds of the crew intro video? It starts slow.\n[2026-08-10 16:35] EMAIL from tasha@hustleandheart.fm: Cash is tight this month. Can I pay the August sessions together at the start of September?\n[2026-08-10 17:04] EMAIL from lena@thebrewlab.coffee: The music on the bean origin story video is too loud, I can't hear myself.\n[2026-08-12 13:50] WHATSAPP from +1 469-555-0116 (Lena): On the meet the barista video our name is spelled wrong in the caption.\n[2026-08-12 14:49] EMAIL from jordan@elevateathletics.com: Please take out the part in 30-day challenge where I talk about prices. Prices are changing.\n[2026-08-13 16:43] VOICE NOTE from +1 972-555-0148 (Ben), 0:59. Transcript: \"flu shot season: add the line 'walk-ins welcome' at the end please.\"\n[2026-08-14 13:54] INSTAGRAM DM from promo@fastfollowers.io: We sell 10,000 real followers for $49.\n[2026-08-16 09:47] WHATSAPP from +1 214-555-0135 (Sofia): Sales went up after the reels. You can use this as a review!\n[2026-08-16 20:49] WHATSAPP from +1 469-555-0172 (Mike): Can you cut the first 3 seconds of the shingle vs metal video? It starts slow.\n[2026-08-18 13:56] EMAIL from lena@thebrewlab.coffee: Still not fixed on bean origin story. A little frustrated honestly.\n[2026-08-18 16:36] WHATSAPP from +1 817-555-0119 (Greg): Add our phone number at the end of the market update video.\n[2026-08-18 17:40] WHATSAPP from +1 214-555-0188 (Mike): Can you cut the first 3 seconds of the divorce timeline video? It starts slow.\n[2026-08-18 21:23] EMAIL from drhale@summitchiro.com: Still not fixed on flu shot season. A little frustrated honestly.\n[2026-08-19 19:47] WHATSAPP from +1 972-555-0144 (Kim): Can you cut the first 3 seconds of the one we shot last week? It starts slow.\n[2026-08-20 08:09] VOICE NOTE from +1 972-555-0129 (Alan), 0:35. Transcript: \"On the patient story video, use our brand color burgundy, not the one you used.\"\n[2026-08-20 08:41] WHATSAPP from +1 214-555-0195 (Raj): Please blur the face of the client in the client story video, she didn't sign the release.\n[2026-08-20 17:03] EMAIL from ethan@dfwfounders.fm: Do you guys also cut short clips from our episodes? We'd pay for that. Let me know.\n[2026-08-21 11:54] EMAIL from mtorres@torreslaw.com: the car accident: first 3 steps video: add the line 'walk-ins welcome' at the end please.\n[2026-08-24 10:41] EMAIL from mike@mikesroofingtx.com: Did anyone see my message about shingle vs metal? It's not fixed.\n[2026-08-24 16:36] WHATSAPP from +1 214-555-0135 (Sofia): La m\u00fasica de the owner story video est\u00e1 muy fuerte.\n[2026-08-25 16:00] INSTAGRAM DM to @vegaautodetail: Reels pack is $900 for 3 reels. Here is the booking link.\n[2026-08-25 16:45] WHATSAPP from +1 214-555-0135 (Sofia): Add our phone number at the end of the store tour video.\n[2026-08-25 18:41] INSTAGRAM DM from @vegaautodetail: Hey I saw your reels for a roofing company. How much for a reels pack for my detail shop?\n[2026-08-26 12:00] WHATSAPP from +1 214-555-0188 (Mike): This is the second time I ask. divorce timeline is still wrong.\n[2026-08-27 08:53] WHATSAPP from +1 469-555-0108 (Hannah): Thanks team, great session.\n[2026-08-29 09:39] WHATSAPP from +1 972-555-0129 (Alan): This is the second time I ask. patient story is still wrong.\n[2026-08-29 11:15] EMAIL from mtorres@torreslaw.com: car accident: first 3 steps still has the same problem. I already told you about this.\n[2026-08-29 14:26] WHATSAPP from +1 469-555-0149 (Jen): Please take out the part in the one we shot last week where I talk about prices. Prices are changing.\n[2026-08-31 08:12] WHATSAPP from +1 214-555-0118 (Ethan): Is parking in the back ok?\n[2026-08-31 12:07] EMAIL from hbrooks@oaklanedental.com: Can you cut the first 3 seconds of the invisalign myths video? It starts slow.\n[2026-09-02 08:12] EMAIL from hbrooks@oaklanedental.com: Add our phone number at the end of whitening before and after.\n[2026-09-02 10:12] VOICE NOTE from +1 214-555-0195 (Raj), 1:13. Transcript: \"Raj here. In the videos please say Patel Insurance Group, the full name, not just Patel Insurance. Compliance cares about this.\"\n[2026-09-02 15:33] EMAIL from jordan@elevateathletics.com: On the class schedule video, use our brand color navy, not the one you used.\n[2026-09-02 17:52] WHATSAPP from +1 214-555-0135 (Sofia): owner story sigue igual. Ya les hab\u00eda dicho.\n[2026-09-02 18:26] EMAIL from jen@harborcoffee.com: On pastry case our name is spelled wrong in the caption.\n[2026-09-03 17:23] WHATSAPP from +1 214-555-0164 (Dana): Can you remove the bit where I stumble on my words in the one we shot last week?\n[2026-09-03 19:46] EMAIL from angela@tlchomecare.com: Can you cut the first 3 seconds of back pain myths? It starts slow.\n[2026-09-03 21:48] WEBSITE FORM from tasha.green.mail@gmail.com (Tasha Green): Do you have a package where you cut short clips from my episodes? How much would that be?\n[2026-09-05 15:43] WHATSAPP from +1 469-555-0190 (Carlos): Please blur the face of the client in paint correction, she didn't sign the release.\n[2026-09-05 16:08] EMAIL from sarah@khandental.com: Quick update, our new office number is 214-555-0177. Please use this one from now on.\n[2026-09-07 09:09] INSTAGRAM DM from @glowaestheticsdfw: Can you remove the bit where I stumble on my words in laser hair removal?\n[2026-09-07 18:21] WHATSAPP from +1 972-555-0110 (Priya): Running 10 min late!\n[2026-09-08 09:41] VOICE NOTE from +1 214-555-0177 (Sarah), 0:22. Transcript: \"Please take out the part in the one we shot last week where I talk about prices. Prices are changing.\"\n[2026-09-08 10:30] WHATSAPP from +1 469-555-0133 (Jordan): class schedule still has the same problem. I already told you about this.\n[2026-09-08 19:53] EMAIL from raj@patelinsures.com: The videos say \"Patel Insurance\" again. I asked for the full name. Not happy.\n[2026-09-09 11:45] WHATSAPP from +1 469-555-0108 (Hannah): This is the second time I ask. whitening before and after is still wrong.\n[2026-09-09 18:45] INSTAGRAM DM from promo@fastfollowers.io: Partnership offer: let us run your ads for free for 30 days.\n[2026-09-09 19:08] VOICE NOTE from +1 817-555-0131 (Tony), 0:33. Transcript: \"The music on shingle vs metal is too loud, I can't hear myself.\"\n[2026-09-10 10:10] WHATSAPP from +1 817-555-0131 (Tony): Can you remove the bit where I stumble on my words in the one we shot last week?\n[2026-09-10 14:09] VOICE NOTE from +1 214-555-0195 (Raj), 0:30. Transcript: \"teen driver tips: add the line 'walk-ins welcome' at the end please.\"\n[2026-09-10 15:58] WHATSAPP from +1 469-555-0133 (Jordan): Is parking in the back ok?\n[2026-09-11 09:15] WHATSAPP from +1 469-555-0149 (Jen): This is the second time I ask. pastry case is still wrong.\n[2026-09-11 20:22] EMAIL from drhale@summitchiro.com: On insurance we take, use our brand color pink, not the one you used.\n[2026-09-12 08:07] EMAIL from greg@lonestarrg.com: Got the videos, thanks. Accounting will handle the invoice.\n[2026-09-12 12:05] WHATSAPP from +1 972-555-0153 (Nadia): laser hair removal still has the same problem. I already told you about this.\n[2026-09-12 20:39] WHATSAPP from +1 469-555-0126 (Marcus): Please make the captions bigger on the one we shot last week, they're hard to read on my phone.\n[2026-09-12 21:13] VOICE NOTE from +1 972-555-0110 (Priya), 0:34. Transcript: \"Please take out the part in the one we shot last week where I talk about prices. Prices are changing.\"\n[2026-09-13 12:30] WHATSAPP from +1 214-555-0177 (Sarah): This is the second time I ask. kids dental tips is still wrong.\n[2026-09-13 18:57] WHATSAPP from +1 214-555-0188 (Mike): Can you cut the first 3 seconds of wills in 60 seconds? It starts slow.\n[2026-09-14 12:07] EMAIL from carlos.vega.detail@gmail.com: paint correction still has the same problem. I already told you about this.\n[2026-09-14 15:54] VOICE NOTE from +1 972-555-0110 (Priya), 1:29. Transcript: \"Please make the captions bigger on the laser hair removal video, they're hard to read on my phone.\"\n[2026-09-14 21:27] VOICE NOTE from +1 214-555-0195 (Raj), 0:11. Transcript: \"Can you cut the first 3 seconds of the life insurance basics video? It starts slow.\"\n[2026-09-15 10:27] WHATSAPP from +1 214-555-0188 (Mike): My cousin Luis runs Torres Tire & Auto in Garland, he needs videos. His number is 214-555-0193. Call him!\n[2026-09-15 12:43] EMAIL from tony@primeroofingco.com: Did anyone see my message about hail claim help? It's not fixed.\n[2026-09-15 14:19] EMAIL from mike@mikesroofingtx.com: Please blur the face of the client in roof inspection walkthrough, she didn't sign the release.\n[2026-09-15 15:56] WHATSAPP from +1 214-555-0195 (Raj): This is the second time I ask. teen driver tips is still wrong.\n[2026-09-15 21:36] WHATSAPP from +1 817-555-0131 (Tony): This is the second time I ask. shingle vs metal is still wrong.\n[2026-09-16 13:59] EMAIL from mtorres@torreslaw.com: For the divorce timeline video use the other shot, the one outside, not inside.\n[2026-09-18 09:05] VOICE NOTE from +1 214-555-0188 (Mike), 0:29. Transcript: \"Can you remove the bit where I stumble on my words in the one we shot last week?\"\n[2026-09-18 17:23] WHATSAPP from +1 469-555-0133 (Jordan): Can you cut the first 3 seconds of gym tour? It starts slow.\n[2026-09-18 19:07] WHATSAPP from +1 972-555-0144 (Kim): For the desk posture fix video use the other shot, the one outside, not inside.\n[2026-09-18 19:42] WHATSAPP from +1 972-555-0110 (Priya): Please blur the face of the client in the hydrafacial reveal video, she didn't sign the release.\n[2026-09-19 11:36] EMAIL from priya@bloommedspa.com: the one we shot last week: add the line 'walk-ins welcome' at the end please.\n[2026-09-19 14:50] WHATSAPP from +1 469-555-0116 (Lena): Please make the captions bigger on the one we shot last week, they're hard to read on my phone.\n[2026-09-19 20:46] WHATSAPP from +1 972-555-0110 (Priya): Did anyone see my message about laser hair removal? It's not fixed.\n[2026-09-20 16:10] WHATSAPP from +1 972-555-0110 (Priya): Still not fixed on lip filler myths. A little frustrated honestly.\n[2026-09-20 21:43] WHATSAPP from +1 214-555-0135 (Sofia): Can fresh fade transformation have a calmer song? This one feels too hype for us.\n[2026-09-21 09:36] EMAIL from angela@tlchomecare.com: We'll pay once the videos are posted. Can you send them?\n[2026-09-21 10:10] WHATSAPP from +1 469-555-0126 (Marcus): This is the second time I ask. trainer intro is still wrong.\n[2026-09-23 08:38] WHATSAPP from +1 214-555-0188 (Mike): This is the second time I ask. divorce timeline is still wrong.\n[2026-09-23 19:31] EMAIL from raj@patelinsures.com: This is the second time I ask. life insurance basics is still wrong.\n[2026-09-24 08:49] WHATSAPP from +1 469-555-0190 (Carlos): En engine bay clean quiten la parte donde hablo de precios por favor.\n[2026-09-24 16:36] WHATSAPP from +1 214-555-0164 (Dana): We have to cancel today's shoot, family emergency. Can we move it? We already paid.\n[2026-09-25 14:21] EMAIL from carlos.vega.detail@gmail.com: \u00bfPueden hacer los subt\u00edtulos m\u00e1s grandes en the ceramic coating reveal video? No se leen bien.\n[2026-09-26 09:20] WHATSAPP from +1 469-555-0190 (Carlos): La m\u00fasica de the one we shot last week est\u00e1 muy fuerte.\n[2026-09-27 11:03] EMAIL from mtorres@torreslaw.com: Did anyone see my message about meet the attorney? It's not fixed.\n[2026-09-27 12:17] WHATSAPP from +1 972-555-0144 (Kim): desk posture fix still has the same problem. I already told you about this.\n[2026-09-27 14:02] INSTAGRAM DM from growth@rank1seo.biz: Invoice attached. Please pay immediately. (invoice.zip)\n[2026-09-28 14:16] VOICE NOTE from +1 972-555-0129 (Alan), 1:33. Transcript: \"desk posture fix: add the line 'walk-ins welcome' at the end please.\"\n[2026-09-28 19:51] WHATSAPP from +1 817-555-0131 (Tony): Sent half. Rest when the next batch is done.\n[2026-09-30 08:51] INSTAGRAM DM from @vegaautodetail: \u00bfPueden hacer los subt\u00edtulos m\u00e1s grandes en the one we shot last week? No se leen bien.\n[2026-09-30 17:11] WEBSITE FORM from nina@patelinsures.com (Nina Patel, Patel Insurance Group): We would like to talk about our contract and whether we continue.\n[2026-10-01 10:32] EMAIL from carlos.vega.detail@gmail.com: \u00bfVieron mi mensaje sobre tesla detail? Todav\u00eda no est\u00e1.\n[2026-10-02 08:57] EMAIL from nina@patelinsures.com: Following up. We need to talk about the contract this week.\n[2026-10-04 11:42] WHATSAPP from +1 469-555-0126 (Marcus): On the one we shot last week our name is spelled wrong in the caption.\n";
