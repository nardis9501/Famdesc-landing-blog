type Testimonials = {
  author: string;
  avatarUrl: any;
  testimonial: string;
  role: `${string} | ${string}`;
};
const usTestimonialData: Array<Testimonials> = [
  {
    author: "Nardis Del Campo",
    avatarUrl:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/nardis.webp",
    testimonial:
      "Famdesc is a digital platform dedicated to strengthening family bonds and preserving special moments over time. We are deeply committed to offering the best tools to connect and enrich the lives of families around the world.",
    role: "CEO | Famdesc",
  },
  {
    author: "Liang Ricardo",
    avatarUrl:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/liang.webp",
    testimonial:
      "With a user-centric approach and authenticity, offers a welcoming space where families can build, share and celebrate together.",
    role: "Full Stack Developer |    ",
  },
  {
    author: "Arian Milanes",
    avatarUrl:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/arian.webp",
    testimonial:
      "On Famdesc, users have the opportunity to create and explore detailed family trees, connecting past and present generations.",
    role: "Team Leader | Agencia Áurea",
  },

  {
    author: "Frank Siret",
    avatarUrl:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/frank.webp",
    testimonial:
      "Famdesc will be an enhanced, open source, user-centric social network with content of value to everyone globally",
    role: "React/Spring Developer | Peoplewalking",
  },
];

const esTestimonialData: Array<Testimonials> = [
  {
    author: "Nardis Del Campo",
    avatarUrl:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/nardis.webp",
    testimonial:
      "Estamos comprometidos a fortalecer los lazos familiares, preservar momentos especiales y en ofrecer las mejores herramientas para conectar y enriquecer la vida de las familias de todo el mundo.",
    role: "CEO | Famdesc",
  },
  {
    author: "Liang Ricardo",
    avatarUrl:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/liang.webp",
    testimonial:
      "Con un enfoque centrado en el usuario y la autenticidad, ofrece un espacio acogedor donde las familias pueden construir, compartir y celebrar juntas.",
    role: "Full Stack Developer |    ",
  },
  {
    author: "Arian Milanes",
    avatarUrl:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/arian.webp",
    testimonial:
      "Famdesc tiene la visión de cambiar la forma en la que interactuamos en las redes sociales, dando un enfoque familiar en la manera que conectamos con parientes y amigos.",
    role: "Team Leader | Agencia Áurea",
  },

  {
    author: "Frank Siret",
    avatarUrl:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/frank.webp",
    testimonial:
      "Famdesc será una red social mejorada, de código abierto y centrada en el usuario, con contenidos de valor para todos a nivel mundial.",
    role: "React/Spring Developer | Peoplewalking",
  },
];

const frTestimonialData: Array<Testimonials> = [
  {
    author: "Nardis Del Campo",
    avatarUrl:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/nardis.webp",
    testimonial:
      "Nous sommes engagés à renforcer les liens familiaux, à préserver des moments spéciaux et à offrir les meilleurs outils pour connecter et enrichir la vie des familles à travers le monde.",
    role: "PDG | Famdesc",
  },
  {
    author: "Liang Ricardo",
    avatarUrl:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/liang.webp",
    testimonial:
      "Avec un accent sur l'utilisateur et l'authenticité, Famdesc offre un espace accueillant où les familles peuvent construire, partager et célébrer ensemble.",
    role: "Développeur Full Stack | ",
  },
  {
    author: "Arian Milanes",
    avatarUrl:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/arian.webp",
    testimonial:
      "Famdesc a pour vision de changer la façon dont nous interagissons sur les réseaux sociaux, en mettant l'accent sur la famille dans notre manière de nous connecter avec les proches et les amis.",
    role: "Chef d'Équipe | Agencia Áurea",
  },

  {
    author: "Frank Siret",
    avatarUrl:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/frank.webp",
    testimonial:
      "Famdesc sera un réseau social amélioré, open source et centré sur l'utilisateur, offrant des contenus de valeur pour tous à l'échelle mondiale.",
    role: "Développeur React/Spring | Peoplewalking",
  },
];

export default { usTestimonialData, esTestimonialData, frTestimonialData };
