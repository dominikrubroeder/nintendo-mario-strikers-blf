export default function BaseButton(props) {
  const variant = props.variant;

  return (
    <button
      className={`transition-all disabled:opacity-10 disabled:cursor-not-allowed ${
        variant === 'contained'
          ? 'text-white px-4 py-2 rounded-full bg-accent hover:bg-red-700'
          : ''
      } ${
        variant === 'outlined'
          ? 'text-accent px-4 py-2 rounded-full bg-white border border-red-600 hover:bg-accent hover:text-white'
          : ''
      } ${
        variant === 'text'
          ? 'text-accent px-4 py-2 rounded-full bg-white transition-all duration-300 hover:bg-accent/10'
          : ''
      }`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {/* Add playing sounds when button is clicked (based on currently selected theme? Mario -> It'see me, Mario, or Nintendo Switch click sound */}
      {props.children}
    </button>
  );
}
