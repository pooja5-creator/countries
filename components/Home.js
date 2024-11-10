import { useState } from 'react'
import Search from './Search'
import Region from './Region'
import Countries from './Countries'
import { useTheme } from '../hooks/useData'

export default function Home() {
  const [query, setQuery] = useState('')
  const [isDark] = useTheme()
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <Search setQuery={setQuery} />
        <Region setQuery={setQuery} />
      </div>
      <Countries query={query} />
    </main>
  )
}