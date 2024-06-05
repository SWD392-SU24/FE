import TitleSection from "@/components/title-section"

import ScheduleTable from "./schedule"

export default function Calendar() {
  const today = new Date()
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const getDateOfCurrentWeek = (dayIndex: number): string => {
    const firstDayOfWeek = today.getDate() - today.getDay() + dayIndex
    const date = new Date(today.setDate(firstDayOfWeek))
    return date.toLocaleDateString()
  }

  const schedule = [
    {
      id: "1",
      time: "09:00AM",
      slots: [
        {
          id: "1-1",
          day: 1,
          name: "Calvin Carlo",
          specialty: "Eye Care",
          duration: "09:00AM - 10:00AM",
          image: "/assets/user-3.png",
        },
        null,
        null,
        null,
        {
          id: "1-2",
          day: 5,
          name: "Alia Reddy",
          specialty: "Psychotherapy",
          duration: "09:00AM - 01:00PM",
          image: "/assets/user-3.png",
        },
        {
          id: "1-3",
          day: 6,
          name: "Toni Kovar",
          specialty: "Orthopedic",
          duration: "09:00AM - 10:00AM",
          image: "/assets/user-3.png",
        },
        null,
      ],
    },
    {
      id: "2",
      time: "11:00AM",
      slots: [
        null,
        {
          id: "2-1",
          day: 2,
          name: "Cristino Murphy",
          specialty: "Gynecology",
          duration: "11:00AM - 04:00PM",
          image: "/assets/user-3.png",
        },
        null,
        {
          id: "2-2",
          day: 4,
          name: "Jennifer Ballance",
          specialty: "Cardiology",
          duration: "11:00AM - 12:00PM",
          image: "/assets/user-3.png",
        },
        {
          id: "2-3",
          day: 5,
          name: "Jennifer Ballance",
          specialty: "Cardiology",
          duration: "11:00AM - 12:00PM",
          image: "/assets/user-3.png",
        },
        null,
        null,
      ],
    },
    {
      id: "3",
      time: "02:00PM",
      slots: [
        null,
        {
          id: "3-1",
          day: 2,
          name: "Tara Arrington",
          specialty: "Neurology",
          duration: "02:00PM - 04:00PM",
          image: "/assets/user-3.png",
        },
        null,
        null,
        null,
        null,
        null,
      ],
    },
    {
      id: "4",
      time: "04:00PM",
      slots: [
        null,
        null,
        {
          id: "4-1",
          day: 3,
          name: "Tara Arrington",
          specialty: "Neurology",
          duration: "04:00PM - 05:00PM",
          image: "/assets/user-3.png",
        },
        {
          id: "4-2",
          day: 4,
          name: "Tara Arrington",
          specialty: "Neurology",
          duration: "04:00PM - 05:00PM",
          image: "/assets/user-3.png",
        },
        null,
        null,
        {
          id: "4-3",
          day: 7,
          name: "Tara Arrington",
          specialty: "Neurology",
          duration: "04:30PM - 06:00PM",
          image: "/assets/user-3.png",
        },
      ],
    },
    {
      id: "5",
      time: "06:00PM",
      slots: [
        null,
        null,
        null,
        {
          id: "5-1",
          day: 4,
          name: "Jennifer Ballance",
          specialty: "Cardiology",
          duration: "06:00PM - 07:00PM",
          image: "/assets/user-3.png",
        },
        {
          id: "5-2",
          day: 5,
          name: "Alia Reddy",
          specialty: "Psychotherapy",
          duration: "06:00PM - 07:00PM",
          image: "/assets/user-3.png",
        },
        null,
        null,
      ],
    },
    {
      id: "6",
      time: "09:00PM",
      slots: [
        null,
        {
          id: "6-1",
          day: 2,
          name: "Toni Kovar",
          specialty: "Orthopedic",
          duration: "09:00PM - 10:00PM",
          image: "/assets/user-3.png",
        },
        null,
        {
          id: "6-2",
          day: 4,
          name: "Toni Kovar",
          specialty: "Orthopedic",
          duration: "09:00PM - 10:00PM",
          image: "/assets/user-3.png",
        },
        null,
        null,
        null,
      ],
    },
  ]

  return (
    <section>
      <div className="mb-4 mt-4">
        <TitleSection
          label="Time Table"
          title="Dentist Schedule"
          description="Great doctor if you need your family member to get effective
            immediate assistance, emergency treatment, or a simple consultation."
        />
      </div>
      <ScheduleTable
        schedule={schedule}
        daysOfWeek={daysOfWeek}
        getDateOfCurrentWeek={getDateOfCurrentWeek}
      />
    </section>
  )
}
