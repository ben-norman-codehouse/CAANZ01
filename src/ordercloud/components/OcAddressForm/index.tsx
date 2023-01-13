import { isEqual } from 'lodash';
import { BuyerAddress } from 'ordercloud-javascript-sdk';
import {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { EMPTY_ADDRESS } from '../../redux/ocAddressBook';

interface OcAddressFormProps {
  id: string;
  onSubmit: (address: BuyerAddress) => void;
  onDelete?: (addressId: string) => void;
  address?: BuyerAddress;
}

const OcAddressForm: FunctionComponent<OcAddressFormProps> = ({
  id,
  onSubmit,
  onDelete,
  address,
}) => {
  const [formValues, setFormValues] = useState(address || EMPTY_ADDRESS);

  useEffect(() => {
    setFormValues(address || EMPTY_ADDRESS);
  }, [address]);

  const handleFormSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      onSubmit(formValues);
    },
    [onSubmit, formValues]
  );

  const handleDeleteAddress = useCallback(() => {
    onDelete(address.ID);
  }, [onDelete, address]);

  const handleInputChange = (field: keyof BuyerAddress) => (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((s) => ({ ...s, [field]: e.target.value }));
  };

  const handleDiscardChanges = useCallback(() => {
    setFormValues(address || EMPTY_ADDRESS);
  }, [address]);

  const hasChanges = useMemo(() => {
    return !isEqual(address, formValues);
  }, [address, formValues]);

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="form-group col-4">
          <label htmlFor={`${id}_address_addressName`}>Address Name </label>
          <input
            className="form-control"
            type="text"
            id={`${id}_address_addressName`}
            name="address_addressName"
            placeholder="Enter a name for your address"
            value={formValues.AddressName}
            onChange={handleInputChange('AddressName')}
          />
        </div>
        <div className="form-group col-4">
          <label htmlFor={`${id}_address_companyName`}>Company Name</label>
          <input
            className="form-control"
            type="text"
            id={`${id}_address_companyName`}
            name="address_companyName"
            placeholder="Enter company name"
            value={formValues.CompanyName}
            onChange={handleInputChange('CompanyName')}
          />
        </div>
        <div className="form-group col-4">
          <label htmlFor={`${id}_address_firstName`}>First Name</label>
          <input
            className="form-control"
            type="text"
            id={`${id}_address_firstName`}
            name="address_firstName"
            placeholder="Enter first name"
            value={formValues.FirstName}
            onChange={handleInputChange('FirstName')}
            required
          />
        </div>
        <div className="form-group col-4">
          <label htmlFor={`${id}_address_lastName`}>Last Name</label>
          <input
            className="form-control"
            type="text"
            id={`${id}_address_lastName`}
            name="address_lastName"
            placeholder="Enter last name"
            value={formValues.LastName}
            onChange={handleInputChange('LastName')}
            required
          />
        </div>
        <div className="form-group col-4">
          <label htmlFor={`${id}_address_street1`}>Street Address</label>
          <input
            className="form-control"
            type="text"
            id={`${id}_address_street1`}
            name="address_street1"
            placeholder="Enter street address"
            value={formValues.Street1}
            onChange={handleInputChange('Street1')}
            required
          />
        </div>
        <div className="form-group col-4">
          <label htmlFor={`${id}_address_street2`}>Address Line 2</label>
          <input
            className="form-control"
            type="text"
            id={`${id}_address_street2`}
            name="address_street2"
            placeholder="Floor, suite, apartment #"
            value={formValues.Street2}
            onChange={handleInputChange('Street2')}
          />
        </div>
        <div className="form-group col-4">
          <label htmlFor={`${id}_address_city`}>City</label>
          <input
            className="form-control"
            type="text"
            id={`${id}_address_city`}
            name="address_city"
            placeholder="Enter city"
            value={formValues.City}
            onChange={handleInputChange('City')}
            required
          />
        </div>
        <div className="form-group col-4">
          <label htmlFor={`${id}_address_state`}>State </label>
          <input
            className="form-control"
            type="text"
            id={`${id}_address_state`}
            name="address_state"
            placeholder="Enter state"
            value={formValues.State}
            onChange={handleInputChange('State')}
            required
          />
        </div>
        <div className="form-group col-4">
          <label htmlFor={`${id}_address_zip`}>Zip</label>
          <input
            className="form-control"
            type="text"
            id={`${id}_address_zip`}
            name="address_zip"
            placeholder="Enter zip code"
            value={formValues.Zip}
            onChange={handleInputChange('Zip')}
            required
          />
        </div>
        <div className="form-group col-4">
          <label htmlFor={`${id}_address_country`}>Country</label>
          <input
            className="form-control"
            type="text"
            id={`${id}_address_country`}
            name="address_country"
            placeholder="Enter two-digit country code"
            value={formValues.Country}
            onChange={handleInputChange('Country')}
            required
          />
        </div>
        <div className="form-group col-8">
          <label htmlFor={`${id}_address_phone`}>Phone Number </label>
          <input
            className="form-control"
            type="text"
            id={`${id}_address_phone`}
            name="address_phone"
            placeholder="Enter 10 digit phone number"
            value={formValues.Phone}
            onChange={handleInputChange('Phone')}
          />
        </div>
      </div>
      <div className="form-group mt-4 text-right">
        <button
          type="button"
          className="btn btn-sm btn-outline-danger mr-2"
          onClick={handleDeleteAddress}
          disabled={hasChanges || !address.ID}
        >
          Delete Address
        </button>
        <button
          type="button"
          className="btn btn-sm btn-outline-info mr-2"
          onClick={handleDiscardChanges}
          disabled={!hasChanges}
        >
          Discard Changes
        </button>
        <button type="submit" className="btn btn-primary btn-sm" disabled={!hasChanges}>
          {address && address.ID ? 'Update Address' : 'Save Address'}
        </button>
      </div>
    </form>
  );
};

export default OcAddressForm;
