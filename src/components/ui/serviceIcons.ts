import {
  Zap,
  PackageSearch,
  PhoneCall,
  ScanText,
  Calculator,
  BookOpenCheck,
  Radar,
  type LucideIcon,
} from "lucide-react";
import type { ServiceId } from "@/config/site";

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  "lead-response": Zap,
  "track-trace": PackageSearch,
  "voice-agent": PhoneCall,
  "document-ai": ScanText,
  quoting: Calculator,
  "ops-copilot": BookOpenCheck,
  exceptions: Radar,
};
