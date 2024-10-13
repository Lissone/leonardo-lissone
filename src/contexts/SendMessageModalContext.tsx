import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

import { SendMessageModal } from '@components/shared/SendMessageModal';

interface SendMessageModalContextType {
  readonly toggleSendMessageModalOpen: (isOpen: boolean) => void;
}

interface SendMessageModalProviderProps {
  readonly children: ReactNode;
}

// --------------------

const SendMessageModalContext = createContext({} as SendMessageModalContextType);

export function SendMessageModalProvider({ children }: SendMessageModalProviderProps) {
  const [isSendMessageModalOpen, setIsSendMessageModalOpen] = useState(false);

  const contextValues = useMemo(
    () => ({ toggleSendMessageModalOpen: setIsSendMessageModalOpen }),
    [],
  );

  return (
    <SendMessageModalContext.Provider value={contextValues}>
      {children}

      <SendMessageModal
        isOpen={isSendMessageModalOpen}
        handleClose={() => setIsSendMessageModalOpen(false)}
      />
    </SendMessageModalContext.Provider>
  );
}

export const useSendMessageModal = () => useContext(SendMessageModalContext);
