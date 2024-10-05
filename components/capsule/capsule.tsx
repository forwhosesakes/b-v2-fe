type TProps = {
  height: string
  colored: boolean
  position: string
}

const Capsule = (props: TProps) => {
  return (
    <div
      className={`absolute z-10 ${props.position} w-4 ${props.height}  rounded-2xl border border-white/5 ${
        props.colored
          ? "bg-capsuleon/55 group-hover:bg-capsuleoff group-hover:translate-y-8"
          : "bg-capsuleoff group-hover:bg-capsuleon group-hover:-translate-y-8"
      } transition-all`}
    ></div>
  )
}

export default Capsule
