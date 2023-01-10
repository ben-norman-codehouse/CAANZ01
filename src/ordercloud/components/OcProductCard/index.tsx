import { BuyerProduct } from 'ordercloud-javascript-sdk';
import { FunctionComponent } from 'react';
import Link from 'next/link';
interface OcProductCardProps {
  product: BuyerProduct;
}

const OcProductCard: FunctionComponent<OcProductCardProps> = ({ product }) => {
  return (
    <div className="card-body">
      <h5 className="card-title">{product.Name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p className="card-text">{product.Description}</p>
      <Link href={`/products/product-detail/${product.ID}`}>
        <a className="card-link">View Details</a>
      </Link>
    </div>
  );
};

export default OcProductCard;
