from email_registration import OutlookRegistration
from tik_tok_registration import TikTokRegister
from concurrent.futures import ThreadPoolExecutor
# from browser.chrome import chrome_setup
from vpn_service import nordvpn
from db import DB
import time


# def MailThread(rounds):
#     times = rounds
times = 500
while times != 0:
    nordvpn()
    with ThreadPoolExecutor() as executor:
        for i in range(3):
            try:
                executor.submit(OutlookRegistration)
            except:
                continue
        # executor.submit(OutlookRegistration)

    times -= 1

# times = db.getCount('email_users')
# country = 'United States'
# country = 'United States'
# while times != 0:
#     nordvpn(country)
#     with ThreadPoolExecutor() as executor:
#         executor.submit(TikTokRegister(country, 0))
#         times -= 1
# except:
#     break
# else:
#     try:
#         executor.submit(TikTokRegister(country, 1))
#     except:
#         break
#     else:
#         try:
#             executor.submit(TikTokRegister(country, 2))
#         except:
#             break
#         else:
#             times -= 1
#             continue
# executor.submit(OutlookRegistration)

# //*[@id="iShowSkip"]
# //*[@id="iNext"]
# //*[@id="downloadAppCancel"]
