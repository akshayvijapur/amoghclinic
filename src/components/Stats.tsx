import { Users, Award, Building2 } from 'lucide-react';

const stats = [
  { id: 1, name: 'Happy Patients', value: '10,000+', icon: Users },
  { id: 2, name: 'Expert Doctors', value: '2+', icon: Award },
  { id: 3, name: 'Years Experience', value: '5+', icon: Building2 },
];

export function Stats() {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-blue-700 rounded-lg p-6 text-center"
              >
                <IconComponent className="h-8 w-8 text-white mx-auto" />
                <p className="mt-4 text-3xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-base text-blue-100">{stat.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}