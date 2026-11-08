import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
import {locale as getLocaleParam} from 'next/root-params';
 
export default getRequestConfig(async ({locale: localeOverride}) => {
  const requested = localeOverride ?? await getLocaleParam();
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default
  };
});
