import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

import { ContentLanguage } from '@interfaces/content';

import { contentLanguages } from '@shared/db';

interface DataContextType {
  readonly data: ContentLanguage;
  readonly toggleDataLanguage: () => void;
}

interface DataProviderProps {
  readonly children: ReactNode;
}

// --------------------

const DataContext = createContext({} as DataContextType);

export function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState(contentLanguages['en-us']);

  const toggleDataLanguage = () => {
    setData((prevState) => (prevState.lang === 'pt-br' ? contentLanguages['en-us'] : contentLanguages['pt-br']));
  };

  const contextValues = useMemo(
    () => ({ data, toggleDataLanguage }),
    [data],
  );

  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
