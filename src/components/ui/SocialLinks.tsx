import { Mail } from "lucide-react";
import { socials, type Social } from "@/config/profile";
import { FiverrIcon, LinkedInIcon } from "./icons";

function Glyph({ icon }: { icon: Social["icon"] }) {
  if (icon === "linkedin") return <LinkedInIcon className="w-[18px] h-[18px]" />;
  if (icon === "fiverr") return <FiverrIcon className="w-[18px] h-[18px]" />;
  return <Mail size={18} />;
}

const hoverByIcon: Record<Social["icon"], string> = {
  linkedin: "hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700",
  fiverr: "hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700",
  mail: "hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700",
};

export default function SocialLinks({
  variant = "row",
}: {
  /** `row` renders compact pills; `cards` renders labelled tiles. */
  variant?: "row" | "cards";
}) {
  if (variant === "cards") {
    return (
      <div className="grid sm:grid-cols-3 gap-3">
        {socials.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target={s.icon === "mail" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={`flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 text-slate-600 transition-colors ${hoverByIcon[s.icon]}`}
          >
            <Glyph icon={s.icon} />
            <span className="min-w-0">
              <span className="block text-sm font-medium text-slate-900">{s.label}</span>
              <span className="block text-xs text-slate-500 truncate">{s.handle}</span>
            </span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {socials.map((s) => (
        <a
          key={s.href}
          href={s.href}
          target={s.icon === "mail" ? undefined : "_blank"}
          rel="noopener noreferrer"
          title={s.label}
          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-600 transition-colors ${hoverByIcon[s.icon]}`}
        >
          <Glyph icon={s.icon} />
          {s.label}
        </a>
      ))}
    </div>
  );
}
