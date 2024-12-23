import { FeaturedMission } from './FeaturedMission';

const missions = [
  {
    title: "Mars Exploration",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=800",
    description: "Journey to the Red Planet"
  },
  {
    title: "Deep Space Network",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
    description: "Connecting Earth to the cosmos"
  },
  {
    title: "Lunar Gateway",
    image: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&q=80&w=800",
    description: "Humanity's return to the Moon"
  }
];

export const FeaturedMissions = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Missions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <FeaturedMission key={index} {...mission} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};