import SpotlightCard from '@/components/SpotlightCard';
import ExpertiseItem, { ExpertiseItemProps } from './ExpertiseItem'
import GradientText from '@/components/GradientText';


const expertises: Array<ExpertiseItemProps> = [
  {
    id: 1,
    title: 'Design Graphique & Branding',
    icon: '/assets/pen.svg',
    description: 'Identités visuelles, logos, supports marketing, communication digitale.',
    className: 'flex-3'
  },
  {
    id: 2,
    title: 'Design Graphique & Branding',
    icon: '/assets/pen.svg',
    description: 'Création de sites vitrines, e-commerce, plateformes sur mesure, apps React/Next.js, Flutter & PWA.',
    className: 'flex-4'
  },
  {
    id: 3,
    title: 'Design Graphique & Branding',
    icon: '/assets/pen.svg',
    description: 'Montage professionnel, animations, vidéos publicitaires et storytelling visuel.',
    className: 'flex-8'
  },
  {
    id: 4,
    title: 'Design Graphique & Branding',
    icon: '/assets/pen.svg',
    description: 'Conception d’interfaces intuitives : wireframes, prototypes, design systems, tests utilisateurs.',
    className: 'flex-7'
  },
  {
    id: 5,
    title: 'Design Graphique & Branding',
    icon: '/assets/pen.svg',
    description: 'Identités visuelles, logos, supports marketing, communication digitale.',
  },
  {
    id: 6,
    title: 'Design Graphique & Branding',
    icon: '/assets/pen.svg',
    description: 'Chatbots, IA générative, automatisations no-code (n8n), intégrations Python & API.',
  },
]

export default function Expertise() {

  const renderItems = (items: Array<ExpertiseItemProps>) => {
    const children: React.ReactNode[] = []

    for (let i = 0; i < items.length - 1; i += 2) {
      const [first, second] = [items[i], items[i + 1]];

      children.push(
        <div className='flex gap-2 h-full' key={first.id + '-' + second.id}>
          <SpotlightCard className={first.className} spotlightColor="rgba(0, 229, 255, 0.2)">
            <ExpertiseItem {...first} className='' key={first.id} />
          </SpotlightCard>
          <SpotlightCard className={second.className} spotlightColor="rgba(0, 229, 255, 0.2)">
            <ExpertiseItem {...second} className='' key={second.id} />
          </SpotlightCard>
        </div>
      )
    }

    return children

  }

  return (
    <div>

      <div className='space-y-6 mb-10 flex flex-col items-center justify-center'>

        <GradientText
          colors={["#D1DDFF", '#7B9EFF', 'white',]}
          showBorder={false}
          className='text-5xl font-medium'
          textClassName='pb-3'
        >
          Nos pôles d’expertise
        </GradientText>
        <p className='text-lg'>
          Des solutions digitales pensées pour l’impact.
        </p>

      </div>


      <div className='flex flex-col gap-2'>
        {renderItems(expertises)}
      </div>
    </div>
  )
}