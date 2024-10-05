import { useCallback, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import FileUploadIcon from "/assets/icons/upload.svg"
import AddIcon from "/assets/icons/add.svg"

import { useGetInferenceMutation } from "../../../api/queries/inference.query"
import CicrularProgress from "../../skeleton/circular-progress"
import Modal from "react-modal"
import ComparisionModal from "./comparisionModal/comparisionModal"
import MediaWithProgressOverlay from "../../media-with-progress-overlay"

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

  const [modalIsOpen, setModalIsOpen] = useState(false)
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
    <section className="m-5 flex flex-col items-center rounded-xl bg-landing-page-image bg-contain pt-36 text-center">
      <div className="flex w-full flex-row">
        <div className="UploadContainer align-items-center m-5 flex h-[60vh] w-full flex-col justify-center rounded-lg border border-turquoise bg-detection-gradient">
          {!mediaSrc || !mediaSrc.uploadedPath ? (
            <div
              className="w-100 flex flex-1 flex-col items-center justify-center p-5 text-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <img src="/assets/icons/upload.svg" />

              <p className="my-5 font-medium">
                {" "}
                اسحب و أفلت الملفات هنا للتحليل
              </p>
              <p className="my-5 flex w-32 justify-between">
                <span className="text-turquoise">تحميل ملف</span>
                <img src="/assets/icons/add.svg" />
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

        <div className="InferenceConatiner align-items-center m-5 flex h-[60vh] w-full flex-col justify-center rounded-lg border border-turquoise bg-detection-gradient">
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

        {inferenceUrl && mediaSrc?.type === "image" && (
          <button
            onClick={() => setModalIsOpen(true)}
            className="button hidden button-primary button-container w-fit px-16 py-2 hover:shadow-inner"
          >
            <span className="button-gradient-text">المقارنة</span>
          </button>
        )}
      </div>

      {mediaSrc?.uploadedPath && inferenceUrl && (
        <Modal
          isOpen={modalIsOpen}
          closeTimeoutMS={400}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Comp Modal"
          style={{
            content: {
              position: "absolute",
              overflow: "scroll",
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%",
              background: "white",
              borderRadius: "1rem",
              padding: "1rem",
              minHeight: "500px",
              // minWidth:"900px",
              // maxWidth:"1200px",
            },

            overlay: {},
          }}
        >
          <ComparisionModal
            beforeImageUrl={mediaSrc?.uploadedPath}
            afterImageUrl={inferenceUrl}
          />
        </Modal>
      )}
    </section>
  )
}

export default Detection
