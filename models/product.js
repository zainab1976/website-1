const heroImages = [
  { src: '/images/image4.png', alt: 'Onion Hair Oil benefits infographic' },
  { src: '/images/image2.jpg', alt: 'LANZAA Onion Hair Oil on rustic wooden surface' },
  { src: '/images/image3.jpg', alt: 'LANZAA Onion Hair Oil bottle with golden oil splash' },
  { src: '/images/image6.jpg', alt: 'LANZAA Onion Hair Oil promotional banner' },
  { src: '/images/image7.jpg', alt: 'LANZAA Onion Hair Oil with natural ingredients' }
];

const productImages = [
  { src: '/images/image2.jpg', alt: 'LANZAA Onion Hair Oil on rustic wooden surface' },
  { src: '/images/image3.jpg', alt: 'LANZAA Onion Hair Oil bottle with golden oil splash' },
  { src: '/images/image4.png', alt: 'Onion Hair Oil benefits infographic' },
  { src: '/images/image5.jpg', alt: 'LANZAA Onion Hair Oil three-angle label view' },
  { src: '/images/image6.jpg', alt: 'LANZAA Onion Hair Oil promotional banner' },
  { src: '/images/image7.jpg', alt: 'LANZAA Onion Hair Oil with natural ingredients' },
  { src: '/images/image8.jpg', alt: 'LANZAA Onion Hair Oil ingredient showcase' },
  { src: '/images/image9.jpg', alt: 'LANZAA Onion Hair Oil rustic lifestyle photo' }
];

const highlights = [
  {
    title: 'Hair Growth',
    description: 'Stimulates blood circulation to the scalp, encouraging new hair growth and rejuvenating hair tissues.',
    icon: 'growth'
  },
  {
    title: 'Hair Fall Control',
    description: 'Strengthens hair roots, minimizes breakage, and helps prevent hair loss for visibly fuller hair.',
    icon: 'shield'
  },
  {
    title: 'Scalp Nourishment',
    description: 'Deeply nourishes the scalp, combats dryness and dandruff, and improves overall hair texture.',
    icon: 'nourish'
  }
];

const benefits = [
  {
    title: 'Reduces Hair Fall',
    description: 'Strengthens hair roots and minimizes hair breakage for stronger, healthier strands.'
  },
  {
    title: 'Promotes Hair Growth',
    description: 'Stimulates blood circulation to the scalp, encouraging new hair growth.'
  },
  {
    title: 'Nourishes the Scalp',
    description: 'Helps maintain a healthy scalp by combating dryness and dandruff.'
  },
  {
    title: 'Rich in Nutrients',
    description: 'Contains sulfur, antioxidants, and vitamins for overall hair health.'
  },
  {
    title: 'Prevents Premature Graying',
    description: 'Helps delay graying by promoting healthier, more resilient hair.'
  },
  {
    title: 'Improves Hair Texture',
    description: 'Enhances shine, smoothness, and manageability for salon-quality results.'
  }
];

const keyBenefits = [
  'Prevent hair loss',
  'Rejuvenate hair tissues',
  'Promotes hair growth',
  'Makes hair shiny',
  'Moisturizes dry hair',
  'Prevents hair breakage'
];

const ingredients = [
  { name: 'Onion Oil', detail: 'Rich in sulfur to strengthen follicles and reduce hair fall.' },
  { name: 'Black Seed Oil', detail: 'Known for its restorative properties and scalp health support.' },
  { name: 'Sweet Almond Oil', detail: 'Deeply moisturizes and adds natural shine to dry hair.' },
  { name: 'Olive Oil', detail: 'Nourishes and softens hair while protecting against damage.' },
  { name: 'Coconut Oil', detail: 'Penetrates the hair shaft for lasting hydration and strength.' },
  { name: 'Jojoba Oil', detail: 'Balances the scalp and promotes healthy, manageable hair.' }
];

const testimonials = [
  {
    name: 'Ayesha Khan',
    location: 'Lahore',
    rating: 5,
    text: 'After 6 weeks of use, my hair fall reduced noticeably. The oil feels premium and smells natural — not overpowering. Highly recommend LANZAA!'
  },
  {
    name: 'Fatima Ahmed',
    location: 'Karachi',
    rating: 5,
    text: 'I was skeptical about onion oil but LANZAA changed my mind. My scalp feels nourished and my hair has a beautiful shine now.'
  },
  {
    name: 'Sana Malik',
    location: 'Islamabad',
    rating: 5,
    text: 'Best hair oil I have tried in Pakistan. Easy to order on WhatsApp and delivery was quick. My hair feels thicker and stronger.'
  },
  {
    name: 'Hira Sheikh',
    location: 'Multan',
    rating: 5,
    text: 'The texture is luxurious — not greasy at all. I leave it overnight and wash in the morning. Visible difference in just a month!'
  }
];

const whyLanzaa = [
  {
    title: 'Sulphur-Rich Formula',
    description: 'Onion extract delivers essential sulphur to strengthen follicles from the root.',
    icon: 'formula'
  },
  {
    title: '6 Premium Oils',
    description: 'A curated blend of almond, coconut, olive, black seed, jojoba & onion oils.',
    icon: 'oils'
  },
  {
    title: 'Clinically Inspired',
    description: 'Formulated with proven botanical actives used in premium hair care worldwide.',
    icon: 'science'
  },
  {
    title: 'Made in Pakistan',
    description: 'Crafted locally in Lahore with international quality standards and luxury packaging.',
    icon: 'local'
  }
];

const timeline = [
  { year: '2020', title: 'The Beginning', description: 'LANZAA was founded in Lahore with a vision to bring natural, effective hair care to every home.' },
  { year: '2021', title: 'First Formula', description: 'Months of research led to our signature onion & almond oil blend — tested on real hair types.' },
  { year: '2022', title: 'Market Launch', description: 'LANZAA Onion Hair Oil launched across Pakistan with overwhelming customer response.' },
  { year: '2023', title: 'Growing Trust', description: 'Thousands of happy customers and expanding reach through WhatsApp ordering nationwide.' },
  { year: '2024', title: 'Premium V2', description: 'Elevated packaging, refined formula, and a commitment to luxury natural beauty.' }
];

const missionVision = [
  {
    type: 'mission',
    title: 'Our Mission',
    description: 'To deliver premium, transparent, and accessible natural hair care that empowers every person to feel confident in their own hair.',
    icon: 'mission'
  },
  {
    type: 'vision',
    title: 'Our Vision',
    description: 'To become Pakistan\'s most trusted luxury hair & skin brand — known for quality, authenticity, and visible results.',
    icon: 'vision'
  }
];

const product = {
  id: 'lanzaa-onion-hair-oil',
  name: 'LANZAA Onion Hair Oil',
  tagline: 'FOR HAIR FALL CONTROL',
  subtitle: 'With Onion & Almond Oil',
  volume: '6.7oz / 200ml',
  price: 1999,
  currency: 'PKR',
  image: '/images/image9.jpg',
  brand: 'LANZAA Hair & Skin',
  whatsappPhone: '923194426308',
  description:
    'Enriched with sulphur goodness, LANZAA Onion Hair Oil is a deeply reparative oil that provides deep nourishment and brings life back to damaged hair while reducing hair fall. Formulated with a powerful blend of natural oils, it strengthens roots, revitalizes the scalp, and restores your hair\'s natural shine.',
  application:
    'Take 7–9 drops of the oil and massage gently into the scalp until absorbed. Wash your hair after half an hour. For best results, leave it overnight.',
  whatsappUrl:
    'https://wa.me/923194426308?text=I%20want%20to%20order%20LANZAA%20Onion%20Hair%20Oil',
  contact: {
    email: 'info.lanzaapk@gmail.com',
    location: 'Johar Town, Lahore',
    website: 'www.lanzaapk.com'
  }
};

module.exports = {
  product,
  heroImages,
  productImages,
  highlights,
  benefits,
  keyBenefits,
  ingredients,
  testimonials,
  whyLanzaa,
  timeline,
  missionVision
};
