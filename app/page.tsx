'use client';
import Profile from "@/app/component/Profile";
import Border from "@/app/component/Border";

export default function Home() {
    const profile ={
        name: 'Myo Min Ko',
        age: '27',
        email: 'smyominko.dev@gmail.com',
        img: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg'

    };
    return(
        <div className={'flex justify-center items-center'}>
            <Border>
                <Profile {...profile}/>

            </Border>
        </div>
    );
}

console.log(Home);