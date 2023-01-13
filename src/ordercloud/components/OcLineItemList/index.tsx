import { FunctionComponent } from 'react';
import useOcCurrentOrder from '../../hooks/useOcCurrentOrder';
import OcLineItemCard from '../OcLineItemCard';

interface OcLineItemListProps {
  emptyMessage?: string;
  editable?: boolean;
}

const OcLineItemList: FunctionComponent<OcLineItemListProps> = ({ noThump,emptyMessage, editable }) => {
  const { lineItems } = useOcCurrentOrder();

  return lineItems && lineItems.length ? (
    <div>
      {lineItems.map((li) => (
        <div className="card mb-3" key={li.ID}>
          <OcLineItemCard noThump={noThump} lineItem={li} editable={editable} />
        </div>
      ))}
    </div>
  ) : (
    <h3 className="text-center py-5">{emptyMessage}</h3>
  );
};

export default OcLineItemList;
