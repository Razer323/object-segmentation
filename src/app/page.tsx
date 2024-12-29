import ImageUpload from "../../components/ImageUpload";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between px-8 py-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-white">
          Object Segmentation App
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-grow items-center justify-center">
        <ImageUpload />
      </main>

      {/* Footer */}
      <footer className="text-center mt-4">
        <p className="text-white">
          A project made by{" "}
          <a
            href="#"
            className="text-white underline hover:text-pink-300 hover:underline-offset-4"
          >
            Ananth Ram Tekkalakota
          </a>
        </p>
      </footer>
    </div>
  );
}
