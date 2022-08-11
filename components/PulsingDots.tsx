const PulsingDots = (props) => {
  return (
    <div className="flex items-center justify-center gap-2 m-4">
      <span
        className={`w-${props.size} h-${props.size} rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-bounce`}
      ></span>
      <span
        className={`w-${props.size} h-${props.size} rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-bounce animation-delay-100`}
      ></span>
      <span
        className={`w-${props.size} h-${props.size} rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-bounce animation-delay-200`}
      ></span>
    </div>
  );
};

export default PulsingDots;
