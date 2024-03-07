'use client'
import { calendar, vietlottCalendar } from '@/assets/utils/calendar'
import Layout from '@/components/layout/layout'
import { parseDayofWeek } from '@/components/utils/utils'
import { format } from 'date-fns'
import { enUS, ta } from 'date-fns/locale'
import React, { useState } from 'react'
import { Provider } from "react-redux";
import { store } from '@/components/login/store'

import XoSoMienBacInput from "@/components/inputs/xosomienbac/xosomienbacinput"
import XoSoMienInput from "@/components/inputs/xosomien/xosomieninput"
import XoSoVietlottInput from "@/components/inputs/xosovietlott/xosovietlott"
import { templatkqxsmienbac, templatkqxsmiennam, templatekqxsmega, templatekqxsMax3D} from "@/components/inputs/xosomienbac/template"
import  { getDayOfWeekVN, formatDateToDDMMYYYY}  from "@/components/utils/utils"
import { useSelector } from 'react-redux'

const channel = [
    "Miền Nam",
    "Miền Trung",
    "Miền Bắc",
    "Vietlott"
]

const Admin = () => {
    const [tab, setTabs] = useState(0)
    const dayOfWeek = format(new Date(), 'EEEE', { locale: enUS})
    const dayOfWeekVN = parseDayofWeek(dayOfWeek)
    const dataRule = calendar[dayOfWeekVN]
    const vietlottRule = vietlottCalendar[dayOfWeekVN]
    const user = useSelector(state => state)
    console.log(user)
    return (
            <Layout login={true}>
                <Provider store={store} >
                    <div className='flex flex-col w-full gap-4 max-[768px]:w-[calc(100%)] min-[1440px]:w-[calc(792px-5rem)]'>
                        <div className='flex w-full justify-between text-[#fff] bg-[#fff]'>
                            {
                                channel.map((item, index) => {
                                    return (
                                        <div key={index} className='flex items-center justify-center pt-2 pb-2 pl-4 pr-4 cursor-pointer' style={tab === index ? {background: "#ec222c"} : {color: "#000"}} onClick={() => setTabs(index)}>
                                            {item}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {
                            tab === 0 ?
                            <XoSoMienInput ketqua={
                                dataRule.nam.tinh.map((item) => {
                                    const template = {...templatkqxsmiennam}
                                    template["Tinh"] = item.ten
                                    template["Vung"] = dataRule.nam.vi
                                    template["Thu"] = getDayOfWeekVN(new Date())
                                    template["Ngay"] = formatDateToDDMMYYYY(new Date())
                                    return template
                                })} 
                            />
                            :<></>
                        }
                        {
                            tab === 1 ?
                            <XoSoMienInput ketqua={
                                dataRule.trung.tinh.map((item) => {
                                    const template = {...templatkqxsmiennam}
                                    template["Tinh"] = item.ten
                                    template["Vung"] = dataRule.nam.vi
                                    template["Thu"] = getDayOfWeekVN(new Date())
                                    template["Ngay"] = formatDateToDDMMYYYY(new Date())
                                    return template
                                })} 
                            />
                            :<></>
                        }
                        {
                            tab === 2 ?
                            <div>
                                {
                                dataRule.bac.tinh.map((item, index) => {
                                    const template = {...templatkqxsmienbac}
                                    template["Tinh"] = item.ten
                                    template["Vung"] = dataRule.bac.vi
                                    template["Thu"] = getDayOfWeekVN(new Date())
                                    template["Ngay"] = formatDateToDDMMYYYY(new Date())
                                    return <XoSoMienBacInput ketqua={template} key={index}/>
                                })}
                            </div>
                            :<></>
                        }
                        {
                            tab === 3 ?
                            <XoSoVietlottInput ketqua={
                                vietlottRule.vietlott.tinh.map((item: any) => {
                                    const template  =  (item.ten === "Max 3D") ? {...templatekqxsMax3D} : {...templatekqxsmega}
                                    template["Tinh"] = item.ten
                                    template["Vung"] = "Vietlott"
                                    template["Thu"] = getDayOfWeekVN(new Date())
                                    template["Ngay"] = formatDateToDDMMYYYY(new Date())
                                    return template
                                })
                            }/>
                            : <></>
                        }
                    </div>
                </Provider>
            </Layout>
    )
}

export default Admin