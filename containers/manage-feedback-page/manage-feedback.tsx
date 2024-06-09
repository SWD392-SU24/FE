"use client"

import React, { useState } from "react"

import { ListFilterIcon, SearchIcon, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

// Interface for Feedback
interface Feedback {
  id: string
  title: string
  date: string
  time: string
  description: string
  rating: number
}

// Array of Feedback objects
const feedbacks: Feedback[] = [
  {
    id: "1",
    title: "Math Feedback",
    date: "May 15, 2023",
    time: "9:00 AM - 11:00 AM",
    description:
      "This is the final Feedback for the Math course. Make sure to review the material covered in the last 4 weeks.",
    rating: 5.0,
  },
  {
    id: "2",
    title: "English Literature Feedback",
    date: "June 1, 2023",
    time: "2:00 PM - 4:00 PM",
    description:
      "This Feedback will cover the novels and poetry we have studied this semester. Remember to bring your textbook. This Feedback will cover the novels and poetry we have studied this semester. Remember to bring your textbook. This Feedback will cover the novels and poetry we have studied this semester. Remember to bring your textbook",
    rating: 4.0,
  },
  {
    id: "3",
    title: "Biology Feedback",
    date: "March 20, 2023",
    time: "2:00 PM - 4:00 PM",
    description:
      "You performed excellently in the Biology Feedback. Keep up the great work!",
    rating: 3.0,
  },
  {
    id: "4",
    title: "History Feedback",
    date: "February 10, 2023",
    time: "2:00 PM - 4:00 PM",
    description:
      "Your History Feedback result is good, but there is room for improvement. Make sure to review the feedback provided.",
    rating: 2.0,
  },
  {
    id: "5",
    title: "History Feedback",
    date: "February 10, 2023",
    time: "2:00 PM - 4:00 PM",
    description:
      "Your History Feedback result is good, but there is room for improvement. Make sure to review the feedback provided.",
    rating: 1.0,
  },
]

// ManageFeedback component
export default function ManageFeedback() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  const filteredFeedbacks = feedbacks.filter((feedback) => {
    const matchesSearchTerm =
      feedback.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRating =
      selectedRating === null || feedback.rating === selectedRating
    return matchesSearchTerm && matchesRating
  })

  return (
    <div className="flex flex-col">
      <main className="flex-1 p-6">
        <section>
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">
            Feedback Page
          </h3>
          <div className="mb-6 flex items-center justify-between">
            <div className="relative flex-1 md:w-[200px] md:flex-none lg:w-[336px]">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
              <Input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-md border-gray-300 pl-10 focus:border-gray-400 focus:ring-0"
              />
            </div>
            <div className="ml-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-1">
                    <ListFilterIcon className="h-4 w-4" />
                    <span className="hidden sm:inline">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Filter by Rating</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <DropdownMenuItem
                        key={rating}
                        onSelect={() => setSelectedRating(rating)}
                      >
                        <div className="flex items-center">
                          {Array.from({ length: 5 }, (_, index) => (
                            <Star
                              key={index}
                              className={`h-4 w-4 fill-current ${
                                index < rating
                                  ? "text-yellow-500"
                                  : "text-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem onSelect={() => setSelectedRating(null)}>
                      <span>Clear Filter</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredFeedbacks.map((feedback) => (
              <Card key={feedback.id}>
                <CardHeader className="flex justify-between">
                  <div>
                    <CardTitle>{feedback.title}</CardTitle>
                    <div className="text-sm text-gray-500">
                      <span>{feedback.date}</span>
                      <span className="mx-2">|</span>
                      <span>{feedback.time}</span>
                    </div>
                  </div>
                  {/* Render star rating */}
                  <div className="mt-2 flex items-center">
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        className={`h-4 w-4 fill-current ${
                          index < Math.round(feedback.rating)
                            ? "text-yellow-500"
                            : "text-gray-400"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 1l2.84 5.79 6.32.92-4.58 4.46 1.08 6.3L10 15.4l-5.66 2.97 1.08-6.3L.84 7.71l6.32-.92L10 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{feedback.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
