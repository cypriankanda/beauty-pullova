import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Volume2, VolumeX, X, Play, Pause, Square } from "lucide-react";

const IntroVideo = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("pullova_intro_seen");

    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);
  const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

  const closeIntro = () => {
    localStorage.setItem("pullova_intro_seen", "true");

    if (videoRef.current) {
      videoRef.current.pause();
    }

    setShowIntro(false);
  };

  const toggleSound = async () => {
    if (!videoRef.current) return;

    if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);

      try {
        await videoRef.current.play();
      } catch (error) {
        console.error("Could not enable video audio:", error);
      }
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
        >
          {/* Video Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-[95vw] max-w-7xl aspect-video overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-black"
          >
            {/* Video */}
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={closeIntro}
                className="w-full h-full object-contain"
            >
              <source
                src="/intro-video.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

            {/* Top Right Close */}
            <button
              onClick={closeIntro}
              aria-label="Close intro"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:bg-black/60 hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Bottom Controls */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Play / Pause */}
                    <button
                    onClick={() => {
                        if (!videoRef.current) return;

                        if (videoRef.current.paused) {
                        videoRef.current.play();
                        } else {
                        videoRef.current.pause();
                        }

                        setIsPlaying(!videoRef.current.paused);
                    }}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:bg-black/60"
                    >
                    {isPlaying ? (
                        <Pause className="w-4 h-4" />
                    ) : (
                        <Play className="w-4 h-4" />
                    )}
                    </button>

                    {/* Stop */}
                    <button
                    onClick={() => {
                        if (!videoRef.current) return;

                        videoRef.current.pause();
                        videoRef.current.currentTime = 0;
                        setIsPlaying(false);
                    }}
                    aria-label="Stop video"
                    className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:bg-black/60"
                    >
                    <Square className="w-4 h-4" />
                    </button>

                    {/* Sound */}
                    <button
                    onClick={toggleSound}
                    className="flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-black/60"
                    >
                    {isMuted ? (
                        <>
                        <VolumeX className="w-4 h-4" />
                        <span>Tap for sound</span>
                        </>
                    ) : (
                        <>
                        <Volume2 className="w-4 h-4" />
                        <span>Sound On</span>
                        </>
                    )}
                    </button>
                </div>

                {/* Skip */}
                <button
                    onClick={closeIntro}
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-100 hover:scale-105"
                >
                    Skip Intro
                </button>
                </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroVideo;