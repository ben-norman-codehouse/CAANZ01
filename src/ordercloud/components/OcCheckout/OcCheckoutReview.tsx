import { FunctionComponent, useCallback } from 'react';
import { OcCheckoutStepProps } from '.';
import { submitOrder } from '../../redux/ocCurrentOrder';
import { useOcDispatch } from '../../redux/ocStore';
import OcLineItemList from '../OcLineItemList';
import OcCheckoutSummary from './OcCheckoutSummary';

interface OcCheckoutReviewProps extends OcCheckoutStepProps {
  onOrderSubmitted: (orderId: string) => void;
}

const OcCheckoutReview: FunctionComponent<OcCheckoutReviewProps> = ({
  onPrev,
  onOrderSubmitted,
}) => {
  const dispatch = useOcDispatch();
  const handleSubmitOrder = useCallback(async () => {
    await dispatch(submitOrder(onOrderSubmitted));
  }, [dispatch, onOrderSubmitted]);

  return (
    <div className="col-8">
      <h2>Review Order</h2>
      <OcLineItemList />
      <div className="border rounded p-3 mb-3 bg-light">
        <OcCheckoutSummary />
      </div>
      <button className="btn btn-outline-info mr-2" type="button" onClick={onPrev}>
        Edit Payment
      </button>
      <button className="btn btn-primary" type="button" onClick={handleSubmitOrder}>
        Submit Order
      </button>
    </div>
  );
};

export default OcCheckoutReview;
