import { Dispatch, SetStateAction } from "react"

type FileUploaderProps = {
    onFieldChange: (url:string) => void
    imageUrl: string
    setFiles: Dispatch<SetStateAction<File[]>>
}

const FileUploader = ({ onFieldChange,imageUrl,setFiles }: FileUploaderProps) => {
  return (
    <div>FileUploader</div>
  )
}

export default FileUploader;