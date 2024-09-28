export const endpoint_info = {
    parameters: [
      {
        label: "Input video",
        parameter_name: "video_path",
        parameter_has_default: false,
        parameter_default: null,
        type: "",
        python_type: {
          type: "Dict(video: filepath, subtitles: filepath | None)",
          description: ""
        },
        component: "Video",
        example_input: {
          video: {
            path: "https://github.com/gradio-app/gradio/raw/main/demo/video_component/files/world.mp4",
            meta: {
              _type: "gradio.FileData"
            },
            orig_name: "world.mp4",
            url: "https://github.com/gradio-app/gradio/raw/main/demo/video_component/files/world.mp4"
          }
        }
      }
    ],
    returns: [
      {
        label: "Output",
        type: "",
        python_type: {
          type: "Dict(video: filepath, subtitles: filepath | None)",
          description: ""
        },
        component: "Video"
      }
    ],
    type: {
      generator: false,
      cancel: false
    }
  }