"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "./Button";
import { Toast } from "./Toast";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  successMessage?: string;
  className?: string;
}

export function CopyButton({
  textToCopy,
  label = "Salin Email",
  successMessage = "Alamat email berhasil disalin ke clipboard!",
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setShowToast(true);

      setTimeout(() => {
        setCopied(false);
      }, 2500);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.error("Gagal menyalin teks:", err);
    }
  };

  return (
    <>
      <Button
        type="button"
        variant="secondary"
        onClick={handleCopy}
        className={className}
        aria-label={`Salin ${textToCopy}`}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Tersalin!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 text-zinc-500" />
            <span>{label}</span>
          </>
        )}
      </Button>

      <Toast message={successMessage} isVisible={showToast} />
    </>
  );
}
