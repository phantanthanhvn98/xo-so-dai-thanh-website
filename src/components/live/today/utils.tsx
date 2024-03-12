import { getStatus } from "@/components/utils/utils"

export function getStatusByTime(
    timeStart:Date,
    timeEnd: Date
){
    const now = new Date()
    if(now.getTime() - timeStart.getTime() < 0)
        return getStatus(0)
    else if ( now.getTime() - timeEnd.getTime() > 0)
        return getStatus(2)
    else
        return getStatus(1)
}