import Link from "next/link";
import { ChatBubbleLeftRightIcon, MapPinIcon, HeartIcon } from "@heroicons/react/24/outline";
import { clinic } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-rose-900 text-rose-100">
      <div className="container-responsive grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-xl font-extrabold tracking-tight text-white">
            {clinic.name}
          </p>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed">
            Edible art, baked to order in Kyle, Texas — custom cookies,
            cupcakes and cakes, hand-decorated by {clinic.owner.name}.
          </p>
          <p className="mt-4 flex items-center gap-2 text-[0.95rem] font-semibold text-white">
            <HeartIcon className="h-5 w-5 text-caramel" aria-hidden="true" />
            Home baker · {clinic.area}
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">
            Pickup
          </p>
          <p className="mt-3 flex items-start gap-2 text-[0.95rem] leading-relaxed">
            <MapPinIcon className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
            Kyle, Texas — pickup arranged by DM when you order.
          </p>
          <p className="mt-3 flex items-center gap-2 text-[0.95rem]">
            <ChatBubbleLeftRightIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            <a
              href={clinic.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white underline-offset-2 hover:underline"
            >
              {clinic.facebookText}
            </a>
          </p>
          <p className="mt-3 text-[0.95rem]">
            No phone number or email listed — Facebook DM is the way to order.
            See the work on Instagram{" "}
            <a
              href={clinic.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white underline-offset-2 hover:underline"
            >
              @momsweetlab
            </a>
            .
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">
            Order
          </p>
          <p className="mt-3 text-[0.95rem] leading-relaxed">
            Everything is baked and decorated to order. DM us with what you
            want, when you need it, and how many — we confirm the price and
            pickup time before anything is baked.
          </p>
          <Link
            href="#book"
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-rose-900 transition-colors hover:bg-rose-50"
          >
            Request an order
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-responsive flex flex-col gap-2 py-5 text-sm text-rose-200 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {clinic.name} · Kyle, Texas
          </p>
          <p>
            Preview website built from public information — details can be
            corrected on request. Photography: Unsplash.
          </p>
        </div>
      </div>
    </footer>
  );
}
