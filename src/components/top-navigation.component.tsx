'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useAppDispatch} from '@/state/typescript-hooks';
import { resetAppState } from '@/state/app.reducer';
import { TopNavigationService } from '@/services/top-navigation.service';

export default function TopNavigationComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  
  const handleBackClick = () => {
    router.back();
    if(pathname == "/select-seat") dispatch(resetAppState());
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
