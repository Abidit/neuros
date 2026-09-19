import type { ClassValue } from 'clsx';
import { cn as composeClasses } from './cn';

// Preserve the existing utility import path for consumers.
export const cn = (...inputs: ClassValue[]): string => composeClasses(...inputs);
