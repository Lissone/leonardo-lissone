import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

import { SendMessageModalContent } from '@interfaces/content';

import { SendMessageModal } from '@components/shared/SendMessageModal';

interface SendMessageModalContextType {
  readonly toggleSendMessageModalOpen: (isOpen: boolean) => void;
}

interface SendMessageModalProviderProps {
  readonly content: SendMessageModalContent;
  readonly children: ReactNode;
}

// --------------------

const SendMessageModalContext = createContext({} as SendMessageModalContextType);

export function SendMessageModalProvider({ content, children }: SendMessageModalProviderProps) {
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
        content={content}
        handleClose={() => setIsSendMessageModalOpen(false)}
      />
    </SendMessageModalContext.Provider>
  );
}

export const useSendMessageModal = () => useContext(SendMessageModalContext);
