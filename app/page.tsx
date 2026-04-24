// import Image from "next/image";
//   interface User{
//     name:string
//     age:number
//   }
// export default function Home({name}:User) {

import ZodIndex from "./components/ZodIndex";

//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//    salam,{name}!
//     </div>
//   );
// }





// import Head from "next/head";
// import Counter from "./components/Counter";
// import TodoList from "./components/TodoList";
// import Link from "next/link";

// const Home=()=> {

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
    
// <Head>
//   <title>لیست کارها با TS</title>
// </Head>
// <meta name="dec\scription" content="یک لیست کار ساده با Next.js,TypeScript,Tailwind CSS" />
// <Link rel="icon" href='/favicon.ico' />
// <main>

//   <TodoList/>
// </main>
// {/* <Counter/> */}
//     </div>


//   );
// }
// export default Home







const Home=()=> {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">

<ZodIndex/>

    </div>


  );
}
export default Home