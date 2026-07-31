import type { DemoId } from "./site";

export type DemoTurn = {
  /** `system` turns render as tool-call chips, not chat bubbles. */
  from: "customer" | "agent" | "system";
  text: string;
  /** Clock label shown against the turn, e.g. "11:40pm". */
  at?: string;
  /** Milliseconds to wait before this turn appears during playback. */
  wait?: number;
};

type Scripts = Record<DemoId, DemoTurn[]>;

const scripts: Scripts = {
  "moving-quote": [
    {
      from: "customer",
      at: "11:40pm",
      text: "Hi — I need a quote to move a 3-bedroom house from Park Slope to Hoboken.",
      wait: 400,
    },
    {
      from: "system",
      text: "Lead #4417 created in CRM · source: shared lead provider",
      wait: 600,
    },
    {
      from: "agent",
      at: "11:40pm",
      text: "Happy to help. I can get you an indicative price in a couple of minutes. When are you looking to move?",
      wait: 1400,
    },
    { from: "customer", at: "11:41pm", text: "Around the 18th of next month.", wait: 1600 },
    {
      from: "agent",
      at: "11:41pm",
      text: "Got it. Two quick things that change the price: what floor is each place on, and is there an elevator?",
      wait: 1500,
    },
    {
      from: "customer",
      at: "11:42pm",
      text: "Current place is a 3rd floor walk-up. The new one is ground floor with a driveway.",
      wait: 1900,
    },
    {
      from: "system",
      text: "Rate card applied · 3BR · 9.4 mi · 3rd-floor carry, no elevator · standard season",
      wait: 900,
    },
    {
      from: "agent",
      at: "11:42pm",
      text: "For a standard 3-bedroom load that's $2,450–$2,900, including packing materials, two trucks and a four-person crew. The walk-up carry is what pushes it toward the upper end.",
      wait: 1700,
    },
    {
      from: "customer",
      at: "11:43pm",
      text: "That works. Can someone take a look before we commit?",
      wait: 1500,
    },
    {
      from: "agent",
      at: "11:43pm",
      text: "Of course. I have Tuesday 10am or Wednesday 4pm open for a survey — or we can do it by video walkthrough in 15 minutes if that's easier.",
      wait: 1500,
    },
    { from: "customer", at: "11:43pm", text: "Tuesday 10am please.", wait: 1400 },
    {
      from: "system",
      text: "Survey booked Tue 10:00 · added to estimator calendar · CRM updated · transcript attached",
      wait: 900,
    },
    {
      from: "agent",
      at: "11:43pm",
      text: "Booked. You'll get a text confirmation shortly, and Marcus will call 30 minutes before he arrives. Anything else I can check for you tonight?",
      wait: 1400,
    },
  ],
  tracking: [
    {
      from: "customer",
      at: "2:15pm",
      text: "Where is my shipment? Reference 4471102.",
      wait: 400,
    },
    { from: "system", text: "TMS lookup · PRO 4471102 · account scope enforced", wait: 800 },
    {
      from: "agent",
      at: "2:15pm",
      text: "It's out for delivery. Last scan was 8:42am today at the Newark hub, and it's on route 12 with an estimated delivery window of 3:00–6:00pm today.",
      wait: 1300,
    },
    {
      from: "customer",
      at: "2:16pm",
      text: "Nobody will be at the warehouse after 5. Can it come earlier?",
      wait: 1600,
    },
    {
      from: "system",
      text: "Route 12 · 6 stops remaining · earliest re-sequence 4:10pm",
      wait: 900,
    },
    {
      from: "agent",
      at: "2:16pm",
      text: "I can ask the driver to prioritize it — the earliest realistic slot is around 4:10pm. Want me to request that, or would you rather push it to tomorrow morning?",
      wait: 1400,
    },
    { from: "customer", at: "2:16pm", text: "Prioritize it today please.", wait: 1300 },
    {
      from: "system",
      text: "Priority flag sent to driver app · customer notified · exception logged",
      wait: 800,
    },
    {
      from: "agent",
      at: "2:16pm",
      text: "Done. The driver has been notified and you'll get a text when he's two stops away. I've also attached the signed proof-of-delivery template so your team knows what to expect.",
      wait: 1300,
    },
  ],
  "after-hours": [
    {
      from: "system",
      text: "Incoming call 9:12pm · main line · no agents available · AI agent answered on ring 2",
      wait: 400,
    },
    {
      from: "agent",
      at: "9:12pm",
      text: "Good evening, thanks for calling. How can I help?",
      wait: 900,
    },
    {
      from: "customer",
      at: "9:12pm",
      text: "Hi, do you handle office relocations? We've got about forty desks to move.",
      wait: 1500,
    },
    {
      from: "agent",
      at: "9:12pm",
      text: "We do. Forty desks is comfortably within what we handle. Is this a single-day move, or would it need to run across a weekend?",
      wait: 1400,
    },
    {
      from: "customer",
      at: "9:13pm",
      text: "Over a weekend ideally — we can't take downtime on a business day.",
      wait: 1700,
    },
    {
      from: "system",
      text: "Service check · commercial relocation · weekend crew available from Aug 12",
      wait: 900,
    },
    {
      from: "agent",
      at: "9:13pm",
      text: "Weekend crews are available from August 12th onward. For a forty-desk office with IT disconnect and reconnect, you're looking at a two-crew weekend job. I'd want an on-site walkthrough before quoting a firm number.",
      wait: 1600,
    },
    {
      from: "customer",
      at: "9:14pm",
      text: "That's fine. Can someone call me tomorrow?",
      wait: 1400,
    },
    {
      from: "agent",
      at: "9:14pm",
      text: "Absolutely. Can I take the best number and a rough address for the walkthrough?",
      wait: 1200,
    },
    {
      from: "customer",
      at: "9:14pm",
      text: "555-0148, and we're in Jersey City, near the Grove Street station.",
      wait: 1500,
    },
    {
      from: "system",
      text: "Booking written to CRM · commercial pipeline · callback task assigned 9:00am · SMS confirmation sent · recording + transcript stored",
      wait: 900,
    },
    {
      from: "agent",
      at: "9:15pm",
      text: "Perfect — that's logged. Someone from the commercial team will call you at 9am tomorrow. Thanks for calling, and have a good evening.",
      wait: 1300,
    },
  ],
};

export function getDemoScripts(): Scripts {
  return scripts;
}
