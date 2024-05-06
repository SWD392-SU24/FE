"use client"

import { useEffect, useState } from "react"

import { Search } from "lucide-react"
import { toast } from "sonner"

import useDebounce from "@/hooks/use-debounce"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function SearchBar() {
  const [value, setValue] = useState("")
  const debouncedValue = useDebounce(value, 500)
  const [results, setResults] = useState([])

  useEffect(() => {
    // Function to fetch search results from the npm API
    const fetchResults = async () => {
      try {
        const response = await fetch(
          `https://registry.npmjs.org/-/v1/search?text=${debouncedValue}&size=10`
        )
        const data = await response.json()
        setResults(data.objects.map((obj) => obj.package.name)) // Assuming you want to display package names
      } catch (error) {
        console.error("Error fetching search results:", error)
      }
    }

    // Call fetchResults function whenever debouncedValue changes
    if (debouncedValue) {
      fetchResults()
    } else {
      // Clear results if input is empty
      setResults([])
    }
  }, [debouncedValue])

  const handleResultClick = (result: string) => {
    toast.success(result)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && results.length > 0) {
      handleResultClick(results[0]) // Trigger action for the first result
    }
  }

  return (
    <div>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-600" />
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded-md pl-10 focus-visible:ring-slate-100 md:w-[400px]"
          placeholder="Search for a course..."
        />
        {/* Display search results */}
      </div>
      {results.length > 0 && (
        <Card className="mt-4 w-[calc(30vw-2rem)] space-y-2 p-4">
          {results.map((result) => (
            <div
              key={result}
              className="cursor-pointer rounded-md px-2 py-1 hover:translate-x-2 hover:bg-slate-100"
              onClick={() => handleResultClick(result)}
              role="button"
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              {result}
            </div>
          ))}
        </Card>
      )}
    </div>
  )
}
