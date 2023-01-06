import OcProductList from '../../ordercloud/components/OcProductList';
import OcProductCard from '../../ordercloud/components/OcProductCard';
import Link from 'next/link';
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

const TestComponent = () => {
/**
 * Demonstrates usage of a Text content field within JSS.
 * Text fields are HTML encoded by default.
 */

  const { isReady, options, updateQuery } = useNextRouterMapping(queryMap);

  const handleRenderItem = (p: BuyerProduct) => {
    return (
      <Link href={`/products/${p.ID}`}>
        <a>
          <OcProductCard product={p} />
        </a>
      </Link>
    );
  };

  return (
    <div>
      <OcProductList options={options} renderItem={handleRenderItem} />
    </div>
  );
};

export default TestComponent;
