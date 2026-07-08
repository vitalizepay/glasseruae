import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";
import { buildBlogHead } from "@/lib/seo";
import image from "@/assets/projects/back-painted-glass-1.jpg.asset.json";

const SLUG = "back-painted-glass-dubai";
const TITLE = "Back Painted Glass in Dubai: Colours, Uses and Cost";
const DESC = "Back painted glass in Dubai — kitchen splashbacks, feature walls, wardrobes and retail. Colour options, ceramic vs PU finishes, installation and cost per sqm.";
const PUBLISHED = "2026-06-24";
const MODIFIED = "2026-07-08";

const FAQS = [
  { q: "What is back painted glass?", a: "Back painted glass is toughened or annealed float glass with an opaque coating applied to the rear face. You see the colour through the front of the glass, giving a smooth, glossy, seamless finish that is impossible to achieve with paint on a wall or tiles with grout." },
  { q: "Where is back painted glass typically used in Dubai?", a: "Kitchen splashbacks, wardrobe doors, feature walls in living rooms and offices, headboards, retail display backgrounds, and back-lit signage panels. Any surface where a glossy, easy-to-clean, grout-free colour finish is wanted." },
  { q: "How much does back painted glass cost per sqm in Dubai?", a: "Standard colours in toughened back painted glass run AED 220–380 per sqm supplied and installed. Custom RAL or Pantone colours, low-iron glass, and metallic or textured finishes push pricing to AED 400–650 per sqm." },
  { q: "Is back painted glass durable in a kitchen?", a: "Yes. A properly specified back painted glass splashback uses toughened glass with a ceramic frit or two-part polyurethane paint that is fully cured and sealed. It resists heat, moisture and cleaning chemicals for the lifetime of the kitchen and is far easier to clean than tiles or stone." },
  { q: "Can any colour be matched for back painted glass?", a: "Yes. Glasser UAE supplies back painted glass in standard whites, greys, blacks and warm neutrals from stock, and matches custom RAL, Pantone and NCS colours to order. Low-iron glass is recommended for pale or vivid colours to preserve true tone." },
];

export const Route = createFileRoute("/blog/back-painted-glass-dubai")({
  head: () =>
    buildBlogHead({
      slug: SLUG,
      title: TITLE,
      description: DESC,
      image: image.url,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      faqs: FAQS,
    }),
  component: () => (
    <BlogPost
      h1={TITLE}
      image={image.url}
      imageAlt="Back painted glass splashback in a modern Dubai kitchen"
      intro="Back painted glass has quietly become the finish of choice for Dubai kitchens, wardrobes and premium interiors. It gives you a seamless, high-gloss surface in any colour you can specify — with no grout lines, no seams and no fading — and it wipes clean with a damp cloth. This guide covers what back painted glass actually is, where it works best, the colour and finish options available in the UAE, and honest cost expectations. For coordinated interior finishes we often specify back painted glass alongside our [custom mirrors](/services/custom-mirrors-dubai) so vanities, wardrobes and feature walls share the same edge details and installation method."
      sections={[
        {
          heading: "What Is Back Painted Glass?",
          paragraphs: [
            "Back painted glass is a sheet of clear or low-iron float glass with an opaque coating applied to the rear face. You see the colour through the front surface of the glass, which gives it a depth and gloss that no painted wall or tile can match. The paint is protected between the glass and the wall — nothing touches it in use — so the finish stays perfect for decades.",
            "Two coating technologies dominate the UAE market. Ceramic frit is a mineral pigment fused to the rear face at high temperature during toughening — extremely durable, UV-stable, but limited to standard colour ranges. Two-part polyurethane (PU) or specialised back-paint enamel is applied post-fabrication and cured, allowing full RAL and Pantone colour matching. Both are suitable for interior use; ceramic frit is preferred where any UV exposure or high heat is expected.",
          ],
        },
        {
          heading: "Where Back Painted Glass Works Best",
          paragraphs: [
            "Kitchen splashbacks are the single most popular application. A back painted glass splashback runs from the countertop to the underside of the wall units as one seamless panel — no grout to stain, no tile edges to catch grease, and you can wipe the entire surface with a single sweep. Because the glass is toughened, it comfortably handles heat from hobs and steam from cooking.",
            "Wardrobe and cabinet doors in back painted glass are widely used in Dubai villas and apartments. The glass is bonded to a substrate and hung on standard cabinet hinges, giving a mirror-flat gloss finish that is far more scratch-resistant than lacquered MDF. Feature walls in living rooms, entrance halls and executive offices use large-format back painted glass panels — often paired with LED cove lighting for a subtle glow at the edges.",
            "Retail displays use back painted glass as a backdrop for product shelves, particularly in jewellery, cosmetics and premium fashion where the seamless glossy finish reads as more expensive than painted MDF. Restaurants use back painted glass on bar fronts and behind open kitchens. Headboards, bedside panels and bathroom vanities also benefit from the material's cleanability and colour depth.",
          ],
        },
        {
          heading: "Colour and Finish Options",
          paragraphs: [
            "Standard stock colours in the UAE include pure white, off-white, warm greys, charcoal, black, deep navy and warm neutrals — enough for most projects. Custom colour matching to RAL, Pantone or NCS references is straightforward and typically adds 20–35% over stock colours. Turnaround for custom colours is usually 7–14 days depending on batch size.",
            "Beyond flat colours, back painted glass is also available in metallic finishes (bronze, champagne, gunmetal), pearlescent finishes, and textured or fabric-effect backings that show through the glass. Low-iron (ultra-clear) float glass is strongly recommended for pale colours and vivid brand colours — standard clear float has a slight green tint that shifts pale colours cooler than the sample chip.",
            "Finish choices include high-gloss (the default), semi-matte and full matte. Matte back painted glass is a newer option that gives a soft, tactile feel while retaining all the cleanability and seamless-panel benefits of the material.",
          ],
        },
        {
          heading: "Installation Process",
          paragraphs: [
            "Installation of back painted glass is straightforward but has to be done properly to avoid ghosting or adhesive bleed showing through. The wall or substrate must be flat, dry and free of dust — plaster is skimmed and primed, tile beds are levelled. The glass is cut and edge-polished to size, toughened for splashback use, then painted and cured under controlled conditions.",
            "On site, panels are bonded using a neutral-cure silicone adhesive rated for glass bonding, applied in vertical beads with double-sided tape to hold the panel while the silicone cures. Perimeter joints are then finished with a matching silicone bead. A well-executed splashback install for a typical Dubai kitchen (3–5 sqm) takes a single day from delivery to finished silicone. Cut-outs for sockets, hobs and extractor hoods are done in the factory from a measured template, not on site.",
          ],
        },
        {
          heading: "Durability and Maintenance",
          paragraphs: [
            "Back painted glass is one of the lowest-maintenance interior finishes you can specify. The front surface is glass — it does not stain, absorb or discolour, and it cleans with any standard glass cleaner or a damp microfibre cloth. The paint on the rear is protected between the glass and the wall, so it cannot be scratched, chipped or faded in normal use.",
            "In kitchens, properly cured back paint is unaffected by heat from cooking, water splashes, or cleaning chemicals including citrus and mild alkalis. Toughened glass handles the thermal shock of hot pans nearby without issue. Avoid abrasive scouring pads on the front face — they will not scratch the glass but can dull the surface over years.",
            "In bathrooms, ensure any silicone joints are neutral-cure and mould-resistant. In direct-sunlight positions, specify ceramic frit rather than PU paint for long-term UV stability.",
          ],
        },
        {
          heading: "Back Painted Glass Cost in Dubai",
          paragraphs: [
            "As a 2026 UAE reference: standard stock colours in 6mm toughened back painted glass run AED 220–380 per sqm supplied and installed. Custom RAL or Pantone colours add roughly 20–35%. Low-iron glass adds a further 25–30% and is worth it for pale, warm or brand-critical colours. Metallic and pearlescent finishes typically land AED 450–650 per sqm.",
            "For a typical Dubai kitchen splashback of 4 sqm in a standard white, expect around AED 1,200–1,500 supplied, installed and sealed. A large feature wall of 15 sqm in a custom colour with low-iron glass will land closer to AED 6,500–8,500. Glasser UAE provides free site measurements and written fixed-price quotations across Dubai, Abu Dhabi, Sharjah and the Northern Emirates.",
          ],
        },
      ]}
      serviceLinks={[
        { to: "/services/custom-mirrors-dubai", label: "Custom Mirrors" },
        { to: "/glass-services", label: "All Glass Services" },
        { to: "/services", label: "Services Overview" },
      ]}
      related={[
        { to: "/blog/curved-glass-dubai", label: "Curved Glass in Dubai: Uses, Fabrication and Cost Guide" },
        { to: "/blog/acoustic-glass-dubai", label: "Acoustic Glass in Dubai: How Soundproof Glass Works" },
        { to: "/blog/glass-partitions-dubai-office-guide", label: "How to Choose the Right Glass Partition for Your Dubai Office" },
      ]}
      faqs={FAQS}
      ctaHeading="Considering back painted glass?"
      ctaText="Share colour references and dimensions — we'll send samples and a fixed-price quote within 24 hours."
    />
  ),
});
