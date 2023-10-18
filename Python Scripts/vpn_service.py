import platform
import time
import os
import random

linux_countries = ['al', 'ar', 'au', 'at', 'br', 'bg', 'ca', 'cl', 'cr', 'hr', 'cy', 'cz', 'dk', 'ee', 'fi',
                   'fr', 'ge', 'de', 'gr', 'hk', 'hu', 'is', 'in', 'id', 'ie', 'il', 'it', 'jp', 'lv', 'lu', 'my',
                   'mx', 'md', 'nl', 'nz', 'mk', 'no', 'pl', 'pt', 'ro', 'rs', 'sg', '', 'si', 'za', 'kr', 'es',
                   'se', 'ch', 'tw', 'th', 'tr', 'ua', 'So', 'uk', 'us']


windows_countries = ['United States', 'Canada', 'Argentina', 'Brazil', 'Mexico', 'Costa Rica', 'Chile', 'Vietnam'
                     'United Kingdom', 'Germany', 'France', 'Netherlands', 'Sweden', 'Switzerland',
                     'Denmark', 'Poland', 'Italy', 'Spain', 'Norway', 'Belgium', 'Ireland', 'Czech Republic',
                     'Austria', 'Portugal', 'Finland', 'Ukraine', 'Romania', 'Serbia', 'Hungary', 'Luxembourg',
                     #  'Slovakia', 'Bulgaria', 'Latvia', 'Greece', 'Iceland', 'Estonia', 'Albania', 'Croatia',
                     #  'Cyprus', 'Slovenia', 'Moldova', 'Bosnia and Herzegovina', 'Georgia', 'North Macedonia',
                     #  'Turkey', 'South Africa', 'India', 'Israel', 'Turkey', 'United Arab Emirates', 'Australia',
                     'Taiwan', 'Singapore', 'Japan', 'Hong Kong', 'New Zealand', 'Malaysia', 'Indonesia',
                     'South Korea', 'Thailand'
                     ]


def nordvpn(country=None):
    version = platform.system()

    if version == "Linux" or version == "Darwin":
        ser = "nordvpn connect " + \
            random.choice(linux_countries)+" > /dev/null 2>&1"
        os.system(ser)
    elif version == "Windows":
        path = r'C:\Program Files\NordVPN'
        os.chdir(path)
        if country:
            server = f'nordvpn -c -g "{country}"'
        else:
            country = random.choice(windows_countries)
            server = f'nordvpn -c -g "{country}"'
        os.system(server)
        print(server)
    time.sleep(10)
