import { createContext, useState } from 'react'
import languages from '../lang/languages'

const LanguageContext = createContext({
  currentLanguage: 'cs',
  dictionary: languages.cs
})

// export const LanguageProvider = ({ children }: any) => {
//   return (
//     <LanguageContext.Provider value >
//       {children}
//     </LanguageContext.Provider>
//   )
// }

// export default LanguageContext

export const LanguageProvider = ({ children }: any) => {
  const [currentLanguage, setCurrentLanguage] = useState<'cs' | 'en'>('cs')
  const provider = {
    currentLanguage,
    setCurrentLanguage,
    dictionary: languages[currentLanguage]
  }
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
}
