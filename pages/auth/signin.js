import Header from "../../components/Header";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { db } from "../../firebase";
//firebase-authの実装では頭文字を大文字にした
export default function Signin() {
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      //googleのログイン画面が現れる
      await signInWithPopup(auth, provider);
      console.log(auth);
    } catch (error) {}
  }
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex mg:w-4"
          src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png"
          alt="instagram-image"
        />
        <div>
          <div className="flex flex-col items-center">
            <img
              className="w-32 object-cover"
              src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png"
              alt=""
            />
            <p className="text-sm italic my-10 text-center">
              This app is created for learning purposes
            </p>
            <button
              onClick={onGoogleClick}
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
