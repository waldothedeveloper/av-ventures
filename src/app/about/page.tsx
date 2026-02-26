import {
  ABOUT_TESTIMONIAL_IMG,
  ABOUT_VALUES_IMAGES,
  CALENDLY_URL,
  HERO_ABOUT,
  WHATSAPP_URL,
  differentiators,
  jsonLdFinancialService,
  processSteps,
  serviceItems,
  valuesPrimary,
  valuesSecondary,
} from "@/lib/av-content";
import { ButtonLink, PlainButtonLink } from "@/components/elements/button";
import { Stat, StatsWithGraph } from "@/components/sections/stats-with-graph";
import {
  TeamFourColumnGrid,
  TeamMember,
} from "@/components/sections/team-four-column-grid";

import { CallToActionSimple } from "@/components/sections/call-to-action-simple";
import { ChevronIcon } from "@/components/icons/chevron-icon";
import { HeroLeftAlignedWithPhoto } from "@/components/sections/hero-left-aligned-with-photo";
import Image from "next/image";
import { Section } from "@/components/elements/section";
import { TestimonialTwoColumnWithLargePhoto } from "@/components/sections/testimonial-two-column-with-large-photo";

export default function Page() {
  const values = [...valuesPrimary, ...valuesSecondary];
  const contactPhone = jsonLdFinancialService.telephone;
  const contactEmail = jsonLdFinancialService.email;

  return (
    <>
      {/* Hero */}
      <HeroLeftAlignedWithPhoto
        id="hero"
        headline="Quiénes Somos: Expertos en Consultoría Financiera y Capital Estratégico"
        subheadline={
          <p>
            AV Ventures | Capital Financial es una firma nacional especializada
            en optimización crediticia y posicionamiento financiero estratégico.
            Acompañamos a emprendedores, profesionales y empresas en su proceso
            de acceso a capital, ayudándolos a construir patrimonio y escalar
            sus negocios en el competitivo mercado estadounidense.
          </p>
        }
        cta={
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink target="_blank" href={CALENDLY_URL} size="lg">
              Agenda una cita
            </ButtonLink>
            <PlainButtonLink target="_blank" href={WHATSAPP_URL} size="lg">
              Habla por WhatsApp <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
        photo={
          <Image
            src={HERO_ABOUT}
            alt="Consultoría financiera estratégica y acceso a capital en Estados Unidos"
            width={1974}
            height={1316}
            className="h-full w-full object-cover"
          />
        }
      />

      {/* Stats / Differentiators */}
      <StatsWithGraph
        id="stats"
        eyebrow="Por Qué Elegir AV Ventures"
        headline="Un enfoque estratégico, ético y orientado a resultados"
        subheadline={
          <p>
            Diseñamos estrategias a medida para perfiles crediticios y acceso a
            capital real. Combinamos análisis, estructura, confidencialidad y
            acompañamiento práctico para que cada decisión financiera tenga
            fundamento.
          </p>
        }
      >
        {differentiators.map((item, index) => {
          const cleaned = item.replace(/^•\s*/, "");
          const [title, ...rest] = cleaned.split(":");
          const detail = rest.join(":").trim();

          return (
            <Stat
              key={item}
              stat={
                <span className="flex items-baseline gap-3">
                  <span>{`${index + 1}`.padStart(2, "0")}</span>
                  <span className="text-base/7 font-medium tracking-normal">
                    {title}:
                  </span>
                </span>
              }
              text={detail || cleaned}
            />
          );
        })}
      </StatsWithGraph>

      {/* Testimonial / Founder Perspective */}
      <TestimonialTwoColumnWithLargePhoto
        id="testimonial"
        quote={
          <>
            <p>
              Nuestra misión es educar, preparar y posicionar a cada cliente
              conforme a los estándares más exigentes de las entidades
              financieras.
            </p>
            <p>
              No vendemos puntos ni promesas vacías: construimos estrategias
              auténticas, sostenibles y adaptadas a cada caso.
            </p>
          </>
        }
        img={
          <Image
            src={ABOUT_TESTIMONIAL_IMG}
            alt="Asesoría financiera personalizada"
            className="h-full w-full object-cover not-dark:bg-white/75 dark:bg-black/75"
            width={1926}
            height={1284}
          />
        }
        name="Aymara Nieto Caballero"
        byline="Asesora en Estrategia de Capital | Miami, FL · Servicio nacional en EE. UU."
      />

      {/* Services */}
      <Section
        id="services"
        eyebrow="Servicios"
        headline="Nuestros servicios de alto impacto"
        subheadline={
          <p>
            Integramos optimización crediticia, ingeniería de acceso a capital y
            educación financiera avanzada para fortalecer perfiles bancables y
            apoyar crecimiento sostenible.
          </p>
        }
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {serviceItems.map((service) => (
            <article
              key={service.title}
              className="rounded-lg bg-olive-950/2.5 p-6 dark:bg-white/5"
            >
              <div className="mb-4 overflow-hidden rounded-sm">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1400}
                  height={933}
                  className="h-40 w-full object-cover"
                />
              </div>
              <h3 className="text-base/8 font-medium text-olive-950 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm/7 text-olive-700 dark:text-olive-400">
                {service.detail}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Values (template grid reused) */}
      <TeamFourColumnGrid
        id="values"
        headline="Nuestros valores fundamentales"
        subheadline={
          <p>
            Estos principios guían cada diagnóstico, recomendación y plan de
            acción que construimos con nuestros clientes.
          </p>
        }
      >
        {values.slice(0, 4).map((value, index) => {
          const cleaned = value.replace(/^•\s*/, "");
          const [title, ...rest] = cleaned.split(":");
          const detail = rest.join(":").trim();

          return (
            <TeamMember
              key={value}
              img={
                <div className="relative h-full w-full">
                  <Image
                    src={ABOUT_VALUES_IMAGES[index]}
                    alt={title}
                    width={1400}
                    height={933}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/55 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-white">
                    <span className="text-xs/5 font-medium tracking-[0.15em]">
                      {title}
                    </span>
                    <span className="text-3xl/8 font-medium">
                      {`${index + 1}`.padStart(2, "0")}
                    </span>
                  </div>
                </div>
              }
              // name={`${title}:`}
              byline={detail || cleaned}
            />
          );
        })}
      </TeamFourColumnGrid>

      {/* Process */}
      <Section
        id="process"
        eyebrow="Nuestro Proceso"
        headline="De la evaluación al acceso a capital"
        subheadline={
          <p>
            Trabajamos con una secuencia clara para reducir improvisación y
            aumentar la preparación bancaria de cada cliente.
          </p>
        }
      >
        <ol role="list" className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {processSteps.map((step, index) => {
            const cleaned = step.replace(/^•\s*/, "");
            const [title, detail] = cleaned
              .split("→")
              .map((part) => part.trim());

            return (
              <li
                key={step}
                className="rounded-lg border border-olive-950/10 bg-white p-6 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-xs/6 font-medium tracking-[0.15em] text-olive-600 dark:text-olive-400">
                  PASO {`${index + 1}`.padStart(2, "0")}
                </p>
                <p className="mt-1 text-base/8 font-medium text-olive-950 dark:text-white">
                  {title}
                </p>
                {detail && (
                  <p className="mt-2 text-sm/7 text-olive-700 dark:text-olive-400">
                    {detail}
                  </p>
                )}
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Hablemos de tu futuro financiero"
        subheadline={
          <p>
            ¿Listo para estructurar tu perfil y acceder a capital real? Agenda
            una consultoría estratégica o contáctanos por WhatsApp. También
            puedes escribirnos a {contactEmail} o llamarnos al {contactPhone}.
          </p>
        }
        cta={
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink target="_blank" href={CALENDLY_URL} size="lg">
              Agendar en Calendly
            </ButtonLink>

            <PlainButtonLink target="_blank" href={WHATSAPP_URL} size="lg">
              WhatsApp <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  );
}
