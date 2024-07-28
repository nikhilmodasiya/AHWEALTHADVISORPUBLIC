"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium mr-">
      <Link
          href="/home"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about-us")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about-us")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          About us
        </Link>
        <Link
          href="/contact-us"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about-us")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Contact us
        </Link>
        <Link
          href="/Our-Services"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/our-services")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Our-Services
        </Link>
      </nav>
    </div>
  )
}
