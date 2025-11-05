import { Text } from '@/components/ui/text';
import { LeaderboardEntry } from '@/lib/types';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, View } from 'react-native';

interface LeaderboardItemProps {
  entry: LeaderboardEntry;
  isCurrentUser?: boolean;
}

export function LeaderboardItem({ entry, isCurrentUser = false }: LeaderboardItemProps) {
  const getMedalColor = (rank: number) => {
    if (rank === 1) return '#FFD700'; // Gold
    if (rank === 2) return '#C0C0C0'; // Silver
    if (rank === 3) return '#CD7F32'; // Bronze
    return null;
  };

  const medalColor = getMedalColor(entry.rank);

  return (
    <View
      className={`flex-row items-center bg-white dark:bg-gray-800 rounded-xl p-4 mb-3 shadow-sm border ${
        isCurrentUser
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
          : 'border-gray-200 dark:border-gray-700'
      }`}>
      {/* Rank */}
      <View className="w-10 items-center mr-3">
        {medalColor ? (
          <Ionicons name="medal" size={28} color={medalColor} />
        ) : (
          <Text className="font-bold text-lg text-gray-700 dark:text-gray-300">
            #{entry.rank}
          </Text>
        )}
      </View>

      {/* Avatar */}
      <Image
        source={{ uri: entry.avatarUri }}
        className="w-12 h-12 rounded-full mr-3"
      />

      {/* User Info */}
      <View className="flex-1">
        <Text className="font-semibold text-gray-900 dark:text-white">
          {entry.displayName}
        </Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400">
          {entry.submissions} submissions
        </Text>
      </View>

      {/* Points */}
      <View className="items-end">
        <View className="flex-row items-center">
          <Ionicons name="star" size={16} color="#F59E0B" />
          <Text className="font-bold text-lg text-gray-900 dark:text-white ml-1">
            {entry.points.toLocaleString()}
          </Text>
        </View>
        <Text className="text-xs text-gray-500 dark:text-gray-400">points</Text>
      </View>
    </View>
  );
}
