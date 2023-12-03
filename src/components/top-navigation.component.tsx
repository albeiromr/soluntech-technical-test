'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { TopNavigationService } from '@/services/top-navigation.service';
import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';
import { useEffect } from 'react';
import { resetAppState } from '@/state/app.reducer';

export default function TopNavigationComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(pathname === "/") dispatch(resetAppState());
  }, [pathname]);
  
  const handleBackClick = () => {
    router.back();
  }

  return (
    <header className="top-navigation">
      <button onClick={handleBackClick} className="top-navigation__back-button">
        <img src="/assets/arrow-left.svg" alt="back-button" />
      </button>
      <h1 className="top-navigation__title">{TopNavigationService.generatePageTitle(pathname)}</h1>
    </header>
  )
}
