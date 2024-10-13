import { ReactNode } from 'react';

import { DataProvider } from './DataContext';
import { SendMessageModalProvider } from './SendMessageModalContext';

interface ProvidersProps {
  readonly children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <DataProvider>
      <SendMessageModalProvider>
        {children}
      </SendMessageModalProvider>
    </DataProvider>
  );
}
