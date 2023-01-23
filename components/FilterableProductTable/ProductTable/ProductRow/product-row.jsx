export const ProductRow = ({isim,fiyat}) => {
  return (
    <div className="product-row">
        <p>{isim}</p>
        <p>{fiyat}</p>
    </div>
  )
}