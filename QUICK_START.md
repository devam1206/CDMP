# 🚀 Quick Start Guide

## Your App is Running!

The development server is already started. You should see a QR code in your terminal.

## How to View Your App

### Option 1: Physical Device (Recommended for best experience)
1. Install **Expo Go** app from:
   - [App Store (iOS)](https://apps.apple.com/app/apple-store/id982107779)
   - [Google Play (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent)
2. Open Expo Go
3. Scan the QR code from your terminal

### Option 2: Android Emulator
```bash
# Press 'a' in the terminal
a
```
Make sure Android Studio and emulator are installed.

### Option 3: iOS Simulator (Mac only)
```bash
# Press 'i' in the terminal
i
```
Make sure Xcode is installed.

### Option 4: Web Browser
```bash
# Press 'w' in the terminal
w
```
Opens at http://localhost:8081

## 🎯 What to Try First

### 1. Home Screen (Dashboard)
- See your points and rank
- View recent notifications
- Click on submission images to see progress timeline

### 2. Submissions Tab
- Click the **+** button to create new submission
- Try "Take Photo" or "From Gallery"
- Watch AI auto-categorize your submission
- View all your previous submissions with timelines

### 3. Leaderboard Tab
- See top 3 contributors on the podium
- Find yourself highlighted in the list
- Toggle between All/Weekly/Monthly filters

### 4. Rewards Tab
- Browse available prizes
- Filter by category
- Try to redeem a prize (if you have enough points!)

### 5. Profile Tab
- Click edit icon to modify your profile
- Update your avatar, name, or address
- View your achievement badges
- Check settings options

## 🎨 Features to Explore

✅ **AI Categorization**: Purple sparkle badge on auto-categorized items  
✅ **Status Timeline**: Track your submission from start to completion  
✅ **Points System**: Earn points for completed submissions  
✅ **Leaderboard**: Compare your rank with others  
✅ **Prize Redemption**: Exchange points for rewards  
✅ **Dark Mode**: Toggle dark/light mode in your device settings  
✅ **Notifications**: See recent updates about your submissions  

## 🛠️ Development Commands

```bash
# Restart development server
npx expo start

# Clear cache and restart
npx expo start -c

# Run on specific platform
npx expo start --android
npx expo start --ios
npx expo start --web

# Update dependencies
npm install --legacy-peer-deps

# Check for issues
npx expo-doctor
```

## 📱 Navigation Guide

**Bottom Tab Bar**:
- 🏠 **Home**: Dashboard with points and recent activity
- 📸 **Submissions**: Upload and track your reports  
- 🏆 **Leaderboard**: View rankings
- 🎁 **Rewards**: Redeem prizes
- 👤 **Profile**: Manage your account

## 💡 Pro Tips

1. **Dark Mode**: Toggle your device settings to see dark theme
2. **Submissions**: Create multiple submissions to see different statuses
3. **Leaderboard**: You appear as #7 - highlighted in blue
4. **Rewards**: You have 2,450 points to spend
5. **Profile**: Click edit icon to modify your information

## 🐛 Troubleshooting

### If QR code doesn't work:
- Make sure your phone and computer are on the same WiFi
- Try typing the URL shown in terminal into Expo Go manually

### If app doesn't load:
```bash
# Clear cache and restart
npx expo start -c
```

### If you see package warnings:
```bash
# Reinstall with legacy peer deps
npm install --legacy-peer-deps
```

### If styles look wrong:
- Make sure NativeWind is configured (it already is!)
- Check that global.css is imported

## 📚 Learn More

- Full documentation: `APP_DOCUMENTATION.md`
- Setup details: `SETUP_COMPLETE.md`
- Expo docs: https://docs.expo.dev
- React Native docs: https://reactnative.dev

## 🎉 Enjoy Your App!

Everything is ready to go. Start exploring and testing all the features!

**Questions?** Check the documentation files or Expo's official docs.

---

**Made with ❤️ for better communities**
