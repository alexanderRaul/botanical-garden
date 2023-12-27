const blogPosts = [
  {
    title: 'Explorando la Biodiversidad del Jardín Botánico',
    content: `
      Bienvenidos a nuestro blog, donde exploraremos la asombrosa biodiversidad que se encuentra en nuestro querido Jardín Botánico.

      ## Un Vistazo a la Flora Exótica
      Nuestro jardín alberga una amplia variedad de plantas exóticas de todos los rincones del mundo. Desde orquídeas vibrantes hasta majestuosos árboles tropicales, cada rincón cuenta una historia única de la maravilla de la naturaleza.

      ### Orquídeas Encantadoras
      Las orquídeas son las joyas del jardín. Con sus colores brillantes y formas únicas, estas flores capturan la atención de los visitantes y ofrecen una experiencia visual inolvidable.

      ## Eventos y Talleres
      No se pierdan nuestros eventos y talleres programados para este mes. Desde recorridos guiados hasta talleres de jardinería, hay algo para todos los amantes de la naturaleza.

      ### Próximo Evento: Taller de Fotografía de la Naturaleza
      Aprende a capturar la belleza de la naturaleza a través de tu lente. Únete a nosotros el 15 de marzo para un taller interactivo sobre fotografía de la naturaleza. ¡Trae tu cámara y prepárate para explorar el arte de la fotografía!

      ## Conservación y Sostenibilidad
      En el corazón de nuestro jardín está nuestro compromiso con la conservación y la sostenibilidad. Descubre cómo trabajamos para preservar la diversidad biológica y contribuir a un futuro más verde.

      Únete a nosotros en esta emocionante aventura mientras exploramos la belleza y la importancia de nuestro Jardín Botánico.
    `,
    publication_date: '2023-03-01',
  },
  {
    title: 'Secretos de los Jardines Históricos',
    content: `
      Descubre los secretos ocultos en los rincones históricos de nuestro Jardín Botánico. En esta entrada, exploraremos los jardines que han resistido el paso del tiempo y han contado historias a lo largo de los años.

      ## Jardín de Rosas Antiguas
      Nuestro Jardín de Rosas Antiguas es un tributo a la elegancia y la gracia. Pasea por pasillos llenos de aromas embriagadores y descubre variedades de rosas que han fascinado a generaciones.

      ### Rincón del Estanque Sereno
      En el tranquilo Rincón del Estanque, descubrirás un pequeño paraíso donde nenúfares y peces danzan en armonía. Este es el lugar perfecto para encontrar paz y reflexión.

      ## La Historia del Invernadero Centenario
      El invernadero centenario es un testamento de la arquitectura y la pasión por la botánica. Explora la rica historia de este monumento y cómo ha evolucionado para albergar plantas de todo el mundo.

      Únete a nosotros en esta travesía en el tiempo mientras revelamos los secretos de nuestros jardines históricos.
    `,
    publication_date: '2023-03-15',
  },
  {
    title: 'Mariposas y Flores: Una Sinfonía de Colores',
    content: `
      Adéntrate en el mundo encantador de las mariposas y las flores en nuestro Jardín Botánico. Esta entrada celebra la asociación mágica entre estos seres alados y las hermosas flores que los atraen.

      ## El Jardín de Mariposas
      Nuestro Jardín de Mariposas es el hogar de una variedad deslumbrante de especies. Desde las coloridas alas de las mariposas monarca hasta las delicadas polillas nocturnas, cada visita es una experiencia única.

      ### Flores que Atraen Mariposas
      Descubre las flores estratégicamente plantadas para atraer a las mariposas. Desde las lila hasta las zinnias, cada variedad ha sido seleccionada para fomentar la interacción entre las mariposas y las flores.

      ## La Magia de la Metamorfosis
      Sumérgete en la fascinante metamorfosis de las mariposas, desde su etapa de oruga hasta la eclosión de la crisálida. A través de exhibiciones interactivas, aprenderás sobre la vida asombrosa de estos insectos.

      Únete a nosotros mientras exploramos la sinfonía de colores que se despliega en nuestro Jardín de Mariposas y Flores.
    `,
    publication_date: '2023-03-30',
  },
];

const events = [
  {
    title: 'Botanical Garden Tour',
    description: 'Join us for a guided tour of the beautiful botanical garden.',
    date: '2023-03-10',
  },
  {
    title: 'Nature Photography Workshop',
    description: 'Learn the art of capturing nature through photography.',
    date: '2023-04-20',
  },
  {
    title: 'Tree Planting Day',
    description: 'Help us contribute to the environment by planting trees in the community.',
    date: '2023-05-15',
  },
  {
    title: 'Bird Watching Expedition',
    description: 'Explore local bird species in their natural habitat with experienced birdwatchers.',
    date: '2023-06-02',
  },
  {
    title: 'Environmental Awareness Seminar',
    description: 'Join experts to learn about environmental issues and how to make a positive impact.',
    date: '2023-07-08',
  },
];

const trees = [
  {
    scientific_name: 'Fraxinus excelsior',
    common_name: 'Common ash, Alm. ask',
    image_url: '/trees/fraxinus-excelsior.png',
  },
  {
    scientific_name: 'Crataegus monogyna',
    common_name: 'Common hawthorn, Engriflet hvidtj',
    image_url: '/trees/crataegus-monogyna.png',
  },
  {
    scientific_name: 'Pinus sylvestris',
    common_name: 'Scots pine, Skovfyr',
    image_url: '/trees/pinus-sylvestris.png'
  },
  {
    scientific_name: 'Populus tremula',
    common_name: 'Aspen, Bævreasp',
    image_url: '/trees/populus-tremula.png'
  },
  {
    scientific_name: 'Acer platanoides',
    common_name: 'Norway maple, Spidsløn',
    image_url: '/trees/acer-platanoides.png'
  }
];

module.exports = {
  blogPosts, events, trees
}
