import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mx-6 flex items-center space-x-2 font-semibold">
            JRA競馬場ガイド
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/#racecourses" className="transition-colors hover:text-foreground/80">
              競馬場一覧
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}