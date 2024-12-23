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
  },
  {
    title: "Europa Clipper",
    image: "https://space.skyrocket.de/img_sat/europa-clipper__2.jpg",
    description: "Exploring Jupiter's ice-covered moon"
  },
  {
    title: "James Webb Space Telescope",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3LBo4iCqQZuA_uxbBWuLGpXpv9MjdEseCw&s",
    description: "Revealing the universe's deepest secrets"
  },
  {
    title: "Artemis I Mission",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfz7wWrXdE-yaiTqDmh9coK8faLZ_-g4tSig&s",
    description: "The next step towards lunar exploration"
  }
];

export const FeaturedMissions = () => {
  return (
    <section className="py-20 px-4 min-h-[500px]">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 relative z-10">
      Explore Our Featured Space Missions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <FeaturedMission key={index} {...mission} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
