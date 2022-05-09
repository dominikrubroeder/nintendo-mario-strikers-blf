export default function TeamConfigOption(props) {
  return (
    <div
      className={`flex items-center justify-center h-56 rounded-3xl cursor-pointer border hover:border-gray-300 ${
        props.selectedTeam === props.teamTitle.toLowerCase()
          ? 'border-accent hover:border-accent'
          : 'border-gray-200'
      }`}
      onClick={props.onClick}
    >
      {/* Add character image: https://mario.fandom.com/de/wiki/Mario_Smash_Football */}
      <div className="grid gap-2 text-center">
        <img
          src={`/images/characters/${props.teamTitle
            .replace(' ', '')
            .toLowerCase()}-sketch.jpg`}
          alt={props.teamTitle}
          className="h-40"
        />
        <p>{props.teamTitle}</p>
      </div>
    </div>
  );
}
