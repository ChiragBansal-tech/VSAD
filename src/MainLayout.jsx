import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import MenuBox from './Components/MenuBoxComp';

const MainLay = ({children, heading}) => {
    const [activeMenu, setActiveMenu] = useState('');
    const [menuOpen , setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleMenuClick = (title) => {
        setActiveMenu(title);
    }

    const [userDetails, setUserDetails] = useState({
        firstname: ''
    });

    useEffect(() => {
        const storedUserDetails = localStorage.getItem('userDetails');
        
        if (storedUserDetails) {
            try {
                setUserDetails(JSON.parse(storedUserDetails));
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        }
    }, []);
    

    const { first_name } = userDetails;

    const handleClick = () => {
        navigate('/userdetail')
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return(
        <div className='flex'>
            {menuOpen && (
                <div 
                    className='fixed inset-0 bg-gray-800 bg-opacity-70 z-50 md:hidden' 
                    onClick={() => setMenuOpen(false)}
                />
            )}
            
            <div className={` border-r-2  fixed md:relative lg:relative inset-0 z-50 w-[70%] md:w-[25%] lg:w-[25%] h-full py-5 bg-white transform transition-transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <img 
                    src='logo.png'
                    className=' w-10 h-50 md:w-20 md:h-10 lg:w-20 lg:h-10 ml-[2rem] md:ml-[3rem] lg:ml-[4rem] mb-3'
                />
                <div className='flex-col w-[8rem] md:w-[12rem] lg:w-[14.5rem] grid grid-col-1 gap-10 ml-5'>
                    <h2 className='font-heading text-lg self-left'>Menu</h2>
                    <Link to='/dashboard'>
                        <MenuBox 
                            title='Dashboard'
                            src='grid_view.png'
                            alt='Dashboard.png'
                            ImgStyle='w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5' 
                            className={` ${location.pathname === '/dashboard' ? 'text-Metal70 bg-Metal10 border-2 border-Metal70 rounded p-2': 'p-2'}`}
                            onClick={() => handleMenuClick('Dashboard')}
                        />
                    </Link>
                    <Link to='/Servicepage'>
                        <MenuBox 
                            title='Services'
                            src='design_services.png'
                            alt='Services.png'
                            ImgStyle='w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5' 
                            className={`${location.pathname === '/Servicepage' ? 'text-Metal70 bg-Metal10 border-2 border-Metal70 rounded p-2': 'p-2'}`}
                            onClick={() => handleMenuClick('Services')}
                        />
                    </Link>
                    <Link to='Servicerequest'>
                        <MenuBox 
                            title='Service Request'
                            src='service.png'
                            alt='ServiceRequest.png'
                            ImgStyle='w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5' 
                            className={`${location.pathname === '/Servicerequest' ? 'text-Metal70 bg-Metal10 border-2 border-Metal70 rounded p-2': 'p-2'}`}
                            onClick={() => handleMenuClick('Service Request')}
                        />
                    </Link>
                    <Link to='/inbox'>
                        <MenuBox 
                            title='Inbox'
                            src='outgoing_mail.png'
                            alt='Inbox.png'
                            ImgStyle='w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5' 
                            className={`${location.pathname === '/inbox' ? 'text-Metal70 bg-Metal10 border-2 border-Metal70 rounded p-2': 'p-2'}`}
                            onClick={() => handleMenuClick('Inbox')}
                        />
                    </Link>
                    <Link>
                        <MenuBox 
                            title='Repairs'
                            src='construction.png'
                            alt='Repairs.png'
                            ImgStyle='w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5' 
                            onClick={() => handleMenuClick('Repairs')}
                        /> 
                    </Link>
                </div>
            </div>

            <div className='w-full '>
                {menuOpen && (
                    <div
                        className='fixed inset-0  z-40 md:hidden'
                        onClick={() => setMenuOpen(false)}
                    ></div>
                )}
                
                <div className=' flex flex-row h-[60px] md:h-[65px] lg:h-[65px] p-1 pt-4 w-[160%] md:w-[148%] lg:w-full  border-b-2 border-Metal20 '>
                    <div>
                        {!menuOpen && (    
                            <button onClick={toggleMenu} className='text-Metal100  px-3  text-sm  md:hidden'>
                                Menu
                            </button> 
                        )}
                        
                    </div>
                    <div className='flex justify-between w-[160%] md:w-[148%] lg:w-full'>
                        <div>
                            <h1 className='font-heading text-sm md:text-lg lg:text-3xl font-bold text-Metal100'>{heading}</h1>
                        </div>
                        <div>
                            {!menuOpen && (    
                                <img 
                                src='logo.png'
                                className='md:hidden w-10 h-50 md:w-20 md:h-10 lg:w-20 lg:h-10 ml-[2rem] md:ml-[3rem] lg:ml-[4rem] mb-3'
                                /> 
                            )}
                        </div>
                        <div className='flex flex-row justify-between '>
                            <img
                                src='notifications_unread.png'
                                alt='notification.png'
                                className='w-[14px] h-[16px] md:w-[16px] md:h-[18px] lg:w-[18px] lg:h-[21px] decoration-Metal60'
                            />
                            <div className='flex w-[130px] h-[35px] justify-around'>
                                
                                    <img 
                                        src='Rectangle 4130.png'
                                        alt='image.png'
                                        className='w-[15px] h-[15px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px] justify-center'
                                    />
                                
                                    <h4 
                                        className='font-heading text-sm md:text-sm lg:text-base text-Metal70 justify-center'
                                        onClick={handleClick}
                                    >{first_name}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default MainLay;
