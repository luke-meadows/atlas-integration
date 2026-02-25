export type MediaItem = {
  src: string;
  alt: string;
  label?: string;
};

export const media = {
  brand: {
    logoMark: {
      src: '',
      alt: 'Atlas Integration logo mark',
      label: 'Logo mark',
    } as MediaItem,
    logoType: {
      src: '',
      alt: 'Atlas Integration logo type',
      label: 'Logo type',
    } as MediaItem,
  },

  hero: {
    image: {
      src: '/hero-dashboard-laptop.png',
      alt: 'Atlas Integration — CRM systems overview',
      label: 'Hero image (dashboard mockup or abstract systems graphic)',
    } as MediaItem,
  },

  logos: {
    l1: { src: '', alt: 'Client logo', label: 'Client logo 1' } as MediaItem,
    l2: { src: '', alt: 'Client logo', label: 'Client logo 2' } as MediaItem,
    l3: { src: '', alt: 'Client logo', label: 'Client logo 3' } as MediaItem,
    l4: { src: '', alt: 'Client logo', label: 'Client logo 4' } as MediaItem,
    l5: { src: '', alt: 'Client logo', label: 'Client logo 5' } as MediaItem,
  },

  work: {
    w1: {
      src: '',
      alt: 'Web-to-Contract build',
      label: 'Case Study image 1',
    } as MediaItem,
    w2: {
      src: '',
      alt: 'Agentforce automation',
      label: 'Case Study image 2',
    } as MediaItem,
    w3: {
      src: '',
      alt: 'HubSpot implementation',
      label: 'Case Study image 3',
    } as MediaItem,
    w4: {
      src: '',
      alt: 'Integration architecture',
      label: 'Case Study image 4',
    } as MediaItem,
  },
};
