import { ProductCategoryRow } from "./ProductCategoryRow/product-category-row";
import { ProductRow } from "./ProductRow/product-row";

export const ProductTable = (props) => {
  const torba = []
  let durum = null;
  props.product.map((product) => {
    if (product.kategori !== durum) {
     torba.push(<ProductCategoryRow  kategori = {product.kategori}/>);
    }

    torba.push(<ProductRow  isim = {product.isim} fiyat = {product.fiyat}/>);
    durum = product.kategori;
    return durum
  })
  return (
    <div className="table-container">
      <div className = "table-header">
        <h2>İsim</h2>
        <h2>Fiyat</h2>
      </div>
      <div className="table-products">
        {torba}
      </div>
    </div>
  );
};
