import { Link } from 'react-router-dom';

//icons
import cross from '../assets/cross.svg';
import profile from '../assets/profile.png';

//components
import Button from '../button/Button';
import CustomerTable from '../component/customertable/CustomerTable';

//hooks
import { useFetch } from '../hooks/useFetch';

export default function Customers() {
  const { data, error, isPending } = useFetch('https://demo3522726.mockable.io/get_customers')
  console.log('data>>', data)

  return (
    <div>
        <Button pathname='/' text='Add Customer' icon={cross} color='#fff' bgColor='#3AB44A' />
        <CustomerTable customer={data} />
    </div>
  )
}
