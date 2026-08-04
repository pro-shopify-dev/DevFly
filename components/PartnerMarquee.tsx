import { partnerBrands } from './BrandLogos'

/**
 * Continuously scrolling strip of the platforms we work across.
 *
 * The track holds two identical copies of the list and slides exactly -50%,
 * so the second copy lands where the first began and the loop is seamless.
 * Only the first copy is exposed to assistive tech; the duplicate is hidden.
 * Motion pauses on hover, and the reduced-motion rules in globals.css turn the
 * strip into a normal horizontally scrollable row.
 */
export default function PartnerMarquee() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-12 lg:py-16 anim-reveal">
      <div className="container-wide">
        <p className="text-[0.8125rem] font-semibold text-slate-500 uppercase tracking-[0.16em]">
          Trusted platforms &amp; partners we build with
        </p>
      </div>

      <div className="marquee mt-9">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="marquee-group" aria-hidden={copy === 1 || undefined}>
              {partnerBrands.map((brand) => (
                <li
                  key={brand.name}
                  className="flex items-center gap-3 text-slate-400 hover:text-slate-900 transition-colors duration-300"
                >
                  {brand.logo}
                  <span className="text-xl font-bold tracking-tight whitespace-nowrap">{brand.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
