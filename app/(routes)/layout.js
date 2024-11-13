import Menu from '@/components/Menu';

export default function HomeLayout({ children }) {
 return (
  <div className="relative w-full">
   {children}
   <div className='flex justify-center pr-4'>
    <Menu />
   </div>
  </div>
 );
}
