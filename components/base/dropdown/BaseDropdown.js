import BaseDropdownItem from './BaseDropdownItem';

const BaseDropdown = (props) => {
  const data = props.data;

  return (
    <div>
      {data.map((element) => (
        <BaseDropdownItem
          key={element.headline}
          headline={element.headline}
          content={element.content}
        />
      ))}
    </div>
  );
};

export default BaseDropdown;
