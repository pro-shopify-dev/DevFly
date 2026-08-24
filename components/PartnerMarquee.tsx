import { partnerBrands } from './BrandLogos'

/**
 * Continuously scrolling strip of the platforms we work across — logos only,
 * in each brand's own colours.
 *
 * The track holds two identical copies of the list and slides exactly -50%,
 * so the second copy lands where the first began and the loop is seamless.
 * Only the first copy is exposed to assistive tech; the duplicate is hidden.
 * Motion pauses on hover, and the reduced-motion rules in globals.css turn the
 * strip into a normal horizontally scrollable row.
 */
export default function PartnerMarquee() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-10 lg:py-12 anim-reveal">
      <div className="container-wide mb-7 flex items-center justify-between gap-6">
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-slate-500">
          Technologies we build with
        </p>
        <p className="hidden sm:block text-xs font-semibold text-slate-400">20+ production tools</p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="marquee-group" aria-hidden={copy === 1 || undefined}>
              {partnerBrands.map((brand) => (
                <li key={brand.name} className="flex items-center gap-3">
                  <span className="shrink-0 flex items-center justify-center w-9">{brand.logo}</span>
                  <span className="text-xl font-bold tracking-tight text-slate-800 whitespace-nowrap">
                    {brand.name}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
