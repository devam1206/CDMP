import { Text } from '@/components/ui/text';
import { Prize } from '@/lib/types';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

interface PrizeCardProps {
  prize: Prize;
  userPoints: number;
  onRedeem?: () => void;
}

export function PrizeCard({ prize, userPoints, onRedeem }: PrizeCardProps) {
  const canAfford = userPoints >= prize.pointCost;

  return (
    <View className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 mb-4">
      <Image
        source={{ uri: prize.imageUri }}
        className="w-full h-40"
        resizeMode="cover"
      />
      
      <View className="p-4">
        <Text className="font-bold text-lg text-gray-900 dark:text-white mb-1">
          {prize.title}
        </Text>
        
        <Text className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {prize.description}
        </Text>

        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Ionicons name="star" size={20} color="#F59E0B" />
            <Text className="font-bold text-xl text-gray-900 dark:text-white ml-2">
              {prize.pointCost.toLocaleString()}
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400 ml-1">
              points
            </Text>
          </View>

          <TouchableOpacity
            onPress={onRedeem}
            disabled={!canAfford || !prize.available}
            className={`px-6 py-2 rounded-full ${
              canAfford && prize.available
                ? 'bg-blue-500'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            activeOpacity={0.8}>
            <Text
              className={`font-semibold ${
                canAfford && prize.available
                  ? 'text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
              {canAfford && prize.available ? 'Redeem' : 'Locked'}
            </Text>
          </TouchableOpacity>
        </View>

        {!canAfford && (
          <Text className="text-xs text-red-500 dark:text-red-400 mt-2">
            Need {(prize.pointCost - userPoints).toLocaleString()} more points
          </Text>
        )}
      </View>
    </View>
  );
}
