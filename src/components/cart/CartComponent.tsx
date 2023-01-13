/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';
import { FunctionComponent } from 'react';

import OcLineItemList from '../../ordercloud/components/OcLineItemList';
import { deleteCurrentOrder } from '../../ordercloud/redux/ocCurrentOrder';
import { useOcDispatch } from '../../ordercloud/redux/ocStore';
import { useOcSelector } from '../../ordercloud/redux/ocStore';

const CartComponent: FunctionComponent = () => {
  const dispatch = useOcDispatch();
  const { lineItemCount } = useOcSelector((s) => ({
    user: s.ocUser.user,
    loading: s.ocAuth.loading,
    isAnonymous: s.ocAuth.isAnonymous,
    lineItemCount: s.ocCurrentOrder.order ? s.ocCurrentOrder.order.LineItemCount : 0,
  }));

  return (
    <div>
      <OcLineItemList emptyMessage="Your shopping cart is empty" editable />
      {lineItemCount >= 1 ? (
        <>
          <Link href="/checkout">
            <a className="btn btn-success">Checkout</a>
          </Link>
          <button
            type="button"
            className="btn btn-danger ml-3"
            onClick={() => dispatch(deleteCurrentOrder())}
          >
            Clear Cart
          </button>
        </>
      ) : null}
    </div>
  );
};

export default CartComponent;
