import { useLanguage } from "@/context/LanguageContext";
import { messages } from "@/messages";

export function useMessages() {
  const { language } = useLanguage();

  return messages[language];
}