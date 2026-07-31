import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";
import { buildBlogHead } from "@/lib/seo";
import hero from "@/assets/blog/glass-aluminium-works-dubai.jpg.asset.json";
import facade from "@/assets/blog/aluminium-facade-dubai.jpg.asset.json";

const SLUG = "glass-and-aluminium-works-dubai";
const TITLE = "Glass & Aluminium Works in Dubai: The Complete 2026 Guide";
const META_TITLE = "Glass & Aluminium Works Dubai: Complete 2026 Guide";
const DESC =
  "Complete 2026 guide to glass and aluminium works in Dubai, Sharjah, Ajman and Abu Dhabi — partitions, doors, railings, shower glass, mirrors, ACP cladding, spider glass, costs and approvals.";
const PUBLISHED = "2026-07-31";
const MODIFIED = "2026-07-31";

const FAQS = [
  {
    q: "How much do glass and aluminium works cost in Dubai in 2026?",
    a: "As a 2026 benchmark in Dubai: frameless glass partitions run AED 320–650 per sqm, double-glazed aluminium windows AED 550–1,100 per sqm, frameless shower enclosures AED 1,800–4,500 per unit, glass railings AED 750–1,600 per linear metre, ACP cladding AED 180–320 per sqm and spider glass facades AED 1,400–2,600 per sqm — all supplied and installed.",
  },
  {
    q: "Which glass is best for Dubai's climate?",
    a: "For external glazing, double-glazed units with a low-e or solar-control coating and a thermally broken aluminium frame are the standard for Dubai. They cut solar heat gain, reduce condensation and comply with Dubai's Al Sa'fat green building requirements. For interiors, 10 mm or 12 mm tempered glass is standard, with laminated build-ups where acoustics or safety demand it.",
  },
  {
    q: "Do I need approval for glass partitions in a Dubai office?",
    a: "Yes. Fit-out works in most Dubai towers and free zones need building-management and, for larger scopes, Dubai Municipality or free-zone authority approval. A licensed contractor submits drawings, material data sheets, tempered-glass certificates and insurance before mobilising. Glasser Technical Works handles this submission as part of the project.",
  },
  {
    q: "How long does a glass and aluminium installation take?",
    a: "A single office floor of glass partitions typically takes 5–10 working days from final measurement to handover. Shower enclosures take 7–10 days (fabrication plus one install day), aluminium windows for a villa 3–5 weeks, and a spider glass or curtain-wall facade 6–12 weeks depending on size and approvals.",
  },
  {
    q: "Is tempered glass mandatory in the UAE?",
    a: "For doors, partitions below 1.5 m, shower enclosures, railings and any glazing where impact is possible, safety glass — tempered or laminated — is mandatory under UAE Fire and Life Safety Code and Dubai Municipality rules. Always ask your contractor for the tempering certificate for the actual batch supplied.",
  },
  {
    q: "What is the difference between aluminium and uPVC windows in the UAE?",
    a: "Aluminium is stronger, allows much slimmer sightlines and larger panes, and handles UAE heat and UV without warping or discolouring. uPVC insulates slightly better per frame but limits pane size and yellows over time in direct Gulf sun. For most Dubai villas and towers, thermally broken aluminium is the better long-term specification.",
  },
  {
    q: "Do you serve Sharjah, Ajman and Abu Dhabi as well as Dubai?",
    a: "Yes. Glasser Technical Works operates from Al Qusais, Dubai and delivers glass and aluminium works across Dubai, Sharjah, Ajman, Abu Dhabi and the northern emirates. Site surveys within Dubai and Sharjah are usually scheduled within 24–48 hours.",
  },
  {
    q: "What warranty comes with glass and aluminium works in Dubai?",
    a: "Industry practice in the UAE is a 12-month workmanship warranty, with manufacturer warranties of 5–10 years on hardware, ironmongery and coated aluminium profiles. Insist on the warranty in writing on the LPO or contract, along with a maintenance contact for hinge and seal adjustment.",
  },
];

export const Route = createFileRoute("/blog/glass-and-aluminium-works-dubai")({
  head: () =>
    buildBlogHead({
      slug: SLUG,
      title: META_TITLE,
      description: DESC,
      image: hero.url,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      faqs: FAQS,
    }),
  component: () => (
    <BlogPost
      h1={TITLE}
      image={hero.url}
      imageAlt="Frameless glass partitions with slim black aluminium framing in a premium Dubai office overlooking the skyline"
      updated="31 July 2026"
      quickAnswer="Glass and aluminium works in Dubai cover ten core scopes — glass partitions, glass doors, office glass, glass railings, shower glass, mirrors, aluminium doors, aluminium windows, ACP cladding and spider glass. In 2026, expect AED 320–650 per sqm for frameless partitions, AED 550–1,100 per sqm for double-glazed aluminium windows and AED 1,400–2,600 per sqm for spider glass facades, supplied and installed by a licensed Dubai contractor."
      intro="Updated 31 July 2026. Glass and aluminium are the two materials that define how Dubai looks and how its buildings perform. From the frameless partitions in a DIFC trading floor to the thermally broken windows in a Dubai Hills villa and the ACP-clad tower fronts along Sheikh Zayed Road, almost every fit-out and facade decision in the UAE comes back to these two materials. This guide explains each scope, what it costs in 2026, how approvals work, which specifications survive UAE heat, and how to choose a contractor — written by the team at [Glasser Technical Works](/about), a licensed Dubai glass and aluminium contractor operating from Al Qusais since 2019."
      sections={[
        {
          heading: "Why Glass and Aluminium Dominate UAE Construction",
          paragraphs: [
            "Dubai's building stock is young, dense and vertical, and it is built in a climate that punishes the wrong material choice. Summer surface temperatures on a west-facing facade routinely exceed 70°C, humidity along the coast drives salt-laden air into every joint, and fine desert dust finds any gap a seal fails to close. Timber moves, steel corrodes without constant maintenance, and uPVC yellows. Aluminium — anodised or powder-coated — resists all three and stays dimensionally stable across a 40°C annual swing.",
            "Glass earns its place for a different reason: daylight and value. Developers know that a view sells, and tenants know that daylit space performs. The result is a market where the glazed envelope is often 60–80% of a tower's visible surface, and where interior fit-outs increasingly replace blockwork with glass to keep daylight travelling deeper into the floorplate.",
            "The combination matters more than either material alone. Aluminium provides the structural frame, the thermal break and the drainage path; glass provides the transparency and the solar-control performance. A specification is only as strong as the weaker of the two — premium double-glazed units in an untreated, non-thermally-broken frame will still sweat and still leak heat.",
            "This is also why the UAE market separates cleanly into contractors who fabricate and install both materials in-house and those who subcontract one of them. In-house fabrication is what allows a partition, a door leaf and its aluminium track to arrive on site as a single coordinated set, tolerance-matched to a laser survey rather than to a drawing.",
          ],
        },
        {
          heading: "Glass Partitions and Office Glass",
          paragraphs: [
            "**Glass partitions** are the highest-volume interior scope in Dubai. The standard specification for a commercial fit-out is 10 mm or 12 mm tempered glass, either fully frameless with a top and bottom aluminium channel, or framed in slim black or bronze profiles for the industrial look that has dominated Business Bay and JLT fit-outs since 2023.",
            "**Single glazed frameless partitions** deliver around 30–33 dB of sound reduction — enough for open-plan cellular offices, not enough for HR, legal or C-suite rooms. For those, a **double-glazed partition** with a 50–100 mm cavity, or a laminated acoustic build-up, lifts performance to 42–48 dB. The cost difference is significant, so specify by room function rather than blanket-specifying the whole floor.",
            "**Office glass** also includes manifestation (the frosted band required at eye level for safety), branded film, back-painted glass writing walls and integrated blinds. Integrated blinds inside a double-glazed cavity are popular in Dubai because they never collect dust — a real maintenance saving in a city where dust is the dominant cleaning cost.",
            "Typical 2026 Dubai pricing: frameless single-glazed partitions AED 320–650 per sqm; framed slim-profile partitions AED 450–800 per sqm; double-glazed acoustic partitions AED 900–1,600 per sqm. See the detailed [office glass partition cost guide](/blog/office-glass-partition-cost-dubai) for line-item breakdowns, and our [glass partition Dubai](/glass-partition-dubai) service page for build-up options.",
            "For curved reception fronts and radius meeting pods, see our guide to [curved glass partition ideas](/blog/curved-glass-partition-ideas-dubai) — bent glass carries a 40–70% premium over flat but transforms the entrance of a corporate floor.",
          ],
        },
        {
          heading: "Glass Doors and Glass Door Installation",
          paragraphs: [
            "Glass doors in the UAE fall into four families. **Frameless swing doors** on floor springs or patch fittings are the default for offices and retail: 12 mm tempered glass, stainless or matte-black patch hardware, and a floor spring recessed into the screed. **Sliding and telescopic doors** save circulation space in narrow reception areas. **Automatic sliding doors** are effectively mandatory for clinics, pharmacies and mall units. **Bi-folding and lift-and-slide aluminium doors** open a villa's living space onto the garden.",
            "The failure point in Dubai is almost never the glass — it is the floor spring and the alignment. Heavy 12 mm leaves in high-traffic retail entrances cycle tens of thousands of times a year; a budget floor spring drops within 18 months, the leaf starts scraping, and the fix costs more than the original saving. Specify a known hydraulic floor spring with adjustable closing speed and back-check, and insist on a level survey of the finished floor before fabrication.",
            "Door thresholds matter too. In a city that alternates between fine dust and short, intense rain, a properly detailed drainage threshold on an external glass door prevents both water ingress and the sand accumulation that eventually jams a track. Read more on our [glass door installation Dubai](/glass-door-installation-dubai) page.",
            "2026 pricing: frameless 12 mm swing door with patch fittings and floor spring AED 2,400–4,500 per leaf; automatic sliding entrance AED 9,000–18,000 per set; aluminium bi-fold systems AED 1,600–3,200 per sqm.",
          ],
        },
        {
          heading: "Glass Railings, Shower Glass and Mirrors",
          paragraphs: [
            "**Glass railings** are structural glazing, not decoration, and the UAE codes treat them that way. Balustrades must be laminated — never single tempered — because a laminated panel retains its interlayer if it breaks. Typical build-ups are 13.52 mm or 17.52 mm laminated tempered glass in a base shoe channel, with a stainless or aluminium handrail for balconies above the first floor. For Palm Jumeirah, Dubai Marina and other coastal sites, specify 316-grade stainless steel rather than 304: chloride-laden air will pit the lower grade within two years. Details on our [glass railing Dubai](/glass-railing-dubai) page.",
            "**Shower glass** is the highest-volume residential scope in the UAE. The standard is 10 mm tempered glass, frameless, with a factory-applied hydrophobic coating — a genuinely worthwhile upgrade in Dubai, where hard water leaves limescale on untreated glass within weeks. Hinges and support bars should be solid brass with a PVD finish; chrome-plated zinc fails fast in a hot, humid bathroom. Frameless enclosures run AED 1,800–4,500 per unit depending on size and hardware, and walk-in fixed panels start around AED 1,200. Our [shower glass Dubai](/shower-glass-dubai) service page covers layouts and glass options.",
            "**Mirrors** have moved well beyond bathroom cabinets. Dubai interiors now use LED-backlit mirrors with anti-fog heaters, bronze and grey tinted mirror for feature walls, antique mirror panelling in F&B, and full-height gym mirrors. Specify copper-free, silver-backed mirror with a sealed edge for wet areas — standard copper-backed mirror black-spots at the edges in UAE humidity within a few years. Our [mirror suppliers in Dubai guide](/blog/mirror-suppliers-dubai) compares grades, finishes and 2026 costs.",
          ],
          image: {
            src: facade.url,
            alt: "Aluminium sliding doors, ACP cladding and glass balcony railing on a luxury Dubai villa at sunset",
          },
        },
        {
          heading: "Aluminium Doors and Aluminium Windows",
          paragraphs: [
            "The single most consequential decision in UAE aluminium glazing is whether the profile is **thermally broken**. A thermal break is a polyamide strip that separates the inner and outer aluminium faces, interrupting the heat path. Without it, a Dubai window frame in August is hot to the touch on the inside, radiates heat into the room, condenses moisture in humid months and forces the AC to work continuously against the envelope.",
            "**Aluminium windows** for villas and towers are typically 24 mm or 28 mm double-glazed units — a 6 mm solar-control outer pane, a 12–16 mm argon-filled cavity and a 6 mm clear or laminated inner pane. A good specification hits a U-value near 1.8–2.2 W/m²K and a solar heat gain coefficient below 0.30, which is what Dubai's Al Sa'fat and Estidama in Abu Dhabi expect on new build. Systems worth naming in the UAE market include sliding, tilt-and-turn, casement and fixed-light configurations. See [aluminium windows Dubai](/services/aluminium-windows-dubai).",
            "**Aluminium doors** cover entrance doors, sliding patio systems, lift-and-slide, bi-folds and slimline pivot doors. The premium end of the Dubai villa market has shifted decisively to minimal-sightline sliding systems with 20–30 mm interlocks and panels up to 3.5 m tall — an assembly that only works with precise fabrication and proper structural calculation. See [aluminium doors Dubai](/services/aluminium-doors-dubai) and our [aluminium fabrication](/aluminium-fabrication-dubai) capability page.",
            "Finish matters for longevity. Powder coating to a qualified architectural standard, or anodising at 15–25 microns, will hold colour on a Dubai facade for well over a decade. Cheap coatings chalk and fade on south and west elevations within three to four summers — and refinishing installed aluminium in situ is far more expensive than specifying properly the first time.",
            "2026 pricing: double-glazed thermally broken aluminium windows AED 550–1,100 per sqm; sliding patio doors AED 900–1,800 per sqm; minimal-sightline systems AED 2,200–3,800 per sqm.",
          ],
        },
        {
          heading: "ACP Cladding and Spider Glass Facades",
          paragraphs: [
            "**ACP (aluminium composite panel) cladding** is how most UAE commercial buildings get their finished exterior skin: two aluminium sheets bonded to a mineral-filled core, fixed to an aluminium sub-frame with a ventilated cavity behind. Since the UAE Fire and Life Safety Code tightened, only **A2 or FR-grade mineral-core panels** are acceptable on facades — polyethylene-core ACP is no longer compliant on occupied buildings, and civil defence approval requires panel test certificates. Any contractor who cannot produce those certificates should be removed from the tender list.",
            "Well-executed ACP does three jobs at once: it gives the building a crisp, flat, uniform face; it creates a rainscreen cavity that keeps heat and water off the structural wall; and it hides the tolerances of the concrete behind. Poorly executed ACP is instantly recognisable — oil-canning ripples across the panel face, misaligned joints and silicone smeared over failed gaps. The difference is almost entirely in the sub-frame setting-out and the panel routing.",
            "**Spider glass** (bolted structural glazing) is the choice for showrooms, atriums, hotel lobbies and building entrances where the goal is maximum transparency with minimum visible structure. Panels of 12 mm or 19 mm tempered — or heat-soaked tempered laminated — glass are bolted through countersunk holes into stainless steel spider fittings, which are in turn fixed to tension rods, glass fins or a steel structure. Every hole must be drilled before tempering, so the survey and the shop drawings have to be exact.",
            "For UAE projects, heat-soak testing of tempered glass in spider applications is a specification worth insisting on: it screens out nickel-sulphide inclusions that cause spontaneous breakage years after installation, which matters when the panel sits four floors above a hotel entrance. Explore our [glass facade Dubai](/glass-facade-dubai) and [glass shopfront](/glass-shopfront-dubai) capabilities.",
            "2026 pricing: ACP cladding AED 180–320 per sqm; spider glass facades AED 1,400–2,600 per sqm; unitised curtain walling from AED 900 per sqm on volume projects.",
          ],
        },
        {
          heading: "Approvals, Codes and Compliance in the UAE",
          paragraphs: [
            "Compliance is where inexperienced contractors lose weeks. In Dubai, a commercial fit-out involving partitions and doors typically needs building-management approval, a fit-out permit from the landlord or free zone authority (DMCC, DIFC, JAFZA, Dubai South and others each run their own process), and Dubai Municipality or Civil Defence sign-off where the scope touches fire strategy, sprinkler layout or facade materials.",
            "The document set a competent contractor submits includes: trade licence and insurance, shop drawings, glass tempering and laminating certificates, hardware data sheets, fire-rating certificates for any rated glazing, method statement, risk assessment and approved worker permits. Access hours in most Dubai towers are restricted to evenings and weekends for noisy work, which needs to be priced in from the start rather than discovered mid-project.",
            "Sharjah and Ajman run lighter processes for interior fit-out but stricter municipality involvement on external facade changes. Abu Dhabi adds Estidama Pearl Rating requirements on new build, which directly affect glazing U-values and shading coefficients. If a project spans multiple emirates, confirm early that the specified glass meets the tightest of the applicable thermal requirements rather than re-specifying per emirate.",
            "Safety glass rules are non-negotiable everywhere in the UAE: doors, side panels, low-level glazing, shower enclosures and balustrades must be tempered or laminated, permanently marked with the manufacturer's stamp, and supported by batch certificates. Ask for the stamp photo on site — it takes thirty seconds and it is the single easiest quality check a client can do.",
          ],
        },
        {
          heading: "Service Areas: Dubai, Sharjah, Ajman and Abu Dhabi",
          paragraphs: [
            "**Dubai.** From our Al Qusais workshop we cover the full emirate: corporate fit-outs in [Business Bay](/glass-partition-business-bay), [DIFC and JLT](/glass-partition-dubai-marina), residential work in [JVC](/glass-partition-jvc), [Deira](/glass-partition-deira) and [Al Nahda](/glass-partition-al-nahda), and villa projects in Dubai Hills, Al Khawaneej, Meydan, Arabian Ranches and Palm Jumeirah. Local presence matters here: a same-week snag visit is only realistic if the fabrication shop is inside the emirate.",
            "**Sharjah.** Al Majaz, Al Nahda, Muwaileh and the industrial areas make up a steady stream of shopfront, partition and window work. Our [Sharjah glass partition](/glass-partition-sharjah) team runs the same specification standards as Dubai projects, with municipality submissions handled locally.",
            "**Ajman.** Ajman's residential and small-commercial market is highly price-sensitive, and it is where the temptation to accept uncertified glass is strongest. We hold the same certification standard here as anywhere else — see [glass partition Ajman](/glass-partition-ajman).",
            "**Abu Dhabi.** Corporate, hospitality and institutional work on Reem Island, Yas Island, Al Reef and the Corniche, plus Estidama-compliant glazing packages for new build. Longer mobilisation, so surveys are usually scheduled in blocks.",
            "Full coverage detail is on our [areas we serve](/areas-we-serve) page.",
          ],
        },
        {
          heading: "How to Choose a Glass and Aluminium Contractor in Dubai",
          paragraphs: [
            "**Check the trade licence and the activity line.** A Dubai trade licence names permitted activities. Confirm the licence explicitly covers glass and aluminium installation — plenty of firms bidding on fit-out work are licensed for general contracting only and subcontract everything, which adds a margin layer and removes accountability.",
            "**Ask where fabrication happens.** In-house workshops control tolerance and timeline. Contractors who buy finished panels from a third party are exposed to that supplier's queue, and a two-week delay upstream becomes your delay.",
            "**Demand a specification, not a total.** A quote that reads \"supply and install glass partitions — AED 45,000\" is unquotable and uncomparable. A real quote names glass thickness and type, interlayer, framing system and finish, hardware brand, silicone grade, edge detail, and the warranty period. Two quotes AED 20,000 apart are usually two completely different products.",
            "**Verify certificates before, not after.** Tempering certificates, laminated glass test reports, ACP fire-rating certificates and hardware warranties should be attached to the quotation package.",
            "**Look for site references in your building type.** Tower fit-out, villa, retail and hospitality projects have different access constraints and approval routes. Ask for two references in the same category and, where possible, visit one.",
            "**Confirm after-sales.** Hinges need adjustment, floor springs need re-tensioning, seals need replacement. A contractor who offers a named maintenance contact and a documented 12-month workmanship warranty is planning to still exist when you call. Browse our [completed projects](/projects) for delivered examples across all ten scopes.",
          ],
        },
        {
          heading: "People Also Ask",
          paragraphs: [
            "**What is the cheapest way to divide an office in Dubai?** A framed single-glazed partition system at AED 320–450 per sqm is the lowest compliant cost. Drywall is cheaper per square metre but blocks daylight and costs more to reconfigure, which erodes the saving over a typical three-year lease.",
            "**Can glass partitions be reused when we relocate?** Yes, and this is a genuine advantage in Dubai's short-lease market. Demountable partition systems with aluminium tracks can be dismantled, transported and re-erected with roughly 10–20% material loss, typically the tracks and seals rather than the glass.",
            "**How thick should office glass be?** 10 mm tempered for standard partitions up to 3 m high, 12 mm for taller panels, frameless doors and anything with patch fittings, and laminated build-ups where acoustics or overhead safety are involved.",
            "**Does double glazing really reduce a Dubai electricity bill?** Yes — measurably. Replacing single glazing with a low-e double-glazed unit in a thermally broken frame typically cuts envelope heat gain by 40–60% on that elevation, which shows up directly in cooling load on west and south faces.",
            "**How often should facade glass be cleaned in the UAE?** Every 6–8 weeks for external glazing in Dubai. Dust bonds with humidity into a film that etches coatings if left through a full summer.",
          ],
        },
        {
          heading: "الزجاج والألمنيوم في دبي: دليل مختصر",
          lang: "ar",
          dir: "rtl",
          paragraphs: [
            "تُعد أعمال الزجاج والألمنيوم من أهم عناصر البناء والتشطيب في دولة الإمارات، إذ تجمع بين الجمال المعماري والأداء الحراري العالي في مناخ يتطلب مواد قادرة على تحمّل درجات حرارة تتجاوز سبعين درجة على الواجهات المعرضة للشمس. وتشمل هذه الأعمال القواطع الزجاجية، والأبواب الزجاجية، وزجاج المكاتب، ودرابزين الزجاج، وزجاج الحمامات، والمرايا، وأبواب ونوافذ الألمنيوم، وكسوة الواجهات بألواح الألمنيوم المركبة، والزجاج العنكبوتي.",
            "في المكاتب، تُستخدم القواطع الزجاجية المقواة بسماكة عشرة أو اثني عشر مليمترًا للحفاظ على انسياب الضوء الطبيعي داخل المساحة مع توفير الخصوصية البصرية. أما في الغرف التي تتطلب عزلًا صوتيًا مثل غرف الاجتماعات وغرف الموارد البشرية، فيُنصح باستخدام الزجاج المزدوج أو الزجاج الرقائقي العازل للصوت، والذي يرفع مستوى العزل إلى ما بين اثنين وأربعين وثمانية وأربعين ديسيبل.",
            "بالنسبة للنوافذ والأبواب، فإن الخيار الأمثل في الإمارات هو الألمنيوم المزود بفاصل حراري مع زجاج مزدوج ذي طبقة عاكسة للحرارة. هذا النظام يقلل من اكتساب الحرارة الشمسية بنسبة تصل إلى ستين بالمئة، ويخفض استهلاك التكييف، ويستوفي متطلبات نظام السعفة في دبي ونظام استدامة في أبوظبي للمباني الخضراء.",
            "أما الواجهات الخارجية، فتُنفَّذ إما بألواح الألمنيوم المركبة المقاومة للحريق من الفئة المعتمدة، أو بأنظمة الزجاج العنكبوتي المثبتة بوصلات من الفولاذ المقاوم للصدأ. ومن الضروري التأكد من شهادات مقاومة الحريق وشهادات تقسية الزجاج قبل بدء التنفيذ، لأنها شرط أساسي للحصول على موافقة الدفاع المدني والبلدية.",
            "تعمل شركة جلاسر للأعمال الفنية من مقرها في القصيص بدبي منذ عام 2019، وتغطي دبي والشارقة وعجمان وأبوظبي، مع تنفيذ أكثر من خمسمئة مشروع. للحصول على معاينة مجانية وعرض سعر ثابت خلال أربع وعشرين ساعة، يمكنكم التواصل معنا على الرقم 0568400838 971+ أو عبر البريد الإلكتروني sales@glasseruae.com.",
          ],
        },
        {
          heading: "Getting Your Project Priced Correctly",
          paragraphs: [
            "The most common cause of a blown glass and aluminium budget in Dubai is not the material rate — it is scope discovered late. Floor levels that are out by 20 mm, ceilings that cannot carry a partition head, existing blockwork that has to be demolished, restricted evening-only access, and hardware upgrades chosen after fabrication has started all add cost after the LPO is signed.",
            "A proper survey removes most of that risk. We laser-survey every opening, check floor and ceiling tolerance, confirm the fixing substrate, photograph the access route from the loading bay to the floor, and only then issue a fixed-price quotation with a named specification. That is why we can hold prices rather than issuing variations halfway through.",
            "Bring three things to the first conversation: a floor plan or dimensions, a reference photo of the look you want, and your target handover date. With those, we can usually give an indicative range on the call and a fixed quotation within 24 hours of the site visit. For a scoped quote across any of the ten services covered here, [contact our team](/contact) or call +971 56 840 0838.",
          ],
        },
      ]}
      faqs={FAQS}
      serviceLinks={[
        { to: "/glass-partition-dubai", label: "Glass Partition Dubai" },
        { to: "/office-glass-partition-dubai", label: "Office Glass Partition" },
        { to: "/glass-door-installation-dubai", label: "Glass Door Installation" },
        { to: "/glass-railing-dubai", label: "Glass Railing Dubai" },
        { to: "/shower-glass-dubai", label: "Shower Glass Dubai" },
        { to: "/services/custom-mirrors-dubai", label: "Custom Mirrors Dubai" },
        { to: "/services/aluminium-doors-dubai", label: "Aluminium Doors Dubai" },
        { to: "/services/aluminium-windows-dubai", label: "Aluminium Windows Dubai" },
        { to: "/glass-facade-dubai", label: "Glass Facades & Spider Glass" },
        { to: "/aluminium-works-dubai", label: "Aluminium Works Dubai" },
      ]}
      related={[
        { to: "/blog/office-glass-partition-cost-dubai", label: "Office Glass Partition Cost in Dubai (2026)" },
        { to: "/blog/best-glass-partition-company-dubai", label: "Best Glass Partition Company in Dubai" },
        { to: "/blog/aluminium-fabrication-services-dubai", label: "Aluminium Fabrication Services in Dubai" },
        { to: "/blog/mirror-suppliers-dubai", label: "Mirror Suppliers in Dubai: Buyer's Guide" },
      ]}
      ctaHeading="Planning a glass or aluminium project in the UAE?"
      ctaText="Free site survey across Dubai, Sharjah, Ajman and Abu Dhabi — fixed-price, fully specified quotation within 24 hours."
    />
  ),
});
