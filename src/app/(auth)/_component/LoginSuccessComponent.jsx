import { getUserProfileAction } from "@/action/user-action";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

async function LoginSuccessComponent() {
  const profile = await getUserProfileAction();
  const isOrganizer = profile?.data?.organizer;
  const fullname = profile?.data?.firstName + " " + profile?.data?.lastName;
  const organizerName = profile?.data?.organizerName;

  return (
    <section className="h-screen w-full flex justify-center items-center bg-[url('/assets/login_images/bg-login.jpg')] bg-cover bg-no-repeat bg-center">
      <section className="w-full h-screen bg-[#00000054] flex gap-20 justify-center items-center p-10 lg:p-20">
        <article className="w-1/4 lg:w-[300px]">
          <h1 className="text-4xl lg:text-5xl mb-2 font-bold text-white">
            Ripple<span className="text-meduim-green">Eco</span>
          </h1>
          <h4 className="text-2xl lg:text-3xl my-4 text-white font-medium">
            Join us. Together for a greener future.
          </h4>
          <p className="mt-2 lg:text-lg font-light text-light-gray">
            Your impact starts here. Every ripple begins with one drop.
          </p>
        </article>
        <section className="flex flex-col justify-center items-center gap-4 w-[400px] bg-gradient-to-r from-[#c4c4c463] to-[#5e5e5e69] backdrop-blur-md rounded-2xl p-8">
          <div>
            <Image
              src="/icons/tick-circle.png"
              className="rounded-full"
              width={50}
              height={50}
              alt="tick-circle"
            />
          </div>
          <h2 className="text-white text-2xl">
            {isOrganizer ? fullname : organizerName}
          </h2>
          <p className="text-light-gray text-sm text-center">
            Your account has been created successfully. You’re now part of the
            Ripple<span className="text-strong-green">Eco</span> community.
          </p>
          <Link
            href={isOrganizer ? "/organizer" : "/"}
            className="cursor-pointer"
          >
            <Button className="bg-green cursor-pointer hover:bg-green-700 text-white rounded-xl px-6 py-2">
              {isOrganizer ? "Go to Dashboard" : "Go to homepage"}
            </Button>
          </Link>
        </section>
      </section>
    </section>
  );
}

export default LoginSuccessComponent;
