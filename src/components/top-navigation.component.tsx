'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { TopNavigationService } from '@/services/top-navigation.service';
import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';
import { useEffect } from 'react';
import { resetAppState } from '@/state/app.reducer';

const TopNavigationComponent = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    if(pathname === "/") dispatch(resetAppState());
  }, [pathname]);
  
  const handleBackClick = () => {
    router.back();
  }

  return (
    <header className="top-navigation">
      <button onClick={handleBackClick} className="top-navigation__back-button">
        <img src="/static/arrow-left.svg" alt="back-button" />
      </button>
      <h1 className="top-navigation__title">{TopNavigationService.generatePageTitle(pathname)}</h1>
    </header>
  )
}

export default TopNavigationComponent;
