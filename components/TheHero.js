import BaseButton from './base/BaseButton';

export default function TheHero() {
  return (
    <section className="grid items-center justify-center h-screen p-4 overflow-hidden">
      <div className="text-center grid gap-8">
        <img
          className="m-auto max-h-[65vh]"
          src="/images/product/mario-strikers-battle-league-football-cover.jpg"
          alt="Nintendo Switch"
        />
        <div className="grid gap-2">
          <h1>Mario Strikers: Battle League Football | Nintendo Switch</h1>
          <div className="flex items-center justify-center">
            <BaseButton variant="contained">Button primary</BaseButton>
            <BaseButton variant="text">Button primary</BaseButton>
          </div>
        </div>
      </div>
    </section>
  );
}
