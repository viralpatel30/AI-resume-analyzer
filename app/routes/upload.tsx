import { useState, type FormEvent } from "react";
import FileUploader from "~/components/FileUploader";
import Navbar from "~/components/Navbar";

const upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest("form");
    if (!form) return;
    const formData = new FormData(form);

    const companyName = formData.get("company-name") as string;
    const jobTitle = formData.get("job-title") as string;
    const jobDescription = formData.get("job-description") as string;

    if (!file) return;
  };

  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Smart feedback for your dream job</h1>
          {isProcessing ? (
            <h2>
              {statusText}
              <img src="/images/resume-scan.gif" className="w-full" alt="" />
            </h2>
          ) : (
            <h2>Drop your resume for an ATS and improvement tips</h2>
          )}
        </div>

        {!isProcessing && (
          <form
            id="upload-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-4"
          >
            <div className="form-div">
              <label htmlFor="company-name">Company name</label>
              <input
                type="text"
                name="company-name"
                placeholder="Company name"
                id="company-name"
              />
            </div>
            <div className="form-div">
              <label htmlFor="job-title">Job Title</label>
              <input
                type="text"
                name="job-title"
                placeholder="Job Title"
                id="job-title"
              />
            </div>
            <div className="form-div">
              <label htmlFor="job-description">Job Description</label>
              <textarea
                rows={5}
                name="job-description"
                placeholder="Job Description"
                id="job-description"
              />
            </div>
            <div className="form-div">
              <FileUploader onFileSelect={handleFileSelect} />
            </div>

            <button className="primary-button" type="submit">
              Analyze Resume
            </button>
          </form>
        )}
      </section>
    </main>
  );
};

export default upload;
