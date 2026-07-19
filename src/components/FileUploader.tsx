import React, { useState, useRef } from 'react';
import { FileUp, FileCheck2, Loader2, AlertCircle, X, Trash2 } from 'lucide-react';

interface SimulatedFile {
  name: string;
  size: string;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  errorMsg?: string;
}

export default function FileUploader() {
  const [files, setFiles] = useState<SimulatedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFiles = (uploadedFiles: FileList) => {
    const newFiles: SimulatedFile[] = Array.from(uploadedFiles).map((file) => {
      const extension = file.name.split('.').pop()?.toLowerCase() || '';
      const allowed = ['stl', 'ply', 'obj', 'pdf', 'jpg', 'jpeg', 'png'];
      const sizeInMB = file.size / (1024 * 1024);
      const isSizeOk = sizeInMB <= 100;

      const simulated: SimulatedFile = {
        name: file.name,
        size: `${sizeInMB.toFixed(2)} MB`,
        progress: 0,
        status: isSizeOk && allowed.includes(extension) ? 'uploading' : 'error',
        errorMsg: !allowed.includes(extension)
          ? 'Dateiformat nicht unterstützt. Erlaubt sind: STL, PLY, OBJ, PDF, JPG, PNG'
          : !isSizeOk
          ? 'Datei überschreitet die Höchstgrösse von 100 MB.'
          : undefined,
      };

      return simulated;
    });

    setFiles((prev) => [...prev, ...newFiles]);

    // Simulate upload for each uploading file
    newFiles.forEach((file) => {
      if (file.status === 'uploading') {
        let currentProgress = 0;
        const interval = setInterval(() => {
          currentProgress += Math.floor(Math.random() * 20) + 10;
          if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(interval);
            setFiles((prev) =>
              prev.map((f) =>
                f.name === file.name ? { ...f, progress: 100, status: 'completed' } : f
              )
            );
          } else {
            setFiles((prev) =>
              prev.map((f) => (f.name === file.name ? { ...f, progress: currentProgress } : f))
            );
          }
        }, 300);
      }
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-6 shadow-xl max-w-xl mx-auto">
      <h3 className="text-md font-semibold text-slate-100 mb-2 font-sans">Sicherer Falldaten-Uploader (Simulation)</h3>
      <p className="text-xs text-slate-400 mb-6 font-sans">
        STL, PLY, OBJ, PDF oder Bilddaten direkt übertragen. Daten werden verschlüsselt verarbeitet.
      </p>

      {/* Drag & Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition duration-300 flex flex-col items-center justify-center gap-3 ${
          isDragging
            ? 'border-sky-500 bg-sky-950/10'
            : 'border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 hover:border-slate-700'
        }`}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          className="hidden"
          accept=".stl,.ply,.obj,.pdf,.jpg,.jpeg,.png"
        />
        <div className="bg-slate-800 p-3 rounded-full text-sky-400 border border-slate-700">
          <FileUp size={24} className="animate-pulse" />
        </div>
        <div>
          <span className="text-sm font-semibold text-slate-200 block">
            Dateien herüberziehen oder klicken
          </span>
          <span className="text-xs text-slate-500 block mt-1">
            Unterstützte Formate: STL, PLY, OBJ, PDF, JPG, PNG (max. 100 MB)
          </span>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-6 space-y-3">
          <div className="text-xs font-mono text-slate-400 uppercase">Übertragungsverlauf</div>
          {files.map((file, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 rounded-lg p-3 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div
                  className={`p-2 rounded shrink-0 ${
                    file.status === 'completed'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-900'
                      : file.status === 'error'
                      ? 'bg-red-950 text-red-400 border border-red-900'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}
                >
                  {file.status === 'completed' ? (
                    <FileCheck2 size={16} />
                  ) : file.status === 'error' ? (
                    <AlertCircle size={16} />
                  ) : (
                    <Loader2 size={16} className="animate-spin" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <span className="text-xs font-medium text-slate-200 block truncate">
                    {file.name}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-mono text-slate-500">{file.size}</span>
                    {file.status === 'uploading' && (
                      <span className="text-[10px] font-mono text-sky-400">
                        {file.progress}% hochgeladen
                      </span>
                    )}
                    {file.status === 'completed' && (
                      <span className="text-[10px] font-mono text-emerald-400">Übertragung erfolgreich</span>
                    )}
                  </div>

                  {/* Progress Bar */}
                  {file.status === 'uploading' && (
                    <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                      <div
                        className="bg-sky-500 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${file.progress}%` }}
                      ></div>
                    </div>
                  )}

                  {file.status === 'error' && (
                    <span className="text-[10px] text-red-400 block mt-1">
                      {file.errorMsg}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(idx);
                }}
                className="p-1 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition cursor-pointer"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
