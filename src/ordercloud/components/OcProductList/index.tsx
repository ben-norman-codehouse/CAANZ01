import { BuyerProduct } from 'ordercloud-javascript-sdk';
import { FunctionComponent } from 'react';
import useOcProductList from '../../hooks/useOcProductList';
import { OcProductListOptions } from '../../redux/ocProductList';
import OcProductCard from '../OcProductCard';

export interface OcProductListProps {
  options?: OcProductListOptions;
  renderItem?: (product: BuyerProduct) => JSX.Element;
}

const OcProductList: FunctionComponent<OcProductListProps> = ({ options, renderItem }) => {
  const products = useOcProductList(options);

  return (
    <div className="card-columns">
      {products &&
        products.map((p) => (
          <div className="card" key={p.ID}>
            {renderItem ? renderItem(p) : <OcProductCard product={p} />}
          </div>
        ))}
    </div>
  );
};

export default OcProductList;
