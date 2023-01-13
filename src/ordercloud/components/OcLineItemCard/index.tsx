import Link from 'next/link';
import { LineItem } from 'ordercloud-javascript-sdk';
import { FormEvent, FunctionComponent, useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import useOcProduct from '../../hooks/useOcProduct';
import { removeLineItem, updateLineItem } from '../../redux/ocCurrentOrder';
import OcQuantityInput from '../OcQuantityInput';
import { TrashIcon, PencilIcon } from '@primer/octicons-react';

interface OcLineItemCardProps {
  lineItem: LineItem;
  editable?: boolean;
}

const OcLineItemCard: FunctionComponent<OcLineItemCardProps> = ({
  noThump,
  lineItem,
  editable,
}) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [quantity, setQuantity] = useState(lineItem.Quantity);

  const product = useOcProduct(lineItem.ProductID);

  const handleRemoveLineItem = useCallback(async () => {
    setDisabled(true);
    await dispatch(removeLineItem(lineItem.ID));
    setDisabled(false);
  }, [dispatch, lineItem]);

  const handleUpdateLineItem = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setDisabled(true);
      await dispatch(updateLineItem({ ...lineItem, Quantity: quantity }));
      setDisabled(false);
    },
    [dispatch, quantity, lineItem]
  );

  const isUpdateDisabled = useMemo(() => {
    return disabled || lineItem.Quantity === quantity;
  }, [lineItem, disabled, quantity]);
  // console.log(lineItem);

  return (
    <div className="card-body">
      <div className="row">
        {!noThump ? (
          <div className="col-md-3">
            <img className="img-fluid rounded" src={lineItem.Product.xp.Images[0].url} />
          </div>
        ) : null}
        <div className="col">
          <div className="d-flex justify-content-between">
            <h3>{lineItem.Product.Name}</h3>
            {editable ? (
              <div>
                <button
                  aria-label="Remove Line Item"
                  type="button"
                  disabled={disabled}
                  onClick={handleRemoveLineItem}
                  className="btn btn-sm"
                >
                  <TrashIcon size={16} />
                </button>
                <Link
                  href={`/products/product-detail?${lineItem.ProductID}&lineitem=${lineItem.ID}`}
                >
                  <a aria-label="Edit Line Item" className="btn btn-sm">
                    <PencilIcon size={16} />
                  </a>
                </Link>
              </div>
            ) : null}
          </div>
          <p>
            {lineItem.Specs.map((s) => (
              <span key={s.SpecID}>{`${s.Name}: ${s.Value}`}</span>
            ))}
          </p>

          {editable ? (
            <>
              {product && (
                <form onSubmit={handleUpdateLineItem} className="form-inline">
                  <OcQuantityInput
                    controlId={`${lineItem.ID}_quantity`}
                    quantity={quantity}
                    disabled={disabled}
                    onChange={setQuantity}
                    priceSchedule={product.PriceSchedule}
                  />
                  <button
                    type="submit"
                    aria-label="Update Line Item Quantity"
                    disabled={isUpdateDisabled}
                    className="btn btn-primary ml-2 btn-sm"
                  >
                    Update
                  </button>
                </form>
              )}
            </>
          ) : (
            <p>{`Quantity: ${lineItem.Quantity}`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OcLineItemCard;
