import { Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Navbar as NextraNavbar, ThemeSwitch } from 'nextra-theme-blog'

export async function Navbar() {
  return (
    <NextraNavbar pageMap={await getPageMap()}>
      <Search />
      <ThemeSwitch />
    </NextraNavbar>
  )
}
