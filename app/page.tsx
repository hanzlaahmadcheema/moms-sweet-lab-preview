import {
  CakeIcon,
  SparklesIcon,
  MoonIcon,
  StarIcon,
  HeartIcon,
  GiftIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { clinic, serviceGroups, faqs, orderSteps } from "@/lib/content";
import { OrderForm } from "@/components/OrderForm";
import { Reveal } from "@/components/Reveal";

const GROUP_ICONS = [
  HeartIcon,
  SparklesIcon,
  CakeIcon,
  GiftIcon,
];

function SectionHeading({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <div id="top">
      {/* ---------- HERO (photo-led, MedBills pattern) ---------- */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-ivory to-sand"
        aria-labelledby="hero-heading"
      >
        <div className="container-responsive py-10 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="inline-flex animate-hero items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-rose-800 shadow-sm">
                <HeartIcon className="h-4 w-4 text-caramel" aria-hidden="true" />
                Home baker · Kyle, Texas
              </p>
              <h1
                id="hero-heading"
                className="mt-5 animate-hero animate-hero-delay-1 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]"
              >
                Edible art, baked to order.
              </h1>
              <div className="mt-5 animate-hero-photo animate-hero-delay-2 md:hidden">
                <img
                  src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1600&q=80"
                  alt="Freshly baked chocolate chip cookies, one broken open with melted chocolate"
                  width={1600}
                  height={1067}
                  className="h-auto w-full rounded-2xl shadow-xl"
                />
              </div>
              <p className="mt-5 animate-hero animate-hero-delay-2 max-w-prose text-lg leading-relaxed text-muted">
                Custom cookies, cupcakes and cakes — hand-decorated by{" "}
                {clinic.owner.name} in Kyle. Every cookie is a tiny, edible
                canvas, and every order starts with a DM.
              </p>
              <div className="mt-7 flex animate-hero animate-hero-delay-3 flex-col gap-3 sm:flex-row">
                <a
                  href="#menu"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-rose-500 px-7 py-3 font-bold text-white shadow-lg shadow-rose-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-600 hover:shadow-xl"
                >
                  See the menu
                </a>
                <a
                  href={clinic.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-rose-800 px-7 py-3 font-bold text-rose-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-50"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
                  DM to order
                </a>
              </div>
              <div className="mt-8 flex animate-hero animate-hero-delay-4 flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted">
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-rose-600" aria-hidden="true" />
                  Hand-decorated
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-rose-600" aria-hidden="true" />
                  Booked out every week
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-rose-600" aria-hidden="true" />
                  DM to order
                </span>
              </div>
            </div>
            <div className="relative hidden animate-hero-photo animate-hero-delay-2 md:block">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1600&q=80"
                  alt="Freshly baked chocolate chip cookies, one broken open with melted chocolate"
                  width={1600}
                  height={1067}
                  className="h-[480px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="flex items-center gap-1.5 text-lg font-extrabold text-ink">
                  <StarIcon className="h-5 w-5 text-gold" aria-hidden="true" />
                  Custom cookies — from $45 / dozen
                </p>
                <p className="text-sm text-muted">
                  Hand-decorated, in any theme you can imagine
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TRUST STRIP ---------- */}
      <section className="border-y border-rose-100 bg-rose-50" aria-label="Why customers choose us">
        <div className="container-responsive grid grid-cols-2 gap-x-4 gap-y-5 py-6 md:grid-cols-4">
          {[
            { strong: "Cookies from $45", sub: "Per dozen, custom" },
            { strong: "Cupcakes from $40", sub: "Per dozen, custom" },
            { strong: "Cakes from $45", sub: "4-inch custom cake" },
            { strong: "Booked out", sub: "Calendar full every week" },
          ].map((f, i) => (
            <Reveal key={f.strong} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <div className="border-l-2 border-rose-200 pl-4">
              <p className="font-extrabold text-rose-800">{f.strong}</p>
              <p className="text-sm text-muted">{f.sub}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- MENU ---------- */}
      <section id="menu" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="menu-heading">
        <div className="container-responsive">
          <Reveal>
          <SectionHeading
            title="The menu"
            intro="Everything below is made to order, by hand. Prices are shown where they are set — for the rest, DM us and Andrea will quote you before anything is baked."
          />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map((group, i) => {
              const Icon = GROUP_ICONS[i % GROUP_ICONS.length];
              const featured = !!group.image;
              return (
                <Reveal
                  key={group.title}
                  delay={(i % 4) as 0 | 1 | 2 | 3}
                >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {group.image && (
                    <img
                      src={group.image}
                      alt={group.imageAlt ?? ""}
                      width={1600}
                      height={1067}
                      loading="lazy"
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-ink">
                      {group.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">{group.blurb}</p>
                    <ul className="mt-4 space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[0.95rem] text-ink">
                          <CheckCircleIcon
                            className="mt-0.5 h-5 w-5 shrink-0 text-rose-600"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center justify-between pt-5">
                      <p className="text-lg font-extrabold text-rose-800">
                        {group.price}
                      </p>
                      <a
                        href={clinic.facebookUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center font-bold text-rose-800 underline-offset-4 hover:underline"
                      >
                        DM to order
                      </a>
                    </div>
                  </div>
                </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- THE EDIBLE CANVAS (dark band) ---------- */}
      <section id="story" className="scroll-mt-24 bg-rose-900 py-16 md:py-24" aria-labelledby="story-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
          <div>
            <p className="flex items-center gap-2 font-bold text-caramel">
              <HeartIcon className="h-6 w-6" aria-hidden="true" />
              The edible canvas
            </p>
            <h2 id="story-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              An artist first, a baker second
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-rose-100">
              Andrea spent years drawing, painting and coloring before she
              discovered cookie decorating — and realized she could use those
              skills on a tiny, edible canvas. Her first order was
              Powerpuff Girls-themed cookies. Her big break came when a beauty
              store gave her total creative freedom for their client giveaway
              cookies.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-rose-100">
              She welcomes every order, no matter the challenge, because the
              hard ones are how she learns and grows. That is why her calendar
              is full every single week.
            </p>
            <a
              href={clinic.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-caramel px-7 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-caramel-dark"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
              DM to order
            </a>
          </div>
          </Reveal>
          <Reveal variant="right">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=80"
              alt="Chocolate chip cookies in a basket lined with parchment paper"
              width={1600}
              height={1067}
              loading="lazy"
              className="h-72 w-full object-cover md:h-96"
            />
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- HOW ORDERING WORKS ---------- */}
      <section id="how" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="how-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
            <SectionHeading
              title="How ordering works"
              intro="Three simple steps — and your sweets are baked and decorated fresh for the day you need them."
            />
            </Reveal>
            <ol className="mt-8 space-y-6">
              {orderSteps.map((step, i) => (
                <Reveal key={step.title} delay={(i % 3) as 0 | 1 | 2 | 3}>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-800 text-lg font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-ink">{step.title}</p>
                    <p className="mt-1 leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal variant="right">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-ink">What to include in your message</h3>
            <ul className="mt-4 space-y-3">
              {[
                "What you want — cookies, cupcakes, a cake, or party favors",
                "When you need it — the date and time",
                "How many people it is for",
                "The theme, colors, or a photo of the design you have in mind",
                "Any allergies we should know about",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Andrea&rsquo;s calendar fills up every week, so message as early
              as you can — and send a photo of the design you love. A picture
              of the cookies you have in mind helps a lot.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- MEET ANDREA ---------- */}
      <section className="border-y border-rose-100 bg-rose-50 py-16 md:py-24" aria-labelledby="baker-heading">
        <Reveal>
        <div className="container-responsive grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
          <div className="hidden overflow-hidden rounded-3xl shadow-xl md:block">
            <img
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80"
              alt="Slice of layered cake topped with fresh raspberries"
              width={1200}
              height={800}
              loading="lazy"
              className="h-52 w-52 object-cover"
            />
          </div>
          <div>
            <h2 id="baker-heading" className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Meet {clinic.owner.name}, {clinic.owner.title}
            </h2>
            <p className="mt-2 font-semibold text-rose-700">
              Home baker · {clinic.area}
            </p>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
              {clinic.owner.bio}
            </p>
            <p className="mt-4 text-muted">
              Custom cookies, cupcakes and cakes — for birthdays, weddings,
              baby showers, and every sweet tooth in between.
            </p>
          </div>
        </div>
        </Reveal>
      </section>

      {/* ---------- OCCASIONS ---------- */}
      <section className="py-16 md:py-24" aria-labelledby="occasions-heading">
        <div className="container-responsive">
          <Reveal>
          <SectionHeading
            title="Made for your occasion"
            intro="Custom cookies and cakes for every kind of celebration — tell Andrea the day, and she will bake for it."
          />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Birthdays", body: "Cookies and a cake that match the theme — and the birthday person's favorite flavors." },
              { title: "Weddings", body: "A centerpiece cake and hand-decorated cookies for your day and your guests." },
              { title: "Baby showers", body: "Sweet little cookies and a cake to welcome the new arrival." },
              { title: "Client gifts & giveaways", body: "Custom cookies for your customers and events — the break that built this bakery." },
            ].map((o, i) => (
              <Reveal key={o.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-700">
                  <CakeIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-ink">{o.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{o.body}</p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ORDER ---------- */}
      <section id="book" className="scroll-mt-24 border-y border-rose-100 bg-rose-50 py-16 md:py-24" aria-labelledby="book-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal variant="left">
          <div>
            <Reveal>
            <SectionHeading
              title="Order"
              intro="Request an order here and we will confirm it by DM — or skip the form and message us on Facebook directly."
            />
            </Reveal>
            <p className="mt-6 flex items-center gap-3 text-lg font-bold text-rose-800">
              <ChatBubbleLeftRightIcon className="h-6 w-6" aria-hidden="true" />
              <a href={clinic.facebookUrl} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                DM us on Facebook
              </a>
            </p>
            <p className="mt-3 flex items-start gap-3 text-muted">
              <MapPinIcon className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              Pickup in Kyle, Texas. Exact pickup time is arranged by DM.
            </p>
            <p className="mt-3 text-muted">
              No phone number or email listed — Facebook DM is the way to
              reach us. You can also see the work on Instagram{" "}
              <a href={clinic.instagramUrl} target="_blank" rel="noreferrer" className="font-semibold text-rose-800 underline-offset-4 hover:underline">
                @momsweetlab
              </a>
              .
            </p>
          </div>
          </Reveal>
          <Reveal variant="right">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <OrderForm />
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="faq-heading">
        <div className="container-responsive max-w-3xl">
          <Reveal>
          <SectionHeading
            title="Questions customers ask"
            intro="Answers from the bakery's public information. Anything else — DM us and ask."
          />
          </Reveal>
          <div className="mt-8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) as 0 | 1}>
              <details className="group border-t border-slate-200 py-5 last:border-b">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-2xl font-normal text-muted transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-prose leading-relaxed text-muted">{f.a}</p>
              </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VISIT ---------- */}
      <section id="visit" className="scroll-mt-24 border-t border-slate-200 py-16 md:py-24" aria-labelledby="visit-heading">
        <div className="container-responsive grid gap-10 md:grid-cols-2">
          <Reveal variant="left">
          <div>
            <Reveal>
            <SectionHeading
              title="Pickup in Kyle"
              intro="We are a home bakery in Kyle, Texas — pickup is arranged by DM when you order."
            />
            </Reveal>
            <p className="mt-6 leading-relaxed text-muted">
              There is no shop counter — every order is baked and decorated to
              order and picked up at the agreed time.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Ordering ahead matters most: Andrea&rsquo;s calendar fills up
              every single week, so message as early as you can — and send a
              photo of the design you have in mind.
            </p>
          </div>
          </Reveal>
          <Reveal variant="right">
          <div className="rounded-2xl bg-rose-800 p-6 text-white shadow-xl sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-xl font-bold">DM to order</h3>
            <p className="mt-3 leading-relaxed text-rose-100">
              Facebook DM is how every order starts. Tell us what you want,
              when you need it, and how many — we will confirm your order and
              the price.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={clinic.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-rose-900 transition-colors hover:bg-rose-50"
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
                Message on Facebook
              </a>
              <a
                href={clinic.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
              >
                <MoonIcon className="h-5 w-5" aria-hidden="true" />
                See the work on Instagram
              </a>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-rose-100">
              No phone number or email listed — Facebook is the fastest way to
              reach us.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="bg-rose-900 py-16 md:py-20" aria-labelledby="closing-heading">
        <Reveal>
        <div className="container-responsive max-w-3xl text-center md:text-left">
          <h2 id="closing-heading" className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Hungry? DM us to order.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-rose-100 md:mx-0">
            Custom cookies, cupcakes and cakes — hand-decorated in Kyle.
            Message us on Facebook with what you need and when, and we will
            take it from there.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-start md:justify-start">
            <a
              href={clinic.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-caramel px-7 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-caramel-dark"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
              DM us on Facebook
            </a>
            <a
              href="#menu"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/60 px-7 py-3 font-bold text-white transition-colors hover:bg-white/10"
            >
              See the menu
            </a>
          </div>
        </div>
        </Reveal>
      </section>
    </div>
  );
}
