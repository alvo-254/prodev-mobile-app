import { View, Text, ImageBackground, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { BACKGROUNDIMAGE, GOOGLELOGO, FACEBOOKLOGO } from "@/constants/index";

const Landing = () => {
  const router = useRouter();

  return (
    <ImageBackground source={BACKGROUNDIMAGE} className="flex-1">
      <View className="flex-1 justify-between p-6">
        <View className="items-center mt-16">
          <Text className="text-white text-5xl font-bold text-center">
            CoinPay
          </Text>
          <Text className="text-white text-lg font-light text-center mt-4">
            Secure payments, anytime, anywhere
          </Text>
        </View>
        <View className="mb-10">
          <View className="flex-row justify-center gap-4 mb-4">
            <Pressable
              className="bg-white py-4 px-6 rounded-3xl flex-1 items-center"
              onPress={() => router.push("/signin")}
            >
              <Text className="text-lg font-medium">Sign In</Text>
            </Pressable>
            <Pressable
              className="border border-white py-4 px-6 rounded-3xl flex-1 items-center"
              onPress={() => router.push("/join")}
            >
              <Text className="text-white text-lg font-medium">Join Now</Text>
            </Pressable>
          </View>
          <View className="flex-row justify-center gap-2">
            <Pressable className="flex-row items-center gap-2">
              <Image source={GOOGLELOGO} className="w-6 h-6" />
              <Text className="text-white">Sign in with Google</Text>
            </Pressable>
            <Pressable className="flex-row items-center gap-2">
              <Image source={FACEBOOKLOGO} className="w-6 h-6" />
              <Text className="text-white">Sign in with Facebook</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Landing;
