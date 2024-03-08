'use client'
import { calendar, vietlottCalendar } from '@/assets/utils/calendar'
import Layout from '@/components/layout/layout'
import { parseDayofWeek } from '@/components/utils/utils'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import React, { useEffect, useState } from 'react'

import XoSoMienBacInput from "@/components/inputs/xosomienbac/xosomienbacinput"
import XoSoMienInput from "@/components/inputs/xosomien/xosomieninput"
import XoSoVietlottInput from "@/components/inputs/xosovietlott/xosovietlott"
import { templatkqxsmienbac, templatkqxsmiennam, templatekqxsmega, templatekqxsMax3D} from "@/components/inputs/xosomienbac/template"
import  { getDayOfWeekVN, formatDateToDDMMYYYY, parseDateFromDDMMYYYY }  from "@/components/utils/utils"
import { useAppSelector } from '@/components/login/store/lib/hooks'
import { selectDay } from '@/components/login/store/lib/counterSlice'

const channel = [
    "Miền Nam",
    "Miền Trung",
    "Miền Bắc",
    "Vietlott"
]

const Admin = () => {
    const [tab, setTabs] = useState(0)
    const selectedDate= useAppSelector(selectDay)
    const dayNow = parseDateFromDDMMYYYY(selectedDate)
    const dayOfWeek = format(dayNow, 'EEEE', { locale: enUS})
    const dayOfWeekVN = parseDayofWeek(dayOfWeek)
    
    const dataRule = calendar[dayOfWeekVN]
    const vietlottRule = vietlottCalendar[dayOfWeekVN]
    return (
        <Layout login={true}>
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
                            const template = {...Object.freeze(templatkqxsmiennam)};
                            // Object.freeze(template)
                            template["Tinh"] = item.ten
                            template["Vung"] = dataRule.nam.vi
                            template["Thu"] = getDayOfWeekVN(dayNow)
                            template["Ngay"] = formatDateToDDMMYYYY(dayNow)
                            return template
                        }).sort((a, b) => a.Tinh.localeCompare(b.Tinh))} 
                        code="MN"
                        vung="Miền Nam"
                    />
                    :<></>
                }
                {
                    tab === 1 ?
                    <XoSoMienInput ketqua={
                        dataRule.trung.tinh.map((item) => {
                            const template = JSON.parse(JSON.stringify(templatkqxsmiennam));
                            template["Tinh"] = item.ten
                            template["Vung"] = dataRule.trung.vi
                            template["Thu"] = getDayOfWeekVN(dayNow)
                            template["Ngay"] = formatDateToDDMMYYYY(dayNow)
                            return template
                        }).sort((a, b) => a.Tinh.localeCompare(b.Tinh))} 
                        code="MT"
                        vung="Miền Trung"
                    />
                    :<></>
                }
                {
                    tab === 2 ?
                    <div>
                        {
                        dataRule.bac.tinh.map((item, index) => {
                            const template = JSON.parse(JSON.stringify(templatkqxsmienbac));
                            template["Tinh"] = item.ten
                            template["Vung"] = dataRule.bac.vi
                            template["Thu"] = getDayOfWeekVN(dayNow)
                            template["Ngay"] = formatDateToDDMMYYYY(dayNow)
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
                            template["Tinh"] = item.ten.replace("/", '-')
                            template["Vung"] = "Vietlott"
                            template["Thu"] = getDayOfWeekVN(dayNow)
                            template["Ngay"] = formatDateToDDMMYYYY(dayNow)
                            return template
                        })
                    }/>
                    : <></>
                }
            </div>
        </Layout>
    )
}

export default Admin