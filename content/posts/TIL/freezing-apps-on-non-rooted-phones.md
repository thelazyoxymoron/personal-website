---
title: "Freezing Apps on Non Rooted Phones (Without a PC)"
date: 2024-06-07T13:30:50+05:30
draft: false
categories: ["TIL"]
tags: ["android", "apps", "tinkering"]
---

Recently when my mom got a new phone, I wanted to remove some system applications from the phone which are bloatware. Now doing this with a laptop is fairly easy, we can just use `adb` to uninstall, however the task becomes difficult if you cannot use a PC.

Found a way to do this via [Shizuku](https://github.com/RikkaApps/Shizuku) + [Hail](https://github.com/aistra0528/Hail):

* Install Shizuku
![Shizuku home screen](/images/shizuku_home_page.png "Shizuku home screen")
* Starting with android 11, you can use ADB on the device without using a PC. You'll have to enable wireless debugging first and then connect the app through the wireless debugging.
* Go to `About phone -> build number` and keep clicking it to enable developer mode
* Once enabled, search for `wireless debugging` in settings -> enable that -> click on the left side of the panel to go inside `wireless debugging`
* Open `Shizuku` and click on `pairing` under wireless debugging
* Give notification access
![Shizuku notification](/images/shizuku-notification.png "Shizuku notification")
* Click on `developer options` -> go to `wireless debugging` -> pair device with pairing code -> note down the pairing code
* Give that code in the notification bar -> pairing should be successful
* Go back to the home screen in `Shizuku` and click on `Start`
    * If you get the following error, simply restart `Shizuku`:
    ![Error in Shizuku](/images/shizuku-error.png "Error in shizuku")  
* Shuzuku should be running now.
* Install `Hail` -> go to settings -> click on `working mode` -> select `Shizuku - Disable` -> Allow all the time
* Go to `Apps` from the bottom navigation in `Hail` -> select the system apps you want to freeze -> go back to home after selecting these apps
    * By default only User apps are listed. Click on three dots and select system apps to list all apps
* Click on the right hand corner icon to freeze these apps. Voilà, all these system applications
should be disabled.
