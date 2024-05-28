import ItemListComponent from "../Components/ItemListComponent";

const ItemList = () => {
  const items = ["John", "Fitz", "Gerald", "Ken", "Eddy"];

  return <ItemListComponent items={items} />;
};

export default ItemList;
