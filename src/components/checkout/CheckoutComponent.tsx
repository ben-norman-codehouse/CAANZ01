/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import OcCheckout from '../../ordercloud/components/OcCheckout';
import OcCheckoutSummary from '../../ordercloud/components/OcCheckout/OcCheckoutSummary';
import OcLineItemList from '../../ordercloud/components/OcLineItemList';
import { useOcSelector } from '../../ordercloud/redux/ocStore';

const CheckoutComponent = () => {
  const { push } = useRouter();
  const { order, initialized } = useOcSelector((s) => s.ocCurrentOrder);

  useEffect(() => {
    if (!initialized || !order || (order && !order.LineItemCount)) {
      push('/cart');
    }
  }, [order, initialized, push]);

  return initialized ? (
    <div className="row">
      <OcCheckout onSubmitted={(orderId: string) => push(`/confirmation/${orderId}`)} />
      <div className="col-4">
        <div className="rounded bg-light p-3 mt-3">
          <OcLineItemList noThump />
          <div className="rounded bg-secondary text-white p-3 mt-3">
            <OcCheckoutSummary />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default CheckoutComponent;
