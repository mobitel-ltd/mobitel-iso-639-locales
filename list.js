/**
 * Language locales list based on ISO-639. contains:
 * - locale name (can contain country alpha2 code)
 * - language, or language group name (can contain region or country name where language is using)
 * @type {{locale: String, name: String}[]}
 */
const list = [
    {
        locale: 'af',
        name: 'Afrikaans',
    },
    {
        locale: 'af-ZA',
        name: 'Afrikaans (South Africa)',
    },
    {
        locale: 'ar',
        name: 'Arabic',
    },
    {
        locale: 'ar-AE',
        name: 'Arabic (U.A.E.)',
    },
    {
        locale: 'ar-BH',
        name: 'Arabic (Bahrain)',
    },
    {
        locale: 'ar-DZ',
        name: 'Arabic (Algeria)',
    },
    {
        locale: 'ar-EG',
        name: 'Arabic (Egypt)',
    },
    {
        locale: 'ar-IQ',
        name: 'Arabic (Iraq)',
    },
    {
        locale: 'ar-JO',
        name: 'Arabic (Jordan)',
    },
    {
        locale: 'ar-KW',
        name: 'Arabic (Kuwait)',
    },
    {
        locale: 'ar-LB',
        name: 'Arabic (Lebanon)',
    },
    {
        locale: 'ar-LY',
        name: 'Arabic (Libya)',
    },
    {
        locale: 'ar-MA',
        name: 'Arabic (Morocco)',
    },
    {
        locale: 'ar-OM',
        name: 'Arabic (Oman)',
    },
    {
        locale: 'ar-QA',
        name: 'Arabic (Qatar)',
    },
    {
        locale: 'ar-SA',
        name: 'Arabic (Saudi Arabia)',
    },
    {
        locale: 'ar-SY',
        name: 'Arabic (Syria)',
    },
    {
        locale: 'ar-TN',
        name: 'Arabic (Tunisia)',
    },
    {
        locale: 'ar-YE',
        name: 'Arabic (Yemen)',
    },
    {
        locale: 'az',
        name: 'Azeri (Latin)',
    },
    {
        locale: 'az-AZ',
        name: 'Azeri (Latin) (Azerbaijan)',
    },
    {
        locale: 'az-AZ',
        name: 'Azeri (Cyrillic) (Azerbaijan)',
    },
    {
        locale: 'be',
        name: 'Belarusian',
    },
    {
        locale: 'be-BY',
        name: 'Belarusian (Belarus)',
    },
    {
        locale: 'bg',
        name: 'Bulgarian',
    },
    {
        locale: 'bg-BG',
        name: 'Bulgarian (Bulgaria)',
    },
    {
        locale: 'bs-BA',
        name: 'Bosnian (Bosnia and Herzegovina)',
    },
    {
        locale: 'ca',
        name: 'Catalan',
    },
    {
        locale: 'ca-ES',
        name: 'Catalan (Spain)',
    },
    {
        locale: 'cs',
        name: 'Czech',
    },
    {
        locale: 'cs-CZ',
        name: 'Czech (Czech Republic)',
    },
    {
        locale: 'cy',
        name: 'Welsh',
    },
    {
        locale: 'cy-GB',
        name: 'Welsh (United Kingdom)',
    },
    {
        locale: 'da',
        name: 'Danish',
    },
    {
        locale: 'da-DK',
        name: 'Danish (Denmark)',
    },
    {
        locale: 'de',
        name: 'German',
    },
    {
        locale: 'de-AT',
        name: 'German (Austria)',
    },
    {
        locale: 'de-CH',
        name: 'German (Switzerland)',
    },
    {
        locale: 'de-DE',
        name: 'German (Germany)',
    },
    {
        locale: 'de-LI',
        name: 'German (Liechtenstein)',
    },
    {
        locale: 'de-LU',
        name: 'German (Luxembourg)',
    },
    {
        locale: 'dv',
        name: 'Divehi',
    },
    {
        locale: 'dv-MV',
        name: 'Divehi (Maldives)',
    },
    {
        locale: 'el',
        name: 'Greek',
    },
    {
        locale: 'el-GR',
        name: 'Greek (Greece)',
    },
    {
        locale: 'en',
        name: 'English',
    },
    {
        locale: 'en-AU',
        name: 'English (Australia)',
    },
    {
        locale: 'en-BZ',
        name: 'English (Belize)',
    },
    {
        locale: 'en-CA',
        name: 'English (Canada)',
    },
    {
        locale: 'en-CB',
        name: 'English (Caribbean)',
    },
    {
        locale: 'en-GB',
        name: 'English (United Kingdom)',
    },
    {
        locale: 'en-IE',
        name: 'English (Ireland)',
    },
    {
        locale: 'en-JM',
        name: 'English (Jamaica)',
    },
    {
        locale: 'en-NZ',
        name: 'English (New Zealand)',
    },
    {
        locale: 'en-PH',
        name: 'English (Republic of the Philippines)',
    },
    {
        locale: 'en-TT',
        name: 'English (Trinidad and Tobago)',
    },
    {
        locale: 'en-US',
        name: 'English (United States)',
    },
    {
        locale: 'en-ZA',
        name: 'English (South Africa)',
    },
    {
        locale: 'en-ZW',
        name: 'English (Zimbabwe)',
    },
    {
        locale: 'eo',
        name: 'Esperanto',
    },
    {
        locale: 'es',
        name: 'Spanish',
    },
    {
        locale: 'es-AR',
        name: 'Spanish (Argentina)',
    },
    {
        locale: 'es-BO',
        name: 'Spanish (Bolivia)',
    },
    {
        locale: 'es-CL',
        name: 'Spanish (Chile)',
    },
    {
        locale: 'es-CO',
        name: 'Spanish (Colombia)',
    },
    {
        locale: 'es-CR',
        name: 'Spanish (Costa Rica)',
    },
    {
        locale: 'es-DO',
        name: 'Spanish (Dominican Republic)',
    },
    {
        locale: 'es-EC',
        name: 'Spanish (Ecuador)',
    },
    {
        locale: 'es-ES',
        name: 'Spanish (Castilian)',
    },
    {
        locale: 'es-ES',
        name: 'Spanish (Spain)',
    },
    {
        locale: 'es-GT',
        name: 'Spanish (Guatemala)',
    },
    {
        locale: 'es-HN',
        name: 'Spanish (Honduras)',
    },
    {
        locale: 'es-MX',
        name: 'Spanish (Mexico)',
    },
    {
        locale: 'es-NI',
        name: 'Spanish (Nicaragua)',
    },
    {
        locale: 'es-PA',
        name: 'Spanish (Panama)',
    },
    {
        locale: 'es-PE',
        name: 'Spanish (Peru)',
    },
    {
        locale: 'es-PR',
        name: 'Spanish (Puerto Rico)',
    },
    {
        locale: 'es-PY',
        name: 'Spanish (Paraguay)',
    },
    {
        locale: 'es-SV',
        name: 'Spanish (El Salvador)',
    },
    {
        locale: 'es-UY',
        name: 'Spanish (Uruguay)',
    },
    {
        locale: 'es-VE',
        name: 'Spanish (Venezuela)',
    },
    {
        locale: 'et',
        name: 'Estonian',
    },
    {
        locale: 'et-EE',
        name: 'Estonian (Estonia)',
    },
    {
        locale: 'eu',
        name: 'Basque',
    },
    {
        locale: 'eu-ES',
        name: 'Basque (Spain)',
    },
    {
        locale: 'fa',
        name: 'Farsi',
    },
    {
        locale: 'fa-IR',
        name: 'Farsi (Iran)',
    },
    {
        locale: 'fi',
        name: 'Finnish',
    },
    {
        locale: 'fi-FI',
        name: 'Finnish (Finland)',
    },
    {
        locale: 'fo',
        name: 'Faroese',
    },
    {
        locale: 'fo-FO',
        name: 'Faroese (Faroe Islands)',
    },
    {
        locale: 'fr',
        name: 'French',
    },
    {
        locale: 'fr-BE',
        name: 'French (Belgium)',
    },
    {
        locale: 'fr-CA',
        name: 'French (Canada)',
    },
    {
        locale: 'fr-CH',
        name: 'French (Switzerland)',
    },
    {
        locale: 'fr-FR',
        name: 'French (France)',
    },
    {
        locale: 'fr-LU',
        name: 'French (Luxembourg)',
    },
    {
        locale: 'fr-MC',
        name: 'French (Principality of Monaco)',
    },
    {
        locale: 'gl',
        name: 'Galician',
    },
    {
        locale: 'gl-ES',
        name: 'Galician (Spain)',
    },
    {
        locale: 'gu',
        name: 'Gujarati',
    },
    {
        locale: 'gu-IN',
        name: 'Gujarati (India)',
    },
    {
        locale: 'he',
        name: 'Hebrew',
    },
    {
        locale: 'he-IL',
        name: 'Hebrew (Israel)',
    },
    {
        locale: 'hi',
        name: 'Hindi',
    },
    {
        locale: 'hi-IN',
        name: 'Hindi (India)',
    },
    {
        locale: 'hr',
        name: 'Croatian',
    },
    {
        locale: 'hr-BA',
        name: 'Croatian (Bosnia and Herzegovina)',
    },
    {
        locale: 'hr-HR',
        name: 'Croatian (Croatia)',
    },
    {
        locale: 'hu',
        name: 'Hungarian',
    },
    {
        locale: 'hu-HU',
        name: 'Hungarian (Hungary)',
    },
    {
        locale: 'hy',
        name: 'Armenian',
    },
    {
        locale: 'hy-AM',
        name: 'Armenian (Armenia)',
    },
    {
        locale: 'id',
        name: 'Indonesian',
    },
    {
        locale: 'id-ID',
        name: 'Indonesian (Indonesia)',
    },
    {
        locale: 'is',
        name: 'Icelandic',
    },
    {
        locale: 'is-IS',
        name: 'Icelandic (Iceland)',
    },
    {
        locale: 'it',
        name: 'Italian',
    },
    {
        locale: 'it-CH',
        name: 'Italian (Switzerland)',
    },
    {
        locale: 'it-IT',
        name: 'Italian (Italy)',
    },
    {
        locale: 'ja',
        name: 'Japanese',
    },
    {
        locale: 'ja-JP',
        name: 'Japanese (Japan)',
    },
    {
        locale: 'ka',
        name: 'Georgian',
    },
    {
        locale: 'ka-GE',
        name: 'Georgian (Georgia)',
    },
    {
        locale: 'kk',
        name: 'Kazakh',
    },
    {
        locale: 'kk-KZ',
        name: 'Kazakh (Kazakhstan)',
    },
    {
        locale: 'kn',
        name: 'Kannada',
    },
    {
        locale: 'kn-IN',
        name: 'Kannada (India)',
    },
    {
        locale: 'ko',
        name: 'Korean',
    },
    {
        locale: 'ko-KR',
        name: 'Korean (Korea)',
    },
    {
        locale: 'kok',
        name: 'Konkani',
    },
    {
        locale: 'kok-IN',
        name: 'Konkani (India)',
    },
    {
        locale: 'ky',
        name: 'Kyrgyz',
    },
    {
        locale: 'ky-KG',
        name: 'Kyrgyz (Kyrgyzstan)',
    },
    {
        locale: 'lt',
        name: 'Lithuanian',
    },
    {
        locale: 'lt-LT',
        name: 'Lithuanian (Lithuania)',
    },
    {
        locale: 'lv',
        name: 'Latvian',
    },
    {
        locale: 'lv-LV',
        name: 'Latvian (Latvia)',
    },
    {
        locale: 'mi',
        name: 'Maori',
    },
    {
        locale: 'mi-NZ',
        name: 'Maori (New Zealand)',
    },
    {
        locale: 'mk',
        name: 'FYRO Macedonian',
    },
    {
        locale: 'mk-MK',
        name: 'FYRO Macedonian (Former Yugoslav Republic of Macedonia)',
    },
    {
        locale: 'mn',
        name: 'Mongolian',
    },
    {
        locale: 'mn-MN',
        name: 'Mongolian (Mongolia)',
    },
    {
        locale: 'mr',
        name: 'Marathi',
    },
    {
        locale: 'mr-IN',
        name: 'Marathi (India)',
    },
    {
        locale: 'ms',
        name: 'Malay',
    },
    {
        locale: 'ms-BN',
        name: 'Malay (Brunei Darussalam)',
    },
    {
        locale: 'ms-MY',
        name: 'Malay (Malaysia)',
    },
    {
        locale: 'mt',
        name: 'Maltese',
    },
    {
        locale: 'mt-MT',
        name: 'Maltese (Malta)',
    },
    {
        locale: 'nb',
        name: 'Norwegian (Bokm?l)',
    },
    {
        locale: 'nb-NO',
        name: 'Norwegian (Bokm?l) (Norway)',
    },
    {
        locale: 'nl',
        name: 'Dutch',
    },
    {
        locale: 'nl-BE',
        name: 'Dutch (Belgium)',
    },
    {
        locale: 'nl-NL',
        name: 'Dutch (Netherlands)',
    },
    {
        locale: 'nn-NO',
        name: 'Norwegian (Nynorsk) (Norway)',
    },
    {
        locale: 'ns',
        name: 'Northern Sotho',
    },
    {
        locale: 'ns-ZA',
        name: 'Northern Sotho (South Africa)',
    },
    {
        locale: 'pa',
        name: 'Punjabi',
    },
    {
        locale: 'pa-IN',
        name: 'Punjabi (India)',
    },
    {
        locale: 'pl',
        name: 'Polish',
    },
    {
        locale: 'pl-PL',
        name: 'Polish (Poland)',
    },
    {
        locale: 'ps',
        name: 'Pashto',
    },
    {
        locale: 'ps-AR',
        name: 'Pashto (Afghanistan)',
    },
    {
        locale: 'pt',
        name: 'Portuguese',
    },
    {
        locale: 'pt-BR',
        name: 'Portuguese (Brazil)',
    },
    {
        locale: 'pt-PT',
        name: 'Portuguese (Portugal)',
    },
    {
        locale: 'qu',
        name: 'Quechua',
    },
    {
        locale: 'qu-BO',
        name: 'Quechua (Bolivia)',
    },
    {
        locale: 'qu-EC',
        name: 'Quechua (Ecuador)',
    },
    {
        locale: 'qu-PE',
        name: 'Quechua (Peru)',
    },
    {
        locale: 'ro',
        name: 'Romanian',
    },
    {
        locale: 'ro-RO',
        name: 'Romanian (Romania)',
    },
    {
        locale: 'ru',
        name: 'Russian',
    },
    {
        locale: 'ru-RU',
        name: 'Russian (Russia)',
    },
    {
        locale: 'sa',
        name: 'Sanskrit',
    },
    {
        locale: 'sa-IN',
        name: 'Sanskrit (India)',
    },
    {
        locale: 'se',
        name: 'Sami (Northern)',
    },
    {
        locale: 'se-FI',
        name: 'Sami (Northern) (Finland)',
    },
    {
        locale: 'se-FI',
        name: 'Sami (Skolt) (Finland)',
    },
    {
        locale: 'se-FI',
        name: 'Sami (Inari) (Finland)',
    },
    {
        locale: 'se-NO',
        name: 'Sami (Northern) (Norway)',
    },
    {
        locale: 'se-NO',
        name: 'Sami (Lule) (Norway)',
    },
    {
        locale: 'se-NO',
        name: 'Sami (Southern) (Norway)',
    },
    {
        locale: 'se-SE',
        name: 'Sami (Northern) (Sweden)',
    },
    {
        locale: 'se-SE',
        name: 'Sami (Lule) (Sweden)',
    },
    {
        locale: 'se-SE',
        name: 'Sami (Southern) (Sweden)',
    },
    {
        locale: 'sk',
        name: 'Slovak',
    },
    {
        locale: 'sk-SK',
        name: 'Slovak (Slovakia)',
    },
    {
        locale: 'sl',
        name: 'Slovenian',
    },
    {
        locale: 'sl-SI',
        name: 'Slovenian (Slovenia)',
    },
    {
        locale: 'sq',
        name: 'Albanian',
    },
    {
        locale: 'sq-AL',
        name: 'Albanian (Albania)',
    },
    {
        locale: 'sr-BA',
        name: 'Serbian (Latin) (Bosnia and Herzegovina)',
    },
    {
        locale: 'sr-BA',
        name: 'Serbian (Cyrillic) (Bosnia and Herzegovina)',
    },
    {
        locale: 'sr-SP',
        name: 'Serbian (Latin) (Serbia and Montenegro)',
    },
    {
        locale: 'sr-SP',
        name: 'Serbian (Cyrillic) (Serbia and Montenegro)',
    },
    {
        locale: 'sv',
        name: 'Swedish',
    },
    {
        locale: 'sv-FI',
        name: 'Swedish (Finland)',
    },
    {
        locale: 'sv-SE',
        name: 'Swedish (Sweden)',
    },
    {
        locale: 'sw',
        name: 'Swahili',
    },
    {
        locale: 'sw-KE',
        name: 'Swahili (Kenya)',
    },
    {
        locale: 'syr',
        name: 'Syriac',
    },
    {
        locale: 'syr-SY',
        name: 'Syriac (Syria)',
    },
    {
        locale: 'ta',
        name: 'Tamil',
    },
    {
        locale: 'ta-IN',
        name: 'Tamil (India)',
    },
    {
        locale: 'te',
        name: 'Telugu',
    },
    {
        locale: 'te-IN',
        name: 'Telugu (India)',
    },
    {
        locale: 'th',
        name: 'Thai',
    },
    {
        locale: 'th-TH',
        name: 'Thai (Thailand)',
    },
    {
        locale: 'tl',
        name: 'Tagalog',
    },
    {
        locale: 'tl-PH',
        name: 'Tagalog (Philippines)',
    },
    {
        locale: 'tn',
        name: 'Tswana',
    },
    {
        locale: 'tn-ZA',
        name: 'Tswana (South Africa)',
    },
    {
        locale: 'tr',
        name: 'Turkish',
    },
    {
        locale: 'tr-TR',
        name: 'Turkish (Turkey)',
    },
    {
        locale: 'tt',
        name: 'Tatar',
    },
    {
        locale: 'tt-RU',
        name: 'Tatar (Russia)',
    },
    {
        locale: 'ts',
        name: 'Tsonga',
    },
    {
        locale: 'uk',
        name: 'Ukrainian',
    },
    {
        locale: 'uk-UA',
        name: 'Ukrainian (Ukraine)',
    },
    {
        locale: 'ur',
        name: 'Urdu',
    },
    {
        locale: 'ur-PK',
        name: 'Urdu (Islamic Republic of Pakistan)',
    },
    {
        locale: 'uz',
        name: 'Uzbek (Latin)',
    },
    {
        locale: 'uz-UZ',
        name: 'Uzbek (Latin) (Uzbekistan)',
    },
    {
        locale: 'uz-UZ',
        name: 'Uzbek (Cyrillic) (Uzbekistan)',
    },
    {
        locale: 'vi',
        name: 'Vietnamese',
    },
    {
        locale: 'vi-VN',
        name: 'Vietnamese (Viet Nam)',
    },
    {
        locale: 'xh',
        name: 'Xhosa',
    },
    {
        locale: 'xh-ZA',
        name: 'Xhosa (South Africa)',
    },
    {
        locale: 'zh',
        name: 'Chinese',
    },
    {
        locale: 'zh-CN',
        name: 'Chinese (S)',
    },
    {
        locale: 'zh-HK',
        name: 'Chinese (Hong Kong)',
    },
    {
        locale: 'zh-MO',
        name: 'Chinese (Macau)',
    },
    {
        locale: 'zh-SG',
        name: 'Chinese (Singapore)',
    },
    {
        locale: 'zh-TW',
        name: 'Chinese (T)',
    },
    {
        locale: 'zu',
        name: 'Zulu',
    },
    {
        locale: 'zu-ZA',
        name: 'Zulu (South Africa)',
    },
];

let i;
for (i = 0; i < list.length; i++) {
    list[i] = Object.freeze(list[i]);
}

module.exports = Object.freeze(list);
