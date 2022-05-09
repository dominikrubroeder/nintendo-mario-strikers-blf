export default function TeamConfigOption(props) {
  return (
    <div
      className={`flex items-center justify-center h-32 rounded-3xl cursor-pointer border hover:border-gray-300 ${
        props.selectedTeam === props.teamTitle.toLowerCase()
          ? 'border-accent hover:border-accent'
          : 'border-gray-200'
      }`}
      onClick={props.onClick}
    >
      {/* Add character image */}
      {props.teamTitle}
    </div>
  );
}
