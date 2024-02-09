import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-slate-600 p-4 text-white flex ">
        <div className='flex justify-center basis-1/4'>
            <Link to='/'>
                <p className='text-xl font-semibold '>Animation</p>
            </Link>
            
        </div>   
        <ul className='flex basis-3/4 justify-center gap-28 text-xl font-semibold'>  
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Navbar