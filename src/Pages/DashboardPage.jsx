import React, { useState, useEffect } from 'react';
import MainLay from '../MainLayout';
import BoxCompon from '../Components/BoxComp-3';
import Chart from '../Components/GraphComp';
import ScheduleCompo from '../Components/ScheduleComp';
import Schedule from '../Objects/ScheduledServices';
const Dashboard = () => {

    const [schedule, setSchedule] = useState(Schedule);

    useEffect(() => {
        setSchedule(Schedule)
    }, [])
    return (
        <MainLay heading='Dashboard'>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[60%_40%] mx-5 mt-5 gap-2 w-[143%] md:w-[142%] lg:w-[95%]">
                <div className='flex flex-col gap-4'>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className="border-2 border-graphBorder">
                            <BoxCompon
                                src='paid.png'
                                alt='paid.png'
                                imgStyle='p-1 w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]'
                                title='Today Revenue'
                                revenue='$128.7K'
                                growth='↑ 20.25%'
                            />
                        </div>
                        <div className="border-2 border-graphBorder">
                            <BoxCompon
                                src='service.png'
                                alt='service.png'
                                imgStyle='p-1 w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]'
                                title=' Weekly Revenue'
                                revenue='$128.7K'
                                growth='↑ 20.25%'
                            />
                        </div>
                        <div className="border-2 border-graphBorder">
                            <BoxCompon
                                src='service.png'
                                alt='service.png'
                                imgStyle='p-1 w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]'
                                title='Monthly Revenue'
                                revenue='$128.7K'
                                growth='↑ 20.25%'
                            />
                        </div>
                    </div>

                    <div className=" h-[110%]  pr-10 col-start-1 col-end-4 row-start-2 row-end-5 p-3 border-2 border-graphBorder">
                        <BoxCompon
                            src='paid.png'
                            alt='paid.png'
                            imgStyle='p-1 w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] '
                            title='Today Revenue'
                            revenue='$128.7K'
                        />
                        <Chart />
                    </div>
                </div>
                <div>
                    <div className=" w-[100%] col-start-4 row-start-1  row-end-5 border-2 border-graphBorder ">
                        <h1 className=' font-heading font-medium text-sm md:text-base lg:text-base pl-3 pt-2'>Today's Schedule Services </h1>
                        <div className='grid grid-cols-1 h-[470px] overflow-y-auto pl-2 hide-scrollbar'>
                            {Schedule.length > 0 ? (
                                schedule.map((item, index) => (
                                    <ScheduleCompo
                                        key={index}
                                        src={item.src}
                                        alt={item.alt}
                                        orderNo={item.orderNO}
                                        imageStyle='p-1 font-heading'
                                        Address={item.Address}
                                        place={item.place}
                                        Time={item.Time}
                                    />
                                ))
                            ) : (
                                <div className='flex justify-center item-center'>
                                    <img 
                                        src='Empty.png'
                                        alt='No Scheduled Services'
                                        className=''
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MainLay>
    );
};

export default Dashboard;
