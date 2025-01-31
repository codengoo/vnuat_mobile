import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {
  AtBottomSheet,
  AtButtonBox,
  AtButtonLink,
  ButtonLang,
  Icon,
} from '@src/components';
import {GoogleIcon, QRIcon} from '@src/components/ui/icon';
import {COLOR, FontFamily, FontSize, Space, space} from '@src/constants';
import {useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StatusBar, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export function MainLogin() {
  const {t} = useTranslation('login');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const showModal = () => {
    bottomSheetModalRef.current?.present();
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar hidden />
      <SafeAreaView style={styles.header} edges={['top']}>
        <View style={styles.langWrapper}>
          <ButtonLang />
        </View>
        <Image
          source={require('@src/assets/images/logo_vnu_color.png')}
          style={{height: space(124), aspectRatio: 2}}
          resizeMode="contain"
        />
        <Image
          source={require('@src/assets/images/login_1.png')}
          style={{height: space(400), marginBottom: -space(16)}}
          resizeMode="contain"
        />
      </SafeAreaView>

      <SafeAreaView edges={['bottom']} style={styles.content}>
        <View style={styles.mainOptions}>
          <AtButtonBox title="Google" expandable icon={GoogleIcon} />
          <AtButtonBox title="QR code" expandable icon={QRIcon} />

          <AtButtonLink title={t('try_other_way')} onPress={showModal} />
        </View>

        <Text style={styles.helperText}>{t('login_helper')}</Text>
      </SafeAreaView>

      <AtBottomSheet ref={bottomSheetModalRef}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: space(20),
            padding: Space.sd,
          }}>
          <Text
            style={{
              fontFamily: FontFamily.Prompt.normal.medium,
              fontSize: FontSize.md,
              textAlign: 'center',
              color: COLOR.text,
            }}>
            {t('alternate_login_helper')}
          </Text>
          <AtButtonBox
            title={t('using_password')}
            icon={Icon.PasswordIcon}
            expandable
            color="yellow"
          />
          <AtButtonBox
            title={t('using_NFC')}
            icon={Icon.NfcIcon}
            expandable
            color="yellow"
          />
        </View>
      </AtBottomSheet>
    </GestureHandlerRootView>
  );
}
