import { 
  DocumentMagnifyingGlassIcon, 
  ExclamationTriangleIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Intelligent Contract Analysis',
    description: 'AI-powered scanning automatically identifies key clauses, risks, and deviations from your standard playbooks.',
    icon: DocumentMagnifyingGlassIcon,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'Auto-Flagging & Risk Detection',
    description: 'Instantly flag compliance issues, regulatory deviations, and potential risks before they become problems.',
    icon: ExclamationTriangleIcon,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
  {
    name: 'Integrated Redlining',
    description: 'Streamlined redlining process with AI suggestions and collaborative editing capabilities.',
    icon: ChartBarIcon,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'Human-in-the-Loop Oversight',
    description: 'Maintain control with human oversight, secure audit trails, and enterprise-grade governance.',
    icon: UserGroupIcon,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    name: '50% Faster Reviews',
    description: 'Dramatically reduce contract review cycles from weeks to days with automated initial analysis.',
    icon: ClockIcon,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
  },
  {
    name: '30% Cost Reduction',
    description: 'Cut external counsel spend by ~30% through efficient AI-assisted review processes.',
    icon: CurrencyDollarIcon,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
]

export default function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-400">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need for modern contract management
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our AI agent combines cutting-edge technology with practical legal expertise to transform 
            how your organization handles contracts.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className={`rounded-lg p-2 ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
