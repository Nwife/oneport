import { useEffect } from 'react';

//icons
import cross from '../assets/cross.svg';

//components
import Button from '../component/button/Button';
import LoadingSpinner from '../component/spinner/LoadingSpinner';
import CustomerTable from '../component/customertable/CustomerTable';

//hooks
// import { useFetch } from '../hooks/useFetch';

//redux
import { fetchCustomers } from '../features/customerSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Customers() {
  const dispatch = useDispatch()
  const customer = useSelector(state => state.customer)

  useEffect(() => {
    dispatch(fetchCustomers())
  }, [dispatch])

  console.log('customer>>', customer)

  return (
    <div>
        <Button pathname='/' text='Add Customer' icon={cross} color='#fff' bgColor='#3AB44A' />
        <div className='mt-10 font-medium text-center text-lightGreen'>{customer.loading && <LoadingSpinner />}</div>
        <div className='mt-10 font-medium text-center text-red-400'>{customer.error && <p>{customer.error}</p>}</div>
        <CustomerTable customer={customer.customers} />
    </div>
  )
}
