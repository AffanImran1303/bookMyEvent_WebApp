import React, { useCallback } from 'react'
import { FileUploaderProps } from '@/types';
import { useDropzone } from "@uploadthing/react";
import {
  generateClientDropzoneAccept,
} from "uploadthing/client";

// import { useUploadThing } from "@/lib/uploadthing";
import { convertFileToUrl } from '@/lib/utils';
import { Button } from '../ui/button';

export const FileUploader=({imageUrl,onFieldChange,setFiles}:FileUploaderProps)=>{
    const onDrop = useCallback((acceptedFiles:File[])=>{
        setFiles(acceptedFiles)
        onFieldChange(convertFileToUrl(acceptedFiles[0]))
    },[])
    const {getRootProps,getInputProps}=useDropzone({
        onDrop,
        accept: generateClientDropzoneAccept(['image/*']),
    })

    return(
        <div
            {...getRootProps()}
            className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50"
        >
            <input {...getInputProps()} className="cursor-pointer"/>

            {imageUrl?(
                <div className="flex h-full w-full flex-1 justify-center">
                    <img
                    src={imageUrl}
                    alt="image"
                    width={250}
                    height={250}
                    className="w-full object-cover object-center"
                />
                </div>
            ):(
                <div className="flex-center flex-col py-5 text-grey-500">
                    <img src="/assets/icons/uploadIcon.png" width={77} height={77} alt="file upload"/>
                    <h3 className="mb-2 mt-2">Drag photo here</h3>
                    <p className="p-medium-12 mb-4">SVG,PNG,JPG</p>
                    <Button type="button" className="primary-button">Select from my device</Button>
                    </div>
                )}
        </div>
    )
}

