export const metadata = {
  title: "Home - We Chat",
  description:
    "We Chat is a modern chat application that allows users to connect, share, and communicate seamlessly in real-time. Enjoy features like group chats, direct messaging, and multimedia sharing, all while ensuring your privacy and security.",
};

export default function Home() {
  return (
    <>
    <main className=" min-h-screen">
      <section className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6 animate__animated animate__fadeIn">
          Welcome to We Chat
        </h1>
        <div className="text-center mt-8 mb-8">
          <a href="/get-started">
            <button className="bg-black text-white border border-white-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-red-400 shadow-amber-50 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Get Started
            </button>
          </a>
        </div>
        <p className="text-lg text-center mb-8 animate__animated animate__fadeIn">
          Connect with friends and family in real-time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate__animated animate__fadeIn">
            <h2 className="text-2xl font-semibold mb-2 text-white">Group Chats</h2>
            <p className="text-white">
              Join or create group chats to stay connected with multiple friends
              at once.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate__animated animate__fadeIn">
            <h2 className="text-2xl font-semibold mb-2 text-white">Direct Messaging</h2>
            <p className="text-white">
              Send direct messages to your friends for private conversations.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate__animated animate__fadeIn">
            <h2 className="text-2xl font-semibold mb-2 text-white">Multimedia Sharing</h2>
            <p className="text-white">Share photos, videos, and files seamlessly within your chats.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate__animated animate__fadeIn">
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Voice and Video Calls
            </h2>
            <p className="text-white">
              Make high-quality voice and video calls to your friends and
              family, no matter where they are.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate__animated animate__fadeIn">
            <h2 className="text-2xl font-semibold mb-2 text-white">Customizable Themes</h2>
            <p className="text-white">
              Personalize your chat experience with a variety of themes and
              color options.
            </p>
          </div>
        </div>
        {/* pricing section */}
        <section className="flex mt-5 gap-3 ">
          {/* Pricing Tier 1 */}
          <div className="flex flex-col bg-white/30 backdrop-blur-md backdrop-filter border border-gray-200/30  shadow-lg rounded-3xl">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-black lg:text-3xl">
                    Basic Plan
                  </h2>
                  <p className="mt-2 text-sm text-black">
                    Ideal for individuals and small teams.
                  </p>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-light tracking-tight text-black">
                      $15
                    </span>
                    <span className="text-base font-medium text-black"> /mo </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex px-6 pb-8 sm:px-8">
              <a
                aria-describedby="tier-basic"
                className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full inline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white"
                href="#"
              >
                Get started
              </a>
            </div>
          </div>
          {/* Pricing Tier 2 */}
          <div className="flex flex-col bg-white/30 backdrop-blur-md backdrop-filter border border-gray-200/30  shadow-lg rounded-3xl">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-black lg:text-3xl">
                    Corporate Plan
                  </h2>
                  <p className="mt-2 text-sm text-black">
                    Perfect for growing teams and businesses.
                  </p>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-light tracking-tight text-black">
                      $35
                    </span>
                    <span className="text-base font-medium text-black"> /mo </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex px-6 pb-8 sm:px-8">
              <a
                aria-describedby="tier-corporate"
                className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full inline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white"
                href="#"
              >
                Get started
              </a>
            </div>
          </div>
          {/* Pricing Tier 3 */}
          <div className="flex flex-col bg-white/30 backdrop-blur-md backdrop-filter border border-gray-200/30  shadow-lg rounded-3xl">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-black lg:text-3xl">
                    Premium Plan
                  </h2>
                  <p className="mt-2 text-sm text-black">
                    For advanced features and larger teams.
                  </p>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-light tracking-tight text-black">
                      $50
                    </span>
                    <span className="text-base font-medium text-black"> /mo </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex px-6 pb-8 sm:px-8">
              <a
                aria-describedby="tier-premium"
                className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full inline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white"
                href="#"
              >
                Get started
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
    </>
  );
}
