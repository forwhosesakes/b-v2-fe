import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import FileUploadIcon from "../../assets/icons/upload.svg?react"
import AddIcon from "../../assets/icons/add.svg?react"

import { useGetInferenceMutation } from "../../api/queries/inference.query"
import CicrularProgress from "../../components/skeleton/circular-progress.tsx"
import MediaWithProgressOverlay from "../../components/media-with-progress-overlay.tsx"

type MediaSource = {
  uploadedPath: string
  type: "image" | "video"
}

const Detection = () => {
  const {
    mutate: mutateGeneralInference,
    isLoading,
    data: inferenceUrl,
    reset: clearInferenceData,
  } = useGetInferenceMutation()

  const [mediaSrc, setMediaSrc] = useState<MediaSource | null>(null)

  const onDrop = useCallback(([acceptedFile]: any[]) => {
    // Do something with the files
    setMediaSrc({
      type: acceptedFile.type.split("/")[0],
      uploadedPath: URL.createObjectURL(acceptedFile),
    })
  }, [])
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg", ".jpg"],
      "video/mp4": [".mp4"],
      "image/svg+xml": [".svg"],
      "video/webm": [".webm"],
      "image/webp": [".webp"],
    },
  })

  const runInfernce = async () => {
    mutateGeneralInference([
      mediaSrc!.uploadedPath,
      mediaSrc?.type === "image" ? "jpeg" : "mp4",
    ])
    //TODO: Handle Error and success
  }

  const clearImage = () => {
    if (mediaSrc) setMediaSrc((prev) => ({ ...prev!, uploadedPath: "" }))
    clearInferenceData()
  }

  return (
    <section className="m-5 flex flex-col items-center rounded-xl bg-landing-page-image bg-cover pt-36 text-center">
      <div className="flex w-full md:flex-row flex-col">
        <div className="UploadContainer align-items-center m-5 flex h-[60vh] w-full flex-col justify-center rounded-lg border border-turquoise bg-detection-gradient bg-cover">
          {!mediaSrc || !mediaSrc.uploadedPath ? (
            <div
              className="w-100 flex flex-1 flex-col items-center justify-center p-5 text-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <FileUploadIcon />

              <p className="my-5 font-medium">
                {" "}
                اسحب و أفلت الملفات هنا للتحليل
              </p>
              <p className="my-5 flex w-32 justify-between">
                <span className="text-turquoise">تحميل ملف</span>
                <AddIcon />
              </p>
            </div>
          ) : (
            <div className="h-full w-full">
              {
                <MediaWithProgressOverlay
                  mediaType={mediaSrc.type}
                  mediaSrc={mediaSrc.uploadedPath}
                  progressComponent={CicrularProgress}
                  overlayCondition={isLoading}
                />
              }
            </div>
          )}
        </div>

        <div className="InferenceConatiner align-items-center m-5 flex h-[60vh] w-full flex-col justify-center rounded-lg border border-turquoise bg-detection-gradient bg-cover">
          <div className="relative h-full w-full">
            {mediaSrc?.type === "image" && inferenceUrl && (
              <img
                className="absolute inset-0 h-full w-full rounded-lg object-cover"
                src={inferenceUrl}
              />
            )}
            {mediaSrc?.type === "video" && inferenceUrl  && (
              <video
                className="absolute inset-0 h-full w-full rounded-3xl object-cover"
                width="auto"
                height="auto"
                controls={true}
              >
                <source src={inferenceUrl} />{" "}
              </video>
            )}
          </div>
        </div>
      </div> 

      {/* Action buttons */}
      <div className="flex w-fit flex-row justify-between gap-6">
        {!inferenceUrl && (
          <button
            onClick={runInfernce}
            className="button button-primary button-container w-fit px-16 py-2 hover:shadow-inner"
          >
            <span className="button-gradient-text">الكشف</span>
          </button>
        )}

        <button
          onClick={clearImage}
          className="button button-primary button-container w-fit px-16 py-2 hover:shadow-inner"
        >
          <span className="button-gradient-text">مسح</span>
        </button>

        
      </div>

     
    </section>
  )
}

export default Detection
