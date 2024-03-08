'use client'
import React from 'react'
import { useEffect } from 'react';
// import 'moment-lunar'
// import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import "./calendar.css"
import { formatDDMMYYY } from '@/components/utils/utils'
import {
    selectedDate
  } from "@/components/login/store/lib/counterSlice";
  
import { useAppDispatch } from "@/components/login/store/lib/hooks";


const Calendar = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        
        const day = document.querySelector(".calendar-dates");
        
        const currdate = document
            .querySelector(".calendar-current-date");
        
        const prenexIcons = document
            .querySelectorAll(".calendar-navigation span");
        
        // Array of month names
        const months = [
            "Tháng 1",
            "Tháng 2",
            "Tháng 3",
            "Tháng 4",
            "Tháng 5",
            "Tháng 6",
            "Tháng 7",
            "Tháng 8",
            "Tháng 9",
            "Tháng 10",
            "Tháng 11",
            "Tháng 12"
        ];
        
        // Function to generate the calendar
        const manipulate = () => {
        
            // Get the first day of the month
            let dayone = new Date(year, month, 1).getDay();
        
            // Get the last date of the month
            let lastdate = new Date(year, month + 1, 0).getDate();
        
            // Get the day of the last date of the month
            let dayend = new Date(year, month, lastdate).getDay();
        
            // Get the last date of the previous month
            let monthlastdate = new Date(year, month, 0).getDate();
        
            // Variable to store the generated calendar HTML
            let lit = "";
        
            // Loop to add the last dates of the previous month
            for (let i = dayone; i > 0; i--) {
                const day = moment(new Date(year, month-1, monthlastdate - i + 1)).lunar()
                lit +=
                    `<li class="inactive ${monthlastdate - i + 1}-${month}-${year}">
                        ${monthlastdate - i + 1}
                        <div class="lunar-date ${monthlastdate - i + 1}-${month}-${year}">
                            ${day.toDate().getDate() === 1 ? day.format('DD/MM') : day.format('DD') }
                        </div
                    </li>`;
            }
        
            // Loop to add the dates of the current month
            for (let i = 1; i <= lastdate; i++) {
                const day = moment(new Date(year, month, i)).lunar()
                // Check if the current date is today
                let isToday = i === date.getDate()
                    && month === new Date().getMonth()
                    && year === new Date().getFullYear()
                    ? "active"
                    : "";
                lit += `<li class="${isToday} ${i}-${month+1}-${year}">
                    ${i}
                    <div class="lunar-date ${i}-${month+1}-${year}">
                        ${day.toDate().getDate() === 1 ? day.format('DD/MM') : day.format('DD') }
                    </div
                </li>`;
            }
        
            // Loop to add the first dates of the next month
            for (let i = dayend; i < 6; i++) {
                const day = moment(new Date(year, month+1, i - dayend + 1)).lunar()
                lit += `<li class="inactive ${i - dayend + 1}-${month+2}-${year}">
                    ${i - dayend + 1}
                    <div class="lunar-date ${i - dayend + 1}-${month+2}-${year}">
                        ${day.toDate().getDate() === 1 ? day.format('DD/MM') : day.format('DD') }
                    </div
                </li>`
            }
        
            // Update the text of the current date element 
            // with the formatted current month and year
            currdate.innerText = `${months[month]} ${year}`;
            day.addEventListener('click', function(event){
                dispatch(selectedDate({day: formatDDMMYYY(event.target.className.split(' ')[1])}))
            })
        
            // update the HTML of the dates element 
            // with the generated calendar
            day.innerHTML = lit;
            return {lit: lit, currdate: `${months[month]} ${year}`}
        }
        
        manipulate();
        
        // Attach a click event listener to each icon
        prenexIcons.forEach(icon => {
        
            // When an icon is clicked
            icon.addEventListener("click", () => {
        
                // Check if the icon is "calendar-prev"
                // or "calendar-next"
                month = icon.id === "calendar-prev" ? month - 1 : month + 1;
        
                // Check if the month is out of range
                if (month < 0 || month > 11) {
        
                    // Set the date to the first day of the 
                    // month with the new year
                    date = new Date(year, month, new Date().getDate());
        
                    // Set the year to the new year
                    year = date.getFullYear();
        
                    // Set the month to the new month
                    month = date.getMonth();
                }
        
                else {
        
                    // Set the date to the current date
                    date = new Date();
                }
        
                // Call the manipulate function to 
                // update the calendar display
                manipulate();
            });
        });
    }, [])

    return (
        <div className="calendar-container">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script> 
            <script src="https://unpkg.com/moment-lunar@0.0.4/moment-lunar.min.js"></script> 
            <header className="calendar-header">
                <p className="calendar-current-date" />
                <div className="calendar-navigation">
                    <span id="calendar-prev"
                        className="material-symbols-rounded">
                        <FontAwesomeIcon icon={faChevronCircleLeft} />
                    </span>
                    <span id="calendar-next"
                        className="material-symbols-rounded">
                        <FontAwesomeIcon icon={faChevronCircleRight} />
                    </span>
                </div>
            </header>
            <div className="calendar-body">
                <ul className="calendar-weekdays">
                    <li>CN</li>
                    <li>Hai</li>
                    <li>Ba</li>
                    <li>Tư</li>
                    <li>Năm</li>
                    <li>Sáu</li>
                    <li>Bảy</li>
                </ul>
                <ul className="calendar-dates"></ul>
            </div>
        </div>
    )
}

export default Calendar;