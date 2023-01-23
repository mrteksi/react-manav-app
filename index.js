import React from "react";
import ReactDOM from "react-dom/client";
import { SearchBar } from "./components/FilterableProductTable/SearchBar/search-bar";
import { ProductTable } from "./components/FilterableProductTable/ProductTable/product-table";
import "./index.css";
import { useState } from "react";

const product = [
  { kategori: " Meyveler ", fiyat: "15TL", stok: true, isim: "Elma" },
  { kategori: " Meyveler ", fiyat: "45TL", stok: true, isim: "Ejdermeyvesi" },
  { kategori: " Meyveler ", fiyat: "90TL", stok: false, isim: "Çarkifelek" },
  { kategori: " Sebzeler ", fiyat: "30TL", stok: true, isim: "Ispanak" },
  { kategori: " Sebzeler ", fiyat: "50TL", stok: false, isim: "Kabak" },
  { kategori: " Sebzeler ", fiyat: "40TL", stok: true, isim: "Fasulye" },
];

export const Manav = () => {
  const [ürünler, setÜrünler] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const ürünArama = (e) => {
    const stok = e.target.value.toLocaleLowerCase();
    setÜrünler(stok);
  };
  const kontrol = () => {
    if(checkbox === false){
      setCheckbox(true)
    }  
    else{
      setCheckbox(false)
    }
  }
  console.log(checkbox);
  let stoktaOlan;
  const stoklanmisÜrünler = product.filter((product) =>
    product.isim.toLocaleLowerCase().includes(ürünler)
  );
  if (checkbox === true) {
  stoktaOlan = stoklanmisÜrünler.filter((product) => product.stok === true);
  }
  else{
    stoktaOlan = stoklanmisÜrünler
  }
  console.log(ürünler);
  return (
    <>
      <div className="container">
        <SearchBar onChangeHandler={ürünArama} checked={kontrol} />
        <ProductTable product={stoktaOlan} />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Manav />);
