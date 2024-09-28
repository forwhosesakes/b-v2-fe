import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import FileUploadIcon from "../../assets/icons/upload-cloud-line.svg?react";
import { useGetInferenceMutation } from "../../api/queries/inference.query";
import CicrularProgress from "../../components/skeleton/circular-progress";
import Modal from "react-modal";
import ComparisionModal from "./comparisionModal/comparisionModal";
import MediaWithProgressOverlay from "../../components/media-with-progress-overlay";

type MediaSource = {
  uploadedPath: string;
  inferedPath?: string;
  type: "image" | "video";
};

const Detection = () => {
  const {
    mutate: mutateGeneralInference,
    isLoading,
    data: inferenceUrl,
  } = useGetInferenceMutation();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mediaSrc, setMediaSrc] = useState<MediaSource | null>(null);

  const onDrop = useCallback(([acceptedFile]: any[]) => {
    // Do something with the files
    setMediaSrc({
      type: acceptedFile.type.split("/")[0],
      uploadedPath: URL.createObjectURL(acceptedFile),
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
  });

  const runInfernce = async () => {
    mutateGeneralInference([
      mediaSrc!.uploadedPath,
      mediaSrc?.type === "image" ? "jpeg" : "mp4",
    ]);
    //TODO: Handle Error and success
  };

  return (
    <section className=" m-5  mt-36 text-center bg-primary-400 flex flex-col items-center rounded-xl">
      <div className="flex flex-row w-4/5 ">
        <div
          className="UploadContainer
          m-5 flex flex-col justify-center align-items-center
           bg-gray-400/30
           rounded-3xl
           w-full
            h-[70vh]"
        >
          {!mediaSrc || !mediaSrc.uploadedPath ? (
            <div
              className=" flex-1 flex flex-col  w-100  p-5 justify-center items-center text-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <FileUploadIcon color="bg-primary" width={"8em"} height={"8em"} />

              {isDragActive ? (
                <p>اسحب المرفقات هنا...</p>
              ) : (
                <p>ارفع صورة أو مقطع فيديو ...</p>
              )}
            </div>
          ) : (
            <div className="w-full h-full">
              {inferenceUrl ? (
                <div className="inferedMediaConatiner relative w-full h-full">
                  {mediaSrc?.type === "image" && (
                    <img
                      className="w-full max-h-full object-cover rounded-3xl absolute inset-0"
                      src={inferenceUrl}
                    />
                  )}
                  {mediaSrc?.type === "video" && (
                    <video
                      className="w-full max-h-full object-cover rounded-3xl absolute inset-0"
                      width="auto"
                      height="auto"
                      controls={true}
                    >
                      <source src={inferenceUrl} />{" "}
                    </video>
                  )}
                </div>
              ) : (
                <MediaWithProgressOverlay
                  mediaType={mediaSrc.type}
                  mediaSrc={mediaSrc.uploadedPath}
                  progressComponent={CicrularProgress<"INFINTE">}
                  overlayCondition={isLoading}
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="w-1/5 flex  flex-row justify-center">
        {!inferenceUrl && (
          <button
            onClick={runInfernce}
            className="button button-primary w-fit text-slate-600 px-5 py-2 bg-slate-50/75 hover:bg-slate-100/50 rounded-3xl "
          >
            الكشف
          </button>
        )}
        {inferenceUrl && mediaSrc?.type==="image" &&(
          <button
            onClick={() => setModalIsOpen(true)}
            className="button button-primary w-fit text-slate-600 px-5 py-2 bg-slate-50/75 hover:bg-slate-100/50 rounded-3xl "
          >
            {" "}
            المقارنة
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
  );
};

export default Detection;
