

export default function Footer() {
  return (
    <footer className="bg-[#4A90E2] text-white  py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <div>
        <img className = "h-[150px] w-[180px] " alt="Logo Icon" title="Logo Icon" src="https://static.vecteezy.com/system/resources/thumbnails/038/516/357/small_2x/ai-generated-eagle-logo-design-in-black-style-on-transparant-background-png.png" />
        </div>
        <div className="text-center mb-4">
          <p className="font-semibold text-lg">Connect with us</p>
        </div>
        <div className="flex space-x-6">
          <a
            href="#facebook"
            className="hover:text-yellow-400 hover:underline transition-all duration-300"
          >
            Facebook
          </a>
          <a
            href="#twitter"
            className="hover:text-yellow-400 hover:underline transition-all duration-300"
          >
            Twitter
          </a>
          <a
            href="#linkedin"
            className="hover:text-yellow-400 hover:underline transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="#github"
            className="hover:text-yellow-400 hover:underline transition-all duration-300"
          >
            GitHub
          </a>
        </div>
        <div className="mt-4 text-sm">
          <p>&copy; 2025 MyWebsite. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
