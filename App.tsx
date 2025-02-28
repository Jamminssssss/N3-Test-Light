import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReadingSection from './screens/ReadingSection';
import ListeningSection from './screens/ListeningSection';
import SplashScreen from 'react-native-splash-screen';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

const Tab = createBottomTabNavigator();

// 광고 단위 ID 설정 (iOS와 Android에서 다르게 설정)
const topBannerAdUnitId = Platform.select({
  ios: 'ca-app-pub-3940256099942544/2435281174',
  android: 'ca-app-pub-3940256099942544/6300978111',
});

const bottomBannerAdUnitId = Platform.select({
  ios: 'ca-app-pub-3940256099942544/2435281174',
  android: 'ca-app-pub-3940256099942544/6300978111',
});

interface BannerProps {
  adUnitId: string | undefined; // Allow undefined
}

const TopBanner: React.FC<BannerProps> = ({ adUnitId }) => (
  <View style={styles.topBannerContainer}>
    {adUnitId && (
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    )}
  </View>
);

const BottomBanner: React.FC<BannerProps> = ({ adUnitId }) => (
  <View style={styles.bottomBannerContainer}>
    {adUnitId && (
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    )}
  </View>
);


export default function App() {
  // 스플래시 화면을 3초 후에 숨김
  useEffect(() => {
    const timeout = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopBanner adUnitId={topBannerAdUnitId} />
      <View style={styles.mainContent}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Reading"
            screenOptions={{
              tabBarStyle: styles.tabBar,
              headerShown: false,
            }}
          >
            <Tab.Screen
              name="Reading"
              component={ReadingSection}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name="book" color={color} size={24} />
                ),
                tabBarLabel: "Reading",
              }}
            />
            <Tab.Screen
              name="Listening"
              component={ListeningSection}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name="headset" color={color} size={24} />
                ),
                tabBarLabel: "Listening",
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
      <BottomBanner adUnitId={bottomBannerAdUnitId} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContent: {
    flex: 1,
  },
  // 탭 바 스타일 수정
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64, // 터치 영역 확보를 위해 높이 증가
    backgroundColor: 'white',
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    paddingVertical: 0,
  },
  // 아이콘 컨테이너 스타일
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  // 상단 배너 스타일
  topBannerContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  // 하단 배너 스타일
  bottomBannerContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
