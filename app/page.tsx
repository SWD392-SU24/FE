import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Shell } from "@/components/ui/shell"

import SearchBar from "@/components/search-bar"

export default function Home() {
  return (
    <div>
      <Shell>
        <h1 className="text-3xl font-bold">Public route</h1>
        <div>
          <Button>
            <Link href="/posts">Post Page</Link>
          </Button>
        </div>
        <SearchBar />
      </Shell>
    </div>
  )
}
