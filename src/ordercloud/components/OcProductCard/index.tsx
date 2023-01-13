import { BuyerProduct } from 'ordercloud-javascript-sdk';
import { FunctionComponent } from 'react';
import Link from 'next/link';
interface OcProductCardProps {
  product: BuyerProduct;
}

const OcProductCard: FunctionComponent<OcProductCardProps> = ({ product }) => {
  return (
    <>
      <img className="card-img-top" src={product.xp.Images[0].url} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">{product.Name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {`${product.xp.Price} ${product.xp.PriceCurrency}`}{' '}
        </h6>
        <p className="card-text">{product.Description}</p>
        <Link href={`/products/product-detail?productid=${product.ID}`}>
          <a className="card-link">View Details</a>
        </Link>
      </div>
    </>
  );
};

export default OcProductCard;
