// app/components/navigation-events.js

'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function NavigationEvents({ onUrlChange }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url) // Log the current URL
    if (onUrlChange) {
      onUrlChange(url); // Call the passed function to notify about URL changes
    }
  }, [pathname, searchParams, onUrlChange])

  return null; // No UI to render
}