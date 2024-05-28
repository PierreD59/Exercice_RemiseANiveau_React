const ItemListComponent = ({ items }) => {
  return (
    <ol>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
};

export default ItemListComponent;
