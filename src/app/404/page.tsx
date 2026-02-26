import { ArrowNarrowRightIcon } from "@/components/icons/arrow-narrow-right-icon";
import { HeroSimpleCentered } from "@/components/sections/hero-simple-centered";
import { Link } from "@/components/elements/link";

export default function Page() {
  return (
    <>
      <HeroSimpleCentered
        headline="Page not found"
        subheadline={
          <p>Lo sentimos, la página que estabas buscando no existe.</p>
        }
        cta={
          <Link href="/">
            Regreso a la página principal <ArrowNarrowRightIcon />
          </Link>
        }
      />
    </>
  );
}
