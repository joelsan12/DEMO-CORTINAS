import { CatalogCategory, WizardOption } from '../shared/models/demo.models';

export const catalogCategories: CatalogCategory[] = [
  {
    id: 'rollers',
    label: 'Rollers',
    eyebrow: 'Blackout y Screen',
    products: [
      {
        id: 'roller-blackout',
        name: 'Roller Blackout',
        type: 'Roller',
        category: 'rollers',
        description: 'Oscuridad total y privacidad para dormitorios, salas de TV y espacios de descanso.',
        image:
          'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1100&q=82&fm=webp',
      },
      {
        id: 'roller-screen',
        name: 'Roller Screen',
        type: 'Roller Screen',
        category: 'rollers',
        description: 'Controla el reflejo y conserva la vista exterior con una textura sobria y moderna.',
        image:
          'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1100&q=82&fm=webp',
      },
    ],
  },
  {
    id: 'persianas',
    label: 'Persianas',
    eyebrow: 'Madera, aluminio y verticales',
    products: [
      {
        id: 'persiana-madera',
        name: 'Persiana de Madera',
        type: 'Persiana de madera',
        category: 'persianas',
        description: 'Calidez natural para comedores, estudios y ambientes con acabados premium.',
        image:
          'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=82&fm=webp',
      },
      {
        id: 'persiana-aluminio',
        name: 'Persiana de Aluminio',
        type: 'Persiana de aluminio',
        category: 'persianas',
        description: 'Lineas limpias, facil mantenimiento y regulacion precisa de entrada de luz.',
        image:
          'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=82&fm=webp',
      },
      {
        id: 'persiana-vertical',
        name: 'Persiana Vertical',
        type: 'Persiana vertical',
        category: 'persianas',
        description: 'Solucion practica para ventanales amplios, oficinas y accesos a terrazas.',
        image:
          'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1100&q=82&fm=webp',
      },
    ],
  },
  {
    id: 'tradicionales',
    label: 'Tradicionales',
    eyebrow: 'Telas y visillos',
    products: [
      {
        id: 'telas-decorativas',
        name: 'Telas Decorativas',
        type: 'Cortina tradicional',
        category: 'tradicionales',
        description: 'Caida suave, textura y presencia para salas, recibidores y dormitorios principales.',
        image:
          'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1100&q=82&fm=webp',
      },
      {
        id: 'visillos',
        name: 'Visillos Livianos',
        type: 'Visillo',
        category: 'tradicionales',
        description: 'Filtran la luz con delicadeza y aportan movimiento sin cargar el ambiente.',
        image:
          'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1100&q=82&fm=webp',
      },
    ],
  },
  {
    id: 'automatizacion',
    label: 'Automatizacion',
    eyebrow: 'Motorizadas y Smart Home',
    products: [
      {
        id: 'motor-silencioso',
        name: 'Sistema Motorizado',
        type: 'Cortina motorizada',
        category: 'automatizacion',
        description: 'Apertura suave por control remoto para ventanales altos y rutinas diarias.',
        image:
          'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=82&fm=webp',
      },
      {
        id: 'smart-home',
        name: 'Integracion Smart Home',
        type: 'Sistema Smart Home',
        category: 'automatizacion',
        description: 'Programa escenas de luz, horarios y control desde asistentes o smartphone.',
        image:
          'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1100&q=82&fm=webp',
      },
    ],
  },
];

export const curtainTypes: WizardOption[] = [
  { id: 'Roller', label: 'Roller', icon: 'radio-button-off-outline' },
  { id: 'Persiana', label: 'Persiana', icon: 'reorder-four-outline' },
  { id: 'Tradicional', label: 'Tradicional', icon: 'layers-outline' },
];

export const environments: WizardOption[] = [
  { id: 'Sala', label: 'Sala', icon: 'home-outline' },
  { id: 'Dormitorio', label: 'Dormitorio', icon: 'bed-outline' },
  { id: 'Oficina', label: 'Oficina', icon: 'business-outline' },
];
