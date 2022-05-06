export default function BaseButton(props) {
  const variant = props.variant;

  return (
    <button
      className={`transition-all ${
        variant === 'contained'
          ? 'text-white px-4 py-2 rounded-full bg-red-600 hover:bg-red-700'
          : ''
      } ${
        variant === 'outlined'
          ? 'text-red-600 px-4 py-2 rounded-full bg-white border border-red-600 hover:bg-red-600 hover:text-white'
          : ''
      } ${
        variant === 'text'
          ? 'text-red-600 px-4 py-2 rounded-full bg-white transition-all duration-300 hover:bg-red-600/10'
          : ''
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
