import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsCloudDownload, BsFileEarmarkPdfFill } from "react-icons/bs";
import { FiExternalLink, FiX } from "react-icons/fi";

const CvModal = ({ isOpen, onClose, pdfUrl = "/files/cv-of%20shahidul%20islam.pdf" }) => {
  // Close on ESC key and prevent body scroll when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="CV Preview Modal"
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 dark:bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content Container */}
          <motion.div
            className="relative w-full max-w-5xl h-[88vh] bg-white dark:bg-zinc-950 rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-800 flex flex-col overflow-hidden z-10"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-gray-50/90 dark:bg-zinc-900/90 border-b border-gray-200 dark:border-zinc-800 backdrop-blur-md">
              {/* Title & Document Badge */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 dark:bg-emerald-500/20 text-[#417E38] dark:text-[#9CC842] rounded-xl">
                  <BsFileEarmarkPdfFill className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    Shahidul Islam's CV
                    <span className="hidden sm:inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-[#2c682c] dark:bg-emerald-950/60 dark:text-[#9CC842] border border-[#417E38]/30">
                      PDF Preview
                    </span>
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                    Frontend / MERN-Stack Developer Resume
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Open in New Tab */}
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:px-3 sm:py-1.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200 transition-all text-sm font-medium flex items-center gap-1.5 shadow-sm"
                  title="Open in new tab"
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span className="hidden md:inline">Full Screen</span>
                </a>

                {/* Download CV */}
                <a
                  href={pdfUrl}
                  download="CV-Shahidul-Islam.pdf"
                  className="px-3 py-1.5 rounded-xl bg-[#417E38] hover:bg-[#34662d] text-white transition-all text-sm font-semibold flex items-center gap-1.5 shadow-md shadow-[#417E38]/20"
                  title="Download CV PDF"
                >
                  <BsCloudDownload className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200/80 dark:hover:bg-zinc-800 transition-all cursor-pointer ml-1"
                  aria-label="Close modal"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / PDF Viewer */}
            <div className="flex-1 w-full h-full bg-zinc-100 dark:bg-zinc-900 relative">
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0`}
                className="w-full h-full border-0"
                title="Shahidul Islam CV Preview"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CvModal;
