import { siteConfig } from "@/config/site"
import Link from "@/node_modules/next/link"

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-blue-200">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <ul>
          <li>
            <Link href="/about-us" >About us</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
