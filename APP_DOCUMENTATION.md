# Community-Driven Infrastructure Management App 🏗️

A modern, user-friendly mobile app for reporting and managing community infrastructure issues. Built with React Native, Expo, and NativeWind.

## ✨ Features

### 🏠 Home/Dashboard Screen
- **User Points & Rewards**: Display total points earned and current rank
- **Recent Updates**: Notification cards showing submission status changes
- **Submission Tracking**: Visual timeline showing progress from submission to completion
  - Submitted → Received by Department → Work Started → Work Complete
- **Order-tracking style progress indicators** with department information

### 📸 Add/Edit Submissions Screen
- **Multi-option Image Upload**: Take photo or choose from gallery
- **AI-Powered Categorization**: Automatic issue categorization with AI badge
- **Category Selection**: Road Maintenance, Water Infrastructure, Street Lighting, Vandalism, Waste Management, and more
- **Detailed Descriptions**: Rich text input for problem descriptions
- **Submission History**: View all past reports with status timelines
- **Floating Action Button**: Quick access to create new reports

### 🏆 National Leaderboard Screen
- **Top 3 Podium**: Visual representation of top contributors with medals
- **Your Rank Card**: Highlighted card showing your position and points
- **Full Rankings**: Scrollable list with user avatars, points, and submission counts
- **Filter Options**: All-time, Weekly, Monthly leaderboards
- **Current User Highlight**: Your entry is highlighted in the list

### 🎁 Redeem Points Screen
- **Points Balance**: Large display of available points
- **Prize Categories**: Gift Cards, Experiences, Merchandise, Transit passes
- **Prize Cards**: Beautiful cards with images, descriptions, and point costs
- **Smart Locking**: Prizes automatically lock if insufficient points
- **Point Deficit Display**: Shows how many more points needed for locked items
- **Redemption Flow**: Confirmation dialog for prize redemptions
- **How It Works**: Educational section explaining the points system

### 👤 Settings/Profile Screen
- **Profile Management**: Edit display name, username, and avatar
- **Shipping Address**: Store address for prize deliveries
- **User Statistics**: Points, rank, and submission count at a glance
- **Achievements**: Badge system showing milestones (Top 10, Streaks, etc.)
- **Settings Menu**: Notifications, Privacy, Help & Support, About
- **Edit Mode**: Toggle between view and edit modes

## 🎨 Design System

### Visual Style
- **Clean & Minimalist**: Material Design principles
- **Blue Accent Color** (#3B82F6): Primary actions and highlights
- **Dark Mode Support**: Full dark mode with proper contrast
- **Card-Based UI**: Elevated cards with shadows and borders
- **Rounded Corners**: Modern 12-16px border radius throughout

### Color Palette
```
Primary Blue: #3B82F6
Success Green: #10B981
Warning Orange: #F59E0B
Error Red: #EF4444
Purple Accent: #9333EA (AI features)
Gold: #FFD700 (Points, medals)
```

### Typography
- **Headers**: Bold, 24-32px
- **Body**: Regular, 14-16px
- **Captions**: 12px
- **Font Weight**: 400 (regular), 600 (semibold), 700 (bold)

### Icons
- **Ionicons**: Consistent icon family throughout
- **Category Icons**: Visual indicators for issue types
- **Status Icons**: Progress indicators in timelines
- **Achievement Badges**: Trophy, flame, checkmark, sparkles

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ installed
- Expo CLI installed globally: `npm install -g expo-cli`
- iOS Simulator (Mac) or Android Studio (for Android emulator)
- Expo Go app on your mobile device (optional)

### Installation

1. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start the development server**:
   ```bash
   npx expo start
   ```

3. **Run on your device**:
   - **iOS Simulator**: Press `i` in the terminal
   - **Android Emulator**: Press `a` in the terminal
   - **Physical Device**: Scan QR code with Expo Go app

## 📱 Navigation Structure

```
app/
├── index.tsx (redirects to tabs)
├── _layout.tsx (root layout)
└── (tabs)/
    ├── _layout.tsx (tab navigation)
    ├── index.tsx (Home/Dashboard)
    ├── submissions.tsx (Upload & View Reports)
    ├── leaderboard.tsx (Rankings)
    ├── rewards.tsx (Prize Redemption)
    └── profile.tsx (User Profile & Settings)
```

## 🧩 Key Components

### Custom Components
- **StatusTimeline**: Progress tracker for submission status
- **NotificationCard**: Update cards with icons and timestamps
- **LeaderboardItem**: User ranking cards with medals
- **PrizeCard**: Reward display with point costs and redemption

### UI Components (NativeWind)
- **Button**: Customizable button component
- **Text**: Themed text component
- **Input**: Form input with styling
- **Icon**: Ionicons wrapper

## 📊 Mock Data Structure

### User
```typescript
{
  id, username, displayName, avatarUri,
  points, rank, submissions, shippingAddress
}
```

### Submission
```typescript
{
  id, imageUri, description, category,
  status, points, submittedDate, department,
  aiCategorized, statusHistory[]
}
```

### Prize
```typescript
{
  id, title, description, imageUri,
  pointCost, category, available
}
```

## 🎯 Key Features Highlighted

### AI/Smart Features
- **Purple badge with sparkle icon** on AI-categorized submissions
- **Auto-categorization** message when AI selects category
- **Visual distinction** from manual categorization

### Notification System
- **Color-coded notifications**: Info (blue), Success (green), Warning (orange)
- **Department updates**: "Complaint Received by Water Department!"
- **Progress alerts**: "Work Started", "Work Complete"
- **Point rewards**: "You earned 150 points!"

### Gamification
- **Points for every submission**
- **National leaderboard rankings**
- **Achievement badges**
- **Prize redemption system**
- **Streak tracking**

## 🎨 UI/UX Highlights

### Intuitive Navigation
- **Bottom tab bar** with 5 main sections
- **Contextual icons** for each tab
- **Blue accent** for active tab
- **Platform-specific styling** (iOS vs Android)

### Modern Mobile UX Trends
- **Pull-to-refresh** capability
- **Swipe gestures** for navigation
- **Haptic feedback** on interactions
- **Smooth animations** with react-native-reanimated
- **Skeleton screens** for loading states
- **Empty states** with helpful messages

### Accessibility
- **High contrast ratios** in both light and dark modes
- **Large touch targets** (minimum 44x44px)
- **Clear visual hierarchy**
- **Readable font sizes**

## 🔧 Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **Expo Router** - File-based routing
- **NativeWind** - Tailwind CSS for React Native
- **TypeScript** - Type safety
- **Expo Image Picker** - Camera and gallery access
- **Ionicons** - Icon library
- **React Navigation** - Tab navigation

## 📝 Future Enhancements

- Real-time notifications with push notifications
- Map view showing all reported issues
- Social features (comments, likes)
- Photo verification before/after
- Department response messaging
- Export submission history
- Advanced filtering and search
- Multi-language support

## 🤝 Contributing

This is a demonstration project. Feel free to fork and customize for your community needs!

## 📄 License

MIT License - feel free to use for your community projects!

---

Built with ❤️ for better communities
