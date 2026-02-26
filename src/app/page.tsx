import { ButtonLink, PlainButtonLink } from "@/components/elements/button";
import {
  CALENDLY_URL,
  HERO_IMG,
  WHATSAPP_URL,
  differentiators,
  faqItems,
} from "@/lib/av-content";
import {
  FAQsTwoColumnAccordion,
  Faq,
} from "@/components/sections/faqs-two-column-accordion";
import {
  Feature,
  FeaturesTwoColumnWithDemos,
} from "@/components/sections/features-two-column-with-demos";
import { Stat, StatsWithGraph } from "@/components/sections/stats-with-graph";

import { AnnouncementBadge } from "@/components/elements/announcement-badge";
import { ArrowNarrowRightIcon } from "@/components/icons/arrow-narrow-right-icon";
import { CallToActionSimple } from "@/components/sections/call-to-action-simple";
import { ChevronIcon } from "@/components/icons/chevron-icon";
import { HeroLeftAlignedWithDemo } from "@/components/sections/hero-left-aligned-with-demo";
import Image from "next/image";
import { Link } from "@/components/elements/link";
import { Screenshot } from "@/components/elements/screenshot";
import { Section } from "@/components/elements/section";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        eyebrow={
          <AnnouncementBadge
            target="_blank"
            href={CALENDLY_URL}
            text="Consulta Gratis"
            cta="Agendar ahora"
          />
        }
        headline="Consultoría Financiera,
        Optimización Crediticia y Acceso a Capital Real"
        subheadline={
          <p>
            ¿Sabías que más del 80% de los emprendedores en EE. UU. no logran
            acceder a financiamiento por un perfil mal estructurado? En{" "}
            <strong>AV Ventures | Capital Financial</strong> cerramos esa
            brecha. A través de ingeniería financiera, educación estratégica y
            posicionamiento crediticio, te ayudamos a convertirte en un perfil
            bancable ante las instituciones más influyentes del país.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink target="_blank" href={CALENDLY_URL} size="lg">
              Agenda una cita
            </ButtonLink>

            <PlainButtonLink target="_blank" href={WHATSAPP_URL} size="lg">
              Contactanos <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
        demo={
          <>
            <Screenshot
              className="rounded-md lg:hidden"
              wallpaper="green"
              placement="bottom-right"
            >
              <Image
                src={HERO_IMG}
                alt=""
                width={1670}
                height={1408}
                className="bg-white/75 md:hidden dark:hidden"
              />
              <Image
                src={HERO_IMG}
                alt=""
                width={1670}
                height={1408}
                className="bg-black/75 not-dark:hidden md:hidden"
              />
              <Image
                src={HERO_IMG}
                alt=""
                width={2000}
                height={1408}
                className="bg-white/75 max-md:hidden dark:hidden"
              />
              <Image
                src={HERO_IMG}
                alt=""
                width={2000}
                height={1408}
                className="bg-black/75 not-dark:hidden max-md:hidden"
              />
            </Screenshot>
            <Screenshot
              className="rounded-lg max-lg:hidden"
              wallpaper="green"
              placement="bottom"
            >
              <Image
                src={HERO_IMG}
                alt=""
                className="bg-white/75 dark:hidden"
                width={3440}
                height={1990}
              />
              <Image
                className="bg-black/75 not-dark:hidden"
                src={HERO_IMG}
                alt=""
                width={3440}
                height={1990}
              />
            </Screenshot>
          </>
        }
      />
      {/* Features */}
      <FeaturesTwoColumnWithDemos
        id="features"
        eyebrow="Como lo hacemos"
        headline="De la Intención a la Aprobación: Tu Camino hacia el Capital"
        subheadline={
          <p>
            En AV Ventures | Capital Financial, transformamos tu intención en
            aprobación.Nos especializamos en la ingeniería financiera de
            perfiles: analizamos tu estructura actual, identificamos brechas y
            te alineamos con los criterios de riesgo y algoritmos bancarios que
            determinan las decisiones de crédito en Estados Unidos. Tu éxito
            financiero no depende del azar, sino de una estrategia sólida y
            sostenible.
          </p>
        }
        features={
          <>
            <Feature
              demo={
                <Screenshot wallpaper="purple" placement="bottom-right">
                  <Image
                    src="https://images.unsplash.com/photo-1651126433991-11dda0eb78ff?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1651126433991-11dda0eb78ff?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1651126433991-11dda0eb78ff?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1651126433991-11dda0eb78ff?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1651126433991-11dda0eb78ff?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1651126433991-11dda0eb78ff?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1651126433991-11dda0eb78ff?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1651126433991-11dda0eb78ff?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Optimización de Perfil Crediticio Empresarial"
              subheadline={
                <p>
                  Transformamos perfiles limitados en perfiles de alta
                  solvencia.Analizamos cada variable de tu reporte para
                  proyectar máxima confianza ante las entidades financieras,
                  enfocándonos en la limpieza estructural y en potenciar tu
                  puntuación FICO.
                </p>
              }
              // cta={
              //   <Link href="#">
              //     See how it works <ArrowNarrowRightIcon />
              //   </Link>
              // }
            />
            <Feature
              demo={
                <Screenshot wallpaper="blue" placement="bottom-left">
                  <Image
                    src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Ingeniería de Acceso a Capital"
              subheadline={
                <p>
                  Diseñamos la ruta estratégica para obtener líneas de crédito
                  comerciales y tarjetas de negocios de alto
                  límite.Estructuramos tu crédito corporativo para que tu
                  expansión sea financiable y escalable.
                </p>
              }
              // cta={
              //   <Link href="#">
              //     See how it works <ArrowNarrowRightIcon />
              //   </Link>
              // }
            />
            {/* feature 3 */}
            <Feature
              demo={
                <Screenshot wallpaper="green" placement="bottom-left">
                  <Image
                    src="https://images.unsplash.com/photo-1624811532681-e58a7e25f273?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1624811532681-e58a7e25f273?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1624811532681-e58a7e25f273?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1624811532681-e58a7e25f273?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1624811532681-e58a7e25f273?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1624811532681-e58a7e25f273?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1624811532681-e58a7e25f273?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1624811532681-e58a7e25f273?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Educación Financiera Avanzada"
              subheadline={
                <p>
                  Tu mayor activo es el conocimiento.Te asesoramos para manejar
                  la deuda de manera inteligente, convirtiéndola en una
                  herramienta de apalancamiento para adquirir activos, crecer y
                  generar flujo de efectivo positivo.
                </p>
              }
              // cta={
              //   <Link href="#">
              //     See how it works <ArrowNarrowRightIcon />
              //   </Link>
              // }
            />
          </>
        }
      />
      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow="Resultados Comprobados"
        headline="Por Qué Elegir AV Ventures | Capital Financial"
        subheadline={
          <p>
            Estas son las razones que diferencian nuestro enfoque estratégico:
            diagnóstico a medida, visión integral, confidencialidad y resultados
            orientados al acceso real a capital.
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
      {/* Vision & Transparency */}
      <Section
        id="vision-transparency"
        eyebrow="Enfoque"
        headline="Visión y transparencia antes que promesas"
        subheadline={
          <p>
            Mientras recopilamos testimonios reales de clientes, priorizamos
            dejar claro cómo trabajamos, cuál es nuestra visión y qué sí (y qué
            no) ofrecemos.
          </p>
        }
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="border-t border-olive-950/10 pt-5 dark:border-white/10">
            <p className="text-xs font-semibold tracking-[0.16em] text-olive-600 uppercase dark:text-olive-300">
              Nuestra Visión
            </p>
            <p className="mt-3 text-sm/7 text-olive-700 dark:text-olive-300">
              Ser la compañía referente en gestión de capital estratégico,
              ayudando a nuestros clientes a alcanzar libertad financiera
              mediante conocimiento, estructura y ética.
            </p>
          </div>

          <div className="border-t border-olive-950/10 pt-5 dark:border-white/10">
            <p className="text-xs font-semibold tracking-[0.16em] text-olive-600 uppercase dark:text-olive-300">
              Aviso Legal
            </p>
            <p className="mt-3 text-sm/7 text-olive-700 dark:text-olive-300">
              AV Ventures | Capital Financial no es un banco ni una agencia de
              crédito. No garantizamos aprobaciones específicas.
            </p>
            <p className="mt-3 text-sm/7 text-olive-700 dark:text-olive-300">
              Nuestros servicios se basan en análisis financiero, educación
              estratégica y optimización de perfiles. No ofrecemos asesoramiento
              legal.
            </p>
          </div>
        </div>
      </Section>
      {/* Middle CTA */}
      <CallToActionSimple
        id="mid-cta"
        headline="Descubre si tu perfil está listo para acceder a capital"
        subheadline={
          <p>
            Agenda un análisis estratégico inicial sin costo y recibe una
            orientación clara sobre tu perfil, tus brechas y los próximos pasos
            recomendados.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink target="_blank" href={CALENDLY_URL} size="lg">
              Reservar una Cita
            </ButtonLink>

            <PlainButtonLink target="_blank" href={WHATSAPP_URL} size="lg">
              Contactanos
              <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Preguntas Frecuentes">
        {faqItems.map((item, index) => (
          <Faq
            key={item.q}
            id={`faq-${index + 1}`}
            question={item.q}
            answer={
              "extraLink" in item ? (
                <>
                  {item.a} {item.extraLink.prefix}
                  <Link
                    href={item.extraLink.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.extraLink.label}
                  </Link>
                  {item.extraLink.suffix}
                </>
              ) : (
                item.a
              )
            }
          />
        ))}
      </FAQsTwoColumnAccordion>

      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Hablemos de Tu Futuro Financiero"
        subheadline={
          <p>
            ¿Listo para que las entidades financieras digan “Sí”? <br />
            Ayudamos a emprendedores en todo Estados Unidos a dominar las reglas
            del sistema financiero y construir su camino hacia el capital real.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink target="_blank" href={CALENDLY_URL} size="lg">
              Agenda una Cita
            </ButtonLink>

            <PlainButtonLink target="_blank" href={WHATSAPP_URL} size="lg">
              Contactanos <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  );
}
