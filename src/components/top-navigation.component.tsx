'use client'

import { useRouter } from 'next/navigation'

export default function TopNavigationComponent() {
  const router = useRouter();
  
  const handleBackClick = () => {
    router.back();
  }

  return (
    <header className="top-navigation">
      <button onClick={handleBackClick} className="top-navigation__back-button">
        <img src="/assets/arrow-left.svg" alt="back-button" />
      </button>
      <h1 className="top-navigation__title">Latest Movies</h1>
    </header>
  )
}
