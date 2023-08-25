import { useState } from 'react';
import { uploadFiles } from '../services/uploadFiles';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

type filesData = {
  name: string;
  type: string;
  data: string | ArrayBuffer | null;
}[];

function AttachModal({ setIsOpen, setCount }: Props) {
  const [files, setFiles] = useState<filesData | []>([]);

  const onChnageFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const total = e.target.files?.length;

    const arr = Array.from(
      { length: total as number },
      (_, index) => 0 + index
    );

    arr.forEach((n) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files?.[n] as File);

      fileReader.onloadend = async () => {
        const name = e.target.files?.[n].name as string;
        const type = e.target.files?.[n].type as string;

        const data = fileReader.result as string;

        setFiles((prevFiles) => {
          return [...prevFiles!, { name, data, type }];
        });
      };
    });
  };

  const uploadFile = async () => {
    await uploadFiles(files);

    setCount((prev) => prev + files.length);
  };

  return (
    <div className='fixed inset-0 h-screen w-full bg-slate-100 z-50 flex flex-col p-6 gap-5 overflow-y-scroll'>
      <button
        onClick={() => setIsOpen(false)}
        className=' absolute  text-3xl text-red-500 right-4 top-4'
      >
        X
      </button>

      <input type='file' multiple onChange={onChnageFiles} />

      <h1 className=' text-xl font-bold text-teal-500'>Selected files :</h1>
      <div className=' flex flex-col gap-4'>
        <div className='flex gap-[265px] mb-4 font-bold  text-xl'>
          <span>Preview </span>
          <span>Name</span>
          <span>File Type</span>
        </div>
        {files.length > 0 ? (
          files.map((file, i) => {
            return (
              <div key={i} className=' flex gap-10 items-center'>
                {file.type.includes('image') ? (
                  <img
                    src={file.data as string}
                    alt='file'
                    width={300}
                    className='w-[300px] h-auto'
                  />
                ) : (
                  <embed
                    src={file.data as string}
                    type='application/pdf'
                    width='300px'
                    height='300px'
                  ></embed>
                )}
                <p className='w-[200px] break-words'>{file.name}</p>
                <p className='w-[200px]'>{file.type}</p>
              </div>
            );
          })
        ) : (
          <span>No files selected</span>
        )}
        {files.length > 0 && (
          <button
            onClick={uploadFile}
            className=' bg-teal-600 text-white text-lg mt-2 py-1 px-2 w-20'
          >
            Upload
          </button>
        )}
      </div>
    </div>
  );
}

export default AttachModal;
