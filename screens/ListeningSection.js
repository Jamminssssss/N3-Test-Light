import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Modal, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Sound from 'react-native-sound';
import SQLite from 'react-native-sqlite-storage';
import questions from '../data/listeningquestions';
import { InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';
import { Platform } from 'react-native';

Sound.setCategory('Playback');
SQLite.enablePromise(true); // Enabling promise API for SQLite

// 전면 광고 단위 ID 설정
const interstitialAdUnitId = Platform.select({
  ios: 'ca-app-pub-3940256099942544/4411468910',
  android: 'ca-app-pub-3940256099942544/1033173712',
});

// 전면 광고 객체 생성
const interstitialAd = InterstitialAd.createForAdRequest(interstitialAdUnitId, {
  requestNonPersonalizedAdsOnly: true,
});

export default function ListeningSection({ navigation }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [soundInstance, setSoundInstance] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [db, setDb] = useState(null);  // Database instance
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  // 이미지 전체화면 모달 상태 추가
  const [showImageModal, setShowImageModal] = useState(false);
  // 화면 크기 가져오기
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const currentQuestion = questions[currentQuestionIndex];
  const [isCooldown, setIsCooldown] = useState(false); // Cooldown state
  const [adLoaded, setAdLoaded] = useState(false); // Add this line

  // 광고 이벤트 설정
  useEffect(() => {
    const unsubscribe = interstitialAd.addAdEventListener(AdEventType.LOADED, () => {
      setAdLoaded(true);
    });

    interstitialAd.load(); // 광고 로드

    return () => {
      unsubscribe();
    };
  }, []);

  // Open SQLite database
  useEffect(() => {
    const openDatabase = async () => {
      try {
        const dbInstance = await SQLite.openDatabase({ name: 'audioquiz.db', location: 'default' });
        setDb(dbInstance);  // Save the database instance to state
        await dbInstance.transaction(tx => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS progress (id INTEGER PRIMARY KEY, currentQuestionIndex INTEGER, selectedAnswer INTEGER);'
          );
        });

        // Load progress from SQLite when the component is mounted
        dbInstance.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM progress WHERE id = 1',
            [],
            (tx, results) => {
              if (results.rows.length > 0) {
                const progress = results.rows.item(0);
                setCurrentQuestionIndex(progress.currentQuestionIndex || 0);
                setSelectedAnswer(progress.selectedAnswer || null);
              }
            }
          );
        });
      } catch (error) {
        console.error('Error initializing database:', error);
      }
    };

    openDatabase();
  }, []);

   // Stop and release audio
   const stopAndReleaseAudio = () => {
    if (soundInstance) {
      soundInstance.stop(() => {
        soundInstance.release();
      });
      setSoundInstance(null);
      setIsPlaying(false);
    }
  };

  const handleAnswerPress = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowNextButton(true);
   
    if (answerIndex === currentQuestion.correctAnswer) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
    }

    if (db) {
      db.transaction(tx => {
        tx.executeSql(
          'REPLACE INTO progress (id, currentQuestionIndex, selectedAnswer) VALUES (1, ?, ?)',
          [currentQuestionIndex, answerIndex]
        );
      });
    }
  };

  const handleNextPress = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(null);
      setShowNextButton(false);
      stopAndReleaseAudio();
      
      
      if (db) {
        db.transaction(tx => {
          tx.executeSql(
            'REPLACE INTO progress (id, currentQuestionIndex, selectedAnswer) VALUES (1, ?, ?)',
            [currentQuestionIndex + 1, null]
          );
        });
      }
        
      // 10문제마다 전면 광고 표시
        if ((nextIndex + 1) % 10 === 0 && adLoaded) {
          interstitialAd.show();
          setAdLoaded(false);
          interstitialAd.load(); // 새로운 광고 로드
        }
    } else {
      setShowResultModal(true); // 결과 모달 표시
    }
  };
  
  useEffect(() => {
    if (!showQuiz) {  // 퀴즈가 종료되면
      stopAndReleaseAudio();  // 오디오 종료
    }
  }, [showQuiz]);  // showQuiz 상태가 변경될 때마다 실행
  
  const resetQuizState = () => {
    stopAndReleaseAudio();
    setShowQuiz(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowNextButton(false);
    setCorrectCount(0);
    setWrongCount(0);
    
    if (db) {
      db.transaction(tx => {
        tx.executeSql('DELETE FROM progress WHERE id = 1');
      });
    }
   // 하단 탭 다시 활성화
   navigation.setOptions({
    tabBarStyle: { display: 'flex' },
  });
  };

  const restartAudio = () => {
    if (isCooldown) return; // If it's in cooldown, don't restart the audio
  
    // Set cooldown to true
    setIsCooldown(true);
  
    // Stop and release the previous audio before playing the new one
    stopAndReleaseAudio(() => {
      playAudio(); // Play the audio again
    });
  
    // Set a timeout for the cooldown period (e.g., 1 second)
    setTimeout(() => {
      setIsCooldown(false); // Reset cooldown after 1 second
    }, 1000); // Adjust the time as necessary
  };
  

  const playAudio = () => {
    stopAndReleaseAudio();

    const sound = new Sound(currentQuestion.audio, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load the sound:', error.message);
        return;
      }

      sound.play((success) => {
        if (success) {
          setIsPlaying(false);
        } else {
          console.log('Playback failed');
        }
      });

      setSoundInstance(sound);
      setIsPlaying(true);
    });
  };

  const togglePlayPause = () => {
    if (soundInstance) {
      if (isPlaying) {
        soundInstance.pause();
        setIsPlaying(false);
      } else {
        soundInstance.play((success) => {
          if (!success) {
            console.log('Playback failed');
          }
        });
        setIsPlaying(true);
      }
    } else {
      playAudio();
    }
  };

  useLayoutEffect(() => {
    if (showQuiz) {
      navigation.setOptions({
        headerShown: true,
        tabBarStyle: { display: 'none' }, // 하단 탭 숨기기
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => resetQuizState()}
            style={styles.closeButton}
          >
            <Ionicons name='close-outline' size={24} color='black' />
          </TouchableOpacity>
        ),
      });
    } else {
      navigation.setOptions({
        headerShown: false,
        tabBarStyle: { display: 'flex' }, // 하단 탭 다시 보이기
      });
    }
  }, [navigation, showQuiz]);

  // 이미지 전체화면 모달 컴포넌트
  const ImageModal = () => (
    <Modal
      transparent={true}
      visible={showImageModal}
      onRequestClose={() => setShowImageModal(false)}
    >
      <View style={styles.imageModalContainer}>
        <TouchableOpacity
          style={styles.imageModalCloseButton}
          onPress={() => setShowImageModal(false)}
        >
          <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity>
        <Image
          source={currentQuestion.image}
          style={styles.fullscreenImage}
          resizeMode="contain"
        />
      </View>
    </Modal>
  );

const ResultModal = () => {
    const totalQuestions = correctCount + wrongCount;
    const accuracy = totalQuestions > 0 ? ((correctCount / totalQuestions) * 100).toFixed(2) : 0;
  
    return (
      <Modal
        transparent={true}
        visible={showResultModal}
        onRequestClose={() => setShowResultModal(false)}
      >
        <View style={styles.resultContainer}>
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>クイズ結果</Text>
            <Text style={styles.resultText}>✔️ 正解数: {correctCount}</Text>
            <Text style={styles.resultText}>❌ 不正解数: {wrongCount}</Text>
            <Text style={styles.resultText}>📊 正答率: {accuracy}%</Text>
  
            <TouchableOpacity
              style={styles.restartButton}
              onPress={() => {
                resetQuizState();
                setShowResultModal(false);
              }}
            >
              <Text style={styles.restartButtonText}>再挑戦</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  
if (!showQuiz) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonCenter}>
        <Ionicons
          name="headset"
          size={50}
          color="black"
          onPress={() => {
            setShowQuiz(true);
          }}
        />
        <Text style={styles.listeningText}>Jlpt 3 聴解</Text>
      </View>
    </View>
  );
}

  return (
    <>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.questionText}>{currentQuestion.question}</Text>
      {currentQuestion.image && (
        // 이미지를 터치할 수 있도록 TouchableOpacity로 감싸기
        <TouchableOpacity onPress={() => setShowImageModal(true)}>
          <Image source={currentQuestion.image} style={styles.questionImage} />
        </TouchableOpacity>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={togglePlayPause} style={styles.audioButton}>
          <Ionicons
            name={isPlaying ? 'stop' : 'play'} // 'stop' icon for stopping, 'play' for playing
            size={24}
            color="#000"
          />
        </TouchableOpacity>
  
        <TouchableOpacity onPress={restartAudio} style={styles.audioButton}>
          <Ionicons
            name="repeat" // 'repeat' icon for restarting the audio
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      </View>
  
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionButton,
              selectedAnswer === option.id && currentQuestion.correctAnswer === option.id && styles.correctOption,
              selectedAnswer === option.id && currentQuestion.correctAnswer !== option.id && styles.wrongOption,
              selectedAnswer !== null && currentQuestion.correctAnswer === option.id && styles.correctOption,
            ]}
            onPress={() => handleAnswerPress(option.id)}
            disabled={selectedAnswer !== null}
          >
            <Text style={styles.optionText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
  
        {showNextButton && (
          <TouchableOpacity
            style={[styles.optionButton, styles.nextButton]}
            onPress={handleNextPress}
          >
            <Text style={[styles.optionText, styles.nextButtonText]}>次の問題</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
    {/* 이미지 모달 컴포넌트 추가 */}
    <ImageModal />
    <ResultModal />
    </>
  );  
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingBottom: 100, // 스크롤이 계속 가능하도록 여유 공간 추가
    paddingHorizontal: 20,
  },
  buttonCenter: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  audioButton: {
    width: '40%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  audioButtonText: {
    fontSize: 16,
  },
  optionsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    width: '100%', // Set width to 100% to stretch
  },
  optionButton: {
    flex: 1, // Allow buttons to stretch equally
    padding: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
    width: '90%', // Adjust width to fit
  },
  correctOption: {
    backgroundColor: 'green',
  },
  wrongOption: {
    backgroundColor: 'red',
  },
  nextButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#2196F3',
    borderRadius: 10,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  endMessage: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 15, // Align the button to the top
    left: 10,
    zIndex: 10,
    padding: 0, // No padding
    margin: 0, // No margin
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  questionImage: {
    width: '100%',
    height: 200,
    marginTop: 10,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  resultContainer: {
    flex: 1, // 전체 화면 사용
    justifyContent: 'center', // 수직 중앙 정렬
    alignItems: 'center', // 수평 중앙 정렬
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 어두운 배경 (선택 사항)
  },
  resultBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '80%',
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 18,
    marginVertical: 5,
  },
  restartButton: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // 이미지 모달 관련 스타일 추가
  imageModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageModalCloseButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 2,
    padding: 10,
  },
  fullscreenImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.7,
  },
});