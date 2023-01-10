/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import OcProductList from '../../ordercloud/components/OcProductList';
import OcProductCard from '../../ordercloud/components/OcProductCard';
import { BuyerProduct } from 'ordercloud-javascript-sdk';
import useNextRouterMapping, { NextQueryMap } from '../../ordercloud/hooks/useNextRouterMapping';

const queryMap: NextQueryMap = {
  search: 's',
  page: 'p',
  pageSize: 'ps',
  searchOn: 'so',
  sortBy: 'o',
  'xp.size': 'size',
  'xp.color': 'color',
  'xp.test_boolean': 'bool',
  'xp.test_number': 'num',
};

const ProductListComponent = () => {
  /**
   * Demonstrates usage of a Text content field within JSS.
   * Text fields are HTML encoded by default.
   */

  const { options } = useNextRouterMapping(queryMap);

  const handleRenderItem = (p: BuyerProduct) => {
    return <OcProductCard product={p} />;
  };

  return <OcProductList options={options} renderItem={handleRenderItem} />;
};

export default ProductListComponent;
