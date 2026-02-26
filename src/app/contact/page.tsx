import { CalendarIcon } from "@/components/icons/calendar-icon";
import { MailIcon } from "@/components/icons/mail-icon";
import { MapPinIcon } from "@/components/icons/map-pin-icon";
import { WhatsAppIcon } from "@/components/icons/social/whatsapp-icon";
import {
  CALENDLY_URL,
  WHATSAPP_URL,
  jsonLdFinancialService,
} from "@/lib/av-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | AV Ventures | Capital Financial",
  description:
    "Contacta a AV Ventures | Capital Financial para consultoría financiera, optimización crediticia y acceso a capital en EE.UU.",
};

const contactItems = [
  {
    title: "WhatsApp",
    value: "+1 (984) 271-6474",
    href: WHATSAPP_URL,
    icon: WhatsAppIcon,
    external: true,
  },
  {
    title: "Correo",
    value: "info@aymarasventures.com",
    href: "mailto:info@aymarasventures.com",
    icon: MailIcon,
    external: false,
  },
  {
    title: "Ubicación",
    value: "Miami, FL · Servicio nacional en EE. UU.",
    href: null,
    icon: MapPinIcon,
    external: false,
  },
  {
    title: "Agenda",
    value: "Reservar una cita estratégica",
    href: CALENDLY_URL,
    icon: CalendarIcon,
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8 sm:py-24">
      <p className="text-xs font-semibold tracking-[0.18em] text-olive-600 uppercase dark:text-olive-300">
        Contacto
      </p>
      <h1 className="mt-4 font-display text-4xl text-olive-950 dark:text-white sm:text-5xl">
        Hablemos de tu estrategia de capital
      </h1>
      <p className="mt-4 max-w-2xl text-sm/7 text-olive-700 dark:text-olive-300">
        AV Ventures | Capital Financial acompaña a emprendedores y empresas en
        EE.UU. con consultoría financiera, optimización crediticia y acceso a
        capital. Escríbenos por WhatsApp, correo o agenda una cita.
      </p>

      <div className="mt-12 border-t border-olive-950/10 dark:border-white/10">
        {contactItems.map((item) => {
          const Icon = item.icon;
          const row = (
            <div className="grid gap-2 py-5 sm:grid-cols-[220px_1fr] sm:gap-6">
              <div className="flex items-center gap-3 text-olive-950 dark:text-white">
                <Icon className="size-4" />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
              <p className="text-sm/6 text-olive-700 dark:text-olive-300">
                {item.value}
              </p>
            </div>
          );

          if (!item.href) {
            return (
              <div
                key={item.title}
                className="border-b border-olive-950/10 dark:border-white/10"
              >
                {row}
              </div>
            );
          }

          return (
            <a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="block border-b border-olive-950/10 transition hover:bg-olive-950/2 dark:border-white/10 dark:hover:bg-white/5"
            >
              {row}
            </a>
          );
        })}
      </div>

      <div className="mt-12 border-t border-olive-950/10 pt-6 text-sm/7 text-olive-700 dark:border-white/10 dark:text-olive-300">
        <p className="font-medium text-olive-950 dark:text-white">
          Aymara Nieto Caballero
        </p>
        <p>Asesora en Estrategia de Capital</p>
        <p className="mt-2">
          Tel: {jsonLdFinancialService.telephone} · Email:{" "}
          {jsonLdFinancialService.email}
        </p>
      </div>
    </section>
  );
}
