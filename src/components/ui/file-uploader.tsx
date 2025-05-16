"use client";

import type React from "react";

import { useEdgeStore } from "@/lib/edgestore";
import { cn } from "@/lib/utils";
import { FileIcon, Loader2, Upload } from "lucide-react";
import { useEffect, useState } from "react";

interface FileUploaderProps {
  value: string;
  onChange: (url: string) => void;
  onUploadStateChange?: (isUploading: boolean) => void;
  id?: string;
}

export function FileUploader({
  value,
  onChange,
  onUploadStateChange,
  id,
}: FileUploaderProps) {
  const [, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState<string>("");
  const { edgestore } = useEdgeStore();

  useEffect(() => {
    if (onUploadStateChange) {
      onUploadStateChange(uploading);
    }
  }, [uploading, onUploadStateChange]);

  // Extract filename from URL if value exists
  useEffect(() => {
    if (value) {
      // Try to extract filename from URL
      try {
        const url = new URL(value);
        const pathSegments = url.pathname.split("/");
        const lastSegment = pathSegments[pathSegments.length - 1];
        // Remove any query parameters
        const cleanName = lastSegment.split("?")[0];
        setFileName(cleanName || "Existing file");
      } catch {
        setFileName("Existing file");
      }
    } else {
      setFileName("");
    }
  }, [value]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setFileName(selectedFile.name);
    setUploading(true);
    setUploadProgress(0);

    try {
      const res = await edgestore.publicFiles.upload({
        file: selectedFile,
        options: {
          // If we have an existing file URL, replace it
          ...(value && { replaceTargetUrl: value }),
        },
        onProgressChange: (progress) => {
          setUploadProgress(progress);
        },
      });

      onChange(res.url);
      setUploading(false);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploading(false);
    }
  };

  function truncateFileName(fileName: string, maxLength = 100) {
    if (!fileName) return "No file selected";
    if (fileName.length <= maxLength) return fileName;
    return fileName.substring(0, maxLength) + "...";
  }

  return (
    <div className="relative w-full ">
      <div className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
        <div className="flex items-center gap-2 truncate">
          {value && <FileIcon className="h-4 w-4 text-muted-foreground" />}
          <span className="truncate">
            {truncateFileName(fileName, 20) || "No file selected"}
          </span>
        </div>
        <label
          htmlFor={id ?? "File-Upload"}
          className={cn(
            "flex cursor-pointer items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary hover:bg-primary/20",
            uploading && "pointer-events-none opacity-50",
          )}
        >
          {uploading ? (
            <div className="flex items-center gap-1">
              <Loader2 className="h-3 w-3 animate-spin" />
              <span>{Math.round(uploadProgress)}%</span>
            </div>
          ) : value ? (
            <>
              <Upload className="h-3 w-3" />
              <span>Replace</span>
            </>
          ) : (
            <>
              <Upload className="h-3 w-3" />
              <span>Choose File</span>
            </>
          )}
          <input
            id={id ?? "File-Upload"}
            type="file"
            className="sr-only"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </label>
      </div>
      {uploading && (
        <div className="absolute left-0 bottom-0 h-[3px] w-full bg-gray-200">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${uploadProgress}%` }}
          />
        </div>
      )}
    </div>
  );
}
