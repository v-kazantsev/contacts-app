import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@/store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
