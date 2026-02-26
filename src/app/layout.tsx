import "./globals.css";

import { CALENDLY_URL, WHATSAPP_URL, instagramURL } from "@/lib/av-content";
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  SocialLink,
} from "@/components/sections/footer-with-newsletter-form-categories-and-social-icons";
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from "@/components/sections/navbar-with-links-actions-and-centered-logo";

import { CalendarIcon } from "@/components/icons/calendar-icon";
import Image from "next/image";
import { MailIcon } from "@/components/icons/mail-icon";
import { Main } from "@/components/elements/main";
import { MapPinIcon } from "@/components/icons/map-pin-icon";
import type { Metadata } from "next";
import { InstagramIcon } from "@/components/icons/social/instagram-icon";
import { WhatsAppIcon } from "@/components/icons/social/whatsapp-icon";
import logo from "@/images/av-logo.png";

export const metadata: Metadata = {
  title: "AV Ventures | Capital Financial | Consultoría Financiera en EE.UU.",
  description:
    "Consultoría financiera en EE.UU. para optimización crediticia, educación estratégica y acceso a capital real. Agenda en Calendly o contacta por WhatsApp.",
  keywords: [
    "consultoría financiera",
    "capital estratégico",
    "optimización crediticia",
    "FICO",
    "crédito empresarial",
    "EE.UU.",
    "AV Ventures Capital Financial",
  ],
  openGraph: {
    title:
      "Consultoría Financiera en EE.UU. | Optimización Crediticia y Acceso a Capital Real",
    description:
      "AV Ventures | Capital Financial ayuda a emprendedores y empresas a construir perfiles bancables y acceder a capital real en Estados Unidos.",
    type: "website",
    locale: "es_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AV Ventures | Capital Financial",
    description:
      "Optimización crediticia y acceso a capital real en Estados Unidos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <>
          <NavbarWithLinksActionsAndCenteredLogo
            id="navbar"
            links={
              <>
                <NavbarLink href="/contact">Contacto</NavbarLink>
                <NavbarLink href="/about">Acerca de Nosotros</NavbarLink>
                <NavbarLink href="#" className="sm:hidden">
                  Log in
                </NavbarLink>
              </>
            }
            logo={
              <NavbarLogo href="/">
                <Image
                  src={logo}
                  alt="AV Ventures"
                  className="dark:hidden"
                  width={110}
                  height={65}
                />
                <Image
                  src={logo}
                  alt="AV Ventures"
                  className="not-dark:hidden"
                  width={110}
                  height={65}
                />
              </NavbarLogo>
            }
            // actions={
            //   <>
            //     <PlainButtonLink href="#" className="max-sm:hidden">
            //       Log in
            //     </PlainButtonLink>
            //     <ButtonLink href="#">Get started</ButtonLink>
            //   </>
            // }
          />

          <Main>{children}</Main>

          <FooterWithNewsletterFormCategoriesAndSocialIcons
            id="footer"
            links={
              <>
                <FooterCategory title="Navegación">
                  <FooterLink href="/contact">Contacto</FooterLink>
                  <FooterLink href="/about">Acerca de Nosotros</FooterLink>
                </FooterCategory>
                <FooterCategory title="Información de Contacto">
                  <li className="text-olive-700 dark:text-olive-400">
                    Aymara Nieto Caballero - Asesora en Estrategia de Capital
                  </li>
                  <FooterLink href={CALENDLY_URL} target="_blank">
                    <span className="inline-flex items-center gap-2">
                      <CalendarIcon className="size-4 shrink-0" />
                      <span>Agendar Cita</span>
                    </span>
                  </FooterLink>
                  <FooterLink href={WHATSAPP_URL} target="_blank">
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon className="size-4 shrink-0" />
                      <span>+1 (984) 271-6474</span>
                    </span>
                  </FooterLink>
                  <FooterLink href="mailto:info@aymarasventures.com">
                    <span className="inline-flex items-center gap-2">
                      <MailIcon className="size-4 shrink-0" />
                      <span>info@aymarasventures.com</span>
                    </span>
                  </FooterLink>
                  <li className="text-olive-700 dark:text-olive-400">
                    <span className="inline-flex items-center gap-2">
                      <MapPinIcon className="size-4 shrink-0" />
                      <span>Miami, FL - Servicio nacional en EE. UU.</span>
                    </span>
                  </li>
                </FooterCategory>
              </>
            }
            fineprint={`© ${currentYear} AV Ventures | Capital Financial LLC.`}
            socialLinks={
              <>
                <SocialLink href={instagramURL} name="Instagram">
                  <InstagramIcon />
                </SocialLink>
              </>
            }
          />
        </>
      </body>
    </html>
  );
}
