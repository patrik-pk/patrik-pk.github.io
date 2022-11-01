import React, { createContext, useState } from 'react'
import languages from '../lang/languages'

interface LangInterface {
  type: 'cs' | 'en'
  dictionary: any
}

interface LangContextInterface {
  lang: LangInterface
  setLang: React.Dispatch<React.SetStateAction<LangInterface>>
}

export const LanguageContext = createContext<LangContextInterface>(
  {} as LangContextInterface
)

const LanguageProvider = ({ children }: any) => {
  const [lang, setLang] = useState<LangInterface>({
    type: 'cs',
    dictionary: languages.cs
  })

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
