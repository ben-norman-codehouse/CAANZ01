/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';
import OcLineItemList from '../../ordercloud/components/OcLineItemList';
import { deleteCurrentOrder } from '../../ordercloud/redux/ocCurrentOrder';
import { useOcDispatch } from '../../ordercloud/redux/ocStore';

const CartComponent = () => {
  const dispatch = useOcDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(deleteCurrentOrder())}>
        Clear Cart
      </button>
      <OcLineItemList emptyMessage="Your shopping cart is empty" editable />
      <Link href="/checkout">
        <a>Checkout</a>
      </Link>
    </div>
  );
};

export default CartComponent;
