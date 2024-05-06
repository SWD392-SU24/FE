import { usePathname, useRouter, useSearchParams } from "next/navigation"

import qs from "query-string"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

export default function PostFilter() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const title = searchParams.get("title")

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: "ENV",
        },
      },
      { skipNull: true, skipEmptyString: true }
    )

    router.push(url)
  }

  const onClearFilter = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: undefined,
        },
      },
      { skipNull: true, skipEmptyString: true }
    )

    router.push(url)
  }

  return (
    <div className="flex items-center gap-x-4">
      <Button
        onClick={onClick}
        className={cn("h-8 border-dashed border-gray-400")}
        variant="outline"
        size="sm"
      >
        <div className="truncate">Search: ENV</div>
      </Button>
      {title && (
        <button
          onClick={onClearFilter}
          className={cn(
            "flex items-center justify-center font-semibold text-black/65 hover:text-black"
          )}
          type="button"
        >
          <p className="truncate">Clear Filters</p>
        </button>
      )}
    </div>
  )
}
